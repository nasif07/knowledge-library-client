import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    

    if(loading){
        return <span className="loading loading-bars loading-lg mx-auto"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;