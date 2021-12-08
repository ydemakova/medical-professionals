import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from './context/app.context'
import { API_URL } from './config'
import axios from 'axios'

export default function SignIn(props) {
	const { onSubmit } = props
	const { user, setUser } = useContext(UserContext)
	const [myError, setError] = useState(null)

	const handleSignIn = async (event) => {
		event.preventDefault()
		try {
			let newUser = {
				email: event.target.email.value,
				password: event.target.password.value,
			}

			let response = await axios.post(`${API_URL}/signin`, newUser, { withCredentials: true })
			setUser(response.data)
		} catch (err) {
			setError(err.response.data)
		}
	}
	return (
		<>
			<Link to="/signup">{"Don't have an account? Sign Up"}</Link>
			<form onSubmit={handleSignIn}>
				<h3>Log In</h3>
				<input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
				<input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
				<button type="submit" class="fadeIn fourth">
					Submit
				</button>
			</form>
		</>
	)
}
