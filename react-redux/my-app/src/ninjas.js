import React from "react";
// ninjas is destructured
const Ninjas = ({ninjas}) => {
  
    // console.log(this.props);
    const ninjaList = ninjas.map(ninja =>{
      return (
     <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name} </div>
        <div>Age: {ninja.age} </div>
        <div>Belt: {ninja.belt} </div>
      </div>
      )
    })
    return (
      <div className="ninja-list">
      { ninjaList }
      </div>
    );

}

export default Ninjas;
