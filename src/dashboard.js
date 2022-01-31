import axios from "axios";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";


export default function Dashboard(){
    const formik = useFormik({
        initialValues: {
          url: '',
        },
        onSubmit: async values => {
            try {
                let datas = await axios.post("https://urlshortnerbackend1.herokuapp.com/urlshortner",values)
                console.log(datas)
                setdata(datas.data.message)
               } catch (error) {
                   console.log(error)
               }
        },
      });
    
    const [datas,setdata] = useState("")
    useEffect(async()=>{
     try {
        let data =await axios.get("https://urlshortnerbackend1.herokuapp.com/dashboard",{
            headers:{
                Authorization : window.localStorage.getItem("token")
            }
        })
       
     } catch (error) {
         console.log(error)
         
     }
    },[])

    return(
        <>
         <div className="popup-box">
      <div className="box">
      <div className="col-lg-12 text-center">
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Enter the URL</label><br></br>
       <input
         id="url"
         name="url"
         type="text"
         className="form-control"
         onChange={formik.handleChange}
         value={formik.values.url}
       /><br></br>
 
       <button type="submit" className="btn btn-light">Submit</button>
     </form>

      <Link to="/"><button className="btn bg-primary mt-3">Home</button></Link><br></br>
       <h3>{datas}</h3>
      </div>

      </div>
      </div>
       
        </>
    )
}