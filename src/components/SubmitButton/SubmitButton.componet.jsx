import React from 'react';
import { Button } from '../SubmitButton/SubmitButton.styles'

export const SubmitButton = ({children, onClick, disabled}) => 
<Button onClick={onClick} disabled={disabled}>{children}</Button>