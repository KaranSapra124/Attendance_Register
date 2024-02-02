import React, { useContext, useEffect, useState, useRef } from 'react'
import List from './List';

const AttendanceList = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [studentData, setStudentData] = useState([])
    const [Bool, setBool] = useState(true)
    const ref = useRef(studentData)
    const EnterStudent = ({ name, date }) => {
        studentData.push({ name, date })
        ref.current = studentData;
        setStudentData([])
        setDate("")
        setBool(!Bool)
        setName("")
        if (!localStorage.getItem("StudentsData")) {
            localStorage.setItem("StudentsData", JSON.stringify(ref.current))
            ref.current = ""
        } else {
            const ParsedData = JSON.parse(localStorage.getItem("StudentsData"));
            ParsedData.push(...ref.current)
            localStorage.setItem("StudentsData", JSON.stringify(ParsedData))
        }
    }

    return (
        <div className='flex items-center justify-content-center'>

        <div className="w-fit m-auto p-5 mt-2 text-2xl flex items-center flex-col shadow-lg bg-black rounded">
            <h1 className='m-2 font-bold text-white'>Attendance Register</h1>
            <div className=" ">
                <input value={name} onChange={(e) => {
                    setName(e.target.value)
                }} className="m-1 w-fit bg-gray-100 p-2 rounded-xl text-black " type="text" placeholder="Enter The Name...." name="" id="" />
                <input value={date} onChange={(e) => {
                    setDate(e.target.value)
                }} className="cursor-pointer m-1 bg-gray-100 w-10 p-2 rounded-xl text-black " type="date" name="" id="" />
            </div>
            <button onClick={() => {
                EnterStudent({ name, date })
            }} className="cursor-pointer w-fit hover:bg-blue-300 hover:text-white bg-blue-200 p-2 shadow-lg rounded-lg text-black font-bold  m-2">Enter</button>
            <List Bool={Bool}/>
        </div>
        </div>

    )
}

export default AttendanceList;
