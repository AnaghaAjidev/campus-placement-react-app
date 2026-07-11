import React from 'react'
import NavBar from './NavBar'

const DeleteReg = () => {
   
  return (
    <>
     <NavBar />
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">

        <h3 className="text-center mb-3">Delete Registration</h3>

        <label className="form-label">Registration Number</label>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Registration Number"
        />

        <button className="btn btn-danger w-100">
          Delete
        </button>

      </div>
    </div>
    </>
  )
}

export default DeleteReg