import { createContext } from 'react'

export const riderProfileContext = {

    rider_firstname: '',
    rider_avatar: '',
    rider_photo1: '',
    rider_photo2: '',
    rider_photo3: '',
    rider_age: null,
    rider_postal_code: null,
    rider_biography: '',
    rider_selfWord1: '',
    rider_selfWord2: '',
    rider_selfWord3: '',
    rider_ridingWord1: '',
    rider_ridingWord2: '',
    rider_ridingWord3: '',
    rider_riding_frequency: '',
    rider_fixed_day: false,
    rider_budget: 0,
    rider_currency_budget: '',
    rider_own_saddle: false,
    rider_disciplines: '',
    rider_agree_other_discipline: false,
    rider_years_of_practice: 0,
    rider_gallop_level: 0,
    rider_vehiculed: false,
    rider_managed_horse: false,
    rider_competition: '',
    rider_coaching_here: false,
    rider_external_coach: false,
    ideal_horse_size: '',
    ideal_horse_temper: '',
    ideal_horse_caracter: '',
    ideal_horse_body_type: '',
    ideal_horse_age: '',

}

export const RiderContext = createContext(null)
