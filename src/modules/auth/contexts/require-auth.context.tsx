import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth.context";


export function RequireAuth() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

