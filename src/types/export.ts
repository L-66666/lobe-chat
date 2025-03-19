
export interface ExportPgDataStructure {
  data: object;
  mode: 'pglite' | 'postgres';
  schemaHash: string;
}
