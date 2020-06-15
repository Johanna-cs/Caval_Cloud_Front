import React, {useState, useEffect} from 'react'
import { Collapse, Button, Card } from 'reactstrap';
import './SearchRider.css';

const SearchRider = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>

            <h3>CHERCHER UN CAVALIER</h3>

            <div className="localisation">            
                <h5>Localisation : </h5>
                <input name='localisation' id='localisation' type='number' placeholder='  Saisissez une ville et un rayon'></input>

                <Button onClick={toggle} id="btn-discipline" style={{ marginBottom: '1rem', border : 'none'}}>
                    <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>

                <Collapse isOpen={isOpen}>
                        <label for="rayon">Dans un rayon autour de :</label>
                        <input type="range" id="rayon" name="rayon" min="0" max="11"></input>
                </Collapse>
            </div>

            <div className='list-disciplines'>

                <h5>Disciplines : </h5>
                <div className='discipline'>
                    <label for="obstacle">Obstacle</label>
                    <input type="checkbox" id="obstacle" name="obstacle"></input>
                </div>

                <div className='discipline'>
                    <label for="dressage">Dressage</label>
                    <input type="checkbox" id="dressage" name="dressage"></input>
                </div>

                <div className='discipline'>
                    <label for="cce">CCE</label>
                    <input type="checkbox" id="cce" name="cce"></input>
                </div>

                <div className='discipline'>
                    <label for="ethologie">Ethologie</label>
                    <input type="checkbox" id="ethologie" name="ethologie"></input>
                </div>

                <div className='discipline'>
                    <label for="attelage">Attelage</label>
                    <input type="checkbox" id="attelage" name="attelage"></input>
                </div>

                <div className='discipline'>
                    <label for="trec">TREC</label>
                    <input type="checkbox" id="trec" name="trec"></input>
                </div>

            </div>

            {/* <!-- Rounded switch --> */}
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>

            <input type="checkbox" checked data-toggle="toggle"></input>
            

        </>
    )

}

export default SearchRider