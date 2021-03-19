import React from 'react';
import Card from './Card';

const CardList = ({myCat}) => {
   const cardArray = myCat.map((user, i) => {
       return (
       <Card
       key={i}
       id ={myCat[i].id}
       name={myCat[i].name}
       email={myCat[i].email}
       />
       );
   })
    return (
        <div>
            {cardArray}
      </div>
    );
}

export default CardList;