import React from 'react';

import Photo from './Photo';


const PhotoList = (props) => {

    let h2;
    if(!props.data.tag) {
        h2 = "Welcome!";
    }
    else {
        h2 = `Results For: ${props.data.tag}`;
    }

    
    const results = props.data.photos;
    let photos = results.map( photo => {
            return <Photo 
                 data={photo} 
                 key={photo.id}
             />;
         }); 
    
 

    return(
        <div className="photo-container">
            <h2> {h2} </h2>
                <ul>
                   {photos}
                </ul>
       
        </div>
    );
}

export default PhotoList;