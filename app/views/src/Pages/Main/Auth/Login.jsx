import { useState, useEffect } from "react";

const Login = () => {
  const [login_data, formdata] = useState({ name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <div className="row mt-4">
        <h5 className="text-center "> Login Client Admin</h5>
      </div>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card p-4 ">
              <form onSubmit={handleSubmit}>
                {/* email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="Email"
                    placeholder="Email"
                  ></input>
                </div>

                {/* password */}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="password"
                    placeholder="Password"
                  ></input>
                </div>
                <div className="d-grid gap-2 col-4 mx-auto">
                  <button className="btn btn-dark rounded-pill ">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
