import React, { useEffect, useState } from 'react';
import database from './firebase';
import TinderCard from "react-tinder-card";
import  './TinderCards.css';


function TinderCards(){
    const [people,setPeople]=useState([]);
    // piece of code which runs based on a condition
    useEffect(() => {
        //this is where the code runs
        const unsubscribe=database
        .collection("people")
        .onSnapshot((snapshot) =>(
         setPeople(snapshot.docs.map((doc)=>doc.data()))   
        ));
        return () =>{
            //this is cleanup....
            unsubscribe();
        };
    },[]);
    return(
        <div>
            <div className="tinderCards_cardContainer">
                {people.map(person=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                    >
                    <div 
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
export default TinderCards;
