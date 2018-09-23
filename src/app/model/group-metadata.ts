import { Condition } from './condition';
import { MetadataItem } from './metadata-item';

export class GroupMetadata {
    inputs: MetadataItem[];
    outputs: MetadataItem[];

    constructor(data: any) {
        if (data.input && data.input.length) {
            this.inputs = [];

            for (const ipt of data.input) {
                this.inputs.push(new MetadataItem(ipt));
            }
        }

        if (data.output && data.output.length) {
            this.outputs = [];

            for (const opt of data.output) {
                this.outputs.push(new MetadataItem(opt));
            }
        }
    }

}
