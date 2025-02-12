import { makeStyles } from '@mui/styles';

export const navbarStyles = makeStyles((theme) => ({
    mainDiv: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '100%'
    },
    linkButton: {
        color: 'inherit',
        textDecoration: 'none', // Ensure underline
    }
}))