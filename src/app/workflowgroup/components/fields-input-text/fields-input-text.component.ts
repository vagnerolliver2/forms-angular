import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-fields-input-text',
    template: `
        <label class="label">{{ label }}</label>
        <div class="control is-expanded has-icons-left">
            <input class="input"
                [value]="value"
                (keyup)="onKeyUp($event.target.value)"
                type="text"
                [placeholder]="placeholder">
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
        </div>
    `,
    styleUrls: ['./fields-input-text.component.sass'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FieldsInputTextComponent),
            multi: true
        }
    ]
})
export class FieldsInputTextComponent implements ControlValueAccessor, OnInit {

    @Input()
    label: string;

    @Input()
    placeholder: string;


    value: String = '';

    constructor() { }

    ngOnInit() {}

    onKeyUp(value: string): void {
        this.onChange(value);
    }

    onChange = (_: any) => {};

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        // do nothing
    }
}
