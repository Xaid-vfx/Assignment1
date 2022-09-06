import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Comp2 from './components/comp2'
import Filter  from './components/Filter'


import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'

export default function App() {

  const [ loc , setloc] = useState('')


  const  receive = (videoUrlFromChildren) => {
     setloc(videoUrlFromChildren);
  }

  let i=0,j=0;
  
  
  let data=[{
    url:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80',
    date:12,
    type:'House',
    price:2095,
    name:'Palm Harbour',
    address:'2699 Green Valley,Highland,USA',
    beds:2,
    bath:2,
    area:'5x7 m2'
    ,country:'USA'
  },{
    url:'https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg',
    price:2700,
    type:'Apartment',
    date:8,
    name:'The Park Apartments',
    address:'5221 lake Sevilila ,Paris ,UK',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'UK'
  },{
    url:'https://assets.bedful.com/images/8d67b4f46f74060ab510da1b8f8d23cd9d54b614/large.jpg',
    price:8000,
    type:'Apartment',
    date:13,
    name:'Kristen Apartments',
    address:'124 lake Mediora,UK',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'UK'
  },{
    url:'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/Villas-of-Grand-Cypress-cover.jpg',
    price:6000,
    date:15,
    name:'Grand Cypress',
    type:'Villa',
    address:'One North ,Orlando ,Florida',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'USA'
  },{
    url:'https://www.arlingtonhouse.co.uk/wp-content/uploads/2020/09/Superior-Two-Bedroom-Apartment-with-Street-View003-1366x768-fp_mm-fpoff_0_0.jpg',
    price:8000,
    date:16,
    type:'Apartment',
    name:'Faulkner Ave',
    address:'7821 , Antille Street,California,USA ',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'USA'
  },{
    url:'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2016/07/post-ranch-inn-big-sur-california.jpg?resize=678%2C382&ssl=1',
    price:3500,
    date:1,
    name:'Post Ranch Inn',
    type:'Villa',
    address:'Florida , USA',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'USA'
  },{
    url:'https://www.theasiacollective.com/wp-content/uploads/2020/03/The-Oberoi-Udaivilas-1.jpg',
    price:9500,
    date:6,
    name:'The Oberoi',
    type:'Villa',
    address:'Jaipur , Rajasthan ,India',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'India'
  },{
    url:'https://www.theasiacollective.com/wp-content/uploads/2020/03/Taj-Aravali-Resort-Spa.jpg',
    price:4000,
    date:10,
    name:'Taj Aravali Resort',
    type:'Villa',
    address:'Udaipur, Rajasthan 313031, India',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'India'
  },{
    url:'https://assets.architecturaldigest.in/photos/600823974ed0cd97ae9df74d/master/w_1600%2Cc_limit/Show-Flat-5-866x487.jpg',
    price:10000,
    date:2,
    type:'Apartment',
    name:'Shelton',
    address:'Whitefield,Bangalore,India',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'India'
  },{
    url:'https://media.cntraveler.com/photos/5f60297d68f3712403129ef8/16:9/w_2560%2Cc_limit/The-Chatwal-Luxury-Collection-Hotel-New-York-Exterior.jpg',
    price:2600,
    date:'21',
    name:'The Chatwal',
    type:'Apartment',
    address:'New York City , USA',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'USA'
  },{
    url:'https://images.adsttc.com/media/images/6063/fe8e/f91c/8162/e000/0cca/slideshow/01_12036_00_N237_high300.jpg?1617165944',
    price:10000,
    type:'House',
    date:19,
    name:'Dragonfly House',
    address:'WhiteFish , USA',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'USA'
  },{
    url:'https://cdn.images.express.co.uk/img/dynamic/1/590x/UK-news-1073100.jpg?r=1547646972667',
    price:10000,
    type:'House',
    date:14,
    name:'Sky Garden House',
    address:'UK',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'UK'
  },{
    url:'http://www.villascampsbay.co.uk/camps-bay-news/wp-content/uploads/2013/09/Msangasanga-Villa-Family-Accommodation-in-Camps-Bay.jpg',
    date:10,
    price:10000,type:'Villa',
    name:'Camps Bay Villa',
    address:'London , UK',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'UK'
  },{
    url:'https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2021/04/06000131/capi_84165b34a3525d408290386158c30e1b_d285325aaa910c33f9c1403ad58484a9.jpeg',
    date:14,
    price:1500,
    name:'Beverly Springfield',
    address:'2821 lake Sevilila,Palm Harbour,UK',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'UK'
  },{
    url:'https://goodhomes.wwmindia.com/content/2019/dec/saini--51576841810.jpg',
    price:10000,
    date:16,
    name:'The Lalit House',
    address:'Dadar,Mumbai,India',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'India'
  },{
    url:'https://www.telegraph.co.uk/content/dam/Travel/2020/May/quinto-do-lago-villa.jpg',
    price:1500,
    date:2,
    type:'Villa',
    name:'Cosmic Villa',
    address:'Brimingham , UK',
    beds:4,
    bath:2,
    area:'6x7 m2',country:'UK'
  }]







  return (

      <div className='all'>
        <Navbar/>
        <div className='line'></div>
        <div className='container'>
        <Comp2/>
        <Filter send={receive}/>

        <div className='cards'>
        {
        
        data.map(element => {
          i++;
          if((loc.loc?(loc.loc!='Select Location'?element.country==loc.loc:true):(true))
           && 
           (loc.high?element.price<=loc.high&&element.price>=loc.low:true) 
           && 
           (loc.type?(loc.type!='Select Type'?element.type==loc.type:true):(true))
           &&
           (loc.time&& loc.year>2021?(loc.time>=element.date?true:loc.year>2022):true)
           )
           
           {
            return (
              <Card
    
              url={element.url}
              price={element.price}
              name={element.name}
              address={element.address}
              beds={element.beds}
              bath={element.bath}
              area={element.area}
              
              />)
          }else{j++}
        })
        
        }
        <div className='container nores'>{i==j?'No Results Found !! PLease try different filters':""}</div>
        </div>
        

        
        </div>
      </div>
    
  )
}

