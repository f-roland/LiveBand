import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import { useCreateStyles, colors } from "src/theme";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

export function SearchBox({ query, setQuery }: Props) {
  const styles = useCreateStyles(({ theme }) => ({
    textInputContainer: {
      position: "relative",
      backgroundColor: theme.colors.jetLight,
      width: "100%",
      height: 50,
      justifyContent: "center",
      padding: theme.spacings.m,
      borderRadius: theme.borders.radius.s,
      paddingLeft: theme.spacings.xl,
      marginBottom: theme.spacings.l,
      opacity: 0.8,
    },
    textInput: {
      color: theme.colors.darkGrey,
      fontSize: 20,
      fontWeight: "bold",
    },
    searchIcon: {
      position: "absolute",
      left: theme.spacings.m,
    },
    clearButton: {
      position: "absolute",
      right: theme.spacings.m,
    },
  }));

  return (
    <View style={styles.textInputContainer}>
      <View style={styles.searchIcon}>
        <MaterialIcons name="search" size={24} color={colors.darkGrey} />
      </View>
      <TextInput style={styles.textInput} value={query} onChangeText={setQuery} placeholder="Search" />
      {!!query && (
        <View style={styles.clearButton}>
          <TouchableOpacity onPress={() => setQuery("")}>
            <MaterialIcons name="clear" size={24} color={colors.darkGrey} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
