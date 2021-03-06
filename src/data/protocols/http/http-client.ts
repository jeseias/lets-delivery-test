/* eslint-disable no-unused-vars */
export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  notFound = 404
}

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
export interface HttpClient<R = any> {
  request(data: HttpRequest): Promise<HttpResponse<R>>
}
