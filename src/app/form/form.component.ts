import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

    this.addUserForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(4)]),

      address: this.formBuilder.array([
        // this.formBuilder.group({
        //   street: [''],
        //   city: ['']
        // })
      ])
    
    })
   }

  

  ngOnInit(): void {
    // this.addUserForm = this.formBuilder.group({
    //   'name': new FormControl('', [Validators.required, Validators.minLength(4)]),

    //   address: this.formBuilder.array([
    //     // this.formBuilder.group({
    //     //   street: [''],
    //     //   city: ['']
    //     // })
    //   ])
    
    // })
  }

  

  // get address(){
  //   return this.addUserForm.get('address') as FormArray;
  // }

  addAddress(){

    const add = this.addUserForm.get('address') as FormArray;
    // let itemlength = this.address.length;
    // console.log(itemlength);
    const newAddress = this.formBuilder.group({
      street: [],
      city: [],
    });

    add.push(newAddress);
  }

  createEmployee(){
    console.log(this.addUserForm.value);
    console.log(this.addUserForm.value.name);
  }

}
