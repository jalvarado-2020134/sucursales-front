import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CompanyRestService } from "../companyRest/company-rest.service";

@Injectable({
    providedIn: 'root'
})

export class OfficeRestService{

    httpOptions = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.companyRest.getToken()})

    constructor(
        private http: HttpClient,
        private companyRest: CompanyRestService
    ){}


    getOffices(){
        return this.http.get(environment.baseUrl + '/getOffices',{headers: this.httpOptions});
    }

    getOffice(id:string){
        return this.http.get(environment.baseUrl + '/getOffice/' + id,{headers: this.httpOptions});
    }

    addOffice(params:{}){
        return this.http.post(environment.baseUrl + '/addOffice', params,{headers: this.httpOptions});
    }

    updateOffice(id:string,params:{}){
        return this.http.put(environment.baseUrl + '/update/' + id,params,{headers: this.httpOptions});
    }

    deleteOffice(id: string){
        return this.http.delete(environment.baseUrl + '/delete/' + id,{headers: this.httpOptions})
    }
}