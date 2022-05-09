import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Name!: string;
  role!: string;
  mobileNumber!: string;
  email!: string;
  password!: string;

  constructor(private http:HttpClient) {}
   

  ngOnInit(): void {
  }
  register() {
     const userObj={
      "name":"kiruba",
      "email":"kk@gmail.com",
      "password":"kiki@123",
      "mobile":"9500322474",
      "role":"user"
     };
     const url="http://localhost:9000/users/save";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       alert("successfully Registered");
     },(err)=>{
       console.log(err);
       alert("Please re-enter your Details");
     })
  }
}
