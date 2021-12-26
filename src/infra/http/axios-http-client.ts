import { HttpClient, HttpRequest, HttpResponse } from "@/data/protocols/http/http-client";
import { AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let  axiosResponse: AxiosResponse
    try {
      axiosResponse = await axiosResponse.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}