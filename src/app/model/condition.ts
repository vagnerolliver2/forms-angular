export class Condition {
  type: string;
  expression?: string;
  values?: string[];

  constructor(data: any) {
      this.type = data.type || '';

      if (data.expression && data.expression !== '') {
          this.expression = data.expression;
      }

      if (data.values && data.values.length !== 0) {
          this.values = data.values;
      }
  }
}
