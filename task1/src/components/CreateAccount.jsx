import { Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { AlignDiv, SmallText, MediumButton } from '../styles/StyledComponents'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const CreateAccount = () => {
  return (
    <div>
        <Grid>
            <AlignDiv>
                <Grid align={'right'}>
                    <Typography variant=''>
                        Do you have account?  
                        <b><Link to='/login'>Sign In</Link></b>                  
                    </Typography>
                </Grid>

                <h2>Create Account</h2>                
                <SmallText> Follow the instructions to make it easier to register and you will be able to register inside. </SmallText>

                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonIcon/>
                        </InputAdornment>
                    ),                    
                    }}
                    placeholder="Username"
                    variant="filled"
                    fullWidth
                    sx={{marginY: 2}}                                      
                />

                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    ),                    
                    }}
                    placeholder="Email"
                    variant="filled"
                    fullWidth
                    sx={{marginY: 2}}                                      
                />

                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOpenIcon />
                        </InputAdornment>
                    ),                    
                    }}
                    placeholder="Password"
                    variant="filled"
                    fullWidth
                    sx={{marginY: 2}}                                      
                />

            <Link to='#'>
                <Button type='submit' color='primary' variant='contained' fullWidth >
                    Create Account
                </Button>
            </Link>

            <Stack spacing={2} direction='row'>
                <Link to='#'>
                    <MediumButton startIcon={<GoogleIcon/>}>
                        Google
                    </MediumButton>
                </Link>
                <Link to='#'>
                    <MediumButton startIcon={<FacebookIcon/>}>
                        Facebook
                    </MediumButton>
                </Link>
            </Stack>
                        
            </AlignDiv>
        </Grid>
    </div>
  )
}

export default CreateAccount