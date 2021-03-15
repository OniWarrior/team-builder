import React from 'react'

export default function TeamMemberForm(props) {
  
  const { values, update, submit } = props

  const onChange = evt => {
    
    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    
    evt.preventDefault();
    
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
       
        <label>Username
         
          <input 
             type="text" 
             value={values.username}
             placeholder="Username" 
             name="username" 
             maxLength="30" 
             onChange={onChange}
          />
        </label>

        <label>Email
          
          <input 
            type="email"
            value={values.email}
            placeholder="Email"
            name="email"
            maxLength="50"
            onChange={onChange}
          />
        </label>
       
        <label>Role
          
          <select name="role" onChange={onChange} value={values.role}>
            <option>Front-End Engineer</option>
            <option>Back-End Engineer</option>
            <option>Full Stack Engineer</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}