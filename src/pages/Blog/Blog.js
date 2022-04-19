import React from 'react';

const Blog = () => {
      return (
            <div className='mx-auto container'>
                  <div className='mx-auto'>
                        <div className='w-100'>
                              <h2 className='text-danger text-center'> Difference between authorization and authentication</h2>
                              <div className='border border-primary w-75 mx-auto'></div>
                        </div>
                        <h4 className='text-primary text-center'> authorization</h4>
                        <p className='text-center'> authorization means to grant access to the system. In simple terms, authentication verifies who you are, while authorization verifies what you have access to.</p>
                  </div>

                  <div>
                        <h4 className='text-primary text-center'> Authentication</h4>
                        <p className='text-center'>Authentication is the process of determining the user’s identity via the available credentials, thus verifying the identity</p>
                  </div>

                  <div>
                        <div>
                              <h4 className='text-danger text-center'> Why are you using firebase</h4>
                              <div className='border border-primary w-50 mx-auto'></div>
                        </div>
                        <p className='text-center'>Firebase provides a suite of tools for authenticating applications, building reactive client apps, reporting analytics, as well as a host of other helpful resources for managing apps in general</p>
                  </div>
                  
                  <div>
                  <div>
                              <h4 className='text-danger text-center'> What Other Service Provide Firebase</h4>
                              <div className='border border-primary w-75 mx-auto'></div>
                        </div>
                        <p> are two of the services provided by Firebase. Firebase Authentication lets you secure your application without having to maintain any backend infrastructure.</p>
                  </div>
            </div>
      );
};

export default Blog;