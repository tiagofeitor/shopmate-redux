import { createSlice } from "@reduxjs/toolkit";
    //CADA SLICE SEM O NOME, O ESTADO INICIAL E O REDUCER INDICANDO AS AÇOES QUE OCORREM NO ESTADO
    //para usar O REDUCER É PRECISO IMPORTAR O useDispacth // dispatch(remove(product))
const cartSlice = createSlice({
    name: "cart" ,
    initialState: {
        cartList: [],
        total: 0
    },
    reducers:{
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            const updatedTotal = state.total + action.payload.price;
            return {...state, cartList: updatedCartList, total:updatedTotal};
        },
        remove(state, action){
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const updatedTotal = state.total - action.payload.price;
            return {...state, cartList: updatedCartList, total:updatedTotal}
        } 
    }
});


export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;