import SiteBar from "../../components/SiteBar/SiteBar";
import HomeContent from "../../components/HomeContent/HomeContent";
import RightContent from "../../components/RightContent/RightContent";
import "./Home.css"

function PagesHome(){
    return(
        <>
        <div className="Home">

              <SiteBar/> 
              <HomeContent/>
              <RightContent/>


        </div>
        </>
    )
}

export default PagesHome;