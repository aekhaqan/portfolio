import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/themeprovider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";

// Elegant Cambria-style professional font
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Atif Khan | Consultant & Automation Specialist",
  description:
    "Data analyst and Power BI specialist with expertise in ETL pipelines, automation, and AI-driven business intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} font-[var(--font-lora)] bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
