import { AuthProvider } from "./components/AuthContext"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import UserStatus from "./components/UserStatus"


function App() {

  return (
    <>
      <AuthProvider>
        <div id="text">
          <UserStatus />
          <div id="button">
          <LoginButton />
          <LogoutButton />
          </div>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
