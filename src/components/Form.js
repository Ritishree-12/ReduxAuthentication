// import React, { useState } from "react";
// import "./form.css";

// const Form = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Basic validation
//         if (!name.trim() || !email.trim() || !password.trim()) {
//             setError("Please fill out all fields");
//             return;
//         }

//         // If all fields are filled, you can proceed with your logic here
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Password:", password);

//         // Clear the form fields
//         setName("");
//         setEmail("");
//         setPassword("");
//         setError("");
//     };

//     return (
//         <div className="login">
//             <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
//                 <h1>Login Here 📝</h1>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit" className="submit_btn">
//                     Submit
//                 </button>
//                 {error && <p className="error">{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default Form;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./form.css";


const Form= () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e,'submit')
      dispatch(
        login({
         name: name,
         email: email,
         password: password,
         loggedIn: true,
        })
      );
    };

    return (
        <div className="login">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login Here 📝</h1>
            <input
             type="name" 
             placeholder="Name" 
             value={name} 
             onChange={(e) => setName(e.target.value)}
            />
            <input 
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
            />
            <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" className="submit_btn">
              submit
            </button>
          </form>
        </div>
    );
};
export default Form