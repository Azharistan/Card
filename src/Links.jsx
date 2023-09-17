import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Links = () => {
  return (
    <div>
        <a href='https://Linkedin.com/in/Azharistan' target='_blank'>
            <button className='btn Linkedin'><FontAwesomeIcon icon={faLinkedin}/></button>
        </a>
        <a href='https://Github.com/Azharistan' target='_blank'>
            <button className='btn Github'><FontAwesomeIcon icon={faGithub}/></button>
        </a>
        <a href='https://instagram.com/Azharistan' target='_blank'>
            <button className='btn Instagram'><FontAwesomeIcon icon={faInstagram}/></button>
        </a>
        <a href='https://facebook.com/Azharistan' target='_blank'>
            <button className='btn Facebook'><FontAwesomeIcon icon={faFacebook}/></button>
        </a>
    </div>
  )
}
