import Footer from "@/component/Footer";
import AboutSui from "@/pages/AboutSui";
import BenefitPage from "@/pages/BenefitPage";
import EligibilityPage from "@/pages/EligibilityPage";
import Hero from "@/pages/Hero";
import Registration from "@/pages/Registration";
import { Requirement } from "@/pages/Requirement";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <AboutSui/>
      <BenefitPage/>
      <EligibilityPage/>
      <Requirement/>
      <Registration/>
     <Footer/>
    </div>
  );
}
