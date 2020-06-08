import React from 'react';
import { View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CardDetail = (props) => {
    const imagePhoto = props.album.image;
    const smallPhoto = props.album.thumbnail_image;
    const { headingText, subHeadingText, flexColumn, coverImageStyle } = styles;
    return(
    <Card> 
        <CardSection>
            <Image 
                source={{uri:smallPhoto}}
                style={{ width: 40, height: 40 }}
            />
            <View style={flexColumn}>
                <Text style = {headingText}>{props.album.title}</Text>
                <Text style = {subHeadingText}>{props.album.artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image 
                source={{uri:imagePhoto}}
                style={coverImageStyle}
            />
        </CardSection>
        <CardSection>
            <Text>{props.album.url}</Text>
        </CardSection>
        <CardSection>
            <Button onPress={() => Linking.openURL(props.album.url)}>
                Buy Now
            </Button>
        </CardSection>
        
    </Card>
    );
};

const styles = {
    flexColumn: {
        flexDirection: 'column',
        marginLeft: 5,
        justifyContent: 'space-around'
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subHeadingText: {
        fontSize: 15,
        color: 'darkgrey'
    },
    coverImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}; 

export default CardDetail;