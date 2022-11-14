import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [list,setList] = useState([]);
  const [error,setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors)
      setError(false)
      console.log(colors)
    } catch(error){
      setError(true);
      console.log(error);
    }
  }
  

  return (
  <>
    <section className='container'>
      <h3>Color Palette App</h3>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        onChange={(e)=>setColor(e.target.value)} 
        value={color}
        className={`${error ? 'error' : null}`}
        >
        </input>
        <button 
        className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
    <section className='colors'>
      {list.map ((i,index)=>{
        console.log(i);
        return <SingleColor key={index} {...i} index={index} hexColor={i.hex} />
      })}
    </section>
  </>
  );

  
}

export default App;
