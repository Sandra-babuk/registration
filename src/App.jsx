
import { Form , Dropdown,Button} from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

function App() {
 const [name,setName]=useState("")
 const [address,setAddress]=useState("")
 const [phone,setPhone]=useState("")
 const [email,setEmail]=useState("")
 const [dob,setDob]=useState("")
 const [gender,setGender]=useState("")
 const [course,setCourse]=useState("")

 const [isNameValid,setIsNameValid]=useState(true)
 const [isAddressValid,setIsAddressValid]=useState(true) 
 const [isPhoneValid,setIsPhoneValid ]=useState(true) 
 const [isEmailValid,setIsEmailValid ]=useState(true) 
 const [isDobValid,setIsDobValid ]=useState(true) 
 const [isGenderValid,setIsGenderValid ]=useState(true) 
 const [isCourseValid,setIscourseValid]=useState(true)
  const validateInput =(inputTag)=>{
    const {name,value} = inputTag
    console.log(name,value);
    
    if( name=='name'){
      setName(value)
      setIsNameValid(!!value.match(/^[A-Za-z\s]+$/))
    }else if(name=='address'){
      setAddress(value)
      setIsAddressValid(value.trim()!=='')
    }else if(name=='mobile'){
      setPhone(value)
      setIsPhoneValid(!!value.match(/^\d+$/))
    }else if(name=='email'){
      setEmail(value)
      setIsEmailValid(value.endswith(`@gmail.com`))
    }else if(name=='dob'){
      setDob(value)
      setIsDobValid(value !== '')
    }else if(name=='gender'){
      setGender(value)
      setIsGenderValid(!!value.match(/^[A-Za-z\s]+$/))
    }
  }
  

  const handleCourseSelect = (eventKey)=>{
    setCourse(eventKey)
    setIscourseValid(!!eventKey)
  }
  const handleSubmit = ()=>{
    const nameValid =!!name.match((/^[A-Za-z\s]+$/))
    const addressvalid =address.trim() !==''
    const phoneValid = !!phone.match(/^\d+$/)
    const emailValid = email.endsWith('@gmail.com')
    const dobValid = dob !==''
    const genderValid = !!gender.match((/^[A-Za-z\s]+$/))
    const courseValid = !!course

    setIsNameValid(nameValid)
    setIsAddressValid(addressvalid)
    setIsPhoneValid(phoneValid)
    setIsEmailValid(emailValid)
    setIsDobValid(dobValid)
    setIsGenderValid(genderValid)
    setIscourseValid(courseValid)

    if(nameValid && addressvalid && phoneValid && emailValid && dobValid && genderValid && courseValid){
      alert('Registration Successfull')
    }else{
      alert('Please fill the form Completely')
    }

  }
  const handleClear =()=>{
    // reset all feilds
    setName('')
    setAddress('')
    setPhone('')
    setEmail('')
    setDob('')
    setGender('')
    setCourse('')

    // reset all validation
    setIsNameValid(true)
    setIsAddressValid(true)
    setIsPhoneValid(true)
    setIsEmailValid(true)
    setIsDobValid(true)
    setIsGenderValid(true)
    setIscourseValid(true)
  }



  return (
    <>
<div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
<div style={{width:'600px'}} className='bg-light rounded p-5'>
  <h3>Registration Form :</h3>
  <Form className='p-4'>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name :</Form.Label>
        <Form.Control value={name} onChange={(e)=>validateInput(e.target)} name='name'  type="text" placeholder="Enter your Name" /> 
      </Form.Group>
      {
        !isNameValid &&
        <div className="mb-3 text-danger fw-bolder">Invalid.Only name and space are allowed</div>
      }
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Address :</Form.Label>
        <Form.Control value={address} onChange={(e)=>validateInput(e.target)} name='address'  type="text" placeholder="Enter your Address" />
      </Form.Group>
      {
        !isAddressValid &&
        <div className="mb-3 text-danger fw-bolder">Address cannot be empty</div>
      }
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Mobile :</Form.Label>
        <Form.Control value={phone} onChange={(e)=>validateInput(e.target)} name="mobile" type="phno" placeholder="Enter your Phno" />
      </Form.Group>
      {
        !isPhoneValid &&
        <div className="mb-3 text-danger fw-bolder">Only Numbers Are Allowed</div>
      }
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Email :</Form.Label>
        <Form.Control value={email} onChange={(e)=>validateInput(e.target)} name='email' type="email" placeholder="Enter your Email" />
      </Form.Group>
      {
        !isEmailValid &&
        <div className="mb-3 text-danger fw-bolder">Invalid. Must Ends with @gmail.com</div>
      }
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Date of Birth :</Form.Label>
        <Form.Control value={dob} onChange={(e)=>validateInput(e.target)} name='dob' type="date" placeholder="dd/mm/yyyy" />
      </Form.Group>
      {
        !isDobValid &&
        <div className="mb-3 text-danger fw-bolder">Select a Date</div>


      }
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Gender :</Form.Label>
        <Form.Control value={gender}  onChange={(e)=>validateInput(e.target)} name='gender'  type="text" placeholder="Enter your Gender" />
      </Form.Group>
      {
        !isGenderValid &&
        <div className="mb-3 text-danger fw-bolder">invalid.letters are allowed</div>
      }
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Courses :</Form.Label>
        <Dropdown onSelect={handleCourseSelect}>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
      {course || 'Select your course'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Biology">Biology</Dropdown.Item>
        <Dropdown.Item eventKey="Computer Science">Computer Science</Dropdown.Item>
        <Dropdown.Item eventKey="Commerce" >Commerce</Dropdown.Item>
        <Dropdown.Item eventKey="Humanities" >Humanities</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {
      !isCourseValid &&
      <div className="mb-3 text-danger fw-bolder">Please Select a Course</div>
    }
      </Form.Group>
    </Form>
   <div className='d-flex justify-content-evenly'>
      <Button className='btn btn-primary' onClick={handleSubmit} >Register</Button>
        <Button className='btn btn-danger' onClick={handleClear}>CLear</Button>
   </div>
</div>

</div>
</>
  )
}

export default App
