import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Brain,
  Activity,
  ChevronRight,
  Check,
  Users,
  Award,
  Database,
} from "lucide-react";

export default function MemoTagLandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState({
    problem: false,
    solution: false,
    traction: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const problemSection = document.getElementById("problem");
      const solutionSection = document.getElementById("solution");
      const tractionSection = document.getElementById("traction");

      if (problemSection) {
        setIsVisible((prev) => ({
          ...prev,
          problem:
            window.scrollY >
            problemSection.offsetTop - window.innerHeight * 0.75,
        }));
      }

      if (solutionSection) {
        setIsVisible((prev) => ({
          ...prev,
          solution:
            window.scrollY >
            solutionSection.offsetTop - window.innerHeight * 0.75,
        }));
      }

      if (tractionSection) {
        setIsVisible((prev) => ({
          ...prev,
          traction:
            window.scrollY >
            tractionSection.offsetTop - window.innerHeight * 0.75,
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call to store email
    setTimeout(() => {
      setIsSubscribed(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }, 500);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className="fixed w-full z-10 px-4 md:px-6 py-4 flex justify-between items-center backdrop-blur-md bg-opacity-80 shadow-sm"
        style={{
          backgroundColor: darkMode
            ? "rgba(17, 24, 39, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl">MemoTag</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <a
            href="#contact"
            className="hidden md:block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 inline-block">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Brain className="h-16 w-16 md:h-20 md:w-20 text-indigo-600 mx-auto" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Dementia Care
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Empowering caregivers with personalized, intelligent tools to
            improve quality of life for dementia patients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              Get Early Access <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#solution"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-6xl mt-16 relative"
        >
          <div className="w-full h-64 md:h-96 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Interactive MemoTag Interface
              </h3>
              <p>Visualized dashboard preview would appear here</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        className="py-16 md:py-24 px-4 md:px-6 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible.problem ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Growing Challenge of Dementia Care
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dementia affects millions, yet caregivers lack the tools to
              provide optimal support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isVisible.problem ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">55 Million</h3>
              <p className="text-gray-600 dark:text-gray-300">
                People worldwide living with dementia, with numbers doubling
                every 20 years.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">70% Undiagnosed</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Early symptoms often go undetected, leading to delayed
                interventions and treatment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Data</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Caregivers struggle to track behavioral patterns and cognitive
                changes over time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible.solution ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How MemoTag Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines physical tracking with cognitive
              assessment to provide comprehensive care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isVisible.solution ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ delay: 0.2, duration: 0.8, staggerChildren: 0.2 }}
            className="relative"
          >
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 dark:bg-indigo-800 hidden md:block"></div>

            <div className="space-y-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 md:p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-4">
                        Smart Tracking
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Discrete wearable sensors monitor movement, location,
                        and vital signs to detect unusual patterns early.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Real-time location monitoring</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Activity pattern analysis</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Sleep quality assessment</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900 border-4 border-indigo-500 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      1
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 md:p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-4">
                        AI Cognitive Assessment
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Regular, non-intrusive cognitive tests analyze memory,
                        language, and problem-solving abilities.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Personalized memory exercises</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Natural language processing</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Longitudinal cognitive tracking</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 border-4 border-purple-500 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      2
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-pink-50 dark:bg-pink-900/30 p-6 md:p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-4">
                        Caregiver Dashboard
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Intuitive interface providing actionable insights and
                        personalized care recommendations.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Trend visualization and alerts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Care plan recommendations</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>Medical professional sharing</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-pink-100 dark:bg-pink-900 border-4 border-pink-500 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-pink-600 dark:text-pink-400">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traction Section */}
      <section
        id="traction"
        className="py-16 md:py-24 px-4 md:px-6 bg-indigo-50 dark:bg-indigo-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible.traction ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Progress
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              MemoTag is quickly gaining traction with caregivers, medical
              professionals, and investors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isVisible.traction ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-indigo-600">2,500+</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Waitlist Signups
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-indigo-600">12</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Care Facilities Piloting
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-indigo-600">$1.8M</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Seed Funding Raised
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-indigo-600">94%</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Caregiver Satisfaction
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible.traction ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              What Caregivers Are Saying
            </h3>
            <div className="italic text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              "MemoTag has completely transformed how I care for my mother. The
              insights I get have helped us identify triggers for agitation and
              adjust her routine accordingly. It's given us both more peace of
              mind."
              <div className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
                — Sarah T., Family Caregiver
              </div>
            </div>
          </motion.div>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="py-3 px-6 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium">
              <Award className="h-4 w-4 inline mr-2" />
              Healthcare Innovation Award Finalist
            </div>
            <div className="py-3 px-6 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium">
              Featured in HealthTech Journal
            </div>
            <div className="py-3 px-6 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium">
              Alzheimer's Association Partner
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Waitlist
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Be among the first to access MemoTag and transform dementia care
              for your loved ones.
            </p>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-10 max-w-2xl mx-auto">
              <AnimatePresence>
                {!isSubscribed ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        id="caregiver"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                      />
                      <label
                        htmlFor="caregiver"
                        className="ml-2 block text-sm text-gray-600 dark:text-gray-300 text-left"
                      >
                        I am a caregiver for someone with dementia
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Request Early Access
                    </button>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      We respect your privacy and will never share your
                      information.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We've added you to our waitlist. We'll be in touch soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">MemoTag</span>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 MemoTag. All rights reserved.
          </div>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
