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
    
    <div>
      <div className="">
      <h1 className="text-center font-bold text-lg">
        Registation Page
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[45vw] m-auto mt-10">

        <input  value={username} onChange={(e) => { setusername(e.target.value);}}  className="p-2 bg-gray-400  text-white"  placeholder='username'  type='text' name='text'/>
                <input value={email} onChange={(e) => { setemail(e.target.value);}} className="p-2 bg-gray-400  text-white" placeholder='email'  type='email' name='email'/>
                <input value={password} onChange={(e) => { setpassword(e.target.value);}} className="p-2 bg-gray-400  text-white" placeholder='password'  type='text' name='password'/>

<button  type='submit' className="p-2 bg-red-900  text-white">submit</button>
      </form>
      </div>
    </div>
  )
}

export default App