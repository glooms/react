import React from 'react';
import ButtonPad from './ButtonPad';
import NumberField from './NumberField';

class Layout extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <div>
                <NumberField />
                <ButtonPad />
            </div>
        );
    }
}

export default Layout;
