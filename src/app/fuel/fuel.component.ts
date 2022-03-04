import { NewfuelComponent } from './../newfuel/newfuel.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

export interface DialogData {
  passedValues: object;
  animal: string;
  name: string;
}

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  passedValues: any = [];
  animal: string = '';
  name: string = '';

  // addUserForm: FormGroup = new FormGroup({});

  constructor(public dialog: MatDialog) { }

  // openDialog() {
  //   const dialogRef = this.dialog.open(NewfuelComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     // console.log(`Dialog result: ${result}`);  
  //     console.log('Dialog closed', result)
  // //     // The above code is same as below two lines of how we normally code, 
  // //     // but in es6 we use the above syntax where inside a backtick quote we write string as it is,
  // //     //and to define a variable we use a ${} symbol, inside which we write our variable as mentioned 
  // //     // above.
  // //     // console.log('Dialog result: ' + result);
  //           // console.log('Dialog closed', result)
  //   });
  // }

  openDialog(): void {
    console.log(this.name);
    const dialogRef = this.dialog.open(NewfuelComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', typeof result);
      console.log('The dialog was closed', result);
       this.animal = result;
      // this.passedValues.push(result);
    });
  }





  ngOnInit(): void {
  }

}
