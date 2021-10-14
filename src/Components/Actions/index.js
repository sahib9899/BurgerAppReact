export const increment = (data) => {
    console.log('increment', data)
    return{
        type: 'INCREMENT',
        payload: data
    }
}

export const decrement = ( data) => {
    console.log('decrement')
    return{
        type: 'DECREMENT',
        payload: data
    }
}