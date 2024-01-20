import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    '& .MuiButton-label': {
        textTransform: 'none',
    },
}));

export default function MyButton(props) {
    const { children, color, variant, onClick, className, ...other } = props;

    return (
        <StyledButton
            className={className}
            variant={variant || "contained"}
            color={color || "default"}
            onClick={onClick}
            {...other}
        >
            {children}
        </StyledButton>
    );
}
