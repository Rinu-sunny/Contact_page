import React from 'react';
import { Container, Typography,Paper, } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactForm from './contactpg.jsx';

   const theme=createTheme({
     typography:{
       fontFamily:['arial']
     },
     palette:{
    primary:{
     main:'#1976d2', 
     },
    },
   });
function App(){
  return (
    <ThemeProvider theme={theme}>
    <Container  maxWidth="sm" >
      <Paper elevation={3} sx={{ p: 3,borderRadius:8,                    
         marginTop:'65px',                     
         display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh', 
          padding: '20px',
          }}>
      <Typography variant="h4" align="center" gutterBottom sx={{color:'#5c6bc0'}}>
        Connect with us
      </Typography>
      <ContactForm />
      </Paper>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)', 
        zIndex: -1, 
        }} />
    </Container>
    </ThemeProvider>
  );
}

export default App;

