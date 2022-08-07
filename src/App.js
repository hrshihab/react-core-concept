import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

function App() {
 const babyDoll= ['Raisa','Abir','akash','akkas'];
 const products=[
  {name:"Illustrator",price:"$59.90"},
  {name:"Adobe Reader",price:"$19.99"}
 ]
 const friends =[
  {name:"Siddiq",id:"200233",Dist:"Nogoan"},
  {name:"Jubair",id:"200231",Dist:"Bagerhat"},
  {name:"Arnab",id:"200218",Dist:"Kustia"},
  {name:"Faisal",id:"200223",Dist:"Barishal"},
  {name:"Titas",id:"200219",Dist:"Bogura"}

 ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Person name={babyDoll[0]} job='Student'></Person>
        <Person name={babyDoll[1]} job='Student'></Person> */}
        {/* <Product prod={products[0]}></Product>
        <Product prod={products[1]}></Product> */}
       {/* {
        products.map(produc => <Product prod={produc}></Product>)
       }
       {
        friends.map(fd => <Friend frnd={fd}></Friend>)
       } */}
       <Counter></Counter>
       <User></User>
      </header>
    </div>
  );
}

function User(){
const [user,setUser] = useState([]);
useEffect(() =>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUser(json));
})

  return(
    <div>
      <h3>dynamic User:{user.length} </h3>
      <ul>
        {user.map(user => <li>{user.phone}</li>)}
      </ul>
    </div>
  )
}


function Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onMouseMove={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Friend(props)
{
  const {name,id,Dist}=props.frnd;
  const style={
    backgroundColor:"gray",
    color:"white",
    border:"1px solid salmon",
    margin:"10px",
    padding:"10px",
    width:"300px",
    borderRadius:"20px"
  }
  return(
    <div style={style}>
      <h2>{name}</h2>
      <h4>{id}</h4>
      <h3>{Dist}</h3>
    </div>
  )
}

// function Person(props){
//   const personStyle = {
//     border:"1px solid salmon",
//     margin:"10px",
//     padding:"15px",
//     borderRadius:"20px"
//   }
// return(
//   <div style={personStyle}>
//     <h1>{props.name+" "+props.job}</h1>
//     <h3>{props.job} of the Year!!</h3>
//   </div>
// );

// }

function Product(props)
{
  const style={
    backgroundColor:"gray",
    color:"white",
    border:"1px solid salmon",
    margin:"10px",
    padding:"10px",
    width:"300px",
    borderRadius:"20px"
  }
  const {name,price}=props.prod;
  return(
    
      <div style={style}>
      <h3>{name}</h3>
      <h5 style={{color:"yellow"}}>{price}</h5>
      <button>Buy Now</button>

      </div>
    
  )
}

export default App;
