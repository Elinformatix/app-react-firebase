import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Dashboard from "./routes/dashboard";
import Profile from "./routes/profile";
import UsernameView from "./routes/usernameView";
import LoginV2 from "./routes/loginv2";
import EditProfile from "./routes/editProfile";
import SignOut from "./routes/signout";
import Cadastro from "./components/cadastro/Cadastro"
import Painel from "./containers/painel/painel";
import Admin from "./containers/sunsetAdmin";
import "./i18n"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";


ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginV2 />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/profile" element={<EditProfile />} />
      <Route path="signout" element={<SignOut />} />
      <Route path="u/:username" element={<Profile />} />
      <Route path="choose-username" element={<UsernameView />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="painel" element={<Painel />} />
      <Route path="admin/*" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
