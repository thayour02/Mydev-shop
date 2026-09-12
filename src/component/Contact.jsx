import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactMethods = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "temitayoemmanuel0101@gmail.com",
            link: "mailto:temitayoemmanuel0101@gmail.com",
            color: "from-red-400 to-pink-500"
        },
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            value: "Connect with me",
            link: "https://www.linkedin.com/in/temitayo-emmanuel-666775369",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: <FaGithub />,
            title: "GitHub",
            value: "@thayour02",
            link: "https://github.com/thayour02",
            color: "from-gray-400 to-gray-600"
        },
        {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            value: "+234 806 467 5460",
            link: "https://wa.me/+2348064675460",
            color: "from-green-400 to-green-600"
        }
    ];

    return (
        <section id="Contact" className="py-20 bg-black lg:-mt-[70px] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('contact.title')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                         {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
                    >
                        <form action="https://getform.io/f/amdpjdxb" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                    placeholder="Comfort Modupe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                    placeholder="comfort@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                   {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
                            >
                                {t('contact.form.send')}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.getInTouch')}</h3>
                            <p className="text-gray-400 mb-8">
                                {t('contact.description')}
                            </p>

                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <motion.a
                                        key={index}
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                                    >
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} text-white`}>
                                            <div className="text-2xl">{method.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-400">{method.title}</div>
                                            <div className="text-white flex-wrap  font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 ">
                                                <p className="flex-none">{method.value}</p>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-xl font-bold text-white mb-4">{t('contact.responseTime')}</h3>
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span>{t('contact.responseMessage')}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            </div>
        </section>
    );
}
