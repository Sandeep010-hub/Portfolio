export interface TimelineItem {
  id: string
  title: string
  organization: string
  location: string
  type: 'Education' | 'Internship' | 'Startup' | 'Club';
  start: string;
  end: string;
  description: string;
  icon: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 'bec-btech',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Bapatla Engineering College',
    location: 'Andhra Pradesh, India',
    type: 'Education',
    start: '2023',
    end: 'Present',
    description: 'Pursuing Bachelor of Technology in CSE.',
    icon: '🎓',
  },
  {
    id: 'svgp-diploma',
    title: 'Diploma in Computer Science and Technology',
    organization: 'Sri Venkateswara Government Polytechnic',
    location: 'Tirupati, India',
    type: 'Education',
    start: '2020',
    end: '2023',
    description: 'Completed diploma with distinction.',
    icon: '🎓',
  },
  {
    id: 'webortex-cto',
    title: 'Co-Founder & CTO',
    organization: 'WEBORTEX',
    location: 'Gudur, Andhra Pradesh (Remote/Hybrid)',
    type: 'Startup',
    start: 'Aug 2023',
    end: 'Present',
    description: 'Spearheaded technical development and led a team to deliver client projects.',
    icon: '🚀',
  },
  {
    id: 'synxa-intern',
    title: 'Web Developer Intern',
    organization: 'SYNXA IT Pvt Ltd',
    location: 'Remote',
    type: 'Internship',
    start: 'Jan 2023',
    end: 'Jul 2023',
    description: 'Developed RESTful APIs and integrated backend services with React.js frontend.',
    icon: '💼',
  },
  {
    id: 'codeverse',
    title: 'Core Member',
    organization: 'Codeverse Club',
    location: 'Bapatla Engineering College',
    type: 'Club',
    start: '2023',
    end: 'Present',
    description: 'Organized workshops and mentored juniors in MERN and Next.js.',
    icon: '👥',
  },
  {
    id: 'gdsc',
    title: 'Collaborator',
    organization: 'GDSC Chapters',
    location: 'Various',
    type: 'Club',
    start: '2022',
    end: 'Present',
    description: 'Hackathon participant and project contributor.',
    icon: '🤝',
  }
];

export default timeline; 