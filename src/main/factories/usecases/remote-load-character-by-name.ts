import { RemoteLoadCharacterByName } from "@/data/usecases/remote-load-character-by-name";
import { LoadCharacterByName } from "@/domain/usecases/load-character-by-name";
import { makeApiUrl } from "../http/api-factory-url";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteLoadCharacterByName = (): LoadCharacterByName => 
  new RemoteLoadCharacterByName(makeApiUrl('characters'), makeAxiosHttpClient())