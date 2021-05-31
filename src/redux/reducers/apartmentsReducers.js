import { SET_APARTMENTS } from "../actions/apartmentsActions";

const initialApartments = {
    apartments: []
}

const ApartmentsReducer = (state = initialApartments, action) => {
    switch (action.type) {
        case SET_APARTMENTS: 
            return {
                ...state,
                apartments: action.apartments
            };
        default:
            return state;
    }
}

export default ApartmentsReducer;