import { Component, OnInit } from "@angular/core";
import {CompanyModel} from 'src/app/models/company.model'
import { CompanyRestService } from "src/app/services/companyRest/company-rest.service";
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

    company:CompanyModel;
    timer: any;
    constructor(
        private companyRest: CompanyRestService,
        private router: Router
    ){
        this.company = new CompanyModel('','','','','','','','');
    }
    ngOnInit(): void {   
    }

    register(){
        this.companyRest.register(this.company).subscribe({
            
        })
    }
}