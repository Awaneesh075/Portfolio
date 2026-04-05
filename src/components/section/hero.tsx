'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const roles = [
  "Awaneesh Chaturvedi",
  "Software Developer",
  "Problem Solver"
];

const roleColors = ["text-green-400", "text-blue-400", "text-pink-400"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="py-20 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-blue-400 font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
              <div className="h-24 md:h-28 flex flex-col justify-start">
                <p className="text-3xl md:text-4xl text-blue-300 font-semibold mb-2">I Am</p>
                <h1 className={`text-4xl md:text-5xl font-bold ${roleColors[currentRoleIndex]} leading-tight min-h-16 transition-colors duration-500`}>
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h1>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Creating scalable, innovative web solutions. Passionate about building elegant, efficient applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </a>
              <a href="/resume/Avi.pdf" download className="px-8 py-3 border-2 border-blue-400 text-blue-300 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300">
                Download Resume
              </a>
            </div>
            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-slate-700">
              <div>
                <p className="text-2xl font-bold text-blue-400">200+</p>
                <p className="text-gray-400 text-sm">LeetCode Problems</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">4</p>
                <p className="text-gray-400 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">2</p>
                <p className="text-gray-400 text-sm">Certifications</p>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-[28rem] rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
              <Image 
                src="/profile.jpeg" 
                alt="Awaneesh Chaturvedi" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
