import React, { useState } from 'react'
import Axios from 'axios'

function Submit() {
    const url = "http://13.232.8.85:8081/htschool/api/add-response-data/add"
    const [data, setData] = useState({
        Student_name: "",
        Student_Email: "",
        Gender: "",
        Standard: "",
        Student_Contact_No: "",
        Address: "",
        city: "",
        pincode: "",
        School_id: ""
    })

    function formSubmit(e) {
        e.preventDefault();
        Axios.post(url, {
            student_name: data.Student_name,
            student_email: data.Student_Email,
            gender: data.Gender,
            standard: data.Standard,
            student_contact_no: data.Student_Contact_No,
            school_address: data.Address,
            city: data.city,
            pincode: data.pincode,
            school_id: data.School_id

        }).then(res => {
            console.log(res.data);
        })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function Alert() {
        alert("Form submitted Successfully")
    }
    return (
        <div className='main_background'>
            <form className='form_data' onSubmit={(e) => formSubmit(e)}>
                <h1>Students Data</h1>
                <input onChange={(e) => handle(e)} id="Student_name" value={data.Student_name} placeholder=' Name Of the Student' type='text' required></input> <br />
                <input onChange={(e) => handle(e)} id="Student_Email" value={data.Student_Email} placeholder='Student Email Id' type='email' required></input><br />

                <select onChange={(e) => handle(e)} id='Gender' value={data.Gender} placeholder=' Select Gender' type='text' required>
                    <option value='Gender'>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='female'>Female</option>
                </select>

                <input onChange={(e) => handle(e)} id="Standard" value={data.Standard} placeholder='Standard' type='number' required></input><br />
                <input onChange={(e) => handle(e)} id="Student_Contact_No" value={data.Student_Contact_No} placeholder='Student Contact No' type='number' required></input><br />
                <input onChange={(e) => handle(e)} id="Address" value={data.Address} placeholder='Address' type='text' required></input><br />
                <input onChange={(e) => handle(e)} id="city" value={data.city} placeholder='city' type='text' required></input><br />
                <input onChange={(e) => handle(e)} id="pincode" value={data.pincode} placeholder='pincode' type='number' required></input><br />
                <input onChange={(e) => handle(e)} id="School_id" value={data.School_id} placeholder='School id' type='number' required></input><br /><br />
                <input  className='button' type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default Submit
