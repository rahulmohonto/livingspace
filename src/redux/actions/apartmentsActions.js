export const SET_APARTMENTS = 'SET_APARTMENTS';

export const updateApartments = (apartments) => {
    return {
        type: SET_APARTMENTS,
        apartments
    }
}