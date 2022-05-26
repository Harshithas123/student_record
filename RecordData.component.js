import { async } from "@firebase/util";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { firebasedatabase } from "../../../backend/firebasepro";
import './RecordData.styles.css';

const RecordData = () => {
    const [studentData, setstudentData] = useState({
        name:"",
        usn:""

    })

    const handlerChange = (event) => {
        const { name, value} = event.target;
        setstudentData({
            ...studentData,
            [name]: value
        })
    }
    const handleSave = async() => {
       const recordRef = ref(firebasedatabase, `STUDENT_RECORDS/${studentData.usn}`);
       await set(recordRef, studentData);
       alert("Data recorded!")
    }
    return (
        <div className="record-data1">
            <div className="record-data2">
                <input className="inputs" value={studentData.name} onChange={handlerChange} name="name" placeholder="student name" />
                <input className="inputs" value={studentData.usn} onChange={handlerChange} name="usn" placeholder="usn" />
                <button className="save1" onClick={handleSave}>Save</button>
            </div>

        </div>

    )
}
export default RecordData;