import { FileContent } from './file-content';

export class Payload {
    json?: any;
    label?: string;
    text?: string;
    url?: string;
    data?: FileContent;

    constructor(data: any) {
        if (data.label) {
            this.label = data.label;
        }

        if (data.text) {
            this.text = data.text;
        }

        if (data.url) {
            this.url = data.url;
        }

        if (data.json) {
            this.json = data.json;
        }

        if (data.data) {
            this.data = new FileContent(data.data);
        }
    }

}
