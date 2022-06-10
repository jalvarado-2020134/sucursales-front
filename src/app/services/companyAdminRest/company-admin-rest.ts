import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CompanyRestService } from "../companyRest/company-rest.service";

@Injectable({
    providedIn: 'root'

})

export class CompanyAdminRestService{


    httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.companyRest.getToken(),
});

    constructor(
        private http: HttpClient,
        private companyRest: CompanyRestService
    ){}

    getCompany(id:string){
        return this.http.get(environment.baseUrl + '/getCompany' + id,{headers:this.httpOptions});
    }

    getCompanies(){
        return this.http.get(environment.baseUrl + '/getCompanies',{headers:this.httpOptions});
    }

    registerCompany_Admin(params:{}){
        return this.http.post(environment.baseUrl + '/registerCompany_Admin', params,{headers: this.httpOptions});
    }

    updateCompany_Admin(id:string,params:{}){
        return this.http.put(environment.baseUrl + '/updateCompany_Admin' + id,params,{headers: this.httpOptions});
    }

    deleteCompany_Admin(id:string){
        return this.http.delete(environment.baseUrl + '/deleteCompany_Admin' + id,{headers: this.httpOptions})
    }



}