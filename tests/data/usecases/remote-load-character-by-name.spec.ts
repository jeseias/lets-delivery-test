import * as faker from 'faker'
import { RemoteLoadCharacterByName } from '@/data/usecases/remote-load-character-by-name'
import { HttpClientSpy } from '../mocks/mock-http'
import { HttpStatusCode } from '@/data/protocols/http/http-client'

type SutTypes = {
  sut:RemoteLoadCharacterByName
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteLoadCharacterByName(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadCharacterByName', () => {
  it('Should call HttpClient with correct values',async  () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    await sut.load('bond')
    expect(httpClientSpy.url).toBe(`${url}?name=bond`)
    expect(httpClientSpy.method).toBe('get')
  })  

  it('Should throw an UnexpectedError  if HttpClient does not return 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load('bond')
    await expect(promise).rejects.toThrow()
  })
});