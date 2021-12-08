import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppointmentListPage from './components/appointment/AppointmentListPage'
import ArticleListPage from './components/article/ArticleListPage'
import AboutPage from './components/misc/AboutPage'
import Header from './components/misc/Header'
import HomePage from './components/misc/HomePage'
import ProfilePage from './components/user/ProfilePage'

export default function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/articles" element={<AppointmentListPage />} />
				<Route path="/appointments" element={<ArticleListPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	)
}
