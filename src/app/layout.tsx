import type { Metadata } from "next";

import "./globals.css";
import ReduxProvider from "@/components/shared/ReduxProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Donation Campaign",
  description: "Your donation makes others happy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      {children}
      <ToastContainer />
    </ReduxProvider>
  );
}
