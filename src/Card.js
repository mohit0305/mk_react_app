import React from 'react';
function Card(props){
    const {name,email,id} = props;
    return (
<div className='tc b--solid b--green bg-light-green dib br3 pa1 ma3 grow bw2 shadow-8'>
   <img src = {`https://robohash.org/${name}?200*200`} alt = 'robot'></img> 
<h2>{id}. {name}</h2>
    <p>{email}</p> 
</div>
    );
}
export default Card;