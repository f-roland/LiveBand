// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { HelloWorld } from "@/components/HelloWorld";
import Sessions from "src/data/sessions";

type Props = {
  sessions: Session[];
};

export default function App({ sessions }: Props) {
  console.log({ sessions });
  return <HelloWorld />;
}

export async function getServerSideProps() {
  const sessions = await Sessions.getAll();

  return {
    props: { sessions },
  };
}
