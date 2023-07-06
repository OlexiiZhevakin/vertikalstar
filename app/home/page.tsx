
import Technologies from "./section/technologies/Technologies";
import AboutUs from "./section/about-us/About-us";
import About from "./section/about/About";
import Head from "./section/head/Head";
import Services from "./section/services/Services";
import Slider from "./section/slider/Slider";
import Brands from "./section/brands/Brands";
import Way from "./section/way/Way";
import Reviews from "./section/reviews/Reviews";
import Form from "@/components/form/Form";
import Blog from "./section/blog/Blog";
import Youtube from "./section/youtube/Youtube";

const HomePage = () => {
  return(
    <>
    <Head/>
    <Services/>
    <About/>
    <AboutUs/>
    <Technologies/>
    <Slider/>
    <Brands/>
    <Way/>
    <Reviews/>
    <Form/>
    <Blog/>
    <Youtube/>
    </>
  )
}

export default HomePage;