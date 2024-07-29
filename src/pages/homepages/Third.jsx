import React, { useState } from 'react';
import Navbar from '../../components/Navbar.js';
import Section from '../../components/Section.js';
import FooterComponent from '../../components/Footer.js';

const Third = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = [
    {
      title: 'Third Semester',
      destination : '/third-semester/',
      description: 'The third semester of B.Sc. CSIT focuses on foundation of data structures, mathematical modeling, architecture of computers, concepts of graphics and statistical measures including hypothesis and various tests.',
      items: [
        { id: 1, rank: '#1', color: 'bg-green-200', subject: 'Data Structure and Algorithm', chapters: 8, path: '/third-semester/dsa/', img: 'https://i.ibb.co/HrKhjLc/dsa.png' },
        { id: 2, rank: '#2', color: 'bg-blue-200', subject: 'Numerical Method', chapters: 6, path: '/third-semester/numerical-method/', img: 'https://i.ibb.co/TKfZf9M/numericalmethod.png' },
        { id: 3, rank: '#3', color: 'bg-orange-200', subject: 'Computer Architecture', chapters: 9, path: '/third-semester/computer-architecture/', img: 'https://i.ibb.co/xg6H4cm/computerartitecture.png' },
        { id: 4, rank: '#4', color: 'bg-purple-200', subject: 'Computer Graphics', chapters: 10, path: '/third-semester/computer-graphics/', img: 'https://i.ibb.co/gZTDjpq/computergraphics.png' },
        { id: 5, rank: '#5', color: 'bg-red-200', subject: 'Statistics II', chapters: 8, path: '/third-semester/statII/', img: 'https://i.ibb.co/pxQtMqb/statII.png' },
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
          <Section key={section.title} title={section.title} destination={section.destination} description={section.description}  items={section.items} path={section.path}/>
        ))}
      </div>
    </div>
    <FooterComponent />
    </>
  );
};

export default Third;
