import './App.css'
import Header from './Component/Header';
import ResContainer from './Component/Res-container';
import SignIn from './Component/SignIn';
import Body from './Component/Body';
import { useEffect, useState } from 'react';

const Counter = () => {

  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  useEffect( () => {
    console.log('Effect called');
  } , [count])

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}


const App = () => {
  
  useEffect( () => {
    fetchData()
  },[])

  const fetchData = async() => {
    const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = res.json();
    console.log(json);
  }

  return (
    <>
      {Header()}
      <ResContainer />
      
      
    </>)
    
}

export default App;