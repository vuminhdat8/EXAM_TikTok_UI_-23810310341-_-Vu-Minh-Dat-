import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ForYouScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/foryou.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.rightMenu}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../assets/avatar2.png')}
              style={styles.avatar}
            />
            <View style={styles.plusBadge}>
              <Ionicons name="add" size={14} color="#fff" />
            </View>
          </View>

          <TouchableOpacity style={styles.iconBlock}>
            <Ionicons name="heart" size={42} color="#fff" />
            <Text style={styles.iconText}>328.7K</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconBlock}
            onPress={() => navigation.navigate('Comments')}
          >
            <Ionicons name="chatbubble-ellipses" size={40} color="#fff" />
            <Text style={styles.iconText}>578</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBlock}>
            <Ionicons name="arrow-redo" size={40} color="#fff" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>

          <View style={styles.musicWrapper}>
            <Image
              source={require('../assets/music.png')}
              style={styles.musicAvatar}
            />
          </View>
        </View>

        <View style={styles.bottomInfo}>
          <Text style={styles.username}>@craig_love</Text>
          <Text style={styles.caption}>
            The most satisfying Job #fyp #satisfying #roadmarking
          </Text>

          <View style={styles.songRow}>
            <Ionicons name="musical-notes" size={18} color="#fff" />
            <Text style={styles.songText}>Roddy Roundicch - The Rou</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 14,
    paddingBottom: 40,
  },
  rightMenu: {
    position: 'absolute',
    right: 12,
    bottom: 70,
    alignItems: 'center',
  },
  avatarWrapper: {
    marginBottom: 22,
    alignItems: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusBadge: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: '#ff2d55',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBlock: {
    alignItems: 'center',
    marginBottom: 22,
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  musicWrapper: {
    marginTop: 8,
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  musicAvatar: {
    width: '100%',
    height: '100%',
  },
  bottomInfo: {
    width: '78%',
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  caption: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});