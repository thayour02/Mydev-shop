import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {  to: 'home', label: 'nav.home' },
        {  to: 'Skills', label: 'nav.skills' },
        {  to: 'projects', label: 'nav.projects' },
        {  to: 'Contact', label: 'nav.contact' }
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/thayour02', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/temitayo-emmanuel-666775369', label: 'LinkedIn' },
        { icon: <FaTwitter />, url: 'https://x.com/_tayo02', label: 'Twitter' },
        { icon: <FaEnvelope />, url: 'mailto:temitayoemmanuel0101@gmail.com', label: 'Email' }
    ];

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                                T
                            </div>
                            <span className="text-xl font-bold text-white">Thayour</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                           {t('footer.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4"> {t('footer.quickLinks')}</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={500}
                                        className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
                                    >
                                        {t(link.label)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.connect')}</h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                                >
                                    <div className="text-xl">{social.icon}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Temitayo Emmanuel. {t('footer.rights')}
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                            {t('footer.builtWith')} <FaHeart className="text-red-500" /> {t('footer.using')}React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
