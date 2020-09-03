import { createContext } from 'react'

export const userPositionContext = {
    
    user_longitude : null,
    user_latitude : null,
    user_postal_code : '',
    user_localisation : '',
    user_perimeter : null,
}

export const UserContext = createContext(null)
