import React from 'react';
import BlogCard from '../components/BlogCard';
import Cards from '../assets/images/blog/blog_cards.png';
import Contents from '../assets/images/blog/contents.png';
import { Heading } from '@chakra-ui/react';
import Hackathon from '../assets/images/blog/hackathon.png';
import Vision from '../assets/images/blog/vision.png';
import Proverbs from '../assets/images/blog/design_proverbs.png';
import System from '../assets/images/blog/design_system.png';
import Science from '../assets/images/blog/science.png';

import Students from '../assets/images/blog/for_students.png';

import Bloggers from '../assets/images/blog/for_bloggers.png';
import Navbar from '../components/Navbar';

export const blogPosts = [
  {
    title: 'The Journey of GraphIQal: Table of Contents',
    url: 'https://medium.com/@isabelle.ilyia/the-journey-of-graphiqal-table-of-contents-6f98b63dd072',
    description: '',
    tags: ['OVERVIEW'],
    date: '',
    img: Contents,
  },
  {
    title: 'A Baby GraphIQal, and the 36 Hours That Preceded It',
    url: 'https://medium.com/better-programming/a-baby-graphiqal-and-the-36-hours-that-preceded-it-8a574f5cac73',
    description: '',
    tags: ['HACKATHON'],
    date: '',
    img: Hackathon,
  },
  {
    title: 'Our Vision and Competition',
    url: 'https://medium.com/better-programming/baby-graphiqal-takes-its-first-steps-vision-competition-c94eceb8fc43',
    description: '',
    tags: ['PRODUCT'],
    date: '',
    img: Vision,
  },
  {
    title: 'Proverbs of UX Design: Building a Design Compass',
    url: 'https://medium.com/better-programming/proverbs-of-ux-design-building-a-design-compass-542c9608866d',
    description: '',
    tags: ['DESIGN'],
    date: '',
    img: Proverbs,
  },
  {
    title: 'On consistency without repetition',
    url: 'https://medium.com/@isabelle.ilyia/on-consistency-without-repetition-6928203d5c40',
    description: '',
    tags: ['DESIGN'],
    date: '',
    img: System,
  },
  {
    title: 'Building Our Backend House of Cards',
    url: 'https://medium.com/better-programming/building-our-backend-house-of-cards-5773234f6e0b',
    description:
      ' A tech stack is a delicate structure, kind of like a house of cards.',
    tags: ['BACKEND'],
    date: 'February 11, 2023',
    img: Cards,
  },
  {
    title: 'The Science Behind graphIQal',
    url: 'https://medium.com/better-programming/the-science-behind-our-graphiqal-project-850bb9199d98',
    description: ' ',
    tags: ['PRODUCT'],
    date: 'April 7, 2023',
    img: Science,
  },
  {
    title: 'Using the Product: graphIQal for Blog Writers',
    url: 'https://medium.com/better-programming/graphiqal-for-blog-writers-9fa68f2ff028',
    description: ' ',
    tags: ['USE CASE'],
    date: 'April 7, 2023',
    img: Bloggers,
  },
  {
    title: 'Using the Product: graphIQal for Students',
    url: 'https://medium.com/better-programming/using-graphiqal-for-technical-studies-f8afc3c26ba0',
    description: ' ',
    tags: ['USE CASE'],
    date: 'April 7, 2023',
    img: Students,
  },
];

const Blog: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='md:p-container py-container'>
        {/* <div className='w-0.3 text-center mb-5 mt-16'>
          <Heading>Our Blog</Heading>
        </div> */}
        <div
          className=' flex flex-row justify-center lg:justify-start items-stretch flex-wrap mt-16
      '
        >
          {blogPosts.map((post, i) => (
            <div className='m-5'>
              <BlogCard key={i} post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blog;
