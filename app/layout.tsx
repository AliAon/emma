export const metadata = { title: "Emma" };
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import React from "react";
import type { ReactNode } from "react";
import "./globals.css";
import ClientOnly from "@/components/common/client-only";
import { ReduxProvider } from "@/redux/redux-provider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-locator-target="vscode">
      <body
        cz-shortcut-listen="true"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <ReduxProvider>
          <ClientOnly>{children}</ClientOnly>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
