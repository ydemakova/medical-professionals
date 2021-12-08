import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../config'

export default function SignUp() {
	const navigate = useNavigate()
	const handleSignUp = async (event) => {
		event.preventDefault()

		let newUser = {
			firstName: event.target.firstname.value,
			lastName: event.target.lastname.value,
			userName: event.target.username.value,
			password: event.target.password.value,
			email: event.target.password.value,
		}
		await axios.post(`${API_URL}/signup`, newUser, {
			withCredentials: true,
		})
		navigate('/signin')
	}
	return (
		<>
			<h3>Sign Up </h3>
			<Link to="/signin">
				{'Already have an account? Sign In instead'}
			</Link>
			<form className="sign-up">
				<div className="form-row">
					<div className="col-md-3 mb-3">
						<label for="firstname">First name</label>
						<input
							type="text"
							className="form-control"
							id="firstname"
							name="firstname"
							placeholder="Jack"
							required
						/>
					</div>
					<div className="col-md-3 mb-3">
						<label for="lastname">Last name</label>
						<input
							type="text"
							className="form-control"
							id="lastname"
							name="lastname"
							placeholder="Sparrow"
							required
						/>
					</div>

					<div className="col-md-3 mb-3">
						<label for="username">Username</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<span
									className="input-group-text"
									id="username"
								>
									@
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								id="username"
								name="username"
								placeholder="Username"
								aria-describedby="username"
								required
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value=""
							id="invalidCheck2"
							required
						/>
						<label className="form-check-label" for="invalidCheck2">
							Agree to terms and conditions
						</label>
					</div>
				</div>
				<button className="btn btn-primary" type="submit">
					Submit form
				</button>
			</form>
		</>
	)
}
