import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../fuel/fuel.component';


@Component({
  selector: 'app-newfuel',
  templateUrl: './newfuel.component.html',
  styleUrls: ['./newfuel.component.css']
})
export class NewfuelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewfuelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
