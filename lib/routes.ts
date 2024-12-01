const routes = {
  HOME: "/",
  Contact: "/contact",
  Cart: "/cart",
  Login: "/login",
  Register: "/register",
  Offers: "/offers",
  Product: {
    POST: (slug: string) => `/product/${slug}`,
  },
  Category: {
    POST: (slug: string) => `/category/${slug}`,
  },
  User: {
    edit: "/user/edit",
    address: "/user/address",
    orders: "/user/orders",
    singleOrder: {
      POST: (slug: string) => `/user/orders/${slug}`,
    },
  },
} as const;

export default routes;
