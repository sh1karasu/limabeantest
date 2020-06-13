import React from 'react';
import {Container, Segment, Header, Image, Button, Grid} from 'semantic-ui-react';

const ImageContainer = () => {
    return (
        <Container>
            <Grid centered>
            <Grid.Row>
                <Grid.Column >
                    <Image className="page-header" style={{zIndex: -1, marginTop: -35, display: 'block'}} src={require('./images/headerBackground.jpg')} />
                </Grid.Column>
            </Grid.Row>
            </Grid>
            <Segment className="header-text" basic>
                <Grid >
                    <Grid.Row fluid>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Header style={{fontSize: '4vh', color: 'white', width: 300}}>
                            SHARE YOUR <br />DREAM HOLIDAY
                        </Header>
                       
                        <Header style={{color: '#CDCDCD', fontSize: '2vh', width: 300}}>
                           And find the perfect partner to fulfill it
                        </Header>
            
                        <Button style={{
                                        backgroundColor: 'red' , 
                                        color: 'white',
                                        marginTop: 10,
                                        borderRadius: 50,
                                        fontSize: '1.4vh',
                                        fontFamily: 'Montserrat',
                                        width: 300
                                        }} 
                                        outline >
                                Find your holiday partner
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </Segment>
        </Container>
        
    )
}

export default ImageContainer;