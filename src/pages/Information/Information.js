import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/solid'
import { BeakerIcon } from '@heroicons/react/solid'
import { ShieldCheckIcon } from '@heroicons/react/solid';



const Information = () => {
      return (
            <div className='row'>

                  <div className='col col'>
                        <div><AcademicCapIcon className=" w-25 text-primary" /></div>
                        <div className='border border-primary mb-1'></div>
                        <div className='border border-primary'></div>
                        <h4 className='text-primary tex-center'>Medical education</h4>
                        <p className='tex-center'> Im Graduated From sir Solimullah Medical Collage . This is My Dream To Bea Doctor and Help The People. I Was Complited My PHD From United America Medical Research Center </p>
                    </div>
                      <div className='col col col-xl-4'>
                        <div>
                        </div>
                        <div><ShieldCheckIcon className='w-25 text-primary' /></div>
                        <div className='border border-primary mb-1'></div>
                        <div className='border border-primary'></div>
                       
                        <h4 className='text-primary tex-center'>Medical professionals</h4>
                        <p className='tex-center'> My First Profession is Start in Appolo international Hospital. This is My Dream To Bea Doctor and Help The People. Now im Head Of Doctor at Ibna Sina Medical Hall. </p>
                  </div>

                  <div className='col col col-xl-4 '>
                  <div><BeakerIcon className='w-25 text-primary' /></div>
                        <div className='border border-primary mb-1'></div>
                        <div className='border border-primary'></div>
                        <h4 className='text-primary tex-center'>Research</h4>
                        <p className='tex-center'> I Complete many of Reseach When im at America  . Im Created Covid-Vax . Many of Research are fail but my Best Research About Corona Virus. </p>
                  </div>
            </div>
      );
};

export default Information;