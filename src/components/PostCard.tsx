import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { Post } from "../data/mockData";
import { Colours } from "../data/theme";
import Avatar from "./Avatar";

type PostCardProps = {
  post: Post;
  onOpen?: () => void;
};

const PostCard = ({ post, onOpen }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar image={post.avatar} size={35} />

        <Text style={styles.username}>{post.username}</Text>

        <Ionicons name="ellipsis-horizontal" size={23} color={Colours.text} />
      </View>

      <Pressable onPress={onOpen} disabled={!onOpen}>
        <Image
          source={{ uri: post.image }}
          style={styles.postImage}
          resizeMode="cover"
        />
      </Pressable>

      <View style={styles.actions}>
        <Pressable onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={28}
            color={liked ? Colours.notification : Colours.text}
          />
        </Pressable>

        <Pressable onPress={onOpen} disabled={!onOpen}>
          <Ionicons name="chatbubble-outline" size={26} color={Colours.text} />
        </Pressable>

        <Ionicons name="paper-plane-outline" size={26} color={Colours.text} />

        <View style={styles.space} />

        <Pressable onPress={() => setSaved(!saved)}>
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={26}
            color={Colours.text}
          />
        </Pressable>
      </View>

      <Text style={styles.likes}>{post.likes + (liked ? 1 : 0)} likes</Text>

      <Text style={styles.caption}>
        <Text style={styles.nameInCaption}>{post.username} </Text>
        {post.caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.background,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 8,
  },
  username: {
    color: Colours.text,
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  postImage: {
    width: "100%",
    height: 380,
    backgroundColor: Colours.surface,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 16,
  },
  space: {
    flex: 1,
  },
  likes: {
    color: Colours.text,
    fontWeight: "bold",
    marginHorizontal: 12,
  },
  caption: {
    color: Colours.text,
    fontSize: 14,
    marginHorizontal: 12,
    marginTop: 6,
  },
  nameInCaption: {
    fontWeight: "bold",
  },
});

export default PostCard;
