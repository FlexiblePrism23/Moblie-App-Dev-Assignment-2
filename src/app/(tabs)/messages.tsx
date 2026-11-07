import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Avatar from "../../components/Avatar";
import { CONVERSATIONS, NOTES } from "../../data/mockData";
import { Colours } from "../../data/theme";

const MessagesScreen = () => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const filteredConversations = CONVERSATIONS.filter((conversation) =>
    conversation.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={filteredConversations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.username}>the_crazy_humonoid_cat</Text>
              <Ionicons name="create-outline" size={28} color={Colours.text} />
            </View>

            <View style={styles.searchBox}>
              <Ionicons
                name="search-outline"
                size={25}
                color={Colours.secondaryText}
              />

              <TextInput
                style={styles.searchInput}
                placeholder="Search or ask Meta AI"
                placeholderTextColor={Colours.secondaryText}
                value={search}
                onChangeText={setSearch}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.notes}
            >
              {NOTES.map((item) => (
                <View key={item.id} style={styles.noteItem}>
                  <View style={styles.noteBubble}>
                    <Text style={styles.noteText} numberOfLines={2}>
                      {item.note}
                    </Text>
                  </View>
                  <Avatar image={item.image} size={68} />

                  <Text style={styles.noteName} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Messages</Text>

              <Text style={styles.requests}>Requests</Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.messageRow}>
            <View style={styles.avatarContainer}>
              <Avatar image={item.image} size={60} />

              {item.active && <Text style={styles.activeText}>●</Text>}
            </View>

            <View style={styles.messageInfo}>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>

              <Text style={styles.preview} numberOfLines={1}>
                {item.preview}
                {item.time ? ` · ${item.time}` : ""}
              </Text>
            </View>

            <Ionicons
              name="camera-outline"
              size={24}
              color={Colours.secondaryText}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No conversations found.</Text>
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
  list: {
    paddingBottom: 20,
  },
  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  username: {
    color: Colours.text,
    fontSize: 25,
    fontWeight: "bold",
  },
  searchBox: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colours.surface,
    borderRadius: 30,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    color: Colours.text,
    fontSize: 16,
  },
  notes: {
    marginTop: 20,
    marginBottom: 24,
  },
  noteItem: {
    width: 112,
    alignItems: "center",
    marginHorizontal: 4,
    gap: 7,
  },
  noteBubble: {
    backgroundColor: Colours.surface,
    borderRadius: 15,
    padding: 8,
    width: 105,
  },
  noteText: {
    color: Colours.secondaryText,
    textAlign: "center",
    fontSize: 11,
  },
  noteName: {
    color: Colours.text,
    fontSize: 13,
    width: 100,
    textAlign: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colours.text,
  },
  requests: {
    fontSize: 15,
    color: Colours.secondaryText,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 11,
    gap: 12,
  },
  avatarContainer: {
    alignItems: "center",
  },
  activeText: {
    color: "#00D26A",
    fontSize: 12,
  },
  messageInfo: {
    flex: 1,
    gap: 5,
  },
  name: {
    color: Colours.text,
    fontSize: 16,
  },
  preview: {
    color: Colours.secondaryText,
    fontSize: 14,
  },
  emptyText: {
    color: Colours.secondaryText,
    textAlign: "center",
    marginTop: 30,
  },
});

export default MessagesScreen;
