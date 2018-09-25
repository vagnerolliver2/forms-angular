import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-metadata',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.sass']
})
export class MetadataComponent {

  requestTypes = ['String', 'Boolean', 'Number'];

  @Input()
  parent: FormArray;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  constructor() { }

  addField() {
    this.add.emit();
  }

  removeField(index: number) {
    this.remove.emit(index);
  }
}
