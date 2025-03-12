export interface ICategory {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
}

export interface IListCategoryResponse {
  success: boolean;
  data: ICategory[];
}

export function flattenListCategory(response: IListCategoryResponse) {
  if (!response) {
    return [];
  }

  return response?.data.map(({ name, description }, index) => ({
    id: index,
    name: name,
    description: description,
  }));
}
