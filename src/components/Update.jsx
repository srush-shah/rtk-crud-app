import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/actions/updateUserAction'

const Update = () => {
    const {id} = useParams()
    const users = useSelector(state => state.app.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [updateData, setUpdateData] = useState()
    
    useEffect(() => {
        if(id) {
            const singleUser = users.filter(ele => ele.id === id)
            setUpdateData(singleUser[0])
        }
    },[])

    const newData = (e) => {
        setUpdateData({...updateData, [e.target.name]: e.target.value})
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUser(updateData))
        navigate("/read")
    }

    
  return (
    <div>
        <h2>Edit User Details</h2>
        <form className='w-50 mx-auto my-5' onSubmit={handleUpdate}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='name' className="form-control" value={updateData && updateData.name} onChange={newData} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name='email' className="form-control" value={updateData && updateData.email} onChange={newData} />
            </div>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" name='age' className="form-control" value={updateData && updateData.age} onChange={newData} />
            </div>
            <div className='mb-3'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value={"Male"} id="flexRadioDefault1" checked={updateData && updateData.gender === "Male"} onChange={newData} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value={"Female"} id="flexRadioDefault2" checked={updateData && updateData.gender === "Female"} onChange={newData} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Update