import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import PostCard from "../../components/PostCard";
import { EXPLORE_POSTS, POSTS } from "../../data/mockData";
import { Colours } from "../../data/theme";

const PostDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const homePost = POSTS.filter((item) => item.id === id)[0];
  const explorePost = EXPLORE_POSTS.filter((item) => item.id === id)[0];
  const post = homePost || explorePost;

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Post not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <PostCard post={post} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  message: {
    color: Colours.text,
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
  },
});

export default PostDetailsScreen;
