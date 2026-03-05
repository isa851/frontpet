import Banner from "../../widgets/homesections/Banner"
import HowItWorks from "../../widgets/homesections/HowItWorks"
import NeedSupport from "../../widgets/homesections/NeedSupport"
import OurSuccess from "../../widgets/homesections/OurSuccess"
import News from "../../widgets/homesections/News"

function HomePage() {
    return (
        <div>
            <Banner />
            <OurSuccess />
            <News />
            <HowItWorks />
            <NeedSupport />
        </div>
    )
}

export default HomePage