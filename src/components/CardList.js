import React from 'react';
import { View, ScrollView} from 'react-native';
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
    onPress() {
        console.log(albums.title);
    }
    renderAlbums(){
        return this.state.albums.map((album) => 
        <CardDetail
        key = {album.title}
        album = {album}
         />
        )
    }
    render(){
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        
        );
    };
};

export default CardList;

