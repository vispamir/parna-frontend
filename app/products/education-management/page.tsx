import Architecture from "@/components/EducationManagement/Architecture";
import DashboardPreview from "@/components/EducationManagement/DashboardPreview";
import DeveloperExperience from "@/components/EducationManagement/DeveloperExperience";
import Features from "@/components/EducationManagement/Features";
import FinalCTA from "@/components/EducationManagement/FinalCTA";
import Hero from "@/components/EducationManagement/Hero";
import IntegrationSteps from "@/components/EducationManagement/IntegrationSteps";
import ProblemSection from "@/components/EducationManagement/ProblemSection";
import Security from "@/components/EducationManagement/Security";
import SolutionSection from "@/components/EducationManagement/SolutionSection";
import TrustStrip from "@/components/EducationManagement/TrustStrip";
import UseCases from "@/components/EducationManagement/UseCases";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "زیرساخت مدیریت آموزش | پرنا",
  description:
    "زیرساخت مدیریت آموزش برای مدارس، آموزشگاه‌ها و دانشگاه‌ها؛ ثبت‌نام، شهریه، کلاس، حضور و غیاب، اساتید و پورتال اولیا.",
  openGraph: {
    title: "زیرساخت مدیریت آموزش | پرنا",
    description:
      "عملیات آموزشی را یکپارچه کنید؛ از پرونده فراگیران تا شهریه، تقویم کلاس و ارتباط با اولیا.",
    locale: "fa_IR",
    type: "website",
  },
};

const EducationManagementPage = () => {
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

export default EducationManagementPage;
