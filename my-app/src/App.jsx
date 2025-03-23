import { useState } from 'react'

import './App.css'

function App() {
const [items,setItems] = useState( [...new Array(40)]);

function hitmore() {
  setTimeout(() => {
    setItems(prev => [...prev, ...new Array(10)]);
  }, 1000);
}
function handleScroll(e){
  const ScrollTop = e.target.scrollTop
  const clientHeight = e.target.clientHeight
  const scrollHeight = e.target.scrollHeight
const remaningScroll = scrollHeight - (ScrollTop  + clientHeight)
console.log(remaningScroll)
if(remaningScroll<100)
{
  hitmore()
}
}


  return (
    <>
      <div  onScroll={(e)=>handleScroll(e)} className='container'>
      {
        items.map((val , index)=> {
          return (<div className='item' key={index}>{index+1}</div>)
        })
      }
      </div>
     
    </>
  )
}

export default App
