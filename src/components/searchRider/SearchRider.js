import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header_footer/Header'
import Axios from 'axios'
import usePosition from '../common_section/usePosition'
import './SearchRider.css';
import FloatingButton from '../common/FloatingButton'
import Disciplines from '../common_section/Disciplines'
import Localisation from '../common_section/Localisation'
import SlidingButton from '../common/SlidingButton'
import BudgetMensuel from '../common_section/BudgetMensuel'
import RangeButton from '../common/RangeButton'
import Competition from '../common_section/Competition'
import Pension from '../common_section/Pension'
import { UserContext } from '../context/UserContext'
import { SearchRiderContext } from '../context/SearchRiderContext'



const SearchRider = () => {

    // Chargement des informations de recherche dans le "SearchRiderContext" :
    const { searchRiders, setSearchRiders } = useContext(SearchRiderContext)

    // Chargement des informations de localisation du user dans le "UserContext" :
    const { userPosition, setUserPosition } = useContext(UserContext)

    // Localisation des coordonnées GPS via "usePosition" :
    const {latitude, longitude} = usePosition();    
   
    // Get the location from reverse geocoding
    const getLocation = () => {

        Axios
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setUserPosition({
            ...userPosition,
            user_postal_code : res.data.address.postalcode}))
        .catch(err => console.log(err))
    }


      // Get full and set gps coordinates from postal code within UserContext
     const getCoordinatesfromPostalCode = (postalcode) => {
    Axios
        .get(`https://nominatim.openstreetmap.org/search?state=France&postalcode=${postalcode}&format=json`)
        .then((res) => {
            setUserPosition({
            ...userPosition,
            user_longitude: res.data[0].lon,
            user_latitude: res.data[0].lat,
            user_localisation: res.data[0].display_name,
            });
        })
      .catch((err) => console.log(err));
  };


    // useEffect(() => {
    //     getLocation()
    // }, [])


    return (
        <>
        <Header title='Chercher un cavalier'/>
        <div className="searchRider_page">
            <div className="localisation">   
                <Localisation 
                    locTitle='Où ?'
                    value={userPosition.user_postal_code}
                    getLocation={getLocation}
                    onChange={(e) => setUserPosition({...userPosition, 
                        user_postal_code : e.target.value
                        })}
                    definePerimeter={(e) => setUserPosition({...userPosition, 
                        user_perimeter : e.target.value})}
                    perimeter={userPosition.user_perimeter}
                />
                <button id="upload-button" onClick={ () => {
                    getCoordinatesfromPostalCode(userPosition.user_postal_code)}}>
                    Valider ma position
                </button>
                <div>
                    <p>{userPosition.user_localisation}</p>
                </div>
                <h5> Années de pratique minimum : {searchRiders.rider_years_of_practice} </h5>
                    <div className='divRangeSpan'>
                        <span>1</span>
                        <RangeButton 
                            min="1" 
                            max="50"
                            onChange={(e) => setSearchRiders({
                                ...searchRiders, 
                                rider_years_of_practice : e.target.value})
                                } 
                        />
                        <span>50 ans</span>
                    </div>
                
                <hr />
                <h5> Niveau de Galop minimum : {searchRiders.rider_gallop_level} </h5>
                    <div className='divRangeSpan'>
                        <span>0</span>                   
                        <RangeButton 
                            min="0" 
                            max="7" 
                            list='niveau_galop'
                            onChange={(e) => setSearchRiders({
                                ...searchRiders, 
                                rider_gallop_level : e.target.value})
                            } 
                        />
                        <span>7</span>
                    </div>
                

                <hr />
                <h5> Age du cavalier <span>(+/- 2ans)</span>: {searchRiders.rider_age} ans</h5>
                    <div className='divRangeSpan'>
                        <span>5</span>
                        <RangeButton 
                            min="5" 
                            max="99"
                            onChange={(e) => setSearchRiders({
                                ...searchRiders, 
                                rider_age : e.target.value})
                            } 
                        />
                        <span>99 ans</span>
                    </div>
                
                <SlidingButton
                    SlidingButtonText='Personne véhiculée' 
                    SlidingButtonID='vehiculed' 
                    onClick={() => setSearchRiders({
                        ...searchRiders,
                        rider_vehiculed : !searchRiders.rider_vehiculed
                    })}
                />
                <SlidingButton
                    SlidingButtonText='Le cavalier a déjà eu un cheval sous sa responsabilité' 
                    SlidingButtonID='experience' 
                    onClick={() => setSearchRiders({
                        ...searchRiders,
                        rider_managed_horse : !searchRiders.rider_managed_horse
                    })}
                    />
            </div>
            <hr />
                <Disciplines
                />
            <hr />
                <BudgetMensuel 
                    budgetTitle='Budget'
                    budget={searchRiders.rider_budget} 
                    currency={searchRiders.currency_budget}
                    priceTitle={'Prix maximum par mois :'}
                    onChange={(e) => setSearchRiders({
                        ...searchRiders, 
                        rider_budget : e.target.value
                    })}
                    onClick={(e) => setSearchRiders({
                        ...searchRiders, 
                        rider_currency_budget : e.target.value
                        })}
                />
            
            
            <div className='frequency_pension'>
                <Pension
                    onClick={(e) => setSearchRiders({
                        ...searchRiders, 
                        rider_riding_frequency : e.target.value
                        })}
                    frequency={searchRiders.rider_riding_frequency}
                    changeFixedFrequency={() => setSearchRiders({
                            ...searchRiders, 
                            rider_fixed_day : !searchRiders.fixed_day
                            })}
                />
            </div>
            <hr />
            <div className='materialDiv'>
                <h4>Materiel</h4>
                <div className='materiel'>
                        <SlidingButton 
                        SlidingButtonText="Le cavalier doit avoir sa selle"
                        SlidingButtonID="materialSwitch"
                        onClick={() => setSearchRiders({
                            ...searchRiders, 
                            rider_own_saddle : !searchRiders.rider_own_saddle
                            })}

                        />
                </div>
                
            </div>
            <hr />
            <div className='competition'>
            <Competition 
                    onClick={(e) => setSearchRiders({
                        ...searchRiders, 
                        rider_do_competition : e.target.value
                        })}
            />
            </div>
        </div>
        <Link to={{pathname: "/rider/results"}}>
            <FloatingButton 
                btnName={'Lancer la recherche'} 
            />
        </Link>


        </>
        )
}
export default SearchRider