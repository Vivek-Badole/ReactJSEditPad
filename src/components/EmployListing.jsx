import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployListing = () => {
  const [list, setList] = useState("");
  const navigate = useNavigate();
  const loadDetail = (id) => {
    navigate(`/employee/detail/${id}`);
  };

  const loadEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const RemoveFunction = (id) => {
    if (window.confirm("Do yo want to remove?")) {
      fetch(`http://localhost:8080/employee/${id}`, {
        method: "delete",
      })
        .then((r) => {
          alert("Removed Successfully.");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8080/employee")
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        setList(r);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employ Listing</h2>
        </div>
        <div className="card-body">
          <div>
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((i) => (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          loadEdit(i.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          RemoveFunction(i.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          loadDetail(i.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployListing;
