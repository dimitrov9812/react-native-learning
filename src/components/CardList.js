import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CardDetail from '../components/CardDetail';

class CardList extends React.Component {
    state = {
        albums: []
    };
    componentDidMount(){
        console.log("test");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums:response.data}));
    }
    componentDidUpdate(){
        console.log("Update");
    }
    renderAlbums(){
        return this.state.albums.map((album) => 
        <CardDetail
        album = {album}
         />
        )
    }
    render(){
        console.log(this.state)
        return (
            <View>
                {this.renderAlbums()}
            </View>
        
        );
    };
};

export default CardList;

