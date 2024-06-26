'use client'
import TranslationX from '@/config/translation/translation';

export default function Error({error, reset}: {
  error: Error;
  reset(): void;
}) {
  const t = TranslationX.t(TranslationX.namespace.error);
  return (
      <div>
        {t('title')}
      </div>
  );
}
