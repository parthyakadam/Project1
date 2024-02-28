import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import LockIcon from '@mui/icons-material/Lock'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Grid>      
        <Paper elevation={10} sx={{padding:5, height:'70vh', width:250, margin: '20px auto'}}>
            <Grid align={'center'}>
                <Avatar sx={{ bgcolor: green[500] }}><LockIcon /></Avatar>
                <h2>Sign In</h2>    
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullWidth required sx={{paddingBottom: 1}}/>
            
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required sx={{paddingBottom: 1}}/>

            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            
            <Link to='/home'>
              <Button type='submit' color='primary' variant='contained' fullWidth >Sign In</Button>
            </Link>
            
            <Typography sx={{paddingY: 1}}>
              
            </Typography>
            <Typography sx={{paddingY: 1}}> Do you have an account? 
              <b><Link to='/register'>Sign Up</Link></b>
            </Typography>
        </Paper>        
    </Grid>
  )
}

export default Login