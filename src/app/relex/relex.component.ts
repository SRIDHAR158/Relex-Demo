import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relex',
  templateUrl: './relex.component.html',
  styleUrls: ['./relex.component.css']
})
export class RelexComponent implements OnInit {

  public items: any[] = [];

  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.gettraydata();
  }

  gettraydata(){
     this.crudservice.gettrayvalues().subscribe(data => {
       console.log(data);
       this.items = data.msg;
     })
  }

}
