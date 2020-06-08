import React from 'react';
import { Text, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const CardDetail = (props) => {
    const imagePhoto = props.album.image;
    return(
    <Card>
        <CardSection>
            <Text>{props.album.title}</Text>
        </CardSection>
        <CardSection>
            <Image 
            source={{uri:imagePhoto}}
            style={{ width: 100, height: 100 }}
            />
        </CardSection>
        <CardSection>
            <Text>{props.album.artist}</Text>
            <Text>{props.album.url}</Text>
        </CardSection>
        <CardSection>
            <Button
                title="Learn More"
            />
        </CardSection>
        
    </Card>
    );
};

export default CardDetail;