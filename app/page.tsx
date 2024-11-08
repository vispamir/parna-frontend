import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پرنا",
  description: "پرنا ارائه دهنده راهکارهای نرم افزاری مالی، بانکی و پرداخت در امور توسعه و نگهداری سرویس پرداخت یاری، پرداخت، نئوبانک، بانکداری باز، انتقال وجه، کیف پول, IPG، MPG, Open Banking, Banking, Wallet",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
