import React, { useState } from 'react';
import Navbar from '../../components/Navbar.js';
import Section from '../../components/Section.js';
import FooterComponent from '../../components/Footer.js';

const Second = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = [
    {
      title: 'Second Semester',
      destination : '/second-semester/',
      description: 'The second semester of B.Sc. CSIT focuses on fundamental concepts of problem solving, object oriented programming approach and advanced concepts of electronic circuits and boards.',
      items: [
        { id: 1, rank: '#1', color: 'bg-red-200', subject: 'Discrete Structure', chapters: 6, path: '/second-semester/ds/', img: 'https://i.ibb.co/kxp0t9b/discretemath.png' },
        { id: 2, rank: '#2', color: 'bg-purple-200', subject: 'Object Oriented Programming', chapters: 8, path: '/second-semester/oop/', img: 'https://i.ibb.co/PF4Jvbf/oop.png' },
        { id: 3, rank: '#3', color: 'bg-green-200', subject: 'Microprocessor', chapters: 7, path: '/second-semester/mp/', img: 'https://i.ibb.co/gdJhkdt/microprocessor.png' },
        { id: 4, rank: '#4', color: 'bg-blue-200', subject: 'Mathematics II', chapters: 10, path: '/second-semester/mathsII/', img: 'https://i.ibb.co/qWkMMsh/mathematics-II.png' },
        { id: 5, rank: '#5', color: 'bg-orange-200', subject: 'Statistics I', chapters: 7, path: '/second-semester/statI/', img: 'https://i.ibb.co/K07BLpT/statistics.png' },
      ],
    },
  ];

  return (
    <>
    <div className="bg-gray-50 min-h-screen dark:bg-blue-950 dark:text-white">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <a href="/" className="block py-2 px-4 text-sm text-gray-700">Home</a>
          <a href="/" className="block py-2 px-4 text-sm text-gray-700">Semesters</a>
          <a href="/" className="block py-2 px-4 text-sm text-gray-700">MCQ</a>
          <a href="/" className="block py-2 px-4 text-sm text-gray-700">Sign up</a>
        </div>
      )}
      <div className="max-w-6xl mx-auto mt-10">
        {sections.map((section) => (
          <Section key={section.title} title={section.title} destination={section.destination} description={section.description} items={section.items} path={section.path}/>
        ))}
      </div>
    </div>
    <FooterComponent />
    </>
  );
};

export default Second;
