import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUser] = useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => (res.json()))
  .then(data=>setUser(data))
  },[])
  
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
      users.map(user => <User name={user.name} email = {user.email}></User>)
      }
    </div>
    )
}
function User(props){
  return (
    <div style={{border: '1px solid gray' , margin: '10px',padding:'14px', backgroundColor:'pink',borderRadius:'14px'}}>
      <h3>Name : {props.name} </h3>
      <p>Email : {props.email} </p>
    </div>
    )
}

function Counter(){
  const [count, setCount] = useState(5);
  const increaseCount = ()=> setCount(count + 2);
  const decreaseCount = ()=> setCount(count - 2);
  
  // useState() functional component e state variable ke rakhte dey.
  /* 
  const increaseCount = ()=>{
    const newCount = count + 2;
    setCount(newCount);
  } */
  // console.log(abc);
  return(
  <div>
    <h2> Count: {count} </h2>
    <button onClick={increaseCount}>Increase</button> 
    <button onClick={decreaseCount}>Decrease</button>
  </div>
  )
}
/* 
const products = [
  {name: 'computer', price: 340000},
  {name: 'laptop', price: 34000},
  {name: 'phone', price: 4000},
  {name: 'watch', price: 3300},
]
*/

/* { {products.map(product=><Product name={product.name}price = {product.price}></Product>)} } */
      
     /*  <Product name = 'Laptop'price = '335560'></Product>
      <Product name = 'Phone'price = '50000'></Product>
      <Product name = 'Watch'price = '25000'></Product>  */

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
    )
}
export default App;
