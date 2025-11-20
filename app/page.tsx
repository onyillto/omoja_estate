import HeroCarousel from "./component/HeroCarousel";
import ExploreSection from "./component/exploreSection";
 import FAQ from "./component/FAQ";
import ProjectSection from "./component/projectSection";
import ContactSection from "./component/contactSection";
import ReviewsSection from "./component/ReviewSection";
export default function Home() {
  return (
    <main>
      <HeroCarousel />
      {/* <AboutSection /> */}
      <ExploreSection />
      <ProjectSection/>
      <FAQ />
      < ContactSection/>
      < ReviewsSection />
    </main>
  );
}
