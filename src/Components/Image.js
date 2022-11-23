import React from 'react';

const Image = (props) => {
  return (
    <>
      <div className='ProfilePicture'>
        <h1>{props.profile}</h1>
      </div>
    </>
  );
}

export default Image;