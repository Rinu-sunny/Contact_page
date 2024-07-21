import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const[emailError, setEmailError]= useState(false);
  const[nameError, setNameError]= useState(false);
  const[messageError, setMessageError]= useState(false);
 
  const validateEmail=(email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!validateEmail(email.trim())){
      setEmailError(true);
      return;
    }

    setEmailError(false);
    
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!message.trim()) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if(name.trim()&&validateEmail(email.trim())&&message.trim()){
      console.log('Submitting Form:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
    }else{
      alert('Please fill all the required fields');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          mb: 2,
          width: '100%',
        },
        '& .MuiButton-root': {
          mt: 2,
          width: '100%',
          maxWidth: '400px',
          display:'block',
          margin:'0 auto',
        },
        '& .MuiFormHelperText-root': {
          color: 'red',
        },
        
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >  
      <Grid container spacing={2}>
        <Grid item xs={12}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        error={nameError}
        helperText={nameError?'Please enter your name':''}
      /> 
        </Grid>
        <Grid item xs={12}>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        error={emailError}
        helperText={emailError? 'enter a valid email address':''}
      />
        </Grid>
          <Grid item xs={12}>
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        error={messageError}
        helperText={messageError?'Please enter your message':''}
      />
          </Grid>
        <Grid item xs={12}>
      <Button variant="contained" color="primary" type="submit" >
        Submit
      </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
