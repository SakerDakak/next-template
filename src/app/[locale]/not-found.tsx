import TranslationX from '@/config/translation/translation';
import Link from "next/link";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
export default function NotFoundPage() {
  const t = TranslationX.t(TranslationX.namespace.NotFound);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-red-500 text-white px-2 text-sm rounded rotate-12 absolute">
      {t('title')}
      </div>
      <Link href="/" className="mt-5 text-sm font-medium text-white border-2 border-red-500 hover:bg-red-500 px-8 py-3 rounded-md">Go Home</Link>
    </div>
  );
}
