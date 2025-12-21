import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CATEGORIES, Category } from '../../../../core/models';

@Component({
  selector: 'app-category-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-select.html',
  styleUrl: './category-select.scss'
})
export class CategorySelect {
  categories = CATEGORIES;
  selectedCategoryId = model<string | undefined>(undefined);
}
