export const login = () => {
    return {
        type: 'LOG_IN',
        value: true
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT',
        value: false
    }
}

export const addRestaurant = (restaurant) => {
    return {
        type: 'ADD_RESTAURANT',
        value: restaurant
    }
}

export const removeRestaurant = (id) => {
    return {
        type: 'REMOVE_RESTAURANT',
        value: id
    } 
}

