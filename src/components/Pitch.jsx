import { forwardRef } from 'react';
import './styles.css';
import Button from './Button';
const Pitch= forwardRef((props,ref)=>{
    return (
        <div ref={ref} id="Pitch" className='flex gap-3 page-width'>
            <div id='pitch-text' className='flex flex-col w-[50%]'>
                <h2 className='section-heading font-extrabold my-2'>Fastest way to 
                organize</h2>
                <h4 className='my-6'>Most calendars are designed for teams. 
                Slate is designed for freelancers</h4>
                <Button name="Try for free"/>
            </div>
            <div id='Mac' className='m-auto'>
                <img src="./assets/macbookPro.png" alt="macbook image"/>
            </div>
        </div>
    );
});

export default Pitch;
