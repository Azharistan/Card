import { About } from './About'
import { Buttons } from './Buttons'
import './Card.css'
import { Interrests } from './Interrests'
import { Links } from './Links'
import { Names } from './Names'

function Card(){
    return(
        <div className="Card">
            <img className='Img-Profile' src='/Images/Profile.jpg' alt='Profile Picture'/>
            <Names />
            <Buttons />
            <About />
            <Interrests />
            <Links />
        </div>
    )
}

export default Card