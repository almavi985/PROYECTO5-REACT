const reducer=(globalState,action)=>{
    switch(action.type){
        case "OBTPRODS":
            return{
                ...globalState,
                prod:action.payload,
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
        case "OBTPRO":
        return{
            ...globalState,
            pro:[action.payload]
        }
        default:
            return globalState;
    }
}

export default reducer;