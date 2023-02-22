import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault();

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
            .then()

        alert("hello")
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800">Login</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter username.." 
                            class="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter password.." 
                            class="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-secondary w-full">
                        Submit
                    </button>
                </form>
            </div>
        </>
     );
}
 
export default Signup;