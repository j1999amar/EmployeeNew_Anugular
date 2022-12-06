import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
        empcode = ""
        name = ""
        designation = ""
        salary = ""
        company =""
        phone = ""
        username = ""
        password = ""
        
         
         readValue=()=>{
          let data={
            "empcode" :this.empcode,
            "name":this.name,
            "designation" :this.designation,
            "salary" :this.salary,
            "company" :this.company,
            "username" :this.username,
            "password" :this.password
    
             }    
          console.log(data);

         }    


}
