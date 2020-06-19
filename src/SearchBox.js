import React from 'react';

function SearchBox({SearchChange}){
    return (
        <div className = 'pa2'>
     <input className='pa3 ba b--green bg-lightest-blue' type = 'search' placeholder = 'search your robot friend' onChange={SearchChange}/>
     </div> 
    );
}

export default SearchBox;