import routes from "@/lib/routes";

export interface HeaderType {
  link: string;
  title: string;
}
export const HeaderLinks: HeaderType[] = [
  {
    link: routes.HOME,
    title: "الرئيسية",
  },
  {
    link: routes.Category.POST("678c143dc55968df809476ed"),
    title: "الاجهزه الكهربائيه",
  },
  {
    link: routes.Category.POST("678c1452c55968df809476f8"),
    title: "المنتجات الصحيه",
  },
  {
    link: routes.Category.POST("offers"),
    title: "العروض",
  },
];
