import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList

} from 'react-native';

import Carousel from 'react-native-anchor-carousel';

import Icon from 'react-native-vector-icons/FontAwesome';





const Home = () => {

  const [background, setbackground] = useState(
    {
      uri: 'https://lh3.googleusercontent.com/XDg-bt655am_Q-7X-I0s64Kq8SJKfb7BBTHkUVbFR6-zDNv9J7rW61xZn0BB3SVCJ6gz',
      name: 'Avengers: End Game',
      stat: '2019 Action/sci-fi  3h 2m',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    }
  );

  const [gallery, setgallery] = useState([
    {
      image: 'https://lh3.googleusercontent.com/XDg-bt655am_Q-7X-I0s64Kq8SJKfb7BBTHkUVbFR6-zDNv9J7rW61xZn0BB3SVCJ6gz',
      title: 'Avengers: End Game',
      released: '2019 Action/sci-fi  3h 2m',
      key: '1',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Frozen_2_poster.jpg',
      title: 'Frozen 2',
      released: '2019 Action/sci-fi  3h 2m',
      key: '2',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Alita_Battle_Angel_%282019_poster%29.png',
      title: 'Alita Battle Angel',
      released: '2019 Action/sci-fi  3h 2m',
      key: '3',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    },
    {
      image: 'https://1.bp.blogspot.com/-WajuSBTE4A0/XQd15LgLONI/AAAAAAAARrI/Bjwz5DyIedwad5J0HXdr0zquLL7GTDFpQCLcBGAs/s1600/johnwick.png',
      title: 'Jhon Wick Chapter 3',
      released: '2019 Action/sci-fi  3h 2m',
      key: '4',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    }
  ]);

  const [list, setlist] = useState([
    {
      image: 'https://mk0mercatornet3umiw5.kinstacdn.com/wp-content/uploads/2018/12/FB_Black-Panther.jpg',
      key: '1'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BNDYwOTY0MDI2OV5BMl5BanBnXkFtZTgwOTE5NzM2MDI@._V1_.jpg',
      key: '2'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BMzliYmQxZTEtOGY4ZC00ZDU0LThlN2ItNGMxZGY5YmQxYzFmXkEyXkFqcGdeQXVyODc1NzE3Njc@._V1_.jpg',
      key: '3'
    },
    {
      image: 'https://www.movienewsletters.net/photos/250317R1.jpg',
      key: '4'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/91WQDt--EFL._SL1500_.jpg',
      key: '5'
    },
  ])

  const carouselRef = useRef(null);
  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setbackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc
            })
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.carouselImage}
          />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon
            name='tags'
            size={30}
            color='white'
            style={styles.carouselIcon}

          />

        </TouchableOpacity>

      </View>

    )

  }

  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >

            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder='Search Movies'
                placeholderTextColor='#666'
                style={styles.SearchBox}
              />
              <Icon name='search' size={22} color='#666' style={styles.searchBoxIcon} />

            </View>

            <Text style={styles.title}>Top Picks this Week</Text>
            <View style={styles.carouselContentContainerView}>
              <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />

            </View>

            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>

              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <Icon
                  name='play'
                  size={22}
                  color='#02ad94'
                  style={{ marginLeft: 4 }}

                />
              </TouchableOpacity >
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>{background.desc}</Text>

            </View>

          </ImageBackground>

        </View>
      </View>

      <View style={{ marginHorizontal: 14 }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Continue Watching</Text>
        <ImageBackground
          source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/ct_frozen2_elsa_18466_e4325e4c.jpeg?region=0,0,600,600' }}
          style={{ height: 250, width: '100%', backgroundColor: '#000' }}
          resizeMode='cover'
        >

          <Text style={{ color: 'white', padding: 14 }}>How to train your dragon: The Hideen World</Text>
          <TouchableOpacity style={{ ...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%' }}>
            <Icon
              name='play'
              size={22}
              color='#02ad94'
              style={{ marginLeft: 4 }}

            />
          </TouchableOpacity >

        </ImageBackground>
        <View style={{ flexDirection: 'row', height: 100, justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>My List</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}>View All</Text>

        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          data={list}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 300, width: 200 }}
                />
                <View style={{
                  position: 'absolute', height: 5, width: '100%',
                  backgroundColor: '#02ad94', opacity: 0.8
                }}>

                </View>
                <Icon
                  name='play'
                  size={38}
                  color='#fff'
                  style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }}

                />

              </TouchableOpacity>
            )
          }}
        />

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },

  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start'

  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%'

  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  searchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10
  },
  carouselContentContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'

  },

  carousel: {
    flex: 1,
    overflow: 'visible'

  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'

  },
  carouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'

  },

  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },

  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },

  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },

  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.6
  },

  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(2,173,148,0.2)',
    marginBottom: 14

  }







});

export default Home;
