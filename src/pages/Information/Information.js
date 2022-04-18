import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/solid'
import { BeakerIcon } from '@heroicons/react/solid'
import { ShieldCheckIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown} from '@fortawesome/free-solid-svg-icons';
import { faVial} from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import './Information.css'

const Information = () => {
      return (
            <div className='row '>

                  <div className='col-xl-4'>
                   <FontAwesomeIcon className='text-primary crownIcon' icon={faGraduationCap}></FontAwesomeIcon>
                        <div className='border border-primary mb-1 mt-1'></div>
                        <div className='border border-primary'></div>
                        <div>
                        <h4 className='text-primary text-center'>Medical education</h4>
                        <p className='tex-center'> Im Graduated From sir Solimullah Medical Collage . This is My Dream To Bea Doctor and Help The People. I Was Complited My PHD From United America Medical Research Center </p>
                        </div>
                  </div>
                  <div className='col-xl-4'>
                  <FontAwesomeIcon className='text-primary crownIcon' icon={faCrown}>
                        </FontAwesomeIcon>
                        <div className='border border-primary mb-1 mt-1'></div>
                        <div className='border border-primary'> </div>
                       <div>
                       <h4 className='text-primary text-center'>Medical professionals</h4>
                        <p className='tex-center'> My First Profession is Start in Appolo international Hospital. This is My Dream To Bea Doctor and Help The People. Now im Head Of Doctor at Ibna Sina Medical Hall. </p>
                       </div>
                  </div>

                  

                  <div className='col-sm-12 col-xl-4 '>
                  <FontAwesomeIcon className='text-primary crownIcon' icon={faVial}>
                        </FontAwesomeIcon>
                        <div className='border border-primary mb-1 mt-1'></div>
                        <div className='border border-primary'></div>
                   <div>
                   <h4 className='text-primary text-center'>Research</h4>
                        <p className='tex-center'> I Complete many of Reseach When im at America  . Im Created Covid-Vax . Many of Research are fail but my Best Research About Corona Virus. </p>
                   </div>
                  </div>
            </div>
      );
};

export default Information;