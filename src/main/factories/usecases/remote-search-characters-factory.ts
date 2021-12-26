import { RemoteSearchCharacters } from "@/data/usecases/remote-search-characters";
import { SearchCharacter } from "@/domain/usecases/search-character";
import { makeApiUrl } from "../http/api-factory-url";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteSearchCharacter = (): SearchCharacter => 
  new RemoteSearchCharacters(makeApiUrl('characters'), makeAxiosHttpClient())