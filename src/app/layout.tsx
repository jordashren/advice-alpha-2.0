import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { StockTicker } from "@/components/stock-ticker"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advice Alpha",
  description: "Financial advice platform for South African advisors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-[#FEFFFF] font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          forcedTheme="light"
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 overflow-auto">
                <StockTicker />
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
