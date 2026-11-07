import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
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

import { EXPLORE_POSTS } from "../../data/mockData";
import { Colours } from "../../data/theme";

const CATEGORIES = ["For you", "Cats", "Retro Gaming", "Chess", "Technology"];

const ExploreScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={EXPLORE_POSTS}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <View style={styles.searchRow}>
              <View style={styles.searchBox}>
                <Ionicons
                  name="search-outline"
                  size={23}
                  color={Colours.secondaryText}
                />
                <Text style={styles.searchText}>Search</Text>
              </View>

              <Ionicons name="options-outline" size={29} color={Colours.text} />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categories}
            >
              {CATEGORIES.map((item) => (
                <View
                  key={item}
                  style={[
                    styles.categoryButton,
                    item === "For you" && styles.selectedCategory,
                  ]}
                >
                  <Text style={styles.categoryText}>{item}</Text>
                </View>
              ))}
            </ScrollView>
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

            <View style={styles.views}>
              <Ionicons name="eye-outline" size={13} color={Colours.text} />

              <Text style={styles.viewsText}>{item.views}</Text>
            </View>
          </Pressable>
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
  listContent: {
    paddingBottom: 20,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 15,
    marginBottom: 14,
    gap: 14,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colours.surface,
    borderRadius: 35,
    paddingHorizontal: 16,
    height: 48,
    gap: 10,
  },
  searchText: {
    color: Colours.secondaryText,
    fontSize: 16,
  },
  categories: {
    marginBottom: 14,
    paddingHorizontal: 12,
  },
  categoryButton: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colours.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: Colours.surface,
  },
  categoryText: {
    color: Colours.text,
    fontSize: 14,
    fontWeight: "600",
  },
  gridItem: {
    width: "33.333%",
    padding: 1,
    backgroundColor: Colours.background,
  },
  gridImage: {
    width: "100%",
    height: 135,
    backgroundColor: Colours.surface,
  },
  views: {
    backgroundColor: Colours.surface,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 4,
  },
  viewsText: {
    color: Colours.text,
    fontSize: 11,
    fontWeight: "bold",
  },
});

export default ExploreScreen;
