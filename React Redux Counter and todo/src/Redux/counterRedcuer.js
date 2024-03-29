const counterReducer = (state={count:120},action) => {
    if(action.type === "INCREMENT"){
        return{
            ...state,
            count:state.count + action.payload
        }
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            count: state.count - action.payload
        }
    }else{
        return state;
    }

    
}
export default counterReducer;