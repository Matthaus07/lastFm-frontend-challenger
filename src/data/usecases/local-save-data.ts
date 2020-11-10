import { SetStorage } from '@/data/protocols/cache/set-storage'
import { SaveData } from '@/domain/usecases/save-data'

export class LocalSaveData implements SaveData {
  constructor (private readonly setStorage: SetStorage) {}

  async save (searchName: string,data: any): Promise<void> {
    await this.setStorage.set(searchName, JSON.stringify(data))
  }
}
