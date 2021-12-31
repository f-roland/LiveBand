import React, { useState, useMemo } from "react";
import { useAtom } from "jotai";
import { MaterialIcons } from "@expo/vector-icons";

import { currentSong, songsAtom } from "src/atoms/songs";
import { View, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import { useCreateStyles, colors } from "src/theme";

export function Search() {
  const [songs] = useAtom(songsAtom);
  const [_, setCurrentSong] = useAtom(currentSong);
  const [query, setQuery] = useState("");

  const styles = useCreateStyles(({ theme }) => ({
    container: { flex: 1 },
    textInputContainer: {
      position: "relative",
      backgroundColor: theme.colors.jet,
      width: "100%",
      height: 50,
      justifyContent: "center",
      padding: theme.spacings.m,
      borderRadius: theme.borders.radius.s,
      paddingLeft: theme.spacings.xl,
      marginBottom: theme.spacings.l,
    },
    textInput: {
      color: theme.colors.nickel,
      fontSize: 20,
    },
    searchIcon: {
      position: "absolute",
      left: theme.spacings.m,
    },
    clearButton: {
      position: "absolute",
      right: theme.spacings.m,
    },
    results: {
      paddingBottom: theme.spacings.m,
      overflow: "hidden",
    },
    result: {
      padding: theme.spacings.s,
      borderBottomWidth: 1,
      borderColor: theme.colors.jet,
    },
    author: {
      color: theme.colors.dutchWhite,
      fontSize: 16,
      lineHeight: 20,
    },
    title: {
      color: theme.colors.lightGrey,
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 24,
    },
  }));

  const results = useMemo(
    () =>
      songs.filter((song) => {
        const lowercaseQuery = query.toLowerCase();

        return (
          song.title.toLowerCase().includes(lowercaseQuery) ||
          song.author.toLowerCase().includes(lowercaseQuery) ||
          song.tags.split(" ").some((tag) => tag.toLowerCase().includes(lowercaseQuery))
        );
      }),
    [query],
  );

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <View style={styles.searchIcon}>
          <MaterialIcons name="search" size={24} color={colors.nickel} />
        </View>
        <TextInput style={styles.textInput} value={query} onChangeText={setQuery} placeholder="Search" />
        {!!query && (
          <View style={styles.clearButton}>
            <TouchableOpacity onPress={() => setQuery("")}>
              <MaterialIcons name="clear" size={24} color={colors.nickel} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {query && results?.length > 0 && (
        <ScrollView style={styles.results}>
          {results.map((song, index) => (
            <TouchableOpacity key={index} onPress={() => setCurrentSong(song)}>
              <View style={styles.result}>
                <Text style={styles.author}>{song.author}</Text>
                <Text style={styles.title}>{song.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
