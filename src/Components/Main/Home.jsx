import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Service from "../Service/Service";
import About from "../About/About";
import Review from "../Review/Review";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";


const Home = () => {
    return (
        <div id="/">
        <Nav></Nav>
     
        <Banner></Banner>
        <Brand></Brand>
        <Service></Service>
        <Product></Product>
        <About></About>
        <Review></Review>
        <Contact></Contact>
        <Footer></Footer>
        <Outlet></Outlet>
    </div>
    
    );
};

export default Home;