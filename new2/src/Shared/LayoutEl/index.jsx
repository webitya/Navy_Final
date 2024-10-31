import CallToAction from "../CallToAction"
import FooterEl from "../FooterEl"

import NavbarEl2 from "../NavbarEl2"


const LayoutEl=(data)=>{
    const display=(
        <>
         {/* <NavbarEl/> */}
         <NavbarEl2/>
         {data.children}
         <CallToAction/>
         <FooterEl/>
        </>
    )
    return display
}
export default LayoutEl