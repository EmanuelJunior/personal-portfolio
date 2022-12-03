export interface IMySkillsData { 
  url: string;  
  title: string;
  level: string;
  progress: number;
}

export const MySkillsData: IMySkillsData[] = [
  {
    url: '/assets/img/skills/typescript.png',
    title: 'TypeScript',
    level: 'Beginner',
    progress: 30
  },
  {
    url: '/assets/img/skills/javascript.png',
    title: 'JavaScript',
    level: 'Intermediate',
    progress: 45
  },
  {
    url: '/assets/img/skills/redux.png',
    title: 'Redux',
    level: 'Beginner',
    progress: 25
  },
  {
    url: '/assets/img/skills/react.png',
    title: 'React',
    level: 'Intermediate',
    progress: 70
  },
  {
    url: '/assets/img/skills/nextjs.png',
    title: 'NextJS',
    level: 'Intermediate',
    progress: 60
  },
  {
    url: '/assets/img/skills/nestjs.png',
    title: 'NestJS',
    level: 'Beginner',
    progress: 50
  },
  {
    url: '/assets/img/skills/tailwind.png',
    title: 'Tailwind',
    level: 'Intermediate',
    progress: 40
  },
  {
    url: '/assets/img/skills/git.png',
    title: 'Git',
    level: 'Intermediate',
    progress: 50
  },
]