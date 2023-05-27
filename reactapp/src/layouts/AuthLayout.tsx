import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
        <Box>
            <Outlet />
        </Box>
    </>
  )
}

export default AuthLayout