import { axios } from "@/lib/axios";
interface BannerType {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export const getBanners = async (): Promise<BannerType[]> => {
  const res = await axios.get("/getBanners");
  return res.data.banners;
};
