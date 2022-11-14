import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index,rgb,weight,hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',');
  console.log(bcg)

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{background : `rgb(${bcg})` }}>
      <p className='color-percent'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
    </article>
  );
}

export default SingleColor
