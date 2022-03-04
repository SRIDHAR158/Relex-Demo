import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {
    this.addUserForm = fb.group({
      'name': new FormControl(''),
      'address': new FormArray([]),
    });
   }

  ngOnInit(): void {
  }

  addNewAddressGroup() {
    const add = this.addUserForm.get('address') as FormArray;

    const newAddress = this.fb.group({
      street: [],
      city: [],
    });

    add.push(newAddress);
  }

  deleteAddressGroup(index: number) {
    const add = this.addUserForm.get('address') as FormArray;
    add.removeAt(index);
  }

}
