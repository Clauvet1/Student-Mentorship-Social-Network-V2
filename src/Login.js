import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "./firebase.config";
// import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { db } from "./firebase.config"; // assuming you have initialized your Firestore database here

const Login = () => {
  const [userType, setUserType] = useState("mentor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Check if the user's email and password exist in the 'users' collection
      const userDoc = await db.collection('users')
                              .doc(userType)
                              .collection(userType)
                              .where('email', '==', email)
                              .where('password', '==', password).get();
      if (!userDoc.empty) {
        // If the user's email and password exist in the 'users' collection, authenticate them with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        if (user) {
          // Redirect the user based on their userType
          if (userType === "mentor") {
            history.replace("/mentor pages/mentorProfile");
          } else {
            history.replace("/mentee pages/menteeProfile");
          }
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log("Error in handleLogin:", error);
      if (error.code === "auth/user-not-found") {
        // If the user is not found, show an error message
        alert("Invalid email or password");
      } else {
        // If there is a network error or some other issue, show a different error message
        alert("An error occurred while logging in. Please try again later.");
      }
    }
  };

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // Query the Firestore collection to find the user with the given email and password
  //     const q = query(collection(db, "users"), where("email", "==", email), where("password", "==", password));
  //     const querySnapshot = await getDocs(q);
  //     if (querySnapshot.size === 1) {
  //       // If a user is found, authenticate them with Firebase Authentication
  //       const userCredential = await signInWithEmailAndPassword(email, password);
  //       const user = userCredential.user;
  //       if (user) {
  //         // Redirect the user based on their userType
  //         if (userType === "mentor") {
  //           history.replace("/mentor pages/mentorProfile");
  //         } else {
  //           history.replace("/mentee pages/menteeProfile");
  //         }
  //       }
  //     } else {
  //       // If no user is found, show an error message
  //       alert("Invalid email or password");
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="user-type">
        <button className={userType === "mentor" ? "active" : ""} onClick={() => handleUserTypeChange("mentor")}>
          Mentor
        </button>
        <button className={userType === "mentee" ? "active" : ""} onClick={() => handleUserTypeChange("mentee")}>
          Mentee
        </button>
      </div>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className=" mt-4 px-5 rounded-5" type="submit">
          Login as {userType}
        </button>
      </form>
      <div className="py-3">
        <Link className="loginLinks" to="/signUp">
          Forgot password
        </Link>
        <p>Do no have an account?</p>
        <Link className="loginLinks" to="/signUp">
          SignUp as either mentee or mentor
        </Link>
      </div>
    </div>
  );
};

export default Login;