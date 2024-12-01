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
    link: routes.Category.POST("appliances"),
    title: "الاجهزه الكهربائيه",
  },
  {
    link: routes.Category.POST("plumbing"),
    title: "المنتجات الصحيه",
  },
  {
    link: routes.Offers,
    title: "العروض",
  },
];
