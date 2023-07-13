import React from 'react';

function FooterLeft({channel, description,song}){
  return (
    <div className="FooterLeft">
      <div className='text'>
      <h3>@{channel}</h3>
      <p>{description}</p>
      <div className='ticker'>
        <marquee direction="left" scrollamount="2">
          <p>{song}</p>
        </marquee>
      </div>
      </div>
     
    </div>
  );
};

export default FooterLeft;
