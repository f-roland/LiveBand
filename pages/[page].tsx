// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { App as AppComponent } from "src/Screens/App";
import Songs from "src/data/songs";

type Props = {
  songs: Song[];
};

export default function App({ songs }: Props) {
  return <AppComponent songs={songs} />;
}

export async function getServerSideProps() {
  const songs = await Songs.getAll();

  return {
    props: { songs },
  };
}
