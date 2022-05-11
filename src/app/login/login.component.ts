import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!:string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    const userObj={
     "email":this.email,
     "password":this.password,
    };
    const url="http://localhost:9000/user/login";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      alert("LOGGED IN");
    },(err)=>{
      console.log(err);
      alert("Please re-enter your Details");
    })
  }

}
