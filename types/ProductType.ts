interface InstallationService {
  name: string;
  selected: boolean;
  price: number;
}

export interface ProductType {
  installationService: InstallationService;
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  images: string[];
  sold: number;
  quantity: number;
  colors: string[];
  availability: boolean;
  category: string;
  subCategory: string;
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
