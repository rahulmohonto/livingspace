export const USER_DETAILS = 'USER_DETAILS';

export const updateUserDetails = (name, email) => {
    return {
        type: USER_DETAILS,
        name,
        email
    }
};