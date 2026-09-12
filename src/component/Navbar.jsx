import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 1, link: 'home', label: t('nav.home') },
        { id: 2, link: 'Skills', label: t('nav.skills') },
        { id: 3, link: 'projects', label: t('nav.projects') },
        { id: 4, link: 'Contact', label: t('nav.contact') }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-6 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="inline-flex items-center justify-between gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg"
                >
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth
                        duration={500}
                        className="cursor-pointer group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                                T
                            </div>
                            <span className="text-xl font-bold text-white hidden sm:block">
                                Thayour
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ id, link, label }) => (
                            <li key={id}>
                                <Link
                                    to={link}
                                    smooth
                                    duration={500}
                                    className="text-gray-300 hover:text-white font-medium cursor-pointer relative group transition-colors duration-200 text-sm"
                                >
                                    {label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Language Switcher */}
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>

                    {/* Resume Button */}
                    <a
                        href="/src/assets/temitayo.pdf"
                        download
                        className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-sm"
                    >
                        {t('nav.resume')}
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-white/10"
                    >
                        <ul className="px-4 py-6 space-y-4">
                            {navLinks.map(({ id, link, label }) => (
                                <motion.li
                                    key={id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: id * 0.1 }}
                                >
                                    <Link
                                        to={link}
                                        smooth
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium cursor-pointer transition-all duration-200"
                                    >
                                        {label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="px-4"
                            >
                                <LanguageSwitcher />
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                            >
                                <a
                                    href="/src/assets/cv.pdf"
                                    download
                                    className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-300"
                                >
                                    {t('nav.resume')}
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
