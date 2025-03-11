import Navbar from "./Navbar";

const HeroSection=()=>{
    return(
        <>
        <Navbar/>
        <div className="hero">
            <div className="hero-img"><img src="./images/baby.png"/></div>
            <div className="hero-text"><h3>Hot and Trendy</h3><h1>Baby Kids Clothes</h1><p>get up to 40% off on your first order</p>
            <button>Shop now</button></div>
            <div className="effect"></div>
        </div>
        </>
    )
}
export default HeroSection;