import React, {useState} from 'react';



const Login = () => {
    const [formData, setFormData] = useState({
        userName: '',
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
       const response = await fetch('http://localhost:8080/api/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
       });

       if(!response.ok){
        throw new Error('login failed');
       }
       const data = await response.json();
       
       console.log('Login successful:',data);
      }catch(error){
          console.error('Error during Login:', error);
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
   <label htmlFor="password">Password:</label>
   <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
   </div>
   <button type="submit">Login</button>
  </form>

      </div>
    );
  };
  
  export default Login;
  