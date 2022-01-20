import React from "react";
function Header(props){
    console.warn("Header",props.cartData)
    return(
        <div>
           
           <div className="add-to-cart">
               <span className="cart-count">{props.cartData.length}</span>
                <img src="https://www.pngfind.com/pngs/m/276-2762868_yellow-add-to-cart-button-png-photo-add.png" />
           </div>

        </div>
    );
}
export default Header;