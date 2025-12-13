import { useState } from 'react'
import { useNavigate } from "react-router";

const App = () => {
    let navigate = useNavigate();

const [username, setusername] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email,password  })
      })
      const newUser = await response.json();
if (response.ok) {
  alert("form submitted successfully");
  setemail("");
  setusername("");
    setpassword("");
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
  <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8">
    
    <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Create Your Account</h1>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
               <input value={username} onChange={(e) => setusername(e.target.value)} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"placeholder="Username"type="text"/>
          <input    value={email} onChange={(e) => setemail(e.target.value)}className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"placeholder="Email"type="email"/>
      <input value={password} onChange={(e) => setpassword(e.target.value)} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Password"type="password"/>

      <button type="submit" className="mt-4 bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg">Register</button>
    </form>

    <p className="text-center text-sm text-gray-500 mt-4">Already have an account? <span className="text-red-600 cursor-pointer hover:underline">Login</span></p>
  </div>
</div>

  )
}

export default App