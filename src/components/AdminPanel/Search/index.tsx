import React, { useState, useMemo } from "react";
import { View } from "react-native";
import { useAtom } from "jotai";

import { songsAtom } from "src/atoms/songs";

import { useCreateStyles } from "src/theme";
import { Results } from "./Results";
import { getResults } from "./utils";
import { SearchBox } from "./SearchBox";
import { Tags } from "./Tags";

export function Search() {
  const [songs] = useAtom(songsAtom);
  const [query, setQuery] = useState("");

  const styles = useCreateStyles(() => ({
    container: { flex: 1 },
  }));

  const results = useMemo(() => getResults(query, songs), [query]);

  return (
    <View style={styles.container}>
      <SearchBox query={query} setQuery={setQuery} />
      {query && results?.length > 0 ? <Results songs={results} /> : <Tags songs={songs} setQuery={setQuery} />}
    </View>
  );
}
