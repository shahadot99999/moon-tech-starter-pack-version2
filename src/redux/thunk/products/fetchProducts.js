import { loadProduct } from "../../actions/productAction";

const loadProductData =()=>{
    return async (dispatch, getState)=>{
        const res = await fetch("https://moon-tech-starter-pack-again-server.vercel.app/products");
        const data = await res.json();

        if(data.length){
            dispatch(loadProduct(data))
        }
    }
}

export default loadProductData;