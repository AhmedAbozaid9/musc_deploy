import Addresses from "@/components/Icons/account/Addresses";
import Favorites from "@/components/Icons/account/Favorites";
import MyAccount from "@/components/Icons/account/MyAccount";
import Orders from "@/components/Icons/account/Orders";
import Settings from "@/components/Icons/account/Settings";

export const sidebarContent = [
  { slug: "account", title: "حسابي", icon: <MyAccount /> },
  { slug: "orders", title: "الطلبات", icon: <Orders /> },
  { slug: "addresses", title: "العناوين", icon: <Addresses /> },
  { slug: "favorites", title: "المفضلة", icon: <Favorites /> },
  { slug: "settings", title: "الاعدادات", icon: <Settings /> },
];
