import './Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export const Buttons = () => {
  return (
    <div>
      <a href='https://Github.com/Azharistan' target='_blank'>
        <button className='Github btn'><FontAwesomeIcon icon={faGithub} /> 
      Github</button>
    </a>
    <a href='https://linkedin.com/in/Azharistan' target='_blank'>
      <button className='Linkedin btn'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
    </a>
    </div>
  )
}
