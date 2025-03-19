
export interface ExportDatabaseData {
  data: any;
  url: undefined;
}

export interface IImportService {
  exportData(): Promise<ExportDatabaseData>;
}
