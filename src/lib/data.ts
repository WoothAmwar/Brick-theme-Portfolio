import { SharedData, PrimaryLanguageData } from '../types/data';
import sharedDataJson from '../data/portfolio_shared_data.json';
import primaryLanguageJson from '../data/res_primaryLanguage.json';

export const portfolioSharedData: SharedData = sharedDataJson as SharedData;
export const primaryLanguageData: PrimaryLanguageData = primaryLanguageJson as PrimaryLanguageData;

export const getBasicInfo = () => {
    return {
        ...portfolioSharedData.basic_info,
        ...primaryLanguageData.basic_info,
    };
};

export const getSkills = () => portfolioSharedData.skills;
export const getProjects = () => primaryLanguageData.projects;
export const getExperience = () => primaryLanguageData.experience;

export const NAV_ITEMS = [
    { label: 'HOME', href: '#home', color: 'red' },
    { label: 'BUILDS', href: '#builds', color: 'blue' },
    { label: 'EXPERIENCE', href: '#experience', color: 'yellow' },
    { label: 'CONTACT', href: '#contact', color: 'green' },
] as const;
