import { createContext } from 'react'

export const userProfileContext = {

    user_ID : 1,
    user_firstname : '',
    user_lastname : '',
    user_email : '',
    user_password : '',
    user_accept_CGV : 0,
    user_avatar : '',
    user_is_admin : 0,
    user_phone : '',

}

export const UserContext = createContext(null)
