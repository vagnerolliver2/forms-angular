export class MetadataItem {
  name: string;
  description: string;
  label: string;
  type: string;
  hint: string;
  required: boolean;

  constructor(data: any) {
      this.name = data.name;
      this.description = data.description;
      this.label = data.label;
      this.type = data.type;
      this.hint = data.hint;
      this.required = data.required || false;
  }
}
