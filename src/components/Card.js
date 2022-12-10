import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Card.css';
function Card() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path='/services'></CardItem>
            <CardItem src="images/img-3.jpg" text="Travel through the Islands of bali in a private cruise" label="Luxury" path='/services'></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem src="images/img-7.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path='/services'></CardItem>
            <CardItem src="images/img-2.jpg" text="Travel through the Islands of bali in a private cruise" label="Luxury" path='/services'></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
