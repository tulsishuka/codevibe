import { useState } from 'react'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password  })
      })
      const newUser = await response.json();
if (response.ok) {
  alert("Login submitted successfully");
  setpassword("");
  setemail("");
  navigate("/Dashboard");

} else {
  alert("Submission failed: " + newUser.message);
}     
    } catch (error) {
      console.log("error", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
  <div className="bg-white rounded-2xl shadow-xl p-8 w-[45vw] max-w-md">
    <h1 className="text-center font-bold text-2xl text-gray-800 mb-6">Registration Page</h1>

    <form onSubmit={handleSubmit}className="flex flex-col gap-5">
<input value={email}onChange={(e) => {setemail(e.target.value);}}className="p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"placeholder="Email"type="email"name="email"/>
<input    value={password}onChange={(e) => {setpassword(e.target.value);}}className="p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"placeholder="Password"type="text"name="password"/>
      <button type="submit" className="p-3 mt-2 bg-gray-600 text-white hover:bg-red-700 transition rounded-lg text-white font-semibold">Submit</button>
            <Link to="/">Register Your Account</Link>
      
    </form>
  </div>
</div>

  )
}

export default Login