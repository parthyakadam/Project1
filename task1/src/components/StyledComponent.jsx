import { styled } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'

const StyledBox = styled(Box)({
    backgroundColor: 'grey',
    width: '500px',
    height: '1000px'
})

const StyledComponent = () => {
  return (
    <StyledBox>jnjkas</StyledBox>
  )
}

export default StyledComponent