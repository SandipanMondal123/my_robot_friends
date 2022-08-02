import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) =>{
        return (
            <Card 
            key = {i} 
            id={user.id} //this works
            name={user.name} 
            email={robots[i].email} //and this also works. you can choose 
            />
        ) 
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;