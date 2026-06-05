import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const switchLanguage = useCallback((lang: 'zh' | 'en') => {
    i18n.changeLanguage(lang);
  }, [i18n]);

  const currentLanguage = i18n.language as 'zh' | 'en';

  return {
    t,
    currentLanguage,
    switchLanguage,
    isChineseActive: currentLanguage === 'zh',
    isEnglishActive: currentLanguage === 'en',
  };
};
