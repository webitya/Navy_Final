import TrainingElFeatures from "../../ElementsEl/TrainingEl/TrainingElFeatures"
import TrainingHeroSection from "../../ElementsEl/TrainingEl/TrainingHeroEl"
import LayoutEl from "../../Shared/LayoutEl"


const Training=()=>{
    const display=(
        <>
        <LayoutEl>
            <TrainingHeroSection/>
            <TrainingElFeatures/>
        </LayoutEl>
        
        </>
    )
    return display
}
export default Training