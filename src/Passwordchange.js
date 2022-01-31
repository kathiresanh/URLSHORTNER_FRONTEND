import react from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Passwordchange(){

    const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            email:"",
          secret: '',
          password: "",
        },
        onSubmit: async values => {
          try {
            let userdata = await axios.post("https://urlshortnerbackend1.herokuapp.com/passwordchange",values)
           
            navigate("/")
            
           } catch (error) {
               alert("invalid credentials")
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
        <div>
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
     
      </div>
       <label htmlFor="secret">Secret Number</label><br></br>
            <div>
      <input
         id="secret"
         name="secret"
         type="number"
         className="form-control"
         onChange={formik.handleChange}
         value={formik.values.secret}
         required
       /><br></br>
     
      </div>

<label htmlFor="email">New Password</label><br></br>
       <input
         id="password"
         name="password"
         type="password"
         className="form-control"
         onChange={formik.handleChange}
         value={formik.values.password}
         required
       /><br></br><br></br>
 
        <div className="text-center"><span>  <button className="btn bg-warning" type="submit">Change Password</button></span></div>
     </form>
     
      </div>
    </div>
        </>
    )
}