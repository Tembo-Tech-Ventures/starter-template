import { RootProvider } from "@/providers/root-provider/root-provider";
import { type Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s - AICulture",
    default: "Chat",
  },
  description: "A page for chatting with users all over the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Chat | AICulture</title>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
