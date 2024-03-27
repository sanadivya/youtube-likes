import React, { useState } from 'react'
import '../styles/App.css';
import like from '../like.svg';
const App = () => {
//write your code here
const [count, setCount] = useState(0);
const [changeColor, setChangeColor] = useState('rgba(255,0,0,0)')
//const [opacity, setOpacity] = useState(0);
const handleClick = () =>{
//write your code here
    setCount(count+1);
    if(count==0){
    setChangeColor('rgba(255,0,0,0.1)');
    }else if(count==1){
      setChangeColor('rgba(255,0,0,0.2)');
    }else if(count==2){
      setChangeColor('rgba(255,0,0,0.3)');
    }else if(count==3){
      setChangeColor('rgba(255,0,0,0.4)');
    }else if(count==4){
      setChangeColor('rgba(255,0,0,0.5)');
    }else if(count==5){
      setChangeColor('rgba(255,0,0,0.6)');
    }else if(count==6){
      setChangeColor('rgba(255,0,0,0.7)');
    }else if(count==7){
      setChangeColor('rgba(255,0,0,0.8)');
    }else if(count==8){
      setChangeColor('rgba(255,0,0,0.9)');
    }else if(count==9){
      setChangeColor('rgba(255,0,0,1)');
    }
    
}
  return (
    <div id="main">
      <img id="like-btn-img" src={like} style={{fill:'white',width:'100px',backgroundColor:changeColor }} onClick={handleClick}/>
      <h3>Likes: <span id="like-counter">{count}</span></h3>
    </div>
  )
}


export default App;
