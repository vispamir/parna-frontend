import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "محصولات",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "زیرساخت نئوبانک",
        path: "/products/neobank",
        newTab: false,
      },
      {
        id: 12,
        title: "زیرساخت پرداخت‌یاری",
        path: "/products/payment-facility",
        newTab: false,
      },
      {
        id: 13,
        title: "زیرساخت مدیریت کسب‌وکار",
        path: "/products/business-management",
        newTab: false,
      },
      {
        id: 14,
        title: "زیرساخت مدیریت آموزش",
        path: "/products/education-management",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "راهکارها",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "مستندات",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "درباره ما",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
