import ScrollUp from "@/components/Common/ScrollUp";
import APISection from "@/components/Neobank/APISection";
import ArchitectureSection from "@/components/Neobank/ArchitectureSection";
import BankingBuildingBlocks from "@/components/Neobank/BankingBuildingBlocks";
import CapabilityStrip from "@/components/Neobank/CapabilityStrip";
import Comparison from "@/components/Neobank/Comparison";
import DashboardPreview from "@/components/Neobank/DashboardPreview";
import DeveloperExperience from "@/components/Neobank/DeveloperExperience";
import EmbeddedFinance from "@/components/Neobank/EmbeddedFinance";
import FinalCTA from "@/components/Neobank/FinalCTA";
import Hero from "@/components/Neobank/Hero";
import IntegrationSteps from "@/components/Neobank/IntegrationSteps";
import ProblemSection from "@/components/Neobank/ProblemSection";
import Security from "@/components/Neobank/Security";
import SolutionSection from "@/components/Neobank/SolutionSection";
import UseCases from "@/components/Neobank/UseCases";
import WhiteLabel from "@/components/Neobank/WhiteLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "زیرساخت نئوبانک | پرنا",
  description:
    "Banking Infrastructure و BaaS برای ساخت نئوبانک و محصولات مالی؛ حساب، کارت، کیف پول، Ledger، تراکنش و Settlement از طریق API.",
  openGraph: {
    title: "زیرساخت نئوبانک | پرنا",
    description:
      "نئوبانک خود را بسازید؛ زیرساخت بانکی را از ما دریافت کنید. Building Blockهای بانکی برای محصولات مالی B2B.",
    locale: "fa_IR",
    type: "website",
  },
};

const NeobankPage = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <CapabilityStrip />
      <ProblemSection />
      <SolutionSection />
      <BankingBuildingBlocks />
      <APISection />
      <DeveloperExperience />
      <ArchitectureSection />
      <UseCases />
      <EmbeddedFinance />
      <WhiteLabel />
      <Security />
      <DashboardPreview />
      <IntegrationSteps />
      <Comparison />
      <FinalCTA />
    </>
  );
};

export default NeobankPage;
