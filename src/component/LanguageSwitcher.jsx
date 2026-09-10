import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 text-white"
            >
                <FaGlobe size={18} />
                <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.name}</span>
                <span className="sm:hidden">{currentLanguage.flag}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors ${
                                    i18n.language === lang.code ? 'bg-white/10' : ''
                                }`}
                            >
                                <span className="flex items-center gap-3 text-white">
                                    <span className="text-xl">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </span>
                                {i18n.language === lang.code && (
                                    <FaCheck className="text-blue-400" size={16} />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
