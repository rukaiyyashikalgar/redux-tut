import React from "react";
function Home(props){
    console.warn("Home",props)
    return(
        <div>
           <h1> Home Component </h1>

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
                    <button onClick={()=>{props.addToCartHandler({price:1000,name:'i phone 13'})}}>Add to Cart</button>
                    <button onClick={()=>{props.removeToCartHandler()}}>Remove to Cart</button>
               </div>
           </div>
        </div>
    );
}
export default Home;