export interface SectionData {
  title?: string;
  subtitle?: string;
  content: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean; 
  bg?: string;       
}

export const academicSections: SectionData[] = [
  {
    title: '21st Century Skills',
    content: 'Prepare understudies to confront the future.\n\n• Communication skill\n• Collaborative\n• Critical Thinking and Problem Solving\n• Creativity',
    imgSrc: '/academic/skills.jpg',
    imgAlt: '21st Century Skills',
    bg: 'bg-white',
  },
  {
    title: 'Education For Life and Shalom',
    content: `Dian Harapan School is willing to give opportunities for the students to reflect Godly characters and faith in Christ through learning activities at school. We believe that Godly character is a fruit from Holy Spirit. The students need to learn, get the model and culture that will build their values, cultures and characters. Teacher needs to plan the learning intentionally where culture and Godly character’s establishment is easily growing. Therefore, we can say that education in Dian Harapan School is an education that train the students to live, not only to prepare their lives and future but also for eternity, to prepare and teach the students more preciously, more greatly how to live before God and respond to His calling.`,
    imgSrc: '/academic/shalom.jpg',
    imgAlt: 'Education For Life',
    reverse: true,
    bg: 'bg-yellow-50',
  },
  {
    title: 'Longlife Learning Community',
    content: `Dian Harapan School Community is a community which consists of Christ’s disciples, where teachers, staffs and other workers are called by God to be a learner, not only in this world but also to be a long life learners. To be involved in Dian Harapan School community means that we will be a long life learner, that is every student who has been entrusted to us will involve in a community who have desire and calling to know, walk with, and love God and His word.`,
    imgSrc: '/academic/community.jpg',
    imgAlt: 'Longlife Learning Community',
    bg: 'bg-white',
  },
  {
    title: "Student's Holistic Achievements",
    content: `Dian Harapan School encourages the students to do the best and excel in any area, including language, science, art, social science, technology and information, physical and wellness, mathematics, social justice, etc. There is no specific favorite area because we realize that all things that God created are all good. Students are nurtured and encouraged not only to excel in their academic achievements but also in their skills to serve community.`,
    imgSrc: '/academic/holistic.jpg',
    imgAlt: 'Student Achievements',
    reverse: true,
    bg: 'bg-yellow-50',
  },
];