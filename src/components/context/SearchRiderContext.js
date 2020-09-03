import { createContext } from 'react'

export const searchRiderProfile = {

    rider_years_of_practice: null,
    rider_gallop_level: null,
    rider_age: null,
    rider_vehiculed: false,
    rider_managed_horse: false,
    rider_disciplines: {
        Obstacle : false,
        Dressage : false,
        CCE : false,
        TREC_Equifun : false,
        Balade_Randonnee : false,
        Ethologie_Equifeel : false,
        Hunter : false,
        Horse_Ball : false,
        Pony_Games : false,
        Reining_Western : false,
        Endurance : false,
        Attelage : false,
        Voltige : false,
        Disciplines_culturelles : false
    },
    rider_budget: null,
    rider_currency_budget: '',
    rider_riding_frequency: '',
    rider_fixed_day: false,
    rider_own_saddle: false,
    rider_do_competition: '',

}

export const SearchRiderContext = createContext(null)
