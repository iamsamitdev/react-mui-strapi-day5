// import { ReactNode } from "react"
import { Navigate } from 'react-router-dom'

// Get Token from Local Storage
const token = localStorage.getItem("token")

// type ProtectedRouteProps = {
//     redirectPath?: string,
//     children: ReactNode | string | number | boolean | React.ReactFragment | JSX.Element | null | undefined
// }

const ProtectedRoute = ({ 
    redirectPath ="/",
    children
}: any) => {
    if (!token) {
        return <Navigate to={redirectPath} />
    }
    return children
}

export default ProtectedRoute