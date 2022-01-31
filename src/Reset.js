import react from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Reset(){
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: async values => {
          try {
            let userdata = await axios.post("https://urlshortnerbackend1.herokuapp.com/reset",values)
          
            navigate("/passwordchange")
            
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


 
        <div className="text-center"><span>  <button className="btn bg-warning" type="submit">Send Reset Code</button></span></div>
     </form>
     
      </div>
    </div>
        </>
    )
}