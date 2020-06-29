import React from 'react'
import './searchHorse.css'
import Header from '../Header_footer/Header';
import Localisation from '../common_section/Localisation'
import Disciplines from '../common_section/Disciplines'
import Structures from './Structures'
import IdealHorse from './IdealHorse'
import IdealOwner from './IdealOwner'
import BudgetMensuel from '../common_section/BudgetMensuel'
import Ecurie from './Ecurie'
import HebergementHorse from './HebergementHorse'
import FloatingButton from '../common/FloatingButton'
import SlidingButton from '../common/SlidingButton'



const SearchHorse = (props) => {

    return (
        <>
        <Header className='header' title='CHERCHER UN CHEVAL'/>
        <div className='searchHorse_page'>
                <Localisation />
            <hr />
                <BudgetMensuel />
            <hr />
                <Disciplines />
            <hr />
                <Structures />
            <hr />
            <div className='searchHorse_bal'>
                <h4>Balade</h4>
                <div className='balade'>
                    <SlidingButton 
                    SlidingButtonText="J'aimerais pouvoir partir en balade"
                    SlidingButtonID="baladSwitch"
                    />
                </div>
            </div>
            <hr />
                <h4>Cheval idéal</h4>
                <IdealHorse />
            <hr />
                <h4>Propriétaire idéal</h4>
                <IdealOwner />
            <hr />
            <h4>Ecuries et moniteur </h4>
                <Ecurie />
            <hr />
                <HebergementHorse />
            <hr />
            <div className='searchHorse_coaching'>
                <h4>Coaching</h4>
                <div className='coaching'>
                    <SlidingButton 
                    SlidingButtonText="Sur place"
                    SlidingButtonID="coachSwitch"
                    />
                </div>
                <div className='coaching'>
                    <SlidingButton 
                    SlidingButtonText="Intervenant exterieur"
                    SlidingButtonID="coachExtSwitch"
                    />
                </div>
                
                </div>
            <hr />
            <div className='searchHorse_materiel'>
                <h4>Materiel</h4>
                <div className='materiel'>
                        <SlidingButton 
                        SlidingButtonText="J'ai ma selle"
                        SlidingButtonID="materialSwitch"
                        />
                </div>
                <div className='materiel'>
                    <SlidingButton 
                        SlidingButtonText="J'ai mon materiel de soin"
                        SlidingButtonID="materialCareSwitch"
                        />
                </div>
            </div>
            <hr />
            <div className='searchHorse_compet'>
                <h4>Concours</h4>
                <div className='competiton'>
                <SlidingButton 
                        SlidingButtonText="J'aimerais pouvoir sortir en concours"
                        SlidingButtonID="competitionSwitch"
                        />
                </div>
            </div>    
            </div>
            <FloatingButton btnName={'Lancer la recherche'}/>
        
    </>
    )
}

export default SearchHorse 