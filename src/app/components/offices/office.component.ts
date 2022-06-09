import { Component, OnInit } from "@angular/core";
import { OfficeRestService } from "src/app/services/officeRest/office-rest.service";

@Component({
    selector: 'app-office',
    template: './office.component.html',
    styleUrls: ['./office.component.css']
})

export class OfficeComponent implements OnInit{
    branches: any;

    constructor(
        private officeRest: OfficeRestService
    ){}

    ngOnInit(): void {
        this.getOffices();
    }

    getOffices(){
        this.officeRest.getBranches().subscribe({
            next: (res:any)=>{this.branches = res.office},
            error: (err) => {alert(err.error.message)}
        })
    }
}