import Header from "../components/Header";
import { connect } from "react-redux";


//export default Home;

const mapStateToProps = state=>({
    cartData:state.cartItem
})
const mapDispatchToProps = disapatch=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)