import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره پرنا",
  description: "پرنا ارائه دهنده راهکارهای نرم افزاری مالی، بانکی و پرداخت در امور توسعه و نگهداری سرویس پرداخت یاری، پرداخت، نئوبانک، بانکداری باز، انتقال وجه، کیف پول, IPG، MPG, Open Banking, Banking, Wallet",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="درباره پرنا"
        description="پرنا با هدف ارائه خدمات مالی، بانکی و پرداخت درابتدا به بانک‌ها و مؤسسات مالی و اعتباری در سال 1391 شروع به فعالیت کرده و در سال‌های اخیر با تمرکز بر نیازمندی محصولات فینتکی، سعی کرده سرویس‌های زیرساختی را به صورت White Lable در اختیار مجموعه‌های با سابقه و نیز استارت‌آپی قرار دهد و به آن‌ها برای توسعه محصولات کمک کند. محصولات پرنا به کسب‌و‌کارها به نحوی ارائه خدمت می‌کند که آن‌ها به شرایط توسعه کسب‌و‌کار و محصولات نیاز بازار متمرکز شده و نیاز زیرساخت نرم‌افزار آن‌ها دغدغه محصوب نشود."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
