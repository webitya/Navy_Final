import CourseDetails from "../../ElementsEl/GPRatingEl/GPRCourses"
import CourseDetails2 from "../../ElementsEl/GPRatingEl/GPRCourses2"
import Facilities from "../../ElementsEl/GPRatingEl/GPRFacilities"
import HeroSection from "../../ElementsEl/GPRatingEl/GPRHeroEl"
import LayoutEl from "../../Shared/LayoutEl"


const GPRating=()=>{
    const display=(
        <>
           <LayoutEl>
            <HeroSection/>
            {/* <CourseDetails/> */}
            <CourseDetails2/>
            <Facilities/>
           </LayoutEl>
        </>
    )
    return display
}
export default GPRating