// action
const BUY_CAKE = 'BUY_CAKE'

buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}



// reducers   (previousState, action) => newState
const initialState = {
    numOfCakes: 10
}

reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}