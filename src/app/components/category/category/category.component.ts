import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../model/category';
import { CategoryService } from '../../../service/category.service';
import { CategoryDetails } from '../../../model/categoryDetails';
import { CategoryDetailService } from '../../../service/category-detail.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  
  categories : Category[] = [];
  categoryDetails : CategoryDetails[] = [];

  constructor(
    private categoryService: CategoryService,
    private categoryDetailsService: CategoryDetailService
    ){ }

  ngOnInit(): void {
    this.getCategories();
    this.getCategoryDetails();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res.data;
    })
  }

  getCategoryDetails(){
    this.categoryDetailsService.getCategoryDetails().subscribe(res => {
      this.categoryDetails = res.data;
    })
  }

}
