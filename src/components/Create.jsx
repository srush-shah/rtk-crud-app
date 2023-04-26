import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/actions/createUserAction'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setUserData = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        dispatch(createUser(user))
        navigate('/read')
    }

  return (
    <div>
        <h2>Enter User Details</h2>
        <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='name' className="form-control" onChange={setUserData}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name='email' className="form-control" onChange={setUserData}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" name='age' className="form-control" onChange={setUserData}/>
            </div>
            <div className='mb-3'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value={"Male"} id="flexRadioDefault1" onChange={setUserData} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value={"Female"} id="flexRadioDefault2" onChange={setUserData} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Create