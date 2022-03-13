import React from 'react'
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Widget() {

    const artical =  (heading , subtitle) =>  {
    return (
      <div className="widges_artical">
        <div className="artical_left">
            <FiberManualRecordIcon/>
        </div>
        <div className="artical_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
      </div>
    )
    };
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linked News</h2>
                <InfoIcon/>
            </div>
            {artical("Russia Ukraine War" , "The Russo-Ukrainian War is an ongoing war between Russia and Ukraine. It began in February 2014 following the Ukrainian Revolution of Dignity, and initially focused on the status of Crimea and parts of the Donbas, internationally recognised as part of Ukraine.")}
            {artical("An air strike is launched on a Ukrainian base in Yavoriv in western Ukraine" , "Military authorities in the western Ukrainian city of Lviv say Russian military launched an air strike targeting a Ukrainian military base in Yavoriv in the west of the country near the Polish border.")}
            {artical("What are Russia’s biological weapons claims and what’s actually happening?" , "The UN security council met on Friday at Russia’s request to discuss Moscow’s claims that the US is funding “military biological activities” in Ukraine – in other words, secretly developing biological weapons in Ukrainian laboratories.")}
            {artical("Russia strikes military base outside Ukraine's Lviv" , "The attack was carried out at a military unit at the facility, Interfax Ukraine news agency cited Anton Mironovich, spokesman for the Academy of Land Forces of the Ukrainian Armed Forces, as saying.")}


        </div>
    )
}
