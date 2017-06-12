import React from 'react';

class OpenHours extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            open: props.open
        };

        this.handleToggle = this.handleToggle.bind(this)
    }

    render()
    {
        const isOpen = this.state.open;
        return (
            <div>
                {(isOpen) ? <p> We are open! </p> : <p> Fuck off asshole! </p>}
                <button onClick={this.handleToggle}>Toggle</button>
            </div>
        );
    }
    
    handleToggle(e)
    {
        this.setState({
            open: !this.state.open
        });
    }
}

export default OpenHours;
