import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private router:Router){}  


  firstName = '';
  lastName = '';
  email = '';
  mobile : any = null;
  gender : any = '';


  ngOnInit(): void {
    
  }

  firstNameValueChange(event:Event): void{
    const value = (event.target as HTMLInputElement).value;

    this.firstName=value;
  }

  lastNameValueChange(event:Event): void{
    const value = (event.target as HTMLInputElement).value;

    this.lastName=value;
  }

  mobileValueChange(event:Event): void{
    const value = (event.target as HTMLInputElement).value;

    this.mobile=value;
  }

  emailValueChange(event:Event): void{
    const value = (event.target as HTMLInputElement).value;

    this.email=value;
  }

  

  

  navigateToComponent() {
    const data = { firstname: this.firstName, lastname: this.lastName,email:this.email,mobile:this.mobile};
    console.log(data);
    this.router.navigate(['/details'], { queryParams: data });
  }
  
}














  /* To print in console
  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    email : new FormControl(""),
    mobile : new FormControl(""),
    gender : new FormControl(""),
    pwd : new FormControl(""),
    rpwd : new FormControl("")
  });



  registerSubmitted(){
    console.log(this.registerForm.value);
  }
}
*/