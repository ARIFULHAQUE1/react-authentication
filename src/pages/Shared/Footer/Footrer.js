import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footrer = () => {
      const today = new Date()
      const year = today.getFullYear()
      return (
       
                <footer style={{height:'100px'}} className='align-text-bottom bg-primary '>
                <p className='text-center  flex text-white'><span className='text-black'><FontAwesomeIcon className='me-1' icon={faCopyright}></FontAwesomeIcon></span> Copy Rights reserved | <span className='text-white'>{year}</span></p>
          </footer>
       
      );
};

export default Footrer;