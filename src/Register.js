import React, {useState} from 'react';



const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email:'',
        password:''
    });

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormData( prevData=>({
            ...prevData,
            [name]:value
        }));
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
       const response = await fetch('http://localhost:8080/api/register',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
       });

       if(!response.ok){
        throw new Error('Reg failed');
       }
       const data = await response.json();
       console.log('Registerarion successful:',data);
      }catch(error){
          console.error('Error during registration:', error);
      }

    };
  

    return (
      <div className="App">
  <form onSubmit={handleSubmit}>
   <div>
   <label htmlFor="userName">Username:</label>
   <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
   </div>
   <div>
   <label htmlFor="email">Email:</label>
   <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}required />
   </div>
   <div>
   <label htmlFor="password">Password:</label>
   <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
   </div>
   <button type="submit">register</button>
  </form>

      </div>
    );
  };
  
  export default Register;
  