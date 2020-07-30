import { createContext } from 'react'

export const userProfileContext = {

    user_ID : '',
    user_firstname : '',
    user_lastname : '',
    user_email : '',
    user_password : '',
    user_accept_CGV : null,
    user_avatar : '',
    user_is_admin : '',
    user_phone : '',

}

export const UserContext = createContext(null)
