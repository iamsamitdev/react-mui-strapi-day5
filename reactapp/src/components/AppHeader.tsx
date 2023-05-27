import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import LanguageOutlined from "@mui/icons-material/LanguageOutlined"
import { Logout, Money, Settings, Person } from "@mui/icons-material"
import { useProSidebar } from "react-pro-sidebar"
import { useState } from "react"

const AppHeader = () => {
  
    // useProSidebar hook to control the sidebar
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Perform logout action
        // Example: clear authentication token, redirect to login page, etc.
    };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()}
                    color="secondary">
                    <MenuIcon />
                </IconButton>
                <Box
                    component={'img'}
                    sx={styles.appLogo}
                    src="/assets/logo_round.png" />
                <Box sx={{ ml: '20px', fontSize: '20px' }}>React Stock</Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton title="Notifications" color="secondary">
                    <NotificationsOutlined />
                </IconButton>
                <IconButton title="Language" color="secondary">
                    <LanguageOutlined />
                </IconButton>
                <IconButton
                    size="large"
                    aria-controls="menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleMenuOpen}
                >
                    <Avatar src="/assets/samit.jpg" alt="Avatar" sx={{ width: 28, height: 28 }} />
                </IconButton>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} sx={{px:'30px'}}>
                        <Person sx={{ fontSize:'16px', mr:'20px' }} /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{px:'30px'}}>
                        <Settings sx={{ fontSize:'16px', mr:'20px' }} /> Settings
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{px:'30px'}}>
                        <Money sx={{ fontSize:'16px', mr:'20px' }} /> Billing
                    </MenuItem>
                    <MenuItem onClick={handleLogout} sx={{px:'30px'}}>
                        <Logout sx={{ fontSize:'16px', mr:'20px' }} /> Logout
                    </MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
  )
}

const styles = {
    appBar: {
        bgcolor: 'teal'
    },
    appLogo: {
        borderRadius: 2,
        width: 40,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader