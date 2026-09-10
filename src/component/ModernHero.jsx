import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function ModernHero() {
    const { t } = useTranslation();
    return (
        <section id="home" className="min-h-screen pt-8 flex items-center justify-center relative overflow-hidden bg-black">
            {/* Animated background elements - aivoicephone.com style */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                
                {/* Gradient orbs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-gray-300">{t('hero.available')}</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                    >
                        <span className="block text-white">{t('hero.greeting')}</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('hero.name')}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium"
                    >
                        {t('hero.title')}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('hero.description')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                            {t('hero.viewWork')}
                            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        </Link>
                        <a
                            href="mailto:devthayour@gmail.com"
                            className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <FaEnvelope />
                            {t('hero.getInTouch')}
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-6 justify-center items-center"
                    >
                        <a
                            href="https://github.com/thayour02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/temitayo-emmanuel-666775369"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:devthayour@gmail.com"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <Link to="Skills" smooth duration={500} className="cursor-pointer">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <span className="text-sm">Scroll to explore</span>
                            <FaArrowDown />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
