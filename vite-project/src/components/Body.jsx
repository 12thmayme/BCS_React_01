import React from 'react';
import Banner from './Banner';
import Item from './Item';

const Body = () => {
  return (
    <div className="container">
      <Banner />

      <div className="row">
        <div className='col-4'>
        <Item />
        </div>
        <div className='col-4'>
        <Item />
        </div>
        <div className='col-4'>
        <Item />
        </div>
        <div className='col-4'>
        <Item />
        </div>
        <div className='col-4'>
        <Item />
        </div>
        <div className='col-4'>
        <Item />
        </div>
        
      </div>


      
    </div>

  );
};

export default Body;

