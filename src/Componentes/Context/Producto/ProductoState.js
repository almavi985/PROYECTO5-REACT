import {useReducer} from 'react'
import axios from './../../config/axios'
import ProductoContexto from "./ProductoContexto"
import ProductoReducer from "./ProductoReducer"

const ProductoState=(props)=>{
    const inEdo={
        prods:[],
        pro:[{
            id_:"",
                    nom:"",
                    precio:"",
                    talla:"",
                    cant:"",
                    imagen:"",
                    desc:""
        }]
    }
    const [globalState, dispatch]=useReducer(ProductoReducer,inEdo)
    const getProducto=async(id)=>{
    }
    const res=await axios.get(`/getProducto/${id}`)
    const pro=res.data.pro

    dispatch({
        typr:"getProducto",
        payload:pro
    })
return pro;


const getProducto=async()=>{
    const res=await axios.get('/getProducto')
    dispatch({
        type:"getProducto",
        payload:res.data.prods
    })
}

const obtPr=async(dataform)=>{
    console.log("dataform:",dataform)
    const res=await axios.post("pago",dataform)
    return res.data.checkoutId
}
return (
    <ProductoContexto.Provider
        value={{
            prods:globalState.prods,
            pro:globalState.pro,
            getProducto,
            getProducto,
            obtPr
        }}>
            {props.childer}
    </ProductoContexto.Provider>
)
}
    export default ProductoState
