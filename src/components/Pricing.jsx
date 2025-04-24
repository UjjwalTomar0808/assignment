import { forwardRef } from 'react';
import PriceCard from './PriceCard';
import './styles.css';

const Pricing = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='flex flex-col flexColCentered bg-[#252B42]' id='Pricing'>

        <div className='text-center pt-8'>
            <h2 className="section-heading !text-white">Pricing</h2>
            <h4 className='text-white px-[20%]'>Most calendars are designed for teams. 
            Slate is designed for freelancers</h4>
        </div>
        <div id='Packs' className='flex gap-2'>
        <PriceCard />
        </div>

        </div>
    )
});

export default Pricing;