import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private api:ApiService, private route:Router){}
        empcode = ""
        name = ""
        designamtion = ""
        salary = ""
        company =""
        phone = ""
        username = ""
        password = ""
        
         
         readValue=()=>{
          let data={
            "empcode" :this.empcode,
            "name":this.name,
            "designamtion" :this.designamtion,
            "salary" :this.salary,
            "phone":this.phone,
            "company" :this.company,
            "username" :this.username,
            "password" :this.password
             }    
          console.log(data);
          this.api.sendData(data).subscribe(
            (response)=>{
              console.log(response)
            }
          )
          this.route.navigate(['/'])
         }    


}
