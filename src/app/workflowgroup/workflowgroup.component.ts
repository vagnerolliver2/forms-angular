import { Component, OnInit } from '@angular/core';
import { MetadataItem, Workflow, Step, Connection, GroupMetadata } from '../model';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { WORKFLOW } from '../worflowgroup';

@Component({
  selector: 'app-workflowgroup',
  templateUrl: './workflowgroup.component.html',
  styleUrls: ['./workflowgroup.component.sass']
})
export class WorkflowgroupComponent implements OnInit {

    form: FormGroup;

    mockMetaItem: MetadataItem = {
        name: '',
        label: '',
        description: '',
        type: '',
        hint: '',
        required: false
    };

    hasSubmmited: boolean;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.hasSubmmited = false;

        this.createFormFields();

        setTimeout(() => {
            this.bindCreateFormsFields(WORKFLOW);
            this.bindEditableValues(WORKFLOW);
        }, 1000);

    }

    get metadata(): FormControl {
        return this.form.get('metadata') as FormControl;
    }

    get inputs(): FormArray {
        return this.metadata.get('inputs') as FormArray;
    }

    get outputs(): FormArray {
        return this.metadata.get('outputs') as FormArray;
    }

    createFormFields() {
        this.form = this.fb.group({
            'alias': ['', Validators.required],
            'description': [''],
            'hint': [''],
            'icon': [''],
            'metadata': this.createIOFieldFields()
        }, { });
    }

    createIOFieldFields() {
        return this.fb.group({
            'inputs': this.fb.array([]),
            'outputs': this.fb.array([]),
        });
    }

    bindCreateFormsFields({ id, steps, connections }: { id: string, steps: Step[], connections: Connection[] }) {
        this.form.addControl('id', new FormControl(id, Validators.required));
        this.form.addControl('steps', new FormControl(steps, Validators.required));
        this.form.addControl('connections', new FormControl(connections, Validators.required));
    }

    bindEditableValues({ alias, description, hint, icon, metadata }:
        { alias: string, description: string, hint?: string, icon?: string, metadata: GroupMetadata }) {

        this.form.patchValue({ alias: alias, description: description, hint: hint, icon: icon });

        this.loadFieldsMetadata(metadata);
    }

    public addIOFields(
        { name = '', label = '', description = '', type = '', hint = '', required = false }:
        { name: string, label: string, description: string, type: string, hint: string, required: boolean }) {

        return this.createIOField(name, label, description, type, hint, required);
    }

    private createIOField(name: string, label: string, description: string, type: string, hint: string, required: boolean): FormGroup {
        return this.fb.group({
            'name': [name, Validators.required],
            'label': [label, Validators.required],
            'description': [description],
            'hint': [hint],
            'type': [type],
            'required': [required]
        }, {});
    }

    loadFieldsMetadata(metadata: GroupMetadata) {
        const createInField = (value: MetadataItem) => this.inputs.push(this.addIOFields(value));
        const createOutField = (value: MetadataItem) => this.outputs.push(this.addIOFields(value));

        metadata.inputs.forEach((value) => createInField(value));
        metadata.outputs.forEach((value) => createOutField(value));
    }


    submitForm() {
        this.hasSubmmited = false;
        console.log(this.form.value);
    }
}
