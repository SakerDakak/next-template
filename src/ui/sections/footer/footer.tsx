import TranslationX from "@/config/translation/translation";

export default function Footer() {
  const t = TranslationX.t(TranslationX.namespace.footer);
  return (
    <footer className="">
      <div className="border-t border-border">
        <p className="text-center text-sm py-2 text-gray-400">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
