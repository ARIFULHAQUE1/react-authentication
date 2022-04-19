import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Information from '../Information/Information'
import { useNavigate } from 'react-router-dom';
const Hospital = () => {
      const navigate=useNavigate()
      const appointment=()=>{
            navigate('/appointment')
      }
      return (
            <div>
                  <div className='mb-5'>
                        <Carousel>
                              <Carousel.Item interval={1000}>
                                    <img
                                          className="d-block w-100"
                                          src="https://img.freepik.com/free-photo/doctor-patient_1421-64.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937"
                                          alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                          <h3 className='text-black'> I Care About My Patient</h3>
                                          <p className='text-black'> Exceptaion always Try to help My Patient To lead a Good Life.</p>
                                          <button onClick={appointment} className='bg-primary p-2 border rounded'><span className='tex-bold text-white'>Appointment</span></button>
                                    </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item interval={500}>
                                    <img
                                          className="d-block w-100"
                                          src="https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937"
                                          alt="First slide"
                                    />
                                    <Carousel.Caption>
                                          <h3 className='text-black'>I Care About My Patient</h3>
                                          <p className='text-black'>My Exceptaion always Try to help My Patient To lead a Good Life.</p>
                                          <button onClick={appointment}className='bg-primary p-2 border rounded'><span className='tex-bold text-white'>Appointment</span></button>
                                    </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                    <img
                                          className="d-block w-100"
                                          src="https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937"
                                          alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                          <h3 className='text-black'>I Care About My Patient</h3>
                                          <p className='text-black'>My Exceptaion always Try to help My Patient To lead a Good Life.</p>
                                          <button onClick={appointment} className='bg-primary p-2 border rounded'><span className='tex-bold text-white'>Appointment</span></button>
                                    </Carousel.Caption>
                              </Carousel.Item>
                        </Carousel>
                  </div>

                  <div className='w-25 mx-auto mb-5 mt-5 border-primary'>
                        <h4 className='text-primary text-center mb-2'>Qualifications</h4>
                        <div className='border border-danger w-100  '></div>
                       
                  </div>
                  <Information></Information>
                  <div className='mt-5 mb-5'>
                        <div className='w-25 mx-auto mb-5 mt-5'>
                              <h4 className='text-primary text-center mb-2'>Services</h4>
                              <div className='border border-danger w-100 '></div>

                        </div>
                        <Services></Services>
                  </div>
            </div>
      );
};

export default Hospital;