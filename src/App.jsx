import { useState } from 'react'
import './App.css'
function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [resume,setResume]=useState(null)
  const [preferredRole,setPreferredRole]=useState('')
  const [policyAccepted,setPolicyAccepted]=useState(false)
  const [formErrors,setFormErrors]=useState({})
  const [formSubmitted,setFormSubmitted]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const errors={}
    if(!name){
      errors.name='Name is required'
    }
    if(!email){
      errors.email='Email is required'
    }
    if(!resume){
      errors.resume='Resume is required'
    }
    if(!preferredRole){
      errors.preferredRole='Preferred role is required'
    }
    if(!policyAccepted){
      errors.policyAccepted='You must accept the policy'
    }
    setFormErrors(errors)
    if(Object.keys(errors).length===0){
      setFormSubmitted(true)
      console.log('Form submitted successfully')
      console.log({name,email,resume,preferredRole,policyAccepted})
    }
  }

  return (
    <div className="App">
      <h1>Job Application Form</h1>
      {formSubmitted ? (
        <div className="success-message">
          <h2>Thank you for your application!</h2>
          <p>We will review your application and get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="resume">Resume:</label>
            <input
              type="file"
              id="resume"
              onChange={(e) => setResume(e.target.files[0])}
            />
            {formErrors.resume && <span className="error">{formErrors.resume}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="preferredRole">Preferred Role:</label>
            <select
              id="preferredRole"
              value={preferredRole}
              onChange={(e) => setPreferredRole(e.target.value)}
            >
              <option value="">Select a role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </select>
            {formErrors.preferredRole && (
              <span className="error">{formErrors.preferredRole}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
              />
              I accept the policy
            </label>
            {formErrors.policyAccepted && (
              <span className="error">{formErrors.policyAccepted}</span>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )     
}
export default App
