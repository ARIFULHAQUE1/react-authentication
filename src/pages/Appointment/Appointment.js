import React from 'react';

const Appointment = () => {
      
      const handelSubmit=(event)=>{
            event.preventDefault()
           
      }
      return (
            <div className='mb-5'>
                  <div className='w-25 mx-auto'>
                  <h3 className='text-center text-primary'>Patient Information</h3>
                  <div className='border border-warning w-100'></div>
                  </div>
                  <div className='mx-auto w-50'>
                        <form onSubmit={handelSubmit}>
                              <label for="Patient Name" class="form-label">Name</label>
                              <input type="text" class="form-control" id="name" aria-describedby="NameHelp" required />

                              <label for="Address" class="form-label">Address</label>
                              <input type="text" class="form-control" id="address" aria-describedby="addressHelp" required />

                              <label for="Phone" class="form-label">Phone</label>
                              <input type="number" class="form-control" id="number" aria-describedby="numberHelp" required/>

                              <label for="Patient Problem" class="form-label">Patient Problem</label>
                              <input type="text" class="form-control" id="patient" aria-describedby="patientHelp" />
                              <div className='mx-auto '>
                                    <button  className='btn btn-primary mt-3 w-50 d-block mx-auto'>Get Appointment</button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Appointment;