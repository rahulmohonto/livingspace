import { USER_DETAILS } from "../actions/userActions";

const initialUserState = {
    name: '',
    email: ''
}

const UserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_DETAILS: 
            return {
                ...state,
                name: action.name,
                email: action.email
            }
        default:
            return state
    }
}

export default UserReducer;