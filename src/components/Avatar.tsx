import { Image, StyleSheet, View } from "react-native";
import { Colours } from "../data/theme";

type AvatarProps = {
  image: string;
  size: number;
  hasStory?: boolean;
};

const Avatar = ({ image, size, hasStory = false }: AvatarProps) => {
  return (
    <View style={[styles.container, hasStory && styles.storyBorder]}>
      <Image
        source={{ uri: image }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    borderRadius: 100,
  },
  storyBorder: {
    borderWidth: 3,
    borderColor: Colours.notification,
  },
});

export default Avatar;
