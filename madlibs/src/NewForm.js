import React, { useState } from "react";
const { v4: uuidv4 } = require('uuid');

/**
 * render the NewForm component 
 * For one input form
 * Place your state that contains all of the inputs in this component.
 */

// createMadlib is a function passed over to update state
function NewForm({ createMadlib }) {

    //1- Set initial state
    const [formData, setFormData] = useState({
      n1: "",
      n2: "",
      adj: "",
      color: ""
    });

    //2- Handle changes
    const handleChange = evt => {
      const { name, value } = evt.target;
      setFormData(formData => ({
        ...formData,
        [name]: value
      }));
    };

    //3- update state when add todos
    const handleSubmit = evt => {
      evt.preventDefault();
      createMadlib({ ...formData, id: uuidv4() });
      setFormData({
        n1: "",
        n2: "",
        adj: "",
        color: ""
      });
    };


    //4- render form
    return (
    <div>
    <form onSubmit={handleSubmit}>

    <div>
      <label htmlFor="n1">Noun 1</label>
      <input type="text" id="n1" name="n1" value={formData.n1} onChange={handleChange} required/>
    </div>

    <div>
      <label htmlFor="n2">Noun 2</label>
      <input type="text" id="n2" name="n2" value={formData.n2} onChange={handleChange} required/>
    </div>

    <div>
      <label htmlFor="adj">Adj</label>
      <input type="text" id="adj" name="adj" value={formData.adj} onChange={handleChange} required/>
    </div>
      
    <div>
      <label htmlFor="color">Color</label>
      <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} required/>
    </div>
     
      <button id="newMadlibs">Get Story!</button>
    </form>
    </div>
  );
}


export default NewForm;