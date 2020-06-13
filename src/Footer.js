import React, {Component} from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import './styling.css';

class Footer extends Component {
    render() {
        return (
            <Segment basic style={{borderTop: '5px solid red', paddingTop: 50, marginLeft: 100, marginRight: 100 }}>
                <Grid centered divided='vertically'>
                <Grid.Row columns={6}>
                    <Grid.Column mobile={16} tablet={6} computer={3}>
                        <Header style={{color: '#FF4E50', fontSize: 20}} >DREAMSHARE</Header>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={3} computer={3}>
                        <Header  as='h3'>Company</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>About</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Contact</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Press</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Blog</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Tems and Privacy</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Help</Header>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={3} computer={3}>
                        <Header  as='h3'>Activities</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Sports</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Wellness</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Expeditions</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Games</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Culture and Education</Header>
                        <Header style={{color: '#FF4E50', fontWeight: 'normal'}} as='h3'>View All</Header>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={3} computer={3}>
                        <Header as='h3'>Contact Us</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Tel: (000) 000-0000</Header>
                        <Header style={{color: '#666666', fontWeight: 'normal'}} as='h3'>Email: dreamshare@email.com</Header>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Footer;