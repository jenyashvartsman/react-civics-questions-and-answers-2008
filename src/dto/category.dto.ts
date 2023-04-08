import { SubCategory } from "./sub-category.dto";

export interface CategoryDto {
  category: string;
  subCategories: SubCategory[];
}
