import React, { useRef } from 'react'

export default function Create() {

const ideaRef = useRef();
const descRef = useRef();

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(ideaRef.current.value,descRef.current.value);
    ideaRef.current.value='';
    descRef.current.value='';
}


  return (
    <div className='card'>
         <div className='card-body'>
        <form onSubmit={handleSubmit}>
        <label id="idea" className='my-3 form-label col-lg-8 col-md-8 col-sm-8'>
        <span>Idea:</span>
        <input className="form-control" ref={ideaRef} type="text"  placeholder="Enter idea" required/>
        </label >
        <label id="desc" className='my-3 form-label col-lg-8 col-md-8 col-sm-8'>
        <span>Description</span>
        <textarea className="form-control" ref={descRef} type=""  placeholder="Enter description" required/>
        </label >
        <button className='w-100 btn btn-primary' type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}
