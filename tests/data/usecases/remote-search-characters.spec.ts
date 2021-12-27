import { RemoteSearchCharacter } from '@/data/usecases/remote-search-character'
import { HttpClientSpy } from '../mocks/mock-http'
import * as faker from 'faker'
import { HttpStatusCode } from '@/data/protocols/http/http-client'

type SutTypes = {
  sut: RemoteSearchCharacter
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteSearchCharacter(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteSearchCharacter', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    await sut.search('bond')
    expect(httpClientSpy.url).toBe(`${url}?name=bond`)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should throw an UnexpectedError  if HttpClient does not return 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.search('bond')
    await expect(promise).rejects.toThrow()
  })
});