import "../global.css"
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";

export default function Index() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 justify-center items-center bg-slate-500"> 
        <View className="h-[40vh] bg-white bg-opacity-20 p-6 rounded-[30px] w-11/12 items-center">
          <Text className="text-white text-3xl font-bold mb-5">Additionneur</Text>

          <TextInput
            className="h-12 w-full bg-white bg-opacity-10 rounded-lg px-4 text-slate-800 text-lg mb-4"
            keyboardType="numeric"
            placeholder="Entrez un nombre"
            placeholderTextColor="#2525"
            value={num1}
            onChangeText={setNum1}
          />
          <TextInput
            className="h-12 w-full bg-white bg-opacity-10 rounded-lg px-4 text-slate-800 text-lg mb-4"
            keyboardType="numeric"
            placeholder="Entrez un autre nombre"
            placeholderTextColor="#2525"
            value={num2}
            onChangeText={setNum2}
          />

          <TouchableOpacity
            className="bg-green-500 py-3 px-8 mt-4 rounded-[30px]"
            onPress={handleAddition}
          >
            <Text className="text-slate-800 text-lg font-bold">Additionner</Text>
          </TouchableOpacity>

          {result !== null && (
            <Text className="text-slate-800 text-2xl mt-5 font-bold">Résultat: {result}</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
