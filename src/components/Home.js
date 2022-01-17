import React from "react";
function Home(){
    return(
        <div>
           <h1> Home Component </h1>
           <div className="add-to-cart">
                <img src="https://www.pngfind.com/pngs/m/276-2762868_yellow-add-to-cart-button-png-photo-add.png" />
           </div>
           <div className="cart-wrapper">
               <div className="img-wrapper">
                    <img src="https://images.unsplash.com/photo-1632633174743-ba3e685cc7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
               </div><br/>
               <div className="text-wrapper item">
                    <span>
                        iphone 13
                    </span><br/>
                    <span>
                        Price: $1000
                    </span>
               </div><br/>
               <div className="btn-wrapper item">
                    <button>Add to Cart</button>
               </div>
           </div>
        </div>
    );
}
export default Home;