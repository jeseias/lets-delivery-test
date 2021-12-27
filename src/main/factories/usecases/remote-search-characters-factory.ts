import { RemoteSearchCharacter } from '@/data/usecases/remote-search-character'
import { SearchCharacter } from '@/domain/usecases/search-character'
import { makeApiUrl } from '../http/api-factory-url'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'

export const makeRemoteSearchCharacter = (): SearchCharacter =>
  new RemoteSearchCharacter(makeApiUrl('characters'), makeAxiosHttpClient())
