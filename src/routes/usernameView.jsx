import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import {
  auth,
  existsUsername,
  getUserInfo,
  read,
  registerNewUser,
  updateUser,
  userExists,
} from "../firebase/firebase";

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: username exists
  6: username correct
*/
export default function UsernameView() {
  const [currentUser, setCurrentUser] = useState(null);
  const [state, setState] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    setState(1);
    onAuthStateChanged(auth, callBackAuthState);
  }, []);

  async function callBackAuthState(user) {
    if (user) {
      const uid = user.uid;
      console.log(user);

      if (userExists(user.uid)) {
        const loggedUser = await getUserInfo(uid);
        setCurrentUser(loggedUser);
        if (loggedUser.username === "") {
          setState(3);
          console.log("Falta username");
        } else {
          setState(6);
          console.log("Ya tiene username", state);
          //navigate("/dashboard");
        }
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }

  function handleInputUsername(e) {
    const tmpUser = currentUser;
    const value = e.target.value;
    tmpUser.username = value;
    setCurrentUser({ ...tmpUser });
  }

  async function handleOnClickContinue() {
    if (currentUser.username !== "") {
      const exists = await existsUsername(currentUser.username);
      if (exists) {
        setState(5);
      } else {
        await updateUser(currentUser);
        setState(6);
      }
    }
  }

  if (state === 6) {
    return (
      <div>
        <h1>Congratulations! now you can go to the dashboard</h1>
        <button onClick={handleFinishProcess}>Go to dashboard</button>
        <Link to="/dashboard">Continue</Link>
      </div>
    );
  }

  if (state === 3) {
    return (
      <div>
        <h1>Bienvenido {setCurrentUser.displayName}, te falta un username</h1>
        <div>
          <input type="text" onInput={handleInputUsername} />
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}
