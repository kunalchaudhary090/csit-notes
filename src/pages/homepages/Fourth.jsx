import React, { useState } from 'react';
import Navbar from '../../components/Navbar.js';
import Section from '../../components/Section.js';
import FooterComponent from '../../components/Footer.js';

const Fourth = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = [
    {
      title: 'Fourth Semester',
      destination : '/fourth-semester/',
      description: 'Fourth semester of B.Sc. CSIT introduces state machines and their languages, concept of the computer networks and operating systems, foundation of database management system and glimpse of underlying principles of artificial intelligence.',
      items: [
        { id: 1, rank: '#1', color: 'bg-red-200', subject: 'Theory of Computation', chapters: 7, path: '/fourth-semester/theory-of-computation/', img: 'https://i.ibb.co/4SRPpNF/theoryofcomputation.png' },
        { id: 2, rank: '#2', color: 'bg-purple-200', subject: 'Computer Networks', chapters: 7, path: '/fourth-semester/computer-networks/', img: 'https://i.ibb.co/3chyj2Y/computernetwork.png' },
        { id: 3, rank: '#3', color: 'bg-green-200', subject: 'Database Management System', chapters: 10, path: '/fourth-semester/dms/', img: 'https://i.ibb.co/kDb31jD/dms.png' },
        { id: 4, rank: '#4', color: 'bg-blue-200', subject: 'Operating System', chapters: 7, path: '/fourth-semester/os/', img: 'https://i.ibb.co/pbGcm8z/os.png' },
        { id: 4, rank: '#5', color: 'bg-orange-200', subject: 'Artificial Intelligence', chapters: 6, path: '/fourth-semester/ai/', img: 'https://i.ibb.co/pKJrrFn/ai.png' },
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

export default Fourth;
