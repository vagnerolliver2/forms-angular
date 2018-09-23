export class FileContent {
  enconding: string;
  data: string;

  constructor(data: any) {
      this.enconding = data.enconding || '';
      this.data = data.data || '';
  }
}
