import React from "react";
import "./globals.css";
import { Kumbh_Sans as KumbhSans } from "next/font/google";
import { Layout } from "@/shared/ui";
import { Cart, LayoutHeader, SiteNav } from "@/widgets/ui";
import UserProfile from "@/widgets/ui/UserProfile/UserProfile";
import Providers from "@/shared/lib/providers";

const kumbhSans = KumbhSans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={kumbhSans.className}>
          <Layout
            headerSlot={
              <LayoutHeader
                navSlot={<SiteNav />}
                cartSlot={<Cart />}
                userProfileSlot={<UserProfile />}
              />
            }
          >
            {children}
          </Layout>
        </body>
      </html>
    </Providers>
  );
}
