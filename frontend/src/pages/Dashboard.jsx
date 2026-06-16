import React from "react"
import "../styles/Dashboard.css"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuth();

    const handleLogout = () => {
        if (logOut()) {
            navigate("/")
        }
    };

    const handleInformaation = () => {
        navigate("/information")
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-title">¡Bienvenido al Dashboard!</h1>
                <p className="dashboard-user">
                    Hola, <span>{user || "Ususario logueado"} </span>
                </p>
                <button className="dashboard-button" onClick={handleLogout}>
                    Cerrar sesion
                </button>
                <button className="dashboard-button" onClick={handleInformaation}>
                    Informacion
                </button>
            </div>
        </div>
    );
};

export default Dashboard;