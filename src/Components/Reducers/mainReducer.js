const InitialState = {
    salad: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
}

export const mainReducer = (state=InitialState, action) => {
    // const item = action.payload;
    console.log('payload' , action.payload)
    switch(action.type){
    
        case "INCREMENT" :
            if(action.payload === 'salad')
                return {...state, salad: state.salad + 1 };
            else if(action.payload === 'tomato')
                return {...state, tomato: state.tomato + 1 };
            else if(action.payload === 'cheese')
                return {...state, cheese: state.cheese + 1 };
            else
                return {...state, meat: state.meat + 1 };

        case 'DECREMENT' :
            if(action.payload === 'salad' && state.salad >= 1)
                return {...state, salad: state.salad - 1 };
            else if(action.payload === 'tomato' && state.tomato >= 1)
                return {...state, tomato: state.tomato - 1 };
            else if(action.payload === 'cheese' && state.cheese >= 1)
                return {...state, cheese: state.cheese - 1 };
            else if(state.meat >= 1)
                return {...state, meat: state.meat - 1 };

        default : return state;
    }
}