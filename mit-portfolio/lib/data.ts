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
    title: 'Constructionist Agent in Minecraft for AI Literacy',
    description:
      'A constructionist Agent in Minecraft that acts as a Socratic guide for students helping them form complex prompts and build structures such as houses, pyramids, etc while learning the fundamentals of mathematics and geometry.',
    mediaType: 'video',
    mediaSrc: 'https://www.youtube.com/embed/AHBXhTOUiqw',
    //additionalImages: [
      //'https://placehold.co/400x300?text=Detail+1',
      //'https://placehold.co/400x300?text=Detail+2',
    //],
    processNotes:
      'The first challenge was building the complex tool calling functionality by prompting the Agent to create a detailed JSON plan which could then be parsed and executed deterministically.\n The next challenge was to ensure reliability of the plan which was acheived by adding a Verifier Agent and a feedback loop mechanism inspired from GAN models. Finally the biggest challenge was to ensure that students could learn the fundamentals of prompting - to do this we took the approach of scaffolding the Agent allowing for students to interact with it to build complex structures - learning along the way the details that made the fundamentals of a good prompt ',
    //processImages: [
      //'https://placehold.co/300x200?text=Sketch+1',
      //'https://placehold.co/300x200?text=Prototype',
    //],
    tags: ['Multi-Agent Systems', 'Constructionism','Scaffolding', 'Prompt Engineering', ],
  },
  {
    id: 'project-2',
    title: 'Graph centric Query Answering System based on Multi-Modal data',
    description:
      'AI system that answers search queries by building a knowledge-graph based on multi-modal data. It involves extracting Text Data using Parallel API and video data using Youtubtube Transcripts',
    mediaType: 'video',
    mediaSrc: 'https://www.youtube.com/embed/Hl90lyqkWjA',
    // No additional images for this project - demonstrating the optional field
    processNotes:
      'The main challeneges associated with this project were deciding how to rank different nodes which repsented entities - and due to the sparse nature of the graph I decide to use PageRank algorithm. The second challenge was determinging the relevant video contexts which involved crafting perfect queries for the Youtube API using an LLM',
    // No process images for this project - demonstrating the optional field
    tags: ['PageRank','SBERT','Knowledge Graphs', 'Multi-Modal Data', 'Python'],
  },
];
