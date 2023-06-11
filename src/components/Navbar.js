import React from "react";
import '../styles/navbar.css'
const Navbar=({size,setShow})=>{
return(
<nav>
    <div className="nav_box">
        <span className="my_shop" onClick={()=>setShow(true)}>
            My shopping books
        </span>
        
        <div className="cart" onClick={()=>setShow(false)}>
            <span>     
            <img src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png"
            alt="cart"/>
        </span>
            <span>{size}</span>
        </div>
    </div>
</nav>
)
}
export default Navbar