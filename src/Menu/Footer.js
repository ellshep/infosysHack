import React from 'react';
import './Footer.css';
import { Button } from './Button';

function footer() {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive details about our learning programs
          </p>
          <p className='footer-subscription-text'>
            You can signup or email us at any time
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Send</Button>
            </form>
          </div>
          </section>
          </div>
        
    );
}
export default footer;