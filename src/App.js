import React from "react";
import {useState} from 'react';
import './App.css';
import FlightIcon from './assets/flight-icon.png';

function FlightBooking() {

  const [src,setSrc] = useState('BLR');
  const [dst,setDst] = useState('DEL');
  const [when,setWhen] = useState('2021-02-01');

  const search = () =>{
    console.log("Search Fligh");
  }
  // your code here
  return (
    <>
    <div className="booking-form">
      <h1>Flight Booking</h1>
      <label>Source </label><input type="text" name="source" value={src} onChange={(evt)=>{
        setSrc(evt.target.value);
      }} />
      <label>Destination </label><input type="text" name="source" value={dst} onChange={(evt)=>{
        setDst(evt.target.value);
      }} />
      <label>When </label><input type="date" name="source" value={when} onChange={(evt)=>{
        setWhen(evt.target.value);
      }} />
      <input type="button" className="search-flight" value="Search Flight" onClick={()=>{
        search();
      }}/>
    </div>

    <div>
      
    </div>
    </>
  );
}

export default FlightBooking;
