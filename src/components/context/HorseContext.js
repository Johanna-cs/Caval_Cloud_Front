import { createContext } from 'react'

export const horseProfileContext = {

    horse_name : '',
    horse_age : null,
    horse_biography : '',
    horse_height : null,
    horse_temper : '',
    horse_character : '',
    horse_body_type : '',
    horse_localisation : '',
    horse_photo1 : '',
    horse_photo2 : '',
    horse_photo3 : '',
    horse_budget : null,
    horse_currency_budget : '',
    horse_other_fees : null,
    horse_location_type : '',
    horse_accomodation : '',
    horse_practice_structure : '',
    horse_disciplines : '',
    horse_stroll_along : 0,
    horse_competition_preferences : '',
    horse_riding_frequency : '',
    horse_fixed_day : 0,
    horse_coaching_here : 0,
    horse_external_coach : 0,
    horse_material : '',
    ideal_rider_years_of_practice: null,
    ideal_rider_gallop_level : null,
    ideal_rider_age : null,
    ideal_rider_vehiculed : false,
    ideal_rider_managed_horse: false,
    owner_firstname : '',
    owner_age : null,
    owner_caracter : '',
    owner_communication_frequency : '',
    owner_horse_work : '',
    owner_message : ''

}

export const HorseContext = createContext(null)
