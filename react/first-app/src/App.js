import './App.css';
import NavbarComp from './components/navigation';
import CardUsingProps from './components/cardCompUsingProps';
import { restaurants } from './common/products-lists';
import { RESTAURANT_IMG_URL } from './common/products-image-url';
import Search from './components/search';
function App() {
  return (
    <>
    <NavbarComp/>
    <Search/>
    <div className = "container">
    <div className="grid grid-cols-4 mx-10">
    {/* <CardUsingProps title='hello' thumbnail='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u9q1opwh4hmzhz2iisea'/>
    <CardUsingProps/>
    <CardUsingProps/>
    <CardUsingProps/>
    <CardUsingProps/>
    <CardUsingProps/> */}
    {restaurants.map((props)=>{
    return <CardUsingProps title={props.name} thumbnail={RESTAURANT_IMG_URL+props.cloudinaryImageId} desc={props.desc}/>
  })};
    </div>
    </div>
    <Search/>
    </>
    
  );
}

export default App;
