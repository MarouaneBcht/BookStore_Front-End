import React, { useState } from 'react';
import { AppBar, CssBaseline, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const themeLight = createTheme({
    palette: {
        background: {
            default: "#e4f0e2"
        }
    }
});

const themeDark = createTheme({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

const Header = () => {

    const [value, setValue] = useState();
    const [light, setLight] = React.useState(true);
    return (
        <div>
            <ThemeProvider theme={light ? themeLight : themeDark}>
                <CssBaseline />
                <AppBar sx={{ backgroundColor: 'black' }} position='sticky'>
                    <Toolbar>
                        <Button onClick={() => setLight((prev) => !prev)} >
                            <Typography variant="h6" color="lightblue"  >Theme</Typography>
                        </Button>
                        <NavLink to="/" style={{ color: "white" }}>
                            <Typography>
                                <LibraryBooksIcon />
                            </Typography>
                        </NavLink>
                        <Tabs sx={{ ml: 'auto' }} textColor='inherit' indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                            <Tab LinkComponent={NavLink} to="/add" label='Add product' />
                            <Tab LinkComponent={NavLink} to="/books" label='Books' />
                            <Tab LinkComponent={NavLink} to="/about" label='About Us' />
                            <Tab LinkComponent={NavLink} to="/account" label='Account' />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ThemeProvider >
        </div>
    )
}

export default Header