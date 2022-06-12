import { Component, OnInit } from "@angular/core";
import { ProductRestService } from "src/app/services/productsRest/products-rest.service";
import { OfficeRestService } from "src/app/services/officeRest/office-rest.service";
import { ProductModel } from "src/app/models/products.model";
import { OfficeModel } from "src/app/models/office.model";
import Swal from "sweetalert2";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
    products: any;
    product: ProductModel;
    office: OfficeModel;
    offices: any;
    productId: any;
    search: any;
    officeGetId: any;
    idOffice: any;
    idProduct: any;

    constructor(
        private productRest: ProductRestService,
        private  officeRest: OfficeRestService,
    ){
        this.product = new ProductModel('','',0,),
        this.office = new OfficeModel('','','')

    }
    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(){
        this.productRest.getProducts().subscribe({
            next: (res: any)=> {
                this.products = res.products,
                console.log(this.products)
            },
            error: (err)=>console.log(err)
        })
    }

    getProduct(id:string){
        this.productRest.getProduct(id).subscribe({
            next: (res:any)=>{
                this.productId = res.checkProduct
                console.log(this.productId);
            },
            error: (err)=> alert(err.error.message)
        })
    }

    newProduct(newProductForm:any){
        this.productRest.newProduct(this.product).subscribe({
            next:(res:any)=>{
                Swal.fire({
                    icon: 'success',
                    title: res.message
                });
                this.getProducts();
                newProductForm.reset();
            },

            error: (err)=> alert(err.error.message || err.error)
        })
    }

    updateProduct(){
        this.productRest.updateProduct(this.productId._id, this.productId).subscribe({
            next:(res:any)=>{
                Swal.fire({
                    icon: 'success',
                    title: res.message
                
                });
                console.log(this.productId);
                this.getProducts();
            },
            error: (err)=> alert(err.error.message || err.error)
        })
    }

    deleteProduct(id:string){
        this.productRest.deleteProduct(id).subscribe({
            next:(res:any)=>{
                Swal.fire({
                    icon: 'success',
                    title: res.message
                });
                this.getProducts();
            },
            error:(err)=>{
                Swal.fire({
                    icon: 'warning',
                    title: err.error.message
                })
            }
        })
    }

    getProductsByAsc(){
        this.productRest.getProductsByAsc().subscribe({
            next: (res:any)=>{
                this.products = res.products, console.log(this.products);
            },
            error:(err)=> console.log(err)
        })
    }

    getProductsByDes(){
        this.productRest.getProductsByDes().subscribe({
            next:(res:any)=>{
                this.products = res.products, console.log(this.products);
            },
            error:(err)=> console.log(err)
        })
    }

    getProductByName(){
        this.productRest.getProductsByName().subscribe({
            next:(res:any)=>{
                this.products = res.products, console.log(this.products)
            },
            error: (err)=> console.log(err)
        })
    }

    getProductByProvider(){
        this.productRest.getProductByProvider().subscribe({
            next: (res:any)=>{
                this.products = res.products, console.log(this.products)
            },
            error:(err)=> console.log(err)
        })
    }

    getOffices(){
        this.officeRest.getOffices().subscribe({
            next:(res: any)=> this.office = res.office,
            error:(err)=> console.log(err)
        })
    }

    getOffice(id:string){
        this.officeRest.getOffice(id).subscribe({
            next:(res:any)=>{
                this.officeGetId = res.office,
                console.log(this.officeGetId);
            },

            error:(err)=> alert(err.error.message)
        })
    }

    
    
}