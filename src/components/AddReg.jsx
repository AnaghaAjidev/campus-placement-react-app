import React from 'react'
import NavBar from './NavBar'

const AddReg = () => {
    
  return (
    <>
    <NavBar /> 
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Campus Placement Registration</h2>

        <div className="row g-3">

          <div className="col-12 col-sm-6">
            <label className="form-label">Registration Number</label>
            <input type="text" className="form-control" placeholder="Enter Registration Number" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter Full Name" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Aadhar Number</label>
            <input type="text" className="form-control" placeholder="Enter Aadhar Number" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Email Address" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" placeholder="Enter Phone Number" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Branch / Department</label>
            <input type="text" className="form-control" placeholder="Enter Branch / Department" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">SSLC Mark (%)</label>
            <input type="number" className="form-control" placeholder="Enter SSLC Mark" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Plus Two Mark (%)</label>
            <input type="number" className="form-control" placeholder="Enter Plus Two Mark" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">UG Degree Name</label>
            <input type="text" className="form-control" placeholder="Enter UG Degree Name" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">UG Mark (%)</label>
            <input type="number" className="form-control" placeholder="Enter UG Mark" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">PG Degree Name (Optional)</label>
            <input type="text" className="form-control" placeholder="Enter PG Degree Name" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">PG Mark (%) (Optional)</label>
            <input type="number" className="form-control" placeholder="Enter PG Mark" />
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-warning px-4">
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AddReg