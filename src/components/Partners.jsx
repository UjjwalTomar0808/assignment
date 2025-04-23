import React ,{forwardRef} from "react";
import Button from "./Button";
import clients from './clients.js';

const Partners=forwardRef((props,ref)=>{

    function clientCell(client){
        return (
            <div className="clients flex flex-col gap-2" id={client.key}>
                <h6 className="text-[0.8rem]">{client.name}</h6>
                <img src={client.logo} alt={`${client.name} logo` } id="logo" />
            </div>
        );
    }

    return (
        <div ref={ref} id="partners" className="flex flex-col page-width m-auto text-center gap-3">
            <h2 className="section-heading leading-none my-1 my-4">Partners</h2>
            <h4 className="text-center">Most calendars are designed for teams. 
            Slate is designed for freelancers</h4>
            <div id="partners-grid" className="grid grid-cols-4">
            {clients.map(client => clientCell(client)
            )}
            </div>
            <Button name="Try for free"/>
        </div>
    );
});

export default Partners;