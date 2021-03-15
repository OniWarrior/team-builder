import React, { useState, useEffect } from 'react'
import TeamMember from './TeamMember'
import TeamMemberForm from './TeamMemberForm'
import axios from '../Axios'


const initialFormValues = {
  
  username: '',
  email: '',  
  role: '',
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]) 

  
  const [formValues, setForms] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    
    setForms({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {    
    const newTeamMember = {
      id: Date.now(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamMembers([...teamMembers, newFriend])
    setForms(initialFormValues)
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Team Member Form App</h1>

      <TeamMemberForm
        
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  )
}
