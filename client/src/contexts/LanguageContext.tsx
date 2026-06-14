import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻譯字典
const translations: Record<Language, Record<string, string>> = {
  zh: {
    'home': '首頁',
    'technology': '核心技術',
    'solutions': '解決方案',
    'about': '關於我們',
    'contact': '聯絡我們',
    'get_in_touch': 'GET IN TOUCH',
    'english': 'English',
    'chinese': '中文',
    'thermal_management_experts': 'THERMAL MANAGEMENT EXPERTS',
    'release_thermal_energy': '釋放熱能的',
    'unlimited_potential': '無限潛力',
    'company_description': 'Therlect 汎海科技，憑藉超過20年的熱管理專業經驗，致力於為全球客戶提供從理論分析到市場應用。',
    'explore_solutions': '探索解決方案',
    'contact_us': '聯絡我們',
    'temperature_control': '溫度控制',
    'performance_improvement': '效能提升',
    'years_experience': '年專業經驗',
    'global_customers': '全球客戶',
    'successful_projects': '成功項目',
  },
  en: {
    'home': 'Home',
    'technology': 'Core Technology',
    'solutions': 'Solutions',
    'about': 'About Us',
    'contact': 'Contact',
    'get_in_touch': 'GET IN TOUCH',
    'english': 'English',
    'chinese': '中文',
    'thermal_management_experts': 'THERMAL MANAGEMENT EXPERTS',
    'release_thermal_energy': 'Release Thermal Energy',
    'unlimited_potential': 'Unlimited Potential',
    'company_description': 'Therlect, with over 20 years of professional thermal management expertise, is dedicated to providing solutions from theoretical analysis to market application for global customers.',
    'explore_solutions': 'Explore Solutions',
    'contact_us': 'Contact Us',
    'temperature_control': 'Temperature Control',
    'performance_improvement': 'Performance Improvement',
    'years_experience': 'Years Experience',
    'global_customers': 'Global Customers',
    'successful_projects': 'Successful Projects',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
