import React from 'react'

const Create = () => {
  return (
    <div>
        <form className='w-50 mx-auto my-5'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control"/>
            </div>
            <div className='mb-3'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" for="flexRadioDefault2">Female</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Create