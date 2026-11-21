import Architecture from "@/components/BusinessManagement/Architecture";
import DashboardPreview from "@/components/BusinessManagement/DashboardPreview";
import DeveloperExperience from "@/components/BusinessManagement/DeveloperExperience";
import Features from "@/components/BusinessManagement/Features";
import FinalCTA from "@/components/BusinessManagement/FinalCTA";
import Hero from "@/components/BusinessManagement/Hero";
import IntegrationSteps from "@/components/BusinessManagement/IntegrationSteps";
import ProblemSection from "@/components/BusinessManagement/ProblemSection";
import Security from "@/components/BusinessManagement/Security";
import SolutionSection from "@/components/BusinessManagement/SolutionSection";
import TrustStrip from "@/components/BusinessManagement/TrustStrip";
import UseCases from "@/components/BusinessManagement/UseCases";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "زیرساخت مدیریت کسب‌وکار | پرنا",
  description:
    "زیرساخت یکپارچه مدیریت کسب‌وکار برای فروش و CRM، منابع انسانی، مالی و حسابداری، انبار، صندوق فروشگاهی و کارتابل سازمانی.",
  openGraph: {
    title: "زیرساخت مدیریت کسب‌وکار | پرنا",
    description:
      "تمام لایه‌های عملیاتی کسب‌وکار را در یک پلتفرم منسجم داشته باشید؛ از CRM تا حسابداری، HR و انبار.",
    locale: "fa_IR",
    type: "website",
  },
};

const BusinessManagementPage = () => {
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

export default BusinessManagementPage;
