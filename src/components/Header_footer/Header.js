import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const header = (props) => {

    // const [title, setTitle] = useState('')

    return(
        <>

        <div className='main-head'>
       
            <div className='header'>

                <Link to={{pathname: '/home'}}>
                    <svg class="bi bi-chevron-left " id='chevron-header'  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link>
                </div>
                <h3 id='header'>{props.title}</h3>
                
            

        </div>
        </>
    )


}

export default header;