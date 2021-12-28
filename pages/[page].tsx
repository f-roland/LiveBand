// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { App as AppComponent } from "src/Screens/App";
import Sessions from "src/data/sessions";

type Props = {
  sessions: Session[];
};

export default function App({ sessions }: Props) {
  return <AppComponent />;
}

export async function getServerSideProps() {
  const sessions = await Sessions.getAll();

  return {
    props: { sessions },
  };
}
