import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = [];

  prodModel: Product;

  showNew: Boolean = false;

  submitType = 'Save';

  selectedRow: number;

  types: string[] = ['Car', 'Ship', 'Plane', 'Space Ship', 'Tank'];

  constructor() {
    this.products.push(new Product('Casablanca', 'https://bit.do/eBmsa', { year: 1980, month: 5, day: 12 }, 'Ship'));

    this.products.push(new Product('Airbus', 'https://bit.do/eBmsi', { year: 1975, month: 12, day: 3 },  'Plane'));

    this.products.push(new Product('Apollo', 'http://bit.do/eBmsu', { year: 1970, month: 7, day: 25 },  'Car'));
  }



  onSave() {

    if (this.submitType === 'Save') {

      this.products.push(this.prodModel);

    } else {

      this.products[this.selectedRow].name = this.prodModel.name;

      this.products[this.selectedRow].imgLink = this.prodModel.imgLink;

      this.products[this.selectedRow].date = this.prodModel.date;

      this.products[this.selectedRow].type = this.prodModel.type;

    }

    this.showNew = false;

  }

  onEdit(index: number) {

    this.selectedRow = index;

    this.prodModel = new Product();

    this.prodModel = Object.assign({}, this.products[this.selectedRow]);

    this.submitType = 'Update';

    this.showNew = true;

  }

  onDelete(index: number) {

    this.products.splice(index, 1);

  }

  onNew() {

    this.prodModel = new Product();

    this.submitType = 'Save';

    this.showNew = true;

  }

  onCancel() {

    this.showNew = false;

  }

  onChangeType(type: string) {

    this.prodModel.type = type;

  }

  ngOnInit() {
  }

}

class Product {

  constructor(

    public name: string = '',

    public imgLink: string = '',

    public date: NgbDateStruct = null,

    public type: string = 'Select type'

  ) { }

}
