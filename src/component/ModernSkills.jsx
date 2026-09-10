import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiTypescript } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import cv from '../assets/cv.pdf'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import java from '../assets/image.png'
import logo from '../assets/logo192.png'
import git from '../assets/github.png'
import mongo from '../assets/mongo.png'
import post from '../assets/post.png'
import expo from '../assets/expo.png'
import mailtrap from '../assets/mailtrap.png'
import fastapi from '../assets/fast.png'


export default function ModernSkills() {
    const { t } = useTranslation();
    const skillCategories = [
        {
            title: "Frontend",
            skills: [      
                { name: "Expo", src: expo, color: "from-gray-400 to-gray-600" },
                { name: "React", src: logo, color: "from-cyan-400 to-blue-500" },
                { name: "JavaScript", src: java, color: "from-yellow-400 to-yellow-600" },
                { name: "Python", src: java, color: "from-blue-500 to-blue-700" },
                { name: "HTML5",  src: html, color: "from-orange-500 to-red-500" },
                { name: "CSS3", src: css, color: "from-blue-400 to-blue-600" },
                { name: "Tailwind CSS", src: tailwind, color: "from-cyan-400 to-teal-500" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", src: node, color: "from-green-500 to-green-700" },
                { name: "FastAPI", src: fastapi, color: "from-teal-400 to-teal-600" },
                { name: "MongoDB", src: mongo, color: "from-green-500 to-green-700" },
                { name: "REST API", src: logo, color: "from-purple-500 to-purple-700" }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Mailtrap", src: mailtrap, color: "from-orange-500 to-red-600" },
                { name: "Postman", src: post, color: "from-orange-400 to-orange-600" },
                { name: "GitHub", src: git, color: "from-gray-700 to-gray-900" }
            ]
        }
    ];

    return (
        <section id="Skills" className="py-20 lg:-mt-8 bg-black relative overflow-hidden">
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
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('skills.title')}
                        </span>
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                {/* All Skills in One Grid - More Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-12"
                >
                    {[...skillCategories[0].skills, ...skillCategories[1].skills, ...skillCategories[2].skills].map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="group relative bg-gray-800/30 rounded-xl p-3 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                            <div className="relative flex flex-col items-center gap-2">
                                {skill.src ? (
                                    <img 
                                        src={skill.src} 
                                        alt={skill.name}
                                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : skill.Icon ? (
                                    <skill.Icon className="text-3xl text-gray-300 group-hover:text-white transition-colors duration-300" />
                                ) : null}
                                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Compact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: t('skills.stats.experience'), value: "2+" },
                        { label: t('skills.stats.projects'), value: "10+" },
                        { label: t('skills.stats.technologies'), value: "15+" },
                        { label: t('skills.stats.clients'), value: "5+" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 text-center hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Remove old category-based layout */}
                <div className="hidden">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="group relative bg-gray-900/50 rounded-xl p-4 border border-gray-700/50 hover:border-transparent transition-all duration-300 cursor-pointer"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                                        <div className="relative flex flex-col items-center gap-2">
                                            {skill.src ? (
                                                <img 
                                                    src={skill.src} 
                                                    alt={skill.name}
                                                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                                />
                                            ) : skill.Icon ? (
                                                <skill.Icon className={`text-4xl bg-gradient-to-br ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
                                            ) : null}
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}
