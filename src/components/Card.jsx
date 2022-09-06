import React from 'react'
import './Card.css'
import { } from '@fortawesome/fontawesome-svg-core'
import { faBed, faBath, faSquare, faWarehouse, faHeartCircleXmark, faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='cardimg'>
                <img src={props.url}></img>
            </div>

            <div className='cardbody'>

                <div className='upcardbody'>
                    <div className='ptag'>
                        <div className='price'><strong>{props.price}$</strong></div><p><small>/month</small></p>
                    </div>
                    <div className='hearticon'>
                        <svg className='heart' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                </div>
                <div><h4><strong>{props.name}</strong></h4></div>
                <div className='address'>{props.address}</div>
                <div className='line1'></div>
                <div className='amenities'>
                    <div><FontAwesomeIcon className='icon' icon={faBed} /> {props.beds} Beds</div>
                    <div><FontAwesomeIcon className='icon' icon={faBath} /> {props.bath} Bathroom</div>
                    <div><FontAwesomeIcon className='icon' icon={faWarehouse} /> {props.area}</div>
                </div>
            </div>


        </div>
    )
}
