interface IMySkillsData { 
  url: string;  
  title: string;
  level: string;
  progress: number;
}

export const MySkillsData: IMySkillsData[] = [
  {
    url: '/src/assets/img/skills/typescript.png',
    title: 'TypeScript',
    level: 'Beginner',
    progress: 30
  },
  {
    url: '/src/assets/img/skills/javascript.png',
    title: 'JavaScript',
    level: 'Intermediate',
    progress: 45
  },
  {
    url: '/src/assets/img/skills/redux.png',
    title: 'Redux',
    level: 'Beginner',
    progress: 25
  },
  {
    url: '/src/assets/img/skills/react.png',
    title: 'React',
    level: 'Intermediate',
    progress: 70
  },
  {
    url: '/src/assets/img/skills/nextjs.png',
    title: 'NextJS',
    level: 'Intermediate',
    progress: 60
  },
  {
    url: '/src/assets/img/skills/nestjs.png',
    title: 'NestJS',
    level: 'Beginner',
    progress: 50
  },
  {
    url: '/src/assets/img/skills/tailwind.png',
    title: 'Tailwind',
    level: 'Intermediate',
    progress: 40
  },
  {
    url: '/src/assets/img/skills/git.png',
    title: 'Git',
    level: 'Intermediate',
    progress: 50
  },
]