import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footrer = () => {
      const today = new Date()
      const year = today.getFullYear()
      return (
          <footer className='mb-0'>
                <p className='text-center  flex'><FontAwesomeIcon className='me-2 text-primary ' icon={faCopyright}></FontAwesomeIcon>Copy Rights reserved | <span className='text-primary'>{year}</span></p>
          </footer>
      );
};

export default Footrer;