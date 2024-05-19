import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ Press, btnLabel, bgColor, textColor,borderColor,borderWidth }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        paddingVertical: '3%',
        marginVertical: "2%",
        marginHorizontal: "15%",
        width: '70%',
        borderColor: borderColor,
        borderWidth: borderWidth
      }}
    >
      <Text style={{ color: textColor, fontSize: 26, fontWeight: "bold" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
