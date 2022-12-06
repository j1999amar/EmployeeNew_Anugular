import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchData=()=>{
    return this.http.get('http://localhost:8080/viewEmployee')
  }
  sendData=(dataToSend:any)=>{
    return this.http.post('http://localhost:8080/addEmployee',dataToSend)
  }
}
