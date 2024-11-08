import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "محصولات",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "زیر ساخت نئوبانک",
        path: "/products/neobank",
        newTab: false,
      },
      {
        id: 22,
        title: "زیر ساخت پرداخت یاری",
        path: "/products/payment-facility",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "درباره ما",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "بلاگ",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "تماس با ما",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
