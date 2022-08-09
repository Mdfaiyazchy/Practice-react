import React, {useState,setState} from 'react';
import './style.css';
function RegForm(){

    const[firstName, setfirstName] = useState(null);
    const[lastName, setlastName] = useState(null);
    const[age, setage] = useState(null);
    const[sex, setsex] = useState(null);

    const handleInputChange = (e) =>{
           const {id, value} =e.target;
           if(id === "firstName") setfirstName(value);
           if(id === "lastName") setlastName(value);
           if(id === "age") setage(value);
           if(id === "sex") setsex(value);

        }

        const handleSubmit =() =>
           console.log(firstName,lastName,age,sex);


return(
     <div className ="form">
            <div className ="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" value ={firstName} onChange ={(e) => handleInputChange(e)}id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input className="form__input" type="text" value ={lastName} onChange ={(e) => handleInputChange(e)} id="lastName" placeholder="Last Name"/>
              </div>    
              <div className="age">
                  <label className="form__label" for="age">Age </label>
                  <input className="form__input" type="number" value ={age} onChange ={(e) => handleInputChange(e)}  id="age" placeholder="Age"/>
              </div>     
               <div className="sex">
                  <label className="form__label" for="sex">Sex </label>
                  <input className="form__input" type="text" value ={sex} onChange ={(e) => handleInputChange(e)} id="sex" placeholder="Sex"/>
              </div>  
     </div>     
              <div class ="footer">
                  <button onClick={()=>handleSubmit()} type="submit" class="btn">Entry</button>
               </div>
     </div>
 
 )
}
export default RegForm;