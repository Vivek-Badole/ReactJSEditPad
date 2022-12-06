import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

const EmployDetail = () => {
    const {id} = useParams();
    const [data,setData] = useState({});
    useEffect(() => {
   
        fetch(`http://localhost:8080/employee/${id}`)
        .then((r) => {
          return r.json();
        })
        .then((r) => {
          setData(r);
          
        })
        .catch((e) => {
          console.log(e.message);
        });
     
    }, [])
    
  return (
    <div>
        <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body"></div>
              
        { data && <div> <h1>The Employee Name is : {data.name}({data.id})</h1>
        <h3>Contact Details</h3>
        <h5>Email is {data.email}</h5>
        <h5>Phone is {data.phone}</h5>
        <Link to="/" className="btn btn-danger">Back to Listing</Link>
         </div> }
    </div>
    </div>
  )
}

export default EmployDetail