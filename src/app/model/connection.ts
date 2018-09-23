import { Condition } from './condition';

export class Connection {
    from?: string;
    to?: string;
    label?: string;
    isDefault?: boolean;
    conditions?: Condition[];

    constructor(data: any) {
        if (data.from) {
            this.from = data.from;
        }

        if (data.to) {
            this.to = data.to;
        }

        if (data.label) {
            this.label = data.label;
        }

        if (data.isDefault !== null && data.isDefault !== undefined) {
            this.isDefault = data.isDefault;
        }

        if (data.conditions && data.conditions.length) {
            this.conditions = [];

            for (const condition of data.conditions) {
                this.conditions.push(new Condition(condition));
            }
        }
    }

}
