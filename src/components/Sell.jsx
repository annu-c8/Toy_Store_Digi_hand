import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useState } from 'react';
const Sell = () => {
    const [value, setValue] = useState(0);
    const increment = () => { setValue(value + 1); };
    const decrement = () => { setValue(value - 1); };



    return (<>
        <div className="sell">
            <div className="sell-icon"> <img src="./images/cute_icon.png" /></div>
            <div className="sell_head"><h1>products to sell</h1></div>

            <div className="sell-prod">
                <div className="sell-box1"><img src="./images/sell1.jpg" /><p>LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis exercitationem magnam vitae ab, praesentium, dolorem reigendi ratione eveniet rerum fuga aperiam at sit.</p></div>
                <div className="sell-box2">
                    <h2 style={{ color: "black", fontSize: "20px", margin: "10px 80px 10px 80px" }}>Dummy Name</h2>
                    <div style={{ color: "black", fontSize: "20px", margin: "10px 80px 10px 80px" }}><StarIcon />  <StarIcon />  <StarIcon /> <StarBorderIcon />  <StarBorderIcon /></div>
                    <p style={{ color: "black", fontSize: "20px", margin: "10px 80px 10px 80px" }}>$40.00</p>
                    <p style={{ color: "black", fontSize: "20px", margin: "10px 80px 10px 80px" }}>Vendor:toytowon Sactioned</p>
                    <p style={{ color: "black", fontSize: "20px", margin: "10px 80px 10px 80px" }}>Type:Toy</p>
                    <div style={{ color: "black", fontSize: "20px", margin: "10px 80px 10px 80px" }}><FavoriteIcon />Add to wishlist</div>

                    <div style={{marginLeft:"80px"}}><p>Quantity</p><button onClick={increment}><span>+</span></button><span>{value}</span><button onClick={decrement}><span>-</span></button>    </div>
                    <button style={{marginLeft:"80px"}}>Add to cart</button>
                    <button>Buy now</button>
                </div>

            </div>


        </div>

    </>)
}
export default Sell;