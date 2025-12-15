export interface Project {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  additionalImages?: string[];
  processNotes: string;
  processImages?: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Interactive Data Visualization Platform',
    description:
      'A comprehensive web-based platform designed to transform complex datasets into intuitive, interactive visual narratives. This project explores the intersection of human perception and data science, enabling users to discover patterns and insights through direct manipulation of visual elements. The system employs advanced rendering techniques and responsive design principles to ensure seamless experiences across devices, while maintaining accessibility standards for diverse user groups.',
    mediaType: 'image',
    mediaSrc: 'https://placehold.co/600x400',
    additionalImages: [
      'https://placehold.co/400x300?text=Detail+1',
      'https://placehold.co/400x300?text=Detail+2',
    ],
    processNotes:
      'Through iterative user testing, I discovered that reducing visual complexity by 40% significantly improved comprehension rates. Key learnings included the importance of progressive disclosure in data presentation and the value of customizable color palettes for accessibility. Future iterations will incorporate machine learning to suggest optimal visualization types based on data characteristics.',
    processImages: [
      'https://placehold.co/300x200?text=Sketch+1',
      'https://placehold.co/300x200?text=Prototype',
    ],
    tags: ['React', 'D3.js', 'TypeScript', 'Canvas API', 'WebGL'],
  },
  {
    id: 'project-2',
    title: 'Ambient Computing Interface Prototype',
    description:
      'An experimental interface exploring calm technology principles for ubiquitous computing environments. This research project investigates how digital information can be presented at the periphery of human attention, transitioning smoothly to the center when needed. The prototype demonstrates novel interaction paradigms that respect user cognitive load while maintaining awareness of relevant contextual information through subtle environmental cues.',
    mediaType: 'video',
    mediaSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    // No additional images for this project - demonstrating the optional field
    processNotes:
      'Initial prototypes revealed that audio cues were more effective than visual ones for peripheral awareness. The development process emphasized rapid prototyping with Arduino sensors before transitioning to production-grade hardware. A significant insight was the need for personalization algorithms that adapt notification thresholds based on user activity patterns and stress indicators.',
    // No process images for this project - demonstrating the optional field
    tags: ['Arduino', 'Python', 'TensorFlow', 'IoT', 'Processing'],
  },
];
