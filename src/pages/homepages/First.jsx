import React, { useState } from 'react';
import Navbar from '../../components/Navbar.js';
import Section from '../../components/Section.js';
import FooterComponent from '../../components/Footer.js';

const First = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = [
    {
      title: 'First Semester',
      destination : '/first-semester/',
      description: 'First semester in B.Sc. CSIT helps to build the basic foundation of computer science, electronic circuits, programming and mathematics to get you started with the journey of B.Sc. CSIT.',
      items: [
        { id: 1, rank: '#1', color: 'bg-green-200', subject: 'Introduction to Information Technology', chapters: 11, path: '/first-semester/iit/', img: 'https://i.ibb.co/DCPw07K/iit.png' },
        { id: 2, rank: '#2', color: 'bg-blue-200', subject: 'C Programming', chapters: 11, path: '/first-semester/c/', img: 'https://i.ibb.co/rbNSMCW/c.png' },
        { id: 3, rank: '#3', color: 'bg-orange-200', subject: 'Digital Logic', chapters: 7, path: '/first-semester/dl/', img: 'https://i.ibb.co/PrX8kTq/dl.png' },
        { id: 4, rank: '#4', color: 'bg-purple-200', subject: 'Mathematics I', chapters: 10, path: '/first-semester/mathsI/', img: 'https://i.ibb.co/2yCnTrF/maths.png' },
        { id: 5, rank: '#5', color: 'bg-red-200', subject: 'Physics', chapters: 8, path: '/first-semester/physics/', img: 'https://i.ibb.co/0hLhBvx/physic.png' },
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

export default First;
