export interface SaveData{
  save: (data: any, search: string) => Promise<void>
}
