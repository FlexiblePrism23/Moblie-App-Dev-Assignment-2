import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Avatar from "../../components/Avatar";
import PostCard from "../../components/PostCard";
import { POSTS, STORIES } from "../../data/mockData";
import { Colours } from "../../data/theme";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Ionicons name="add" size={34} color={Colours.text} />
              <Text style={styles.logo}>Instagram</Text>
              <Ionicons name="heart-outline" size={29} color={Colours.text} />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.stories}
            >
              {STORIES.map((story, index) => (
                <View key={story.id} style={styles.story}>
                  <Avatar
                    image={story.image}
                    size={65}
                    hasStory={index !== 0}
                  />
                  <Text style={styles.storyName} numberOfLines={1}>
                    {story.username}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </>
        }
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onOpen={() =>
              router.push({
                pathname: "/post/[id]",
                params: { id: item.id },
              })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  list: {
    paddingBottom: 20,
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    color: Colours.text,
    fontSize: 29,
    fontWeight: "bold",
    letterSpacing: -1,
  },
  stories: {
    marginTop: 10,
    marginBottom: 16,
  },
  story: {
    width: 90,
    alignItems: "center",
    marginHorizontal: 4,
    gap: 6,
  },
  storyName: {
    color: Colours.text,
    fontSize: 12,
  },
});

export default HomeScreen;
