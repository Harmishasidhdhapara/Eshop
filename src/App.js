import logo from './logo.svg';
import './App.css';
import { Demo } from './Demo';
import { Navbar } from './Components/Navbar/Navbar';
import Darklightmode from './Components/Navbar/Darklightmode'
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import Banner2 from './Components/Banner/Banner2';
import Blog from './Blog/Blog';
import Partners from './Partners/Partners';
import Footer from './Components/Footer/Footer';
import Try from './Try';

const BannerData=
  {
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam architecto repellat ",
  bgColor:"#f42c37",
}

const BannerData2=
  {
  discount:"30% OFF",
  title:"happy hours",
  date:"14 Jan to 28 Jan",
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam architecto repellat ",
  bgColor:"#2dcc6f",
}







function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <Navbar/>
    <Hero/>
    <Category/>
    <Services/>
    <Banner data={BannerData}/>
    <Products/>
    <Banner2 data={BannerData2}/>
    <Blog/> 
    <Partners/>
    <Footer/>
    <Try/>
  
    </div>
  );
}

export default App;

