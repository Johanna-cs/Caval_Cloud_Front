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
    horse_coaching_here : 0,
    horse_external_coach : 0,
    horse_budget : null,
    horse_currency_budget : '',
    horse_other_fees : null,
    horse_stroll_along : 0,
    horse_photos : '',
    horse_location_type : '',
    horse_competition : '',
    horse_riding_frequency : '',
    horse_fixed_day : 0,
    horse_accomodation : '',
    horse_practice_structure : '',
    horse_disciplines : '',
    horse_material : '',
    idealRiderYearsOfPractice: null,
    idealRiderGallopLevel: null,
    idealRiderAge: null,
    idealRiderIsVehiculed: false,
    idealRiderHasManaged: false,
    horse_owner_firstname : '',
    horse_owner_age : null,
    horse_owner_caracter : '',
    horse_owner_communication_frequency : '',
    horse_owner_communication_fixed_day : false,
    horse_owner_work_for_horse : '',
    horse_owner_message : ''

}

export const HorseContext = createContext(null)
