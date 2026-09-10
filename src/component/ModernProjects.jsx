import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import mongo from '../assets/job.jpg';
import food from '../assets/foodie.jpg';
import weather from '../assets/wed.jpg';
import resume from '../assets/resume.png';

export default function ModernProjects() {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 4;
    const projects = [
        {
            id: 1,
            titleKey: "projects.items.jobFinder.title",
            descriptionKey: "projects.items.jobFinder.description",
            image: mongo,
            tech: ["React", "Node.js", "MongoDB", "Express"],
            liveUrl: "https://thayourjobfinderapp.netlify.app/",
            githubUrl: "https://github.com/thayour02"
        },
        {
            id: 2,
            titleKey: "projects.items.restaurant.title",
            descriptionKey: "projects.items.restaurant.description",
            image: food,
            tech: ["React", "Firebase", "Stripe", "Tailwind"],
            liveUrl: "https://order-client-93c1e.web.app",
            githubUrl: "https://github.com/thayour02"
        },
        {
            id: 3,
            titleKey: "projects.items.weatherApp.title",
            descriptionKey: "projects.items.weatherApp.description",
            image: weather,
            tech: ["React", "Weather API", "Geolocation"],
            liveUrl: "https://thayourweatherapp.netlify.app/",
            githubUrl: "https://github.com/thayour02"
        },
        {
            id: 4,
            titleKey: "projects.items.resumeBuilder.title",
            descriptionKey: "projects.items.resumeBuilder.description",
            image: resume,
            tech: ["React", "Node.js", "MongoDB", "PDF.js"],
            liveUrl: "https://tyresumewebapp.netlify.app/",
            githubUrl: "https://github.com/thayour02"
        },
    ];

    // Pagination logic
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section id="projects" className="py-20 lg:-mt-[60px] bg-black relative overflow-hidden">
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
                            {t('projects.title')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {currentProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                    {t(project.titleKey)}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-2">
                                    {t(project.descriptionKey)}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons - Only show if more than 4 projects */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={prevPage}
                            className="p-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                            aria-label="Previous projects"
                        >
                            <FaChevronLeft size={20} />
                        </button>
                        
                        {/* Page Indicators */}
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentPage === index 
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8' 
                                            : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                    aria-label={`Go to page ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            className="p-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                            aria-label="Next projects"
                        >
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/thayour02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    >
                        <FaGithub size={20} />
                        {t('projects.viewMore')}
                    </a>
                </motion.div>
            </div>
            </div>
        </section>
    );
}
