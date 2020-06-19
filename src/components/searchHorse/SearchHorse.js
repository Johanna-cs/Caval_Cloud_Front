import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './searchHorse.css'
import { Collapse, Button, Input } from 'reactstrap'
import geoloc from '../SVG-icons/geolocalisation.svg'
import locmap from '../SVG-icons/map-marker-alt-solid.svg'




const SearchHorse = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (
        <div className='searchHorse_page'>
            <div className='searchHorse_loc'>
                <h4>Localisation </h4>
                <input className='mainInput' placeholder='Localisation'/>
                <Button id='toggle_btn_chev'color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg></Button>
                <div className='searchHorse_loc2'>
                <Collapse isOpen={isOpen}>
                    <h4>Localisation  :</h4>
                    <p className='loc_text'>Dans un rayon autour de : </p>
                    <div className='rayon_loc'>
                            <span>0</span>
                            <input type="range" min="0" max="200" />
                            <span>200</span>
                    </div>
                    <div className='last_loc'>
                    <h4>Localisations récentes :</h4>
                    
                    <div className='lastLoc'>
                        <img src={locmap} alt='logo loc' className='loc_map'/>
                        <p> Aix derniere localisation</p>
                    </div>
                    <div className='aroundMe'>
                        <img src={geoloc} alt='logo loc' className='loc_map'/>
                        <p> Autour de moi </p>
                    </div>
                    </div>
                </Collapse>
                </div>
            </div>

            <hr />
            <div className='searchHorse_price' >
                <h4> Prix </h4>
                <p>125 € /mois</p>
                <Button id='toggle_btn_chev'color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg></Button>
                <div className='searchHorse_price2'>
                <Collapse isOpen={isOpen}>
                  <h4>Prix mensuel maximum:</h4>
                    <label>
                      <input className="mainInput" type="number" placeholder="Budget" autoFocus/>
                    </label>
                  <h4>Devise:</h4>
                  <div className="searchHorse_form-check">
                    Euros - €
                    <input className="searchHorse_form-check-input" type="radio" name="Eur" id="selectEur" value="Euros"/>
                    <label className="searchHorse_form-check-label"for="selectEur"/>
                  </div>
                  <hr />
                  <div className="searchHorse_form-check">
                    Livre sterling - £
                    <input className="searchHorse_form-check-input" type="radio" name="Liv" id="selectLiv" value="Livres"/>
                    <label className="searchHorse_form-check-label" for="selectLiv"/>
                  </div>
                  <hr />
                  <div className="searchHorse_form-check">
                    Dollar - $
                    <input className="searchHorse_form-check-input" type="radio" name="Dol" id="selectDol" value="Dollars"/>
                    <label className="searchHorse_form-check-label" for="selectDol"/>
                  </div>
                    </Collapse>
                </div>
            </div>
            <hr />
            <div className="searchHorse_disc">
                <h4>Disciplines</h4>
                <div className="disciplineList">
                <div className="discipline">
                    <label className="container" for="obstacle">
                        Obstacle
                    <input className="discipline-check" type="checkbox" id="obstacle" name="obstacle"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="discipline">
                    <label class="container" for="dressage">
                        Dressage
                    <input className="discipline-check" type="checkbox" id="dressage" name="dressage"/>
                    <span className="checkmark"></span>
                    </label>
                </div>

                <div className="discipline">
                    <label class="container" for="cce">
                        CCE
                    <input className="discipline-check" type="checkbox" id="cce" name="cce"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="discipline">
                    <label class="container" for="ethologie">
                        Ethologie
                    <input className="discipline-check" type="checkbox" id="ethologie" name="ethologie"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="discipline">
                    <label class="container" for="attelage">
                        Attelage
                    <input className="discipline-check" type="checkbox" id="attelage" name="attelage"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="discipline">
                    <label class="container" for="trec">
                        TREC
                    <input className="discipline-check" type="checkbox" id="trec" name="trec"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
        </div>
      </div>
            <hr />
            <div className='searchHorse_struc'>
                <h4>Structure à disposition </h4>
                <div className='structureList'>
                    <div className='structure'>
                        <label class="container"  for="longe">
                            Rond de longe
                        <input className="structure-check" type="checkbox" id="longe" name="longe" />
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='structure'>
                        <label class="container"  for="carriere">
                            Carrière
                        <input className="structure-check" type="checkbox" id="carriere" name="carriere"/>
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='structure'>
                        <label class="container" for="manege">
                            Manège couvert
                        <input className="structure-check" type="checkbox" id="manege" name="manege"/>
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='structure'>
                        <label class="container" for="champs">
                            Champs
                        <input className="structure-check" type="checkbox" id="champs" name="champs"/>
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='structure'>
                        <label class="container" for="piste">
                            Piste de trotting
                        <input className="structure-check" type="checkbox" id="piste" name="piste"/>
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='structure'>
                        <label class="container" for="check">
                            Chemins de balade
                        <input className="structure-check" type="checkbox" className="check" id="check" />
                        <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <hr />
            <div className='searchHorse_bal'>
                <h4>Balade</h4>
                    <div className='balade'>
                    <p>J'aimerais pouvoir partir en balade</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    </div>
                </div>
            <hr />
            <div className='searchHorse_idealHorse'>
                <div className='horse_size'>
                    <h4> Taille :</h4>
                    <input type="range" min="1" max="2,2" />
                </div>
                <hr />
                <div className='horse_temper'>
                    <h4> Tempérament :</h4>
                    <div className='select_temper'>
                        <Button className='selectBtn' size='lg'>Calme</Button>
                        <Button className='selectBtn' size='lg'>Dynamique</Button>
                        <Button className='selectBtn' size='lg'>Speed</Button>
                        <Button className='selectBtn' size='lg'>A canaliser</Button>
                    </div>
                </div>
                <hr />
                <div className='horse_caracter'>
                    <h4> Caractère :</h4>
                    <div className='select_caracter'>
                        <Button className='selectBtn' size='lg'>Affectueux</Button>
                        <Button className='selectBtn' size='lg'>Froid</Button>
                        <Button className='selectBtn' size='lg'>Joueur</Button>
                        <Button className='selectBtn' size='lg'>Sensible</Button>
                    </div>
                </div>
                <hr />
                <div className='horse_body'>
                    <h4> Physique :</h4>
                    <div className='select_body'>
                        <Button className='selectBtn' size='lg'>Fin</Button>
                        <Button className='selectBtn' size='lg'>Classique</Button>
                        <Button className='selectBtn' size='lg'>Porteur</Button>
                        <Button className='selectBtn' size='lg'>Lourd</Button>
                    </div>
                </div>
            <hr />
                <div className='horse_age'>
                    <h4> Age :</h4>
                    <span>1 an </span>
                    <input type="range" min="0" max="30" />
                </div>
            </div>
            <hr />
            <div className='searchHorse_idealRider'>
                <div className='rider_age'>
                    <h4> Age :</h4>
                    <span>10 ans</span>
                    <input type="range" min="10" max="100" />
                </div>
                <hr />
                <div className='rider_caracter'>
                    <h4> Caractère :</h4>
                    <div className='select_caracter'>
                        <Button className='selectBtn' size='lg'>Introverti</Button>
                        <Button className='selectBtn' size='lg'>Sociable</Button>
                        <Button className='selectBtn' size='lg'>Extraverti</Button>
                        <Button className='selectBtn' size='lg'>Solitaire</Button>
                    </div>
                </div>
                <hr />
                <div className='rider_communication'>
                <h4> Fréquence de communication :</h4>
                    <div className='select_communication'>
                        <Button className='selectBtn2' size='lg'>Moins d'une fois par semaine</Button>
                        <Button className='selectBtn2' size='lg'>Une fois par semaine</Button>
                        <Button className='selectBtn2' size='lg'>Plus d'une fois par semaine</Button>
                    </div>
                </div>
                <hr />
                <div className='rider_horseWork'>
                <h4> Travail du cheval :</h4>
                    <div className='select_horseWork'>
                        <Button className='selectBtn2' size='lg'>Ouvert à la nouveauté</Button>
                        <Button className='selectBtn2' size='lg'>Normal</Button>
                        <Button className='selectBtn2' size='lg'>Cadré</Button>
                    </div>
                </div>
            </div>

            <hr />
            <h4>Ecuries et moniteur </h4>
            <div className="searchHorse_ecuries">
                <h4>Quel est le type d'écuries </h4>
                <div className="ecuriesList">
                <div className="ecurie">
                    <label className="container" for="poneyclub">
                        Poney Club
                    <input className="ecurie-check" type="checkbox" id="poneyclub" name="poneyclub"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="centreequestre">
                        Centre équestre
                    <input className="ecurie-check" type="checkbox" id="centreequestre" name="centreequestre"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="ecurieProprio">
                        Ecurie du propriétaire
                    <input className="ecurie-check" type="checkbox" id="ecurieProprio" name="ecurieProprio"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="particulier">
                        Chez un particulier
                    <input className="ecurie-check" type="checkbox" id="particulier" name="particulier"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="elevage">
                        Elevage
                    <input className="ecurie-check" type="checkbox" id="elevage" name="elevage"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="ecurieAutre">
                        Autre
                    <input className="ecurie-check" type="checkbox" id="ecurieAutre" name="ecurieAutre"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
                </div>
            </div>
            <hr />
            <div className="searchHorse_hebergt">
                    <h4>Comment est hebergé le cheval ? </h4>
                    <div className="hebergtList">
                        <div className="hebergt">
                            <label className="container" for="poneyclub">
                                Boxe
                            <input className="hebergt-check" type="checkbox" id="poneyclub" name="poneyclub"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        
                        <div className="hebergt">
                            <label className="container" for="centreequestre">
                                Paddock
                            <input className="hebergt-check" type="checkbox" id="centreequestre" name="centreequestre"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="hebergt">
                            <label className="container" for="ecurieProprio">
                                Stabulation
                            <input className="hebergt-check" type="checkbox" id="ecurieProprio" name="ecurieProprio"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
            </div>
            <hr />
            <div className='searchHorse_coaching'>
                <h4>Coaching</h4>
                    <div className='coaching'>
                    <p>Sur place</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    </div>
                    <div className='coaching'>
                    <p>Intervenant exterieur</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    </div>
                </div>
                <hr />
            <div className="searchHorse_rythme">
                <h4>Rythme de venue</h4>
                <p>Fréquence : 5 à 7 fois / semaine</p>
                <p>Régularité: jours fixes</p>
                <div>
                <Button id="toggle_btn_chev" onClick={toggle}>
                    <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>
                <Collapse isOpen={isOpen}>
                        <div>
                        <h4>Fréquence:</h4>
                        <div className="searchHorse_form-check">
                            5 à 7 fois / semaine
                            <input
                            className="searchHorse_form-check-input"
                            type="radio"
                            name="frequency"
                            id="frequency1"
                            value="option1"
                            checked
                            />
                            <label
                            className="searchHorse_form-check-label"
                            for="frequency1"
                            ></label>
                        </div>
                        <hr />
                        <div className="searchHorse_form-check">
                            3 à 4 fois / semaine
                            <input
                            className="searchHorse_form-check-input"
                            type="radio"
                            name="frequency"
                            id="frequency2"
                            value="option2"
                            checked
                            />
                            <label
                            className="searchHorse_form-check-label"
                            for="frequency2"
                            ></label>
                        </div>
                        <hr />
                        <div className="searchHorse_form-check">
                            2 fois / semaine
                            <input
                            className="searchHorse_form-check-input"
                            type="radio"
                            name="frequency"
                            id="frequency3"
                            value="option3"
                            checked
                            />
                            <label
                            className="searchHorse_form-check-label"
                            for="frequency3"
                            ></label>
                        </div>
                        <hr />
                        <div className="searchHorse_form-check">
                            1 fois / semaine
                            <input
                            className="searchHorse_form-check-input"
                            type="radio"
                            name="frequency"
                            id="frequency4"
                            value="option4"
                            checked
                            />
                            <label
                            className="searchHorse_form-check-label"
                            for="frequency4"
                            ></label>
                        </div>
                        </div>
                        </Collapse>
                    </div>
                </div>
                <hr />
                <div className='searchHorse_materiel'>
                <h4>Materiel</h4>
                    <div className='materiel'>
                        <p>J'ai ma selle</p>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div className='materiel'>
                        <p>J'ai mon materiel de soin </p>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <hr />
                <div className='searchHorse_compet'>
                <h4>Concours</h4>
                    <div className='competiton'>
                        <p>J'aimerais pouvoir sortir en concours</p>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            <div className='search-button'>
                <button id="search-button">LANCER MA RECHERCHE</button>
            </div>
       

        </div>
    )
}

export default SearchHorse 