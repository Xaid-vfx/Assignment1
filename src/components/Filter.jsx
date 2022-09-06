import React, { useState } from 'react'
import './Filter.css'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark, faMinimize } from '@fortawesome/free-solid-svg-icons'

export default function Filter(props) {


    const [location, setlocation] = useState('Select Location');
    const [time, settime] = useState('yyyy-mm-dd');
    const [price, setprice] = useState('Select Price');
    const [type, settype] = useState('Select Type');
    const [toggle, settoggle] = useState(false);
    let high, low;

    function handleclick() {
        if (price == "500$-2500$") {
            low = 500;
            high = 2500;
        } else if (price == "2500$-5000$") {
            low = 2500;
            high = 5000;
        }
        else if (price == "5000$-10000$") {
            low = 5000;
            high = 10000;
        }
        let c = 0,date='',year='';
        for (let i = 0; i < 10; i++) {
            if (time[i] == '-') {
                c++;
            }if (c == 2 && time[i]!='-') {
                date=date+time[i];
            }
            if(c==0){
                year=year+time[i];
            }
        }
        props.send({ 'loc': location, 'time': parseInt(date),'year':parseInt(year), 'high': high, 'low': low, 'type': type });
    }




    return (

        <div>
            <div className='toggle' onClick={() => {

                if (!toggle) {
                    document.getElementById('filter').style.display = 'block';
                    settoggle(true);
                }
                else {
                    document.getElementById('filter').style.display = 'none';
                    settoggle(false)
                }
            }}><button className='reset'>{!toggle ? "Show" : "Hide"} filters
                    {!toggle ? <FontAwesomeIcon icon={faFilter} /> : <FontAwesomeIcon  icon={faMinimize} />}</button> </div>
            <div className='filter' id="filter">

                <div className='boxes'>
                    <p className='opa'>Location</p>

                    <DropdownButton

                        alignRight

                        title={<strong>{location}</strong>}

                        id="Drop"

                        onSelect={(e) => { setlocation(e) }}

                    >

                        <Dropdown.Item eventKey="USA">USA</Dropdown.Item>

                        <Dropdown.Item eventKey="India">India</Dropdown.Item>

                        <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                        <div className="line1"></div>
                        <button className='reset' onClick={(e) => { setlocation('Select Location') }}>Reset</button>
                    </DropdownButton>
                </div>
                <div class="vl"></div>

                <div className='boxes'>
                    <p className='opa'>When</p>
                    <input className='date' type='date' onChange={(e) => {
                        settime(e.target.value)
                    }}></input>



                </div>
                <div class="vl"></div>
                <div className='boxes'>
                    <p className='opa'>Price</p>
                    <DropdownButton

                        alignRight

                        title={<strong>{price}</strong>}

                        id="Drop"

                        onSelect={(e) => { setprice(e) }}

                    >

                        <Dropdown.Item eventKey="500$-2500$">500$-2500$</Dropdown.Item>

                        <Dropdown.Item eventKey="2500$-5000$">2500$-5000$</Dropdown.Item>

                        <Dropdown.Item eventKey="5000$-10000$">5000$-10000$</Dropdown.Item>
                        <div className="line1"></div>
                        <button className='reset' onClick={(e) => { setprice('Select Price') }}>Reset</button>
                    </DropdownButton>
                </div>
                <div class="vl"></div>
                <div className='boxes'>
                    <p className='opa'>Property type</p>
                    <DropdownButton


                        alignRight

                        title={<strong>{type}</strong>}

                        id="Drop"

                        onSelect={(e) => { settype(e) }}

                    >

                        <Dropdown.Item eventKey="House">House</Dropdown.Item>

                        <Dropdown.Item eventKey="Apartment">Apartment</Dropdown.Item>

                        <Dropdown.Item eventKey="Villa">Villa</Dropdown.Item>
                        <div className="line1"></div>
                        <button className='reset' onClick={(e) => { settype('Select Type') }}>Reset</button>
                    </DropdownButton>
                </div>


                <div class="vl"></div>
                <button className='searchbtn' onClick={handleclick}>Search</button>

            </div>
        </div>

    )
}
