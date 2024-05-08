import { Button } from '@chakra-ui/react';
import React, { Children } from 'react';


export default function CustomButton({ children, ...props }) {
    return (
        <Button colorScheme="green" {...props}>
            {children}
        </Button>
    );
}