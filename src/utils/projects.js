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
    description: 'Real-time weather forecasts with a clean UI using open APIs.',
    url: 'https://blakee-marcus.github.io/weather-dashboard/',
    repo: 'https://github.com/blakee-marcus/weather-dashboard',
    img: weatherDashboard,
    tech: ['JS', 'HTML', 'CSS'],
    type: 'Bootcamp',
  },
  {
    title: 'Work Day Scheduler',
    description: 'A day planner app to track hourly tasks and schedule.',
    url: 'https://blakee-marcus.github.io/work-day/',
    repo: 'https://github.com/blakee-marcus/work-day',
    img: workDay,
    tech: ['React', 'Node.js'],
    type: 'Bootcamp',
  },
  {
    title: 'Taskinator',
    description: 'Task management app to organize and prioritize to-dos.',
    url: 'https://blakee-marcus.github.io/taskinator/',
    repo: 'https://github.com/blakee-marcus/taskinator',
    img: taskinator,
    tech: ['JS', 'HTML', 'CSS'],
    type: 'Bootcamp',
  },
  {
    title: 'Tech Blog',
    description: 'Full-stack blog platform with user authentication and CRUD features.',
    url: 'https://protected-coast-66126.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/tech-blog',
    img: techBlog,
    tech: ['Express', 'MySQL'],
    type: 'Bootcamp',
  },
  {
    title: 'Pizza Hunt',
    description: 'Social platform for pizza lovers to share and comment on favorite pies.',
    url: 'https://lit-earth-22007.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/pizza-hunt',
    img: pizzaHunt,
    tech: ['Mongoose', 'Express'],
    type: 'Bootcamp',
  },
  {
    title: 'Zoo Keepr',
    description: 'Content management system for zoo animal data and exhibit tracking.',
    url: 'https://thawing-sierra-93359.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/zookeepr',
    img: zooKeepr,
    tech: ['MySQL', 'Express'],
    type: 'Bootcamp',
  },
  {
    title: 'Every After Bakery',
    description: 'E-commerce bakery website with product listings and user accounts.',
    url: 'https://ever-after-bakery.herokuapp.com/',
    repo: 'https://github.com/Azurene/ever-after-bakery',
    img: everyAfter,
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    type: 'Bootcamp',
  },
  {
    title: 'Deep Thoughts',
    description: 'Social media app with posts, reactions, and real-time updates.',
    url: 'https://bm-deepthoughts-1492b9add94c.herokuapp.com/',
    repo: 'https://github.com/blakee-marcus/deep-thoughts',
    img: deepThoughts,
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    type: 'Bootcamp',
  },
  {
    title: 'Oh Snap!',
    description: 'Photo-sharing app with filtering, liking, and sharing capabilities.',
    url: 'https://blakee-marcus.github.io/oh-snap/',
    repo: 'https://github.com/blakee-marcus/oh-snap',
    img: ohSnap,
    tech: ['React', 'Node.js'],
    type: 'Bootcamp',
  },
];

export default projects;
