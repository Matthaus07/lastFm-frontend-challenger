import { SaveData } from '@/domain/usecases/save-data'
import { LocalSaveData } from '@/data/usecases/local-save-data'
import { makeLocalStorageAdapter } from '../cache/local-storage-adapter'

export const makeLocalSaveData = (): SaveData => {
  return new LocalSaveData(makeLocalStorageAdapter())
}
