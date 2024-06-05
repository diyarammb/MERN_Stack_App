import { useState, useEffect } from "react";

const UserGroupListing = () => {
  const [user_data, formdata] = useState({ name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <div className="row mt-4">
        <h5 className="text-center "> User Group Listing View</h5>
      </div>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card p-4 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      aria-label="Group Name"
                      className="m-1 form-control bg-light"
                      placeholder="Group Name"
                    />
                    <input
                      type="text"
                      aria-label="Group Code"
                      className="m-1 form-control bg-light"
                      placeholder="Group Code"
                    />
                    <button className="m-1">Add</button>
                    <button className="m-1">edit</button>
                    <button className="m-1">del</button>
                    <button className="m-1">view</button>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      aria-label="Group Name"
                      className="m-1 form-control bg-light"
                      placeholder="Group Name"
                    />
                    <input
                      type="text"
                      aria-label="Group Code"
                      className="m-1 form-control bg-light"
                      placeholder="Group Code"
                    />
                    <button className="m-1">Add</button>
                    <button className="m-1">edit</button>
                    <button className="m-1">del</button>
                    <button className="m-1">view</button>
                  </div>
                </div>

                <div className=" ">
                  <button className="btn btn-dark rounded-pill ">Add New</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default UserGroupListing;
