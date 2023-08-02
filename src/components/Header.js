import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        Phone Shop
                    </Typography>
                    <IconButton color='inherit'>
                        <ShoppingBasket /> 
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
