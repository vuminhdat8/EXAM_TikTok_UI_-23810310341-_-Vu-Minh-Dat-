import React from 'react';
import { ImageBackground } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const comments = [
  {
    id: '1',
    avatar: require('../assets/martin.png'),
    username: 'martini_rond',
    text: 'How neatly I write the date in my book',
    time: '22h',
    likes: '8098',
    replies: 'View replies (4)',
  },
  {
    id: '2',
    avatar: require('../assets/max.png'),
    username: 'maxjacobson',
    text: 'Now that’s a skill very talented',
    time: '22h',
    likes: '8098',
    replies: 'View replies (1)',
  },
  {
    id: '3',
    avatar: require('../assets/zack.png'),
    username: 'zackjohn',
    text: 'Doing this would make me so anxious',
    time: '22h',
    likes: '8098',
    replies: '',
  },
  {
    id: '4',
    avatar: require('../assets/kie.png'),
    username: 'kiero_d',
    text: 'Use that on r air forces to whiten them',
    time: '21h',
    likes: '8098',
    replies: 'View replies (9)',
  },
  {
    id: '5',
    avatar: require('../assets/mis.png'),
    username: 'mis_potter',
    text: 'Sjpuld’ve used that on his forces',
    time: '13h',
    likes: '8098',
    replies: 'View replies (4)',
  },
  {
    id: '6',
    avatar: require('../assets/avatar1.png'),
    username: 'karennne',
    text: 'No pressure',
    time: '22h',
    likes: '8098',
    replies: 'View replies (2)',
  },
  {
    id: '7',
    avatar: require('../assets/joshua.png'),
    username: 'joshua_l',
    text: 'My OCD couldnt do it',
    time: '15h',
    likes: '8098',
    replies: 'View replies (0)',
  },
];

export default function CommentsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.commentRow}>
      <Image source={item.avatar} style={styles.avatar} />

      <View style={{ flex: 1 }}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.commentText}>
          {item.text} <Text style={styles.time}>{item.time}</Text>
        </Text>

        {item.replies ? <Text style={styles.reply}>{item.replies}</Text> : null}
      </View>

      <View style={styles.likeBox}>
        <Ionicons name="heart-outline" size={22} color="#999" />
        <Text style={styles.likeText}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
  <ImageBackground
    source={require('../assets/foryou.png')}
    style={styles.wrapper}
    resizeMode="cover"
  >
    <View style={styles.sheet}>
      <View style={styles.header}>
        <Text style={styles.title}>579 comments</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="close" size={24} color="#222" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      <View style={styles.inputBar}>
        <TextInput
          placeholder="Add comment..."
          placeholderTextColor="#999"
          style={styles.input}
        />
        <Ionicons name="at" size={26} color="#111" style={styles.inputIcon} />
        <Ionicons
          name="happy-outline"
          size={26}
          color="#111"
          style={styles.inputIcon}
        />
      </View>

      <View style={styles.homeIndicator} />
    </View>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  // khối comment chính
  sheet: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#f3f3f3',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
  },

  header: {
    height: 54,
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  commentRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: 'flex-start',
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 12,
  },

  username: {
    color: '#8a8a8a',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },

  commentText: {
    color: '#222',
    fontSize: 16,
    lineHeight: 22,
  },

  time: {
    color: '#999',
    fontSize: 14,
  },

  reply: {
    color: '#888',
    marginTop: 8,
    fontSize: 15,
  },

  likeBox: {
    alignItems: 'center',
    marginLeft: 10,
  },

  likeText: {
    color: '#8a8a8a',
    fontSize: 14,
    marginTop: 4,
  },

  inputBar: {
    height: 64,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#111',
  },

  inputIcon: {
    marginLeft: 14,
  },

  homeIndicator: {
    width: 120,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#111',
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 4,
  },
});