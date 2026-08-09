import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با پرنا",
  description: "پرنا ارائه دهنده راهکارهای نرم افزاری مالی، بانکی و پرداخت در امور توسعه و نگهداری سرویس پرداخت یاری، پرداخت، نئوبانک، بانکداری باز، انتقال وجه، کیف پول, IPG، MPG, Open Banking, Banking, Wallet",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="تماس با پرنا"
        description="آماده‌ایم برای ارائه خدمت یا حتی مشورت در زمینه فعالیت پرنا صدای گرمتان را شنیده و شما را به صرف چای دعوت کنیم."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
