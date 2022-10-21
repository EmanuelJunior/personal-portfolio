import { MilitaryTech, FolderSpecial, PeopleAlt } from '@mui/icons-material';

export interface IDataForCardsAboutMe {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const DataForCardsAboutMe: IDataForCardsAboutMe[] = [
  {
    title: 'Experience',
    description: '2+ years of experience',
    icon: <MilitaryTech color='secondary' fontSize='large' sx={{ display: 'block', m: '0 auto' }}/>
  },
  {
    title: 'Projects',
    description: '10+ completed',
    icon: <FolderSpecial color='secondary' fontSize='large' sx={{ display: 'block', m: '0 auto' }}/>
  },
  {
    title: 'Clients',
    description: '5+ happy',
    icon: <PeopleAlt color='secondary' fontSize='large' sx={{ display: 'block', m: '0 auto' }}/>
  }
]