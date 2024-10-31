import CoursesSection from "../../ElementsEl/CCMCEl/CCMCCoursesEl"
import FacilitiesSection from "../../ElementsEl/CCMCEl/CCMCFacilitiesEl"
import CCMCHeroSection from "../../ElementsEl/CCMCEl/CCMCHeroEl"
import LayoutEl from "../../Shared/LayoutEl"


const CCMC=()=>{
    const display=(
        <>
          <LayoutEl>
            <CCMCHeroSection/>
            <FacilitiesSection/>
            <CoursesSection/>
          </LayoutEl>
        </>
    )
    return display
}
export default CCMC