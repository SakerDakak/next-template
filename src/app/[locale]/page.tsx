import TranslationX from "@/config/translation/translation";

export default function Home({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  return <div className=""></div>;
}
