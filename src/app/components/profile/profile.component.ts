import { Component, OnInit } from '@angular/core';
import {CompanyModel} from 'src/app/models/company.model'
import { CompanyRestService } from "src/app/services/companyRest/company-rest.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{

 
  constructor(
    public CompanyRest: CompanyRestService
  ){
     
  }
  ngOnInit(): void {   
  }

  
}