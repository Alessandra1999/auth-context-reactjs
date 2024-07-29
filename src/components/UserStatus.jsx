import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const UserStatus = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <h1>
            {isAuth ? 'Usuário está logado' : 'Usuário está deslogado'}
        </h1>
    )
}

export default UserStatus