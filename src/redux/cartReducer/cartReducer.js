const initialState = {
    product: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                product: [...state.product, action.payload]
            }

        case "REMOVE":
            return {
                ...state,
                product: state.product.filter((item) => item.id !== action.payload)
            }

        case "CLEAR":
            return {
                ...state,
                product: []
            }
            
        default:
            return state
    }
}

export default cartReducer