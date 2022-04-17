import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
      return (
            <div>
                 <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-young-blonde-girl-wearing-stethoscope-medical-gown-put-her-hand-chin-isolated-white-wall_141793-35890.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937" height={600}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-black'>We Care About Our Patient</h3>
      <p className='text-black'>Our Exceptaion always Try to help Our Patient To lead a Good Life.</p>
      <button className='bg-primary p-2 border rounded'><span className='tex-bold text-white'>Appointment</span></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937" height={600}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3 className='text-black'>We Care About Our Patient</h3>
    <p className='text-black'>Our Exceptaion always Try to help Our Patient To lead a Good Life.</p>
      <button className='bg-primary p-2 border rounded'><span className='tex-bold text-white'>Appointment</span></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/team-doctors-standing-together-hospital-premises_107420-84768.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937"  height={600}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3 className='text-black'>We Care About Our Patient</h3>
      <p className='text-black'>Our Exceptaion always Try to help Our Patient To lead a Good Life.</p>
      <button className='bg-primary p-2 border rounded'><span className='tex-bold text-white'>Appointment</span></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
            </div>
      )
            
};

export default Home;