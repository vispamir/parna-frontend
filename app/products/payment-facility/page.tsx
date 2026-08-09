import Architecture from "@/components/PaymentFacility/Architecture";
import DashboardPreview from "@/components/PaymentFacility/DashboardPreview";
import DeveloperExperience from "@/components/PaymentFacility/DeveloperExperience";
import Features from "@/components/PaymentFacility/Features";
import FinalCTA from "@/components/PaymentFacility/FinalCTA";
import Hero from "@/components/PaymentFacility/Hero";
import IntegrationSteps from "@/components/PaymentFacility/IntegrationSteps";
import ProblemSection from "@/components/PaymentFacility/ProblemSection";
import Security from "@/components/PaymentFacility/Security";
import SolutionSection from "@/components/PaymentFacility/SolutionSection";
import TrustStrip from "@/components/PaymentFacility/TrustStrip";
import UseCases from "@/components/PaymentFacility/UseCases";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "زیرساخت پرداخت‌یاری | پرنا",
  description:
    "زیرساخت پرداخت‌یاری برای راه‌اندازی، مدیریت و توسعه سرویس‌های پرداخت؛ مدیریت پذیرندگان، تراکنش‌ها، تسویه، Webhook و API.",
  openGraph: {
    title: "زیرساخت پرداخت‌یاری | پرنا",
    description:
      "تمام زیرساخت فنی موردنیاز برای راه‌اندازی و مدیریت سرویس‌های پرداخت‌یاری را در اختیار کسب‌وکار خود قرار دهید.",
    locale: "fa_IR",
    type: "website",
  },
};

const PaymentFacilityPage = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <DeveloperExperience />
      <Architecture />
      <UseCases />
      <Security />
      <DashboardPreview />
      <IntegrationSteps />
      <FinalCTA />
    </>
  );
};

export default PaymentFacilityPage;
