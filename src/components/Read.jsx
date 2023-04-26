import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../features/actions/readUsersAction'
import CustomModal from './CustomModal'

const Read = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())        
    },[dispatch])

    const {users, loading} = useSelector(state => state.app)

    if(loading) {
        return <h2>Loading...</h2>
    }

  return (
    <div>
        <CustomModal/>
        <h2>Users</h2>
        <div>
            {users && users.map(user => (
                <div key={user.id} className="card w-50 mx-auto my-2 d-flex">
                    {/* <img src={user.avatar} alt="avatar" className='rounded-circle w-25 mx-auto my-2' /> */}
                    <div className="card-body">
                        <h4 className="card-title">{user.name}</h4>
                        <h5 className="card-subtitle mb-2 text-body-secondary">{user.email}</h5>
                        <p className="card-text">{user.gender}</p>
                        <a href="#" className="card-link">View</a>
                        <a href="#" className="card-link">Edit</a>
                        <a href="#" className="card-link">Delete</a>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Read