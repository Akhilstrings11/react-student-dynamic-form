import React, {useState} from 'react'

function Forms() {
    const [studentName, setStudentName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [gender, setGender] = useState("")

    const handleStudentName = (event) => {
        setStudentName(event.target.value)
    }
    const handleRollNo = (event) => {
        setRollNo(event.target.value)
    }
    const handleGender = (event) => {
        setGender(event.target.value)
    }
    const submitData = (event) => {
        event.preventDefault()
        console.log({
            StudentName : studentName,
            RollNo : rollNo,
            Gender : gender
        })
        setStudentName("")
        setRollNo("")
        setGender("")
    }

    return (
        <div>
            <form onSubmit={submitData}>
            <div>
                <label htmlFor="studentName">Student Name:- </label>
                <input type="text" id='studentName'name='studentName' value={studentName} onChange={handleStudentName}/>
            </div>
            <div>
                <label htmlFor="rollNo">Roll.No:- </label>
                <input type="number" id='rollNo' name='rollNo' value={rollNo} onChange = {handleRollNo} />
            </div>
            <div>
                <label htmlFor="gender">Select Gender:- </label>
                <select name="gender" id="gender" value={gender} onChange = {handleGender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <input type="submit" value= "Submit Data" />
            </form>
        </div>
    )
}

export default Forms
