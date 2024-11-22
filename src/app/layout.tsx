import { RootProvider } from "@/providers/root-provider/root-provider";
import mixpanel from "mixpanel-browser";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | AICulture",
    default: "AICulture",
  },
  description:
    "An AI agriculture website intended to help people with agricultural questions and help users chat with other users for better understanding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  mixpanel.init("3a21e677529f5d3255309ba3f22ddb14", {
    debug: true,
    ignore_dnt: true,
    track_pageview: true,
  });
  mixpanel.track("Page View");
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
