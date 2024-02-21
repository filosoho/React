import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <div >
        <h2>Login</h2>
      <div>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        />
      </div>
      <div>
        <input
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        />
      </div>  
      </div>
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login