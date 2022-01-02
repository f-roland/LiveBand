import React, { useEffect } from "react";
import { SectionList } from "react-native";

import { formatResults, keyExtractor } from "../utils";
import { Result } from "./Result";
import { SectionHeader } from "./SectionHeader";

type Props = {
  songs: Song[];
};

export function Results({ songs }: Props) {
  const results = React.useMemo(() => formatResults(songs), [songs]);

  useEffect(() => {
    console.log({ results, songs });
  }, [results]);

  return (
    <SectionList
      sections={results}
      keyExtractor={keyExtractor}
      renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
      renderItem={({ item }) => <Result song={item} />}
      stickySectionHeadersEnabled
    />
  );
}
