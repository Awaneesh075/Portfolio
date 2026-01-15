'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    languages: ['C++', 'C', 'JavaScript (ES6+)', 'TypeScript', 'Python'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Authentication & Authorization'],
    databases: ['MongoDB', 'MySQL'],
    devops: ['Git', 'GitHub', 'Docker (Basics)', 'Postman', 'GCP'],
    concepts: ['Data Structures & Algorithms (DSA)', 'OOP', 'DBMS', 'OS', 'Low-Level Design (LLD)']
  };

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Maharana Pratap Engineering College (MPGI), Kanpur',
      period: '2022 – 2026',
      score: 'CGPA: 7.6'
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      school: 'Madan Mohan Malviya Inter College, Kannauj',
      period: '2020 – 2022',
      score: 'Percentage: 81%'
    },
    {
      degree: 'Secondary Education (Class X)',
      school: 'Swami Bedharak Higher Secondary School, Kannauj',
      period: '2018 – 2020',
      score: 'Percentage: 85%'
    }
  ];

  const certifications = [
    {
      title: 'Problem Solving Through C Programming',
      issuer: 'NPTEL',
      url: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs56/Course/NPTEL25CS56S64870065904406087.pdf'
    },
    {
      title: 'Data Structure and Algorithm',
      issuer: 'NPTEL',
      url: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs81/Course/NPTEL25CS81S35990024810436383.pdf'
    }
  ];

  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-lg">
            <Image
              src="/about-profile.jpeg"
              alt="Awaneesh Chaturvedi"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-black mb-4 leading-relaxed">
            I am a Computer Science and Engineering student at Maharana Pratap Engineering College (MPGI), Kanpur, with strong foundations in Data Structures and Algorithms and hands-on experience in full-stack web development. I enjoy building scalable, user-focused applications using modern technologies.
          </p>
          <p className="text-black mb-8 leading-relaxed">
            I have solved 200+ problems on LeetCode, which has strengthened my problem-solving skills and ability to write efficient, maintainable code. I am a continuous learner and am actively seeking opportunities to contribute to real-world projects and grow as an engineer.
          </p>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex gap-6 border-b border-gray-700">
              <button
                onClick={() => setActiveTab('skills')}
                className={`pb-2 font-semibold text-blue-600 transition-colors ${
                  activeTab === 'skills'
                    ? 'border-b-2 border-blue-600'
                    : ''
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`pb-2 font-semibold text-blue-600 transition-colors ${
                  activeTab === 'education'
                    ? 'border-b-2 border-blue-600'
                    : ''
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`pb-2 font-semibold text-blue-600 transition-colors ${
                  activeTab === 'certifications'
                    ? 'border-b-2 border-blue-600'
                    : ''
                }`}
              >
                Certifications
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === 'skills' && (
              <div className="space-y-2 text-black">
                <div className="flex items-start gap-3">
                  <span>•</span>
                  <div>
                    <span className="font-semibold">Languages:</span>
                    <span className="ml-2">{skills.languages.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span>•</span>
                  <div>
                    <span className="font-semibold">Frontend:</span>
                    <span className="ml-2">{skills.frontend.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span>•</span>
                  <div>
                    <span className="font-semibold">Backend:</span>
                    <span className="ml-2">{skills.backend.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span>•</span>
                  <div>
                    <span className="font-semibold">Databases:</span>
                    <span className="ml-2">{skills.databases.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span>•</span>
                  <div>
                    <span className="font-semibold">DevOps & Tools:</span>
                    <span className="ml-2">{skills.devops.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span>•</span>
                  <div>
                    <span className="font-semibold">Core Concepts:</span>
                    <span className="ml-2">{skills.concepts.join(', ')}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6 text-black">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-700">{edu.school}</p>
                    <p className="text-gray-600 text-sm">{edu.period} | {edu.score}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-black">
                    <p>
                      <span className="font-semibold">{index + 1}. {cert.title}</span>
                      <span className="mx-2">—</span>
                      <span className="text-gray-600">{cert.issuer}</span>
                      <span className="mx-2">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                        >
                          View
                        </a>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
