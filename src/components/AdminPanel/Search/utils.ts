import * as R from "ramda";

export const getResults = R.curry((query: string, songs: Song) => {
  const lowercaseQuery = query.toLowerCase();

  return R.filter((song: Song) => {
    return (
      song.title.toLowerCase().includes(lowercaseQuery) ||
      song.author.toLowerCase().includes(lowercaseQuery) ||
      song.tags.split(" ").some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  }, songs);
});

export const formatResults = R.compose(
  R.map(R.compose((songs) => R.assoc("title", songs.data[0].author, songs), R.assoc("data", R.__, {}))),
  R.values,
  R.groupBy(R.prop("author")),
);

export const keyExtractor = R.compose(R.join("_"), R.props(["id", "title", "author"]));

export const getTags = R.compose(
  R.tap(console.log),
  R.sort(R.ascend(R.identity)),
  R.reduce((_tags, song) => {
    const songTags = song.tags.split(" ");

    songTags.forEach((_tag) => {
      const tag = R.compose(R.toLower, R.replace("\r", ""), R.replace("_", " "), R.replace(" ", ""))(_tag);

      if (_tags.includes(tag) || R.isEmpty(tag)) {
        return;
      }
      _tags.push(tag.replace("_", " "));
      // }
    });

    return _tags;
  }, []),
);
