import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import './styling.css';

const ButtonComponent = () => {
    return (
        <Segment basic>
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                    <Button style={{
                        backgroundColor: 'white' , 
                        color: 'red', 
                        border: 'solid red' ,
                        paddingRight: 30, 
                        paddingLeft: 30,
                        marginTop: 30,
                        borderRadius: 50, 
                        fontSize: 17}} 
                        outline >
                            See other partners
                    </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ButtonComponent;
