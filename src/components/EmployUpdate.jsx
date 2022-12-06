import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmployUpdate = () => {
    const {id} = useParams();
 
    useEffect(() => {
   
        fetch(`http://localhost:8080/employee/${id}`)
        .then((r) => {
          return r.json();
        })
        .then((r) => {
          setIds(r.id);
          setName(r.name);
          setEmail(r.email);
          setPhone(r.phone);
          setActive(r.active);
          
        })
        .catch((e) => {
          console.log(e.message);
        });
     
    }, [])

    const [ids, setIds] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [valid, setValid] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { id, name, email, phone, active };
    
    fetch(`http://localhost:8080/employee/${id}`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((r) => {
        alert("Saved Successfully.");
        navigate('/');
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
    
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={ids}
                        disabled="disabled"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} required onMouseDown={(e)=>setValid(true)}
                      />
                      { name.length == 0 && valid && <span className="text-danger">Enter the name</span>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} onMouseDown={(e)=>setValid(true)}
                      />
                    {email.length == 0 && valid && <span className="text-danger">Enter the email</span>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} onMouseDown={(e)=>setValid(true) }
                      />
                      { phone.length == 0 &&  valid &&<span className="text-danger">Enter the phone</span>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                      />
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmployUpdate