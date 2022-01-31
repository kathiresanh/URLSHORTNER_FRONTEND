import react from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register(props){

    const formik = useFormik({
        initialValues: {
            name:"",
            phoneno:"",
            email: '',
          password: "",
        },
        onSubmit:async values => {
          try {
           let data = await axios.post("https://urlshortnerbackend1.herokuapp.com/register",values)
          
          } catch (error) {
              console.log(error)
          }
        },
      });
    return(
        <>
          <div className="popup-box">
      <div className="box">
      <div className="col-lg-12 text-center">
          <h2>IONIX</h2>
         
          </div>
      
      <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Name</label><br></br>
  
    
  <input
     id="name"
     name="name"
     type="text"
     className="form-control"
     onChange={formik.handleChange}
     value={formik.values.name}
     required
   /><br></br>

<label htmlFor="email">Phone Number</label><br></br>
  
    
  <input
     id="phoneno"
     name="phoneno"
     type="number"
     className="form-control"
     onChange={formik.handleChange}
     value={formik.values.phoneno}
     required
   /><br></br>
 
 
     <label htmlFor="email">Email Address</label><br></br>
  
    
    <input
       id="email"
       name="email"
       type="email"
       className="form-control"
       onChange={formik.handleChange}
       value={formik.values.email}
       required
     /><br></br>
   
   

<label htmlFor="email">Password</label><br></br>
     <input
       id="password"
       name="password"
       type="password"
       className="form-control"
       onChange={formik.handleChange}
       value={formik.values.password}
       required
     /><br></br><br></br>

      <div className="text-center"><span>  <button className="btn bg-warning"  type="submit">Register</button></span><span> <Link to="/"><h5>Login</h5></Link> </span></div>
   </form>
          
      </div>
    </div>
        </>
    )
}