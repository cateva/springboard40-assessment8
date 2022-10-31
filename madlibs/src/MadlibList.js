import React, { useState } from "react";
import Madlib from "./Madlib";
import NewForm from "./NewForm";

/**
 * Render the NewForm component 
 * Place your state that contains all of the todos in this component.
 */

function MadlibList(){

    const [madlibs, setMadlibs] = useState([]);

    const remove = function() {
        setMadlibs([]);
      };

      const add = newMadlib => {
        setMadlibs(madlibs => [...madlibs, newMadlib]);
      };

    const madlibComponents = madlibs.map(madlib => (
        <Madlib
          key={madlib.id}
          id={madlib.id}
          n1={madlib.n1}
          n2={madlib.n2}
          adj={madlib.adj}
          color={madlib.color}
          handleRemove={remove}
        />
      ));

    // when click the restart button
    if (madlibComponents === null){
      return (    
        <div >
            <h1>Madlibs!</h1>
            <NewForm createMadlib={add} />
        </div>
    );
    }
      // initial state with form 
      else if (madlibs.length === 0){
        return (    
          <div >
              <h1>Madlibs!</h1>
              <NewForm createMadlib={add} />
          </div>
      );
      }

      // when submit form
      else {
        return (
          <div >
              <h1>Madlibs!</h1>
              {madlibComponents}
          </div>
      );
      } 
}; 

export default MadlibList; 



/**
 *     //1- This state is an array to store all madlibs
    const [madlibs, setMadlibs] = useState([]);

    //2- update state when add todos
    const create = newMadlibs => {
        setMadlibs(madlibs => [...madlibs, newMadlibs]);
    };

    console.log(`madlibs: ${madlibs}`);
 */