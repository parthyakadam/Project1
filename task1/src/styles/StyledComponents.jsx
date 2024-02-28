import { Button, Paper, Typography, styled } from "@mui/material"

export const CustomPaper = styled(Paper)({
    padding: 5, 
    height: '70vh',
    width: '300px', 
    margin: '20px auto',    
    
})

export const AlignDiv = styled('div')({
    padding: 5, 
    height: '70vh',
    width: '350px', 
    margin: '20px auto',    
    
})

export const SmallText = styled(Typography)({
    fontSize: 10,
    color: 'secondary',

})

export const MediumButton = styled(Button)({
    width: '150px',
    height: '35px',
    margin: '10px',
    padding: 5,
    border: '1px solid grey',
})
