import { Payload } from './payload';
import { DynamicItem } from './dynamicItem';

export class Content {
    type: string;
    payload: Payload;
    dynamicItem: DynamicItem;

    constructor(data: any) {
        this.type = data.type || '';

        if (data.payload) {
            this.payload = new Payload(data.payload);
        }

        if (data.dynamicItem) {
            this.dynamicItem = new DynamicItem(data.dynamicItem);
        }
    }
}
