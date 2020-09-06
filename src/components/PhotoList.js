import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';


const PhotoList = (props) => {

    let h2;
    if(!props.data.tag) {
        h2 = "Welcome!";
    }
    else {
        h2 = `Results For: ${props.data.tag}`;
    }

    
    const results = props.data.photos;
    let photos; 
    if(results.length > 0) {
        photos = results.map( photo => {
            return <Photo
                 data={photo} 
                 key={photo.id}
             />;
        }); 
    }else {
        photos = <NotFound />;
    }
   
    
 

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