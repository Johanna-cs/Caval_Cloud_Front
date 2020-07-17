import { createContext } from 'react'

export const riderProfileContext = {
    prenom: '',
    age: null,
    codePostal: '',
    message: '',
    selfWord1: '',
    selfWord2: '',
    selfWord3: '',
    ridingWord1: '',
    ridingWord2: '',
    ridingWord3: '',
    frequency : '',
    fixedFrequency : false,
    budget: 0,
    currency: '',
    discipline: [],
    isOpenToOtherDiscipline: false,
    yearsOfPractice: 0,
    gallopLevel: 0,
    isVehiculed: false,
    hasManaged: false,
    doCompetition: '',
    coachingHere: false,
    externalCoach: false,
    idealHorseSize: 0,
    idealHorseTemper: '',
    idealHorseCaracter: '',
    idealHorseBody: '',
    idealHorseAge: '',

}

export const RiderContext = createContext(null)
