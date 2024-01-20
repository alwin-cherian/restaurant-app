import React from 'react';
import { styled } from '@mui/system';

const FormRoot = styled('form')(({ theme }) => ({
    '& .MuiFormControl-root': {
        width: '90%',
        margin: theme.spacing(1),
    },
}));

export default function Form(props) {
    const { children, ...other } = props;

    return <FormRoot noValidate autoComplete="off" {...other}>{children}</FormRoot>;
}
    