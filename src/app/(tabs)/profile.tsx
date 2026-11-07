import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Avatar from "../../components/Avatar";
import { POSTS, PROFILE_IMAGE } from "../../data/mockData";
import { Colours } from "../../data/theme";

const PROFILE_POSTS = POSTS.filter(
  (post) => post.username === "the_crazy_humonoid_cat",
);
const HIGHLIGHTS = [
  {
    id: "1",
    name: "Cat highlight",
    image: "https://www.cats.org.uk/media/13139/220325case013.jpg",
  },
];
const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const [section, setSection] = useState("posts");
  const displayedPosts = section === "posts" ? PROFILE_POSTS : [];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={displayedPosts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Ionicons name="add" size={33} color={Colours.text} />

              <View style={styles.usernameRow}>
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color={Colours.text}
                />

                <Text style={styles.username} numberOfLines={1}>
                  the_crazy_humonoid_cat
                </Text>
                <Ionicons name="chevron-down" size={19} color={Colours.text} />
              </View>

              <Ionicons name="menu" size={33} color={Colours.text} />
            </View>

            <View style={styles.profileInfo}>
              <Avatar image={PROFILE_IMAGE} size={96} />

              <View style={styles.profileDetails}>
                <Text style={styles.displayName}>
                  Sebastian <Text style={styles.pronouns}>he/him</Text>
                </Text>

                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text style={styles.statNumber}>
                      {PROFILE_POSTS.length}
                    </Text>
                    <Text style={styles.statLabel}>post</Text>
                  </View>

                  <View style={styles.stat}>
                    <Text style={styles.statNumber}>35</Text>
                    <Text style={styles.statLabel}>followers</Text>
                  </View>

                  <View style={styles.stat}>
                    <Text style={styles.statNumber}>46</Text>
                    <Text style={styles.statLabel}>following</Text>
                  </View>
                </View>
              </View>
            </View>

            <Text style={styles.bio}>My brother is Steven.</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tagsRow}
            >
              <View style={styles.tag}>
                <Text style={styles.tagText}>@ the_crazy_humonoid_cat</Text>
              </View>

              <View style={styles.tag}>
                <Ionicons name="add" size={18} color={Colours.secondaryText} />
                <Text style={styles.tagText}>Add</Text>
              </View>
            </ScrollView>

            <View style={styles.buttonRow}>
              <View style={styles.profileButton}>
                <Text style={styles.buttonText}>Edit profile</Text>
              </View>

              <View style={styles.profileButton}>
                <Text style={styles.buttonText}>Share profile</Text>
              </View>

              <View style={styles.smallButton}>
                <Ionicons
                  name="person-add-outline"
                  size={23}
                  color={Colours.text}
                />
              </View>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.highlightsRow}
            >
              <View style={styles.highlight}>
                <View style={styles.newHighlight}>
                  <Ionicons name="add" size={35} color={Colours.text} />
                </View>

                <Text style={styles.highlightName}>New</Text>
              </View>

              {HIGHLIGHTS.map((highlight) => (
                <View key={highlight.id} style={styles.highlight}>
                  <View style={styles.highlightBorder}>
                    <Avatar image={highlight.image} size={65} />
                  </View>

                  <Text style={styles.highlightName} numberOfLines={1}>
                    {highlight.name}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <View style={styles.sectionTabs}>
              <Pressable
                style={[
                  styles.sectionTab,
                  section === "posts" && styles.activeTab,
                ]}
                onPress={() => setSection("posts")}
              >
                <Ionicons
                  name="grid"
                  size={25}
                  color={section === "posts" ? Colours.text : Colours.inactive}
                />
              </Pressable>

              <Pressable
                style={[
                  styles.sectionTab,
                  section === "reels" && styles.activeTab,
                ]}
                onPress={() => setSection("reels")}
              >
                <Ionicons
                  name="repeat-outline"
                  size={26}
                  color={section === "reels" ? Colours.text : Colours.inactive}
                />
              </Pressable>

              <Pressable
                style={[
                  styles.sectionTab,
                  section === "tagged" && styles.activeTab,
                ]}
                onPress={() => setSection("tagged")}
              >
                <Ionicons
                  name="person-circle-outline"
                  size={27}
                  color={section === "tagged" ? Colours.text : Colours.inactive}
                />
              </Pressable>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.gridItem}
            onPress={() =>
              router.push({
                pathname: "/post/[id]",
                params: { id: item.id },
              })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={styles.gridImage}
              resizeMode="cover"
            />
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {section === "reels"
              ? "No reels to display."
              : "No tagged posts to display."}
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  listContent: {
    paddingBottom: 20,
  },
  header: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    flexShrink: 1,
  },
  username: {
    fontSize: 23,
    fontWeight: "bold",
    color: Colours.text,
    flexShrink: 1,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 12,
    gap: 18,
  },
  profileDetails: {
    flex: 1,
    gap: 14,
  },
  displayName: {
    color: Colours.text,
    fontSize: 16,
    fontWeight: "600",
  },
  pronouns: {
    color: Colours.secondaryText,
    fontWeight: "normal",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    alignItems: "flex-start",
  },
  statNumber: {
    color: Colours.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: Colours.text,
    fontSize: 12,
  },
  bio: {
    color: Colours.text,
    fontSize: 15,
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 15,
  },
  tagsRow: {
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 8,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: Colours.border,
    borderRadius: 20,
    maxWidth: 200,
  },
  tagText: {
    color: Colours.text,
    fontSize: 13,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 16,
    paddingHorizontal: 14,
    gap: 6,
  },
  profileButton: {
    flex: 1,
    backgroundColor: Colours.surface,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  smallButton: {
    backgroundColor: Colours.surface,
    paddingHorizontal: 12,
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: Colours.text,
    fontSize: 14,
    fontWeight: "600",
  },
  highlightsRow: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  highlight: {
    width: 82,
    alignItems: "center",
    gap: 8,
  },
  newHighlight: {
    height: 78,
    width: 78,
    borderRadius: 39,
    borderWidth: 2,
    borderColor: Colours.border,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightBorder: {
    height: 78,
    width: 78,
    borderRadius: 39,
    borderWidth: 3,
    borderColor: Colours.secondaryText,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightName: {
    color: Colours.text,
    fontSize: 12,
    textAlign: "center",
    width: 82,
  },
  sectionTabs: {
    flexDirection: "row",
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colours.border,
  },
  sectionTab: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colours.text,
  },
  gridItem: {
    width: "33.333%",
    padding: 1,
  },
  gridImage: {
    width: "100%",
    height: 140,
    backgroundColor: Colours.surface,
  },
  emptyText: {
    color: Colours.secondaryText,
    fontSize: 15,
    textAlign: "center",
    marginTop: 50,
  },
});

export default ProfileScreen;
