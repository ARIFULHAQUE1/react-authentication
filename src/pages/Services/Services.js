import React from 'react';
import Service from '../Service/Service';

const Services = () => {
      const services=[
            {name:"Neurology",
            id:"1",
            img:"https://img.freepik.com/free-psd/brain-study-background-psd-mental-health-care-medical-technology_53876-123320.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937",
            description:"I have been Study on NeuroSergion two Years and now im Special on This."},

            {name:"Cardiology",
            id:"2",
            img:"https://img.freepik.com/free-photo/female-cardiologist-uniform-holding-red-heart-isolated-white-background_93675-130378.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937",
            description:"I have been Study on Cardiology Division two Years and now im Special on This."},

            {name:"Pulmonary",
            id:"3",
            img:"https://img.freepik.com/free-photo/doctor-protective-mask-child-does-inhalation-african-woman_1157-47182.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937",
            description:"I have been Study on Pulmonary Division One Years and now im Special on This."}
      ]
      return (
            <div className='row'>
                  {
                        services.map(service=><Service key={service.id} service={service}></Service>)
                  }
            </div>
      );
};

export default Services;