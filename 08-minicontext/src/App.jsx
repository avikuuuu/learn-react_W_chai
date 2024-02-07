import Login from "./components/Login";
import Profile from "./components/profile";
import UserContextProvider from "./context/userContextProvider";

export default function App() {
  return (
    <UserContextProvider >
      <Login />
      <Profile />
    </UserContextProvider>
  )
}


