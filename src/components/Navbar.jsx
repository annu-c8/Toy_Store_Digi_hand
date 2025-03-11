const Navbar = () => {


    return (
        <div className="nav">
            <div className="navFirst">
                <div className="child1"><p>Search </p><hr></hr></div>
                <div className="child2"><ul>
                    <li>Wishlist</li>
                    <li>Account</li>
                    <li>USD $</li>
                    <li>English</li>
                </ul></div>
            </div>
            <div className="navSecond">
                <div className="img1"><img src="./images/logo.png" /></div>
                <div className="img2"><img src="./images/gift.jpg" /></div>
                <div className="img3"><img src="./images/help.jpg" /></div>

            </div>
            <div className="navThird">
                <div className="navThirdChild1"><ul>
                    <li>Home</li>
                    <li>Catogery</li>
                    <li>Collection</li>
                    <li>About US</li>
                    <li>Included Pages</li>
                    <li>Blog</li>
                </ul></div>
                <div className="navThirdChild2">
                    <ul>
                        <li>abc@gmail.com</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>
        </div>


    )
}
export default Navbar;
