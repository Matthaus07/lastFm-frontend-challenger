import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class FetchHttpAdapter implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let responseJson: AxiosResponse
    try {
      responseJson = await axios.request({
        url: data?.url,
        method: data?.method,
        data: data?.body,
        headers: data?.headers
      })
    } catch (error) {
      responseJson = error.responseJson
    }
    return {
      statusCode: responseJson.status,
      body: responseJson.data.results
    }
  }
}
