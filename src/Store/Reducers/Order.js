import * as actionTypes from "../Actions/ActionTypes";
import { updateObject } from "../../Shared/Utility";


const initialState ={
    orders:[],
    loading:false,
    purchased:false
};
const purchaseInit = ({state, action}) =>{
    return updateObject(state,{ purchased:false});
};
const purchaseBurgerStart = ({action,state}) =>{
    return updateObject(state,{loading:true});
};
const purchaseBurgerSuccess = ({action,state}) =>{
    const newOrder= updateObject(
        action.orderData,
        {id:action.orderId}
    )
    return updateObject(state,{
        loading:false,
        purchased:true,
        orders:state.orders.concat(newOrder)
    });
};
const purchaseBurgerFail = ({state, action}) =>{
    return updateObject(state,{ loading:false });
}
const fetchOrderStart = ({state, action}) =>{
    return updateObject(state, { loading:true});
}
const fetchOrderSuccess = ({state, action}) =>{
    return updateObject(state,{ 
        orders:action.orders,
        loading:false
    });
}
const fetchOrderFail = ({state, action}) =>{
    return updateObject(state, {loading: false});
}

const reducer =(state= initialState, action) =>{
    switch(action.type){
        case actionTypes.PURCHASE_INIT: return purchaseInit({state,action});
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart({state,action});
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess({state,action});
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail({state,action});
        case actionTypes.FETCH_ORDERS_START:return fetchOrderStart({state,action});
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess({state,action});
        case actionTypes.FETCH_ORDERS_FAIL:return fetchOrderFail({state,action});
        default:return state;
    }
};

export default reducer;