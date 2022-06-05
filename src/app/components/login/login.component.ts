import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyModel } from 'src/app/models/company.model';
import { CompanyRestService } from 'src/app/services/companyRest/company-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  company:CompanyModel;

  constructor(private companyRest: CompanyRestService,
              public router: Router) {
    this.company = new CompanyModel('','','','','','','','');
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.company),
    this.companyRest.login(this.company).subscribe({
      next: (res:any)=>{
        alert(res.message);
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.already));
        this.router.navigateByUrl('home');
      },
      error: (err)=> alert(err.error.message || err.error)

    })
  }

}
