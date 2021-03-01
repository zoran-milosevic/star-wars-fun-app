import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IDropDownItem } from '@app/modules/main/models/drop-down-items.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  resourceForm: FormGroup;

  model = {
    resource: undefined
  }

  @Input() dropDownItems: IDropDownItem[] = [];
  @Input() selectedType: number = 0;
  @Output() dropDownChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {

    this.resourceForm = this.formBuilder.group({
      resource: undefined
    });
  }

  changeDropDown(event: any) {
    const value = event.target.value;

    this.model.resource = value;
    this.resourceForm.controls.resource.patchValue(value);

    this.dropDownChanged.emit(value);
  }

  ngOnInit(): void {

  }

}
