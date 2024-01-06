import React, { useState } from 'react'

function BasicForm() {
    const [formdata,setFormData]=useState({
        username:'',
        email:'',
        password:'',

    });

    const [data,setData]=useState([])

    const handleChange = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name)
        setFormData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setData([...data,formdata])
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <lable>
                username:
                <input type='text' name='username' value={formdata.username} onChange={handleChange}/>
            </lable>
            <br/>
            <lable>
                Email:
                <input type='text' name='email' value={formdata.email} onChange={handleChange}/>
            </lable>
            <br/>
            <lable>
                Password:
                <input type='text' name='password' value={formdata.password} onChange={handleChange}/>
            </lable>
            <button type='submit'>Submit</button>
            <br/>
            <div>
                {/* {JSON.stringify(formdata)}
                {Object.keys(formdata).map((item)=>{
                    return <ul>
                        <li>{formdata[item]}</li>
                    </ul>
                })} */}

                {data.map((item)=>{
                    return <ul>
                        <li>{item.username}</li>
                        <li>{item.email}</li>
                        <li>{item.password }</li>
                    </ul>
                })}
            </div>
        </form>
    </>
  )
}

export default BasicForm