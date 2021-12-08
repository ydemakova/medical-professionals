import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { API_URL } from './config'

function App() {
	const handleLogout = async () => {
		await axios.post(`${API_URL}/logout`, {}, { withCredentials: true })
		// setUser(null)
	}
	return (
		<div className="App">
			<Routes>
				<Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	)
}

export default App
