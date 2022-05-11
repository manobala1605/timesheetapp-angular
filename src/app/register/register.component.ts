import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Name!: string;
  email!: string;
  password!: string;
  mobileNumber!: string;
  role!: string;

  constructor(private http:HttpClient) {}
   

  ngOnInit(): void {
  }
  register() {
     const userObj={
      "name":this.Name,
      "email":this.email,
      "password":this.password,
      "mobile":this.mobileNumber,
      "role":this.role
     };
     const url="http://localhost:9000/user/register";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       alert("successfully Registered");
     },(err)=>{
       console.log(err);
       alert("Please re-enter your Details");
     })
  }
}
