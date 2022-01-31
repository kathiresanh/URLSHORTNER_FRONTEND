import react from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login(props){
  const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
          email: '',
          password: "",
        },
        onSubmit: async values => {
          try {
            let userdata = await axios.post("https://urlshortnerbackend1.herokuapp.com/login",values)
            localStorage.setItem("token",userdata.data.tokens);
            console.log(userdata)
            navigate("/login")
         
            
           } catch (error) {
               alert("user id and password invalid")
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
       <label htmlFor="email">Email Address</label><br></br>
    
      <div>
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
 
        <div className="text-center"><span>  <button className="btn bg-warning" type="submit">Login</button></span><span><Link to="/register"><button className="btn bg-primary">Register</button></Link></span> &nbsp;&nbsp;<Link to="/reset" id="forgot">forgot password</Link></div>
     </form>
     
      </div>
    </div>
     
       </>

    )
}