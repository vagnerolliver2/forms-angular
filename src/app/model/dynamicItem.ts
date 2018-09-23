export class DynamicItem {
  value: string;
  var: string;
  ref: string;
  child?: DynamicItem;

  constructor(data: any) {
      this.value = data.value || '';
      this.var = data.var || '';
      this.ref = data.ref || '';
      if (data.child) {
          this.child = new DynamicItem(data.child);
      }
  }
}
