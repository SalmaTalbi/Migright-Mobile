import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
    './styles/categories.page.scss',
    './styles/categories.shell.scss',
    './styles/categories.responsive.scss'
  ]
})
export class CategoriesPage { 
  public toggledFilter: boolean = false;
  filter: string;
  categories: any[];

  checkboxTagsForm: FormGroup;

  search: string;
  constructor() {

      this.toggledFilter = false;
      this.checkboxTagsForm = new FormGroup({
        tag_1: new FormControl(true),
        tag_2: new FormControl(false),
        tag_3: new FormControl(true),
        tag_4: new FormControl(true),
        tag_5: new FormControl(false),
        tag_6: new FormControl(false),
        tag_7: new FormControl(false),
        tag_8: new FormControl(false),
        search: new FormControl()
      });
  }

  public toggleFilter(): void {
    this.toggledFilter = !this.toggledFilter;
  }

  cancelSearch(){
    this.toggleFilter();
  }
  userRecords = [{
    "id": 1,
    "title": "Law",
    "description": "Law Law Law",
    "image": './assets/sample-images/categories/travel.png'
  },
  {
    "id": 2,
    "title": "Health",
    "description": "Health Health Health",
    "image": './assets/sample-images/categories/travel.png'
  },
  {
    "id": 3,
    "title": "Study",
    "description": "Study Study Study",
    "image": './assets/sample-images/categories/travel.png'
  },
  {
    "id": 4,
    "title": "Work",
    "description": "Work Work Work",
    "image": './assets/sample-images/categories/travel.png'
  },
  {
    "id": 5,
    "title": "Residence",
    "description": "Residence Residence Residence",
    "image": './assets/sample-images/categories/travel.png'
  },
]
}
