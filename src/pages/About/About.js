import React from 'react';
import './About.css'
import photo from '../../photo/photo.jpeg'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const About = () => {
      return (
            <div className=''>

               
                     <div className='photo mx-auto'>
                     <img src={photo} alt="" />
                     </div>
       
                  <div className='text-center w-25 mx-auto mt-2'> 
                        <h4 className='text-center text-primary' > Ariful Haque Arif</h4>
                        <p>This is Ariful Haque im Prfessional Web Devebloper. I was Work Many of Company as A Senior Developer.</p>
                        <ul>
                              <FontAwesomeIcon className='text-primary' icon={faLink}>
                                    </FontAwesomeIcon ><span className='text-danger'>
                                    Full Stack Web-Developer</span>
                                    <br />
                              <FontAwesomeIcon className='text-primary' icon={faLink}>
                                    </FontAwesomeIcon ><span className='text-danger'>
                                    App Developer</span>
                        </ul>

                      
                        <div className='border border-danger w-100 center'></div>
                        

                  </div>


            </div>
      );
};

export default About;