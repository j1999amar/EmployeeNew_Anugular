import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent {
  data = [
    {
      empcode: 1001,
      name: 'Amarnath',
      designamtion: 'Traine',
      salary: 25000,
      company: 'Nest Digital',
      phone: '8098385972',
      username: 'amarnath',
      password: 'amar123',
    },
  ];
}
