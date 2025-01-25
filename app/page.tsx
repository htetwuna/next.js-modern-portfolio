'use client'
import Image from "next/image";
import pp from "../photos/new.jpg"
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";
import image1 from "../photos/app1.png"
import image2 from "../photos/app2.png"
import image3 from "../photos/web1.png"
import image4 from "../photos/web2.png"
import image5 from "../photos/web3.png"
import image6 from "../photos/web4.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-color duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        
        <motion.header
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration: 0.8}}
        
         className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={pp} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
          <motion.div
          initial={{opacity:0, x:100}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
          className="space-y-1"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Htet Wunna Aung</h1>
            <p className="text-gray-600 dark:text-gray-400">Junior Mobile & Web Developer</p>
            <p className="text-gray-600 dark:text-gray-400">Yangon, Myanmar</p>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-100}}
          animate={{opacity:1, x:0}}
          transition={{duration: 0.8}}
          className="space-y-3"
          >
            <h2 className="text-lg font-semibold">Do not just build websites. Build websites that build your business</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Expert in Web & Mobile development with{" "}
              <span className="text-black dark:text-white">PHP</span> and {" "}
              <span className="text-black dark:text-white">Next.js</span>. I specialize in designing and implementing UI systems. With deep expertise in{" "}
              <span className="text-black dark:text-white">React, Native, Next.js and PHP, Laravel</span>
              .
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Beyond Technical skills, In passionate about debugging code and finding solutions to technical challenges.Collaborating effectively with designers, developers, and project managers. Using Git for version control and GitHub for collaboration. Basic of working with MySQL and NoSQL(MongoDB).
            </p>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:50}}
          animate={{opacity:1, x:0}}
          transition={{duration: 0.8}}
          className="flex items-center gap-3"
          >
            <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">Resume</Button>

            <Link href="http://github.com/htetwuna" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaLinkedinIn />
            </Link>
            <Link href="https://www.facebook.com/share/154qprvnXx/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaFacebook />
            </Link>
            <Link href="https://www.youtube.com/@HtetetWanaAung" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaYoutube />
            </Link>
            <Link href="https://www.tiktok.com/@lanz20037" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaTiktok />
            </Link>
          </motion.div>
          </section>
          
          <motion.section
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>

            <div className="space-y-2">
              <div className="items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm dark:text-gray-400">2022 - 2024</p>
                  <p className="font-medium">Junior Technician</p>
                  <p className="text-blue-600 dark:text-blue-400">Mr.Guard Company</p>
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400">My work as a junior technician involves supporting the setup, maintenance, and troubleshooting of IT systems and solutions. Diagnosing and resolving hardware or software issues. Installing and configuring computer systems, peripherals, and networking equipment. Repairing or replacing hardware components, such as hard drives, RAM, or monitors.Setting up and maintaining local area networks (LANs), wide area networks (WANs), and Wi-Fi systems.</p>
              </div>
            </div>
          </motion.section>
          <motion.section
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>
            <div className="space-y-2">
              <div className="items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm dark:text-gray-400">January, 2024 - present</p>
                  <p className="font-medium">Web & Mobile Developer</p>
                  <p className="text-blue-600 dark:text-blue-400">Fairway Technology</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm dark:text-gray-400">Completed comprehensive training in software development through Fairway Technology, including foundational skills in the Basic Programming Course, advanced expertise in the Professional Programming Course, and mastery in the Rockstar Developer Course. This solid educational foundation reflects a strong commitment to excellence and continuous growth in the field of programming and web development.</p>
            </div>
            <div className="space-y-2">
              <div className="items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm dark:text-gray-400">2023 - present</p>
                  <p className="font-medium">English Major</p>
                  <p className="text-blue-600 dark:text-blue-400">East Yangon University</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm dark:text-gray-400">Typically study a wide range of topics related to the English language, literature, linguistics, and communication.</p>
            </div>
          </motion.section>
          <motion.section
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="Project 1" className="rounded-lg mb-4" />

                  <div>
                    <div>
                      <h3 className="font-medium">Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js & Shadcn: Movie Diretory App </p>
                    </div>
                    <Button variant="ghost" size="icon">More</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image2} alt="Project 2" className="rounded-lg mb-4" />

                  <div>
                    <div>
                      <h3 className="font-medium">Project 2</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">React Native: Mobile Banking App UI </p>
                    </div>
                    <Button variant="ghost" size="icon">More</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image3} alt="Project 3" className="rounded-lg mb-4" />

                  <div>
                    <div>
                      <h3 className="font-medium">Project 3</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pure CSS & JS: Portfolio Website</p>
                    </div>
                    <Button variant="ghost" size="icon">More</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image4} alt="Project 4" className="rounded-lg mb-4" />

                  <div>
                    <div>
                      <h3 className="font-medium">Project 4</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">HTML & CSS: Edu Web UI</p>
                    </div>
                    <Button variant="ghost" size="icon">More</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image5} alt="Project 5" className="rounded-lg mb-4" />

                  <div>
                    <div>
                      <h3 className="font-medium">Project 5</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Laravel Framework: Mini Social Media Website </p>
                    </div>
                    <Button variant="ghost" size="icon">More</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image6} alt="Project 6" className="rounded-lg mb-4" />

                  <div>
                    <div>
                      <h3 className="font-medium">Project 6</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">PHP: User Authorization Dashboard</p>
                    </div>
                    <Button variant="ghost" size="icon">More</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-500">© 2024 Htet Wunna Aung</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}