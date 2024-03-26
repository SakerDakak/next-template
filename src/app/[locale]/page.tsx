import TranslationX from "@/config/translation/translation";
import Header from "@/ui/sections/header/header";


export default function HomePage({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  return (
    <>
      Home
    </>
  );
}
