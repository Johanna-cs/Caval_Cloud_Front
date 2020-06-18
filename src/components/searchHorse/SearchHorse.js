import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './searchHorse.css'
import { Collapse, Button, Input } from 'reactstrap'
import geoloc from '../SVG-icons/geolocalisation.svg'
import loc from '../SVG-icons/geolocation-icon2.svg'
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
                    <h4> Prix mensuel maximum : </h4>
                    <input className='mainInput' placeholder='prix/mois'/>
                            <h4> Devise : </h4>
                            <div className='selectDevise'> 
                                <div className='deviseForm'> 
                                    <label className='deviseLabel' for='selectEur'> Euros - € </label>
                                    <input className='selectEur' id='selectEur' type="radio" value="euros"/>
                                </div>
                                <hr />
                                <div className='deviseForm'>
                                    <label className='deviseLabel' for='selectLiv'> Livre Sterling - £ </label>
                                    <input className='selectLiv' id='selectLiv' type="radio" value="livre" />
                                </div>
                                <hr />
                                <div className='deviseForm'>
                                    <label className='deviseLabel' for='selectDol'> Dollar - $ </label>
                                    <input className='selectDol' id='selectDol' type="radio" value="dollar" />
                                </div>
                                <hr />
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
            </div>
            <div className='search-button'>
                <button id="search-button">LANCER MA RECHERCHE</button>
            </div>
        </div>
    )
}

export default SearchHorse 