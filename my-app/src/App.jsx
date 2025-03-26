import { useState ,useRef, useEffect } from 'react'

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
  // hitmore()
}
}
useEffect(()=>{
const observer = new IntersectionObserver(function(entries){
  entries.forEach((entry)=>{
    if(entry.isIntersecting)
    {
      entry.target.style.backgroundColor = "red";

    }
    else{
      entry.target.style.backgroundColor = "blue";
    }
  })
})
arraylist.current.forEach((el,index)=>{
  observer.observe(el)
})

},[])

const arraylist = useRef([])

  return (
    <>
      <div  onScroll={(e)=>handleScroll(e)} className='container'>
      {
        items.map((val , index)=> {
          return (<div className='item' ref={(e=> arraylist.current[index]=e)} key={index}>{index+1}</div>)
        })
      }
      </div>
     
    </>
  )
}

export default App
