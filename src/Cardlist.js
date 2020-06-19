import React from 'react';
import Card from './Card';
function Cardlist({robots}){
    const Component = robots.map((users,i) =>{
        return (
            <div>
        <Card id = {robots[i].id} name = {robots[i].name} email = {robots[i].email} />
        </div>
        );
    })
    return(
        <div>
        {Component}
        </div>
    );
}

export default Cardlist;