import { Condition } from './condition';
import { Content } from './content';

export class Step {
    id: string;
    type: string;
    conditions?: Condition[];
    contents?: Content[];
    label?: string;
    properties?: any;
    tags?: string[];
    variables?: any;
    inputs?: any;

    constructor(data: any) {
        this.id = data.id || 'step0';
        this.type = data.type || '';

        if (data.label) {
            this.label = data.label;
        }

        if (data.properties) {
            this.properties = {};

            for (const property of Object.keys(data.properties)) {
                this.properties[property] = data.properties[property];
            }

            if (!Object.keys(this.properties).length) {
                delete this.properties;
            }
        }

        if (data.variables) {
            this.variables = {};

            for (const variable of Object.keys(data.variables)) {
                this.variables[variable] = data.variables[variable];
            }

            if (!Object.keys(this.variables).length) {
                delete this.variables;
            }
        }

        if (data.inputs) {
            this.inputs = {};

            for (const input of Object.keys(data.inputs)) {
                this.inputs[input] = data.inputs[input];
            }

            if (!Object.keys(this.inputs).length) {
                delete this.inputs;
            }
        }

        if (data.tags && data.tags.length) {
            this.tags = data.tags;
        }

        if (data.contents && data.contents.length) {
            this.contents = [];

            for (const content of data.contents) {
                this.contents.push(new Content(content));
            }
        }

        if (data.conditions && data.conditions.length) {
            this.conditions = [];

            for (const condition of data.conditions) {
                this.conditions.push(new Condition(condition));
            }
        }

    }
}
