import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const TrendingProducts = () => {
    return (
        <div className="Trend">
            <div className="trend-icon"> <img src="./images/cute_icon.png" /></div>
            <div className="trend_head"><h1>Trending Products</h1></div>

            <div className="trend-prod">
                <div className="boxx2"><p>winter wear</p>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <p style={{ color: "red" }}>$60.00</p>

                    <img src="./images/baby-boy-dress.png" /></div>
                <div className="boxx2">
                    <p>Teddy Toy</p>
                    <StarIcon />  <StarIcon />  <StarIcon /> <StarBorderIcon />  <StarBorderIcon />
                    <p style={{ color: "red" }}>$40.00</p>

                    <img src="./images/teddyy.png" /></div>
                <div className="boxx2">
                    <p>party wear</p>
                    <StarIcon />  <StarIcon />  <StarIcon /> <StarIcon /> <StarBorderIcon />
                    <p style={{ color: "red" }}>$90.00</p>

                    <img src="./images/girl-dress.png" /></div>
                <div className="boxx2">
                    <p>Footwear</p>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <p style={{ color: "red" }}>$80.00</p>
                    <img src="./images/shoes.png" /></div>


            </div>
            <button>View All</button>
        </div>
    )
}
export default TrendingProducts;