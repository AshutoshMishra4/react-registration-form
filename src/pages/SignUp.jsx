import React, { useState } from 'react'
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
	const navigate = useNavigate()
	const initialstate = {
		name: "",
		email: "",
		password: "",
		confpassword: "",
		phone: "",
		age: 0,
		college: "",
		details: ""
	}
	const [formstate, setformstate] = useState(initialstate);
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		setformstate({
			...formstate,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (formstate.password === formstate.confpassword) {
			setLoading(true)
			axios("https://inclregistrationform.vercel.app/user/signup", {
				method: "POST",
				data: formstate
			})
				.then((res) => {
					setLoading(false)
					if (!res.data.error) {
						alert(res.data.message, "Please sign in")
						navigate("/signin")
					} else {
						alert(res.data.message)
					}
				})
				.catch((err) => {
					setLoading(false)
					alert(err.message)
				})
		} else {
			alert("Passwords doesn't match!")
		}
	}
	return (
		<section className='bg-gray-900 h-screen w-screen flex items-center justify-center'>
			<form onSubmit={handleSubmit} className='w-[50vw] bg-gray-600 p-8 rounded-xl'>
				<h1 className='text-3xl font-bold text-white mb-8 text-center'>Sign Up Form</h1>
				<div className="mb-3 mt-3">
					<label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
					<input onChange={handleChange} value={formstate.name} type="text" id="name" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Test User" required />
				</div>
				<div className='grid grid-cols-2 gap-x-4'>
					<div className="mb-3 ">
						<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
						<input onChange={handleChange} value={formstate.email} type="email" id="email" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@test.com" required />
					</div>
					<div className="mb-3 ">
						<label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
						<input onChange={handleChange} value={formstate.phone} type="text" id="phone" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 88888 88888" required />
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-4'>
					<div className="mb-3">
						<label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
						<input onChange={handleChange} value={formstate.age} type="number" id="age" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your age" required />
					</div>
					<div className="mb-3">
						<label for="college" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College</label>
						<input onChange={handleChange} value={formstate.college} type="text" id="college" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your college" required />
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-4'>
					<div className="mb-3 ">
						<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
						<input onChange={handleChange} value={formstate.password} type="password" id="password" className="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your password' required />
					</div>
					<div className="mb-3">
						<label for="confpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Your password</label>
						<input onChange={handleChange} value={formstate.confpassword} type="password" id="confpassword" className="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Confirm your password' required />
					</div>
				</div>
				<div className="mb-3">
					<label for="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
					<textarea onChange={handleChange} value={formstate.details} id="details" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-32" placeholder="Enter your details" required ></textarea>
				</div>
				<div className='flex justify-center'>
					<button disabled={loading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-24 flex justify-center px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-400">{loading ? <Spinner /> : "Submit"}</button>
				</div>
				<div className='text text-white flex justify-center gap-2 mt-2 text-sm'>
					<p>Already have an account?</p>
					<Link to={"/signin"} className='text-sm text-blue-600 underline underline-offset-2'>Sign In</Link>
				</div>
			</form>
		</section>
	)
}

export default SignUp
