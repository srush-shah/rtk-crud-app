import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../features/actions/readUsersAction'
import CustomModal from './CustomModal'
import { deleteUser } from '../features/actions/deleteUserAction'
import { Link } from 'react-router-dom'

const Read = () => {
    const dispatch = useDispatch()

    const [id,setId] = useState()

    const [showPopup, setShowPopup] = useState(false)
    const [radioData, setRadioData] = useState('')

    useEffect(() => {
        dispatch(getAllUsers())        
    },[])

    const {users, loading, searchData} = useSelector(state => state.app)

    if(loading) {
        return <h2>Loading...</h2>
    }

  return (
    <div>
        {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
        <h2 className='my-2'>Users</h2>
        <div className='d-flex justify-content-center gap-3 my-3'>
            <div className='d-flex gap-1'>
                <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" checked={radioData === ''} onChange={(e) => setRadioData('')} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">All</label>
            </div>
            <div className='d-flex gap-1'>
                <input className="form-check-input" type="radio" name="gender" value={"Male"} id="flexRadioDefault2" checked={radioData === 'Male'} onChange={(e) => setRadioData(e.target.value)} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">Male</label>
            </div>
            <div className='d-flex gap-1'>
                <input className="form-check-input" type="radio" name="gender" value={"Female"} id="flexRadioDefault3" checked={radioData === 'Female'} onChange={(e) => setRadioData(e.target.value)} />
                <label className="form-check-label" htmlFor="flexRadioDefault3">Female</label>
            </div>
        </div>
        <div className='w-75 row row-cols-3 mx-auto justify-content-center my-3'>
            {users && 
            
            users.filter(user => {
                if(searchData.length === 0) {
                    return user
                } else {
                    return user.name.toLowerCase().includes(searchData.toLowerCase()) || user.email.toLowerCase().includes(searchData.toLowerCase())
                }
            }).filter(user => {
                if(radioData === 'Male' || radioData === 'Female') {
                    return user.gender === radioData
                } else {
                    return user
                }
            }).map(user => (
                <div key={user.id} className="card w-25 my-2 mx-2">
                    {/* <img src={user.avatar} alt="avatar" className='rounded-circle w-25 mx-auto my-2' /> */}
                    <div className="card-body">
                        <h4 className="card-title">{user.name}</h4>
                        <h5 className="card-subtitle mb-2 text-body-secondary">{user.email}</h5>
                        <p className="card-text">{user.gender}</p>
                        <div className='d-flex gap-3'>
                            <button className="card- btn btn-primary" onClick={() => [setId(user.id), setShowPopup(true)]}>View</button>
                            <Link to={`/edit/${user.id}`} className="card- btn btn-primary">Edit</Link>
                            <button className="card- btn btn-primary" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Read