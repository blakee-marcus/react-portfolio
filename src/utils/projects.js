import weatherDashboard from '../assets/images/works-thumbnails/weather-dashboard-thumbnail.webp';
import workDay from '../assets/images/works-thumbnails/work-day-thumbnail.webp';
import taskinator from '../assets/images/works-thumbnails/taskinator-thumbnail.webp';
import techBlog from '../assets/images/works-thumbnails/tech-blog-thumbnail.webp';
import pizzaHunt from '../assets/images/works-thumbnails/pizza-hunt-thumbnail.webp';
import zooKeepr from '../assets/images/works-thumbnails/zoo-keepr-thumbnail.webp';
import everyAfter from '../assets/images/works-thumbnails/ever-after-thumbnail.webp';
import deepThoughts from '../assets/images/works-thumbnails/deep-thoughts-thumbnail.webp';
import ohSnap from '../assets/images/works-thumbnails/oh-snap-thumbnail.webp';

const projects = [
  {
    title: 'Weather Dashboard',
    description:
      'A clean, responsive dashboard that provides real-time weather data using public APIs. Built for travelers and planners needing quick, reliable forecasts.',
    url: 'https://blakee-marcus.github.io/weather-dashboard/',
    repo: 'https://github.com/blakee-marcus/weather-dashboard',
    img: weatherDashboard,
    tech: ['JS', 'HTML', 'CSS'],
    type: 'Bootcamp',
  },
  {
    title: 'Work Day Scheduler',
    description:
      'A simple task planner designed to help professionals map out their workday hour-by-hour. Data is stored in-browser for easy access.',
    url: 'https://blakee-marcus.github.io/work-day/',
    repo: 'https://github.com/blakee-marcus/work-day',
    img: workDay,
    tech: ['React', 'Node.js'],
    type: 'Bootcamp',
  },
  {
    title: 'Taskinator',
    description:
      'To-do list app with drag-and-drop features and dynamic task status updates. Helps users organize and prioritize their workload efficiently.',
    url: 'https://blakee-marcus.github.io/taskinator/',
    repo: 'https://github.com/blakee-marcus/taskinator',
    img: taskinator,
    tech: ['JS', 'HTML', 'CSS'],
    type: 'Bootcamp',
  },
  {
    title: 'Tech Blog',
    description:
      'A content platform for tech articles with user login, posting, and comment features. Ideal for anyone building a blogging community.',
    url: 'https://protected-coast-66126.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/tech-blog',
    img: techBlog,
    tech: ['Express', 'MySQL'],
    type: 'Bootcamp',
  },
  {
    title: 'Pizza Hunt',
    description:
      'A fun, social web app for sharing pizza reviews and comments. Includes user-generated content, search, and social engagement features.',
    url: 'https://lit-earth-22007.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/pizza-hunt',
    img: pizzaHunt,
    tech: ['Mongoose', 'Express'],
    type: 'Bootcamp',
  },
  {
    title: 'Zoo Keepr',
    description:
      'An internal CMS for zookeepers to manage animal data and exhibit assignments. Built with RESTful routing and admin-friendly forms.',
    url: 'https://thawing-sierra-93359.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/zookeepr',
    img: zooKeepr,
    tech: ['MySQL', 'Express'],
    type: 'Bootcamp',
  },
  {
    title: 'Every After Bakery',
    description:
      'A fully functional e-commerce site for a boutique bakery. Includes product listings, user authentication, and secure checkout flow.',
    url: 'https://ever-after-bakery.herokuapp.com/',
    repo: 'https://github.com/Azurene/ever-after-bakery',
    img: everyAfter,
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    type: 'Bootcamp',
  },
  {
    title: 'Deep Thoughts',
    description:
      'A lightweight social platform where users can post thoughts, react, and interact in real time. Demonstrates GraphQL, MERN, and modular design.',
    url: 'https://bm-deepthoughts-1492b9add94c.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/deep-thoughts',
    img: deepThoughts,
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    type: 'Bootcamp',
  },
  {
    title: 'Oh Snap!',
    description:
      'A photo portfolio site with like/favorite functionality and dynamic category filtering. Built for photographers and creatives to showcase visual work.',
    url: 'https://blakee-marcus.github.io/oh-snap/',
    repo: 'https://github.com/blakee-marcus/oh-snap',
    img: ohSnap,
    tech: ['React', 'Node.js'],
    type: 'Bootcamp',
  },
];

export default projects;
