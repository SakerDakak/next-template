import ThemeProvider from "@/core/providers/themeProvider";
import { Cairo } from "next/font/google";
import { ReactNode } from "react";
import TranslationX from "@/config/translation/translation";
import InfoX from "@/config/info/info";
import Header from "@/ui/sections/header/header";
import Footer from "@/ui/sections/footer/footer";
import type { Viewport } from "next";

const font = Cairo({ subsets: ["arabic"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return TranslationX.locales.map((locale) => ({ locale }));
}

//====================================================================================
// Viewport

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

//====================================================================================
// Metadata
export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await TranslationX.getTranslations({
    locale,
    namespace: TranslationX.namespace.metadata,
  });

  return {
    metadataBase: new URL(InfoX.appURL),
    title: {
      template: t("title") + " | %s",
      default: t("title"),
    },
    description: t("description"),
    manifest: "/manifest.json",
    icons: {
      icon: ["/favicon/favicon.svg"],
      apple: ["/favicon/apple-180x180.png"],
      shortcut: ["/favicon/apple-180x180.png"],
    },
    openGraph: {
      title: t("OpenGraph.title"),
      description: t("OpenGraph.description"),
      siteName: t("OpenGraph.site"),
      url: InfoX.appURL,
      locale: locale,
      type: "website",
      images: [
        {
          url: "/openGraph/open-graph-1.png",
          width: 1200,
          height: 630,
          alt: t("OpenGraph.img-alt"),
        },
      ],
    },
  };
}

//====================================================================================
// Layout
export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  TranslationX.setRequestLocale(locale);

  return (
    <html lang={locale} className={locale} suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <main className="flex flex-col justify-between min-h-screen w-full">
            <Header />
            <div className="mt-nav">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}