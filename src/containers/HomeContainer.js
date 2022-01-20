import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart,removeToCart } from "../Services/Actions/action";

//export default Home;

const mapStateToProps = state=>({
    cartData:state.cartItem
})
const mapDispatchToProps = disapatch=>({
    addToCartHandler:data=>disapatch(addToCart(data)),
    removeToCartHandler:data=>disapatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)