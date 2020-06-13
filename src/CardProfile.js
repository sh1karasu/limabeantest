import React, { Component } from 'react';
import './styling.css';
import { Container, Card, Image, Header, Grid, Icon, Segment } from 'semantic-ui-react';

class CardProfile extends Component {
    render () {
        return (
        <Container>
            <Segment className="card-row-segment" basic>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column style={{padding: 30}} mobile={10} tablet={6} computer={4}> 
                        <Card.Group  >
                        <Card.Content>
                            <Image className="image" src={require('./images/partner1.jpg')} circular centered />
                            <Icon style={{marginLeft: 140}} className="music-icon" circular name='music' size="large" />
                            
                                <Header textAlign='center' ><strong>Bradley Hunter</strong></Header>
                                <Header textAlign='center' as='h4' color='grey'>
                                    Based in Chicago. I love playing Tennis and loud music
                                </Header>
                        
                        </Card.Content>
                        </Card.Group>
                        </Grid.Column>

                        <Grid.Column style={{padding: 30}} mobile={10} tablet={6} computer={4}> 
                        <Card.Group  >
                        <Card.Content >
                            <Image className="image" src={require('./images/partner2.jpg')} circular centered />
                            <Icon style={{marginLeft: 140}} className="paint-icon" circular name='paint brush' size="large" />
                            
                                <Header textAlign='center'><strong>Marie Bennet</strong></Header>
                                <Header textAlign='center' as='h4' color='grey'>
                                    Currently living in Colorado. Love of art, language and travelling.
                                </Header>
                        
                        </Card.Content>
                        </Card.Group>
                        </Grid.Column>

                        <Grid.Column style={{padding: 30}} mobile={10} tablet={6} computer={4}> 
                        <Card.Group  >
                        <Card.Content >
                            <Image className="image" src={require('./images/partner3.jpg')} circular centered />
                            <Icon style={{marginLeft: 140}} className="photo-icon" circular name='photo' size="large" />
                               
                                <Header textAlign='center'><strong>Diana Wells</strong></Header>
                                <Header textAlign='center' as='h4' color='grey'>
                                    Living in Athens, Greece. I love black and white classics, chillout music and green tea.
                                </Header>
                        </Card.Content>
                        </Card.Group>
                        </Grid.Column>

                        <Grid.Column style={{padding: 30}} mobile={10} tablet={6} computer={4}> 
                        <Card.Group  >
                        <Card.Content>
                            <Image className="image" src={require('./images/partner4.jpg')} circular centered />
                            <Icon style={{marginLeft: 140}} className="music-icon" circular name='music' size="large" />
                            
                                <Header textAlign='center'><strong>Christopher Pierce</strong></Header>
                                <Header textAlign='center' as='h4' color='grey'>
                                    Star Wars fanatic. i have a persistent enthusiasm to create new things.
                                </Header>
                        
                        </Card.Content>
                        </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
        

        )
    }
}

export default CardProfile;