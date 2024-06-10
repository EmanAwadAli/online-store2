// append urls here, DO NOT remove this line

const URLS = {
  cart: "/cart",
  home: "/",
  product: {
    list: "/product",
    viewProductRoute: "/product/:id",
    viewProduct: (product: any) => `/product/${product.id}`,
    search: "/product/search",
  },
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "/faq",
  auth: {
    login: "/login",
    forgetPassword: "/forget-password",
    resetPassword: "/rest-password",
    register: "/register",
    verifyForgetPassword: "/forget-password/verify",
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  promotions: "/promotions",
  stores: "/stores",
  ourContacts: "/our-contacts",
  deliveryReturn: "/delivery-return",
  outlet: "/outlet",
  search: "/search",
  checkout: "/checkout",
  compare: "/compare",
};

export default URLS;
