import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewReg = () => {
   

    const [students, changeStudents] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
            .then((response) => {
                changeStudents(response.data)
            })
            .catch()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
         <NavBar/>
        <div className="container mt-4">

            <h2 className="text-center mb-4">
                View All Registrations
            </h2>

            <div className="row g-4">

                {students.map((student, index) => {
                    return (

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={student.registrationNumber}>

                            <div className="card h-100 shadow-lg border-0 rounded-4">

                                <div className="card-body">

                                    <h5 className="fw-bold text-primary">
                                        {student.fullName}
                                    </h5>

                                    <hr />

                                    <p><strong>Reg No:</strong> {student.registrationNumber}</p>

                                    <p><strong>Branch:</strong> {student.branch}</p>

                                    <p><strong>SSLC:</strong> {student.sslcMark}%</p>

                                    <p><strong>Plus Two:</strong> {student.plusTwoMark}%</p>

                                    <p><strong>UG:</strong> {student.ugMark}%</p>

                                    <p><strong>PG:</strong> {student.pgMark ? `${student.pgMark}%` : "N/A"}</p>

                                </div>

                            </div>

                        </div>

                    )
                })}

            </div>

        </div>
        </>
    )
}

export default ViewReg