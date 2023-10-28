import React, { useState } from 'react'
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
	const navigate = useNavigate()
	const initialstate = {
		email: "",
		password: ""
	}
	const [formstate, setformstate] = useState(initialstate);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setformstate({
			...formstate,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		axios("https://inclregistrationform.vercel.app/user/signin", {
			method: "POST",
			data: formstate
		})
			.then((res) => {
				setLoading(false)
				if (res.data.error) {
					alert(res.data.message)
				} else {
					alert(res.data.message)
					sessionStorage.setItem("token", res.data.token)
					navigate("/welcome")
				}
			})
			.catch((err) => {
				setLoading(false)
				alert(err.message)
			})
	}

	return (
		<section className='bg-gray-900 h-screen w-screen flex items-center justify-center'>
			<form onSubmit={handleSubmit} className='w-[40vw] bg-gray-600 p-8 rounded-xl'>
				<h1 className='text-3xl font-bold text-white mb-8 text-center'>Sign In Form</h1>
				<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
				<input onChange={handleChange} type="email" id="email" value={formstate.email} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@test.com" required />
				<div className="mb-6 mt-3">
					<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
					<input onChange={handleChange} type="password" id="password" value={formstate.password} className="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className='flex justify-center'>
					<button disabled={loading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-24 flex justify-center px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-400">{loading ? <Spinner /> : "Submit"}</button>
				</div>
				<div className='text text-white flex justify-center gap-2 mt-2 text-sm'>
					<p>Don't have an account?</p>
					<Link to={"/"} className='text-sm text-blue-600 underline underline-offset-2'>Sign Up</Link>
				</div>
			</form>
		</section>
	)
}

export default SignIn
