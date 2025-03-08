import { Text, View } from "react-native";

export default function Index() {
  const calculationSimple = (num1: number, num2: number): number => {
    return num1 + num2;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Lionel ça commence !</Text>
      <Text> et on a ici --- {calculationSimple(3, 4)}</Text>
    </View>
  );
}
