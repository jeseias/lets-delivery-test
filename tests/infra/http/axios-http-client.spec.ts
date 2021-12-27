import axios from 'axios'
import { AxiosHttpClient } from '@/infra/http/axios-http-client';
import { mockAxios } from '../mocks/mock-axios';
import { mockHttpRequest } from '../../data/mocks/mock-http';

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios =mockAxios()
  return {
    sut,
    mockedAxios
  }
}


describe('AxiosHttpClient', () => {
  it('Should call axios with correct values', async () => {
    const request = mockHttpRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.request(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers:request.headers,
      method: request.method
    })
  })
});