import { Connection } from './connection';
import { Step } from './step';
import { GroupMetadata } from './group-metadata';

export class Workflow {
    id: string;
    alias: string;
    historic?: boolean;
    steps: Step[];
    connections: Connection[];
    description: string;
    defaultConversationalChannel?: string;
    categories?: string[];
    templateId?: string;
    metadata?: GroupMetadata;

    constructor(data: any) {
        this.id = data.id || '';
        this.alias = data.alias || '';
        this.description = data.description || '';
        this.steps = [];
        this.connections = [];

        if (data.steps && data.steps.length) {
            for (const step of data.steps) {
                this.steps.push(new Step(step));
            }
        }

        if (data.connections && data.connections.length) {
            for (const connection of data.connections) {
                this.connections.push(new Connection(connection));
            }
        }

        if (data.categories && data.categories.length) {
            this.categories = data.categories;
        }

        if (data.templateId) {
            this.templateId = data.templateId;
        }

        if (data.defaultConversationalChannel) {
            this.defaultConversationalChannel = data.defaultConversationalChannel;
        }

        if (data.historic) {
            this.historic = data.historic;
        }

        if (data.metadata) {
            this.metadata = data.metadata;
        }
    }

}
