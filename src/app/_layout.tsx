import { Stack } from "expo-router";
import { Colours } from "../data/theme";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colours.background,
        },
        headerTintColor: Colours.text,
        headerTitleStyle: {
          color: Colours.text,
        },
        contentStyle: {
          backgroundColor: Colours.background,
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="post/[id]" options={{ title: "Post" }} />
    </Stack>
  );
};

export default RootLayout;
