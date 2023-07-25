import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface inputType{
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:inputType, ref) => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        label = {props.placeholder}
        type='text'
        {...props}
      ></TextField>
    );
  });

export const InputPassword = forwardRef((props: inputType, ref) => {
  return (
    <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            label = {props.placeholder}
            type="password"
            {...props}
        ></TextField>
  )
})