
import TrainingProgramsSection from "../../ElementsEl/AboutUsEl/AboutTrainingEl"
import WhyChooseUsSection from "../../ElementsEl/AboutUsEl/AboutUsChooseEl"
import ExpertiseSection from "../../ElementsEl/AboutUsEl/AboutUsExpertEl"
import AboutHeroSection from "../../ElementsEl/AboutUsEl/AboutUsHeroEl"
import LayoutEl from "../../Shared/LayoutEl"


const AboutUs=()=>{
    const display=(
        <>
           <LayoutEl>
             <AboutHeroSection/>
             <ExpertiseSection/>
             <WhyChooseUsSection/>
             <TrainingProgramsSection/>
           </LayoutEl>
        </>
    )
    return display
}
export default AboutUs