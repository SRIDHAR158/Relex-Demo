import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  gettrayvalues(): Observable<any>{
    return this.http.get("https://devmasters.relexhealth.com/traymasterv1");
  }
}
