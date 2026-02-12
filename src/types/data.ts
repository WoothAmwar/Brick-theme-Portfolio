export interface SocialLink {
    name: string;
    url: string;
    class: string;
}

export interface BasicInfo {
    name?: string;
    titles?: string[];
    social?: SocialLink[];
    image?: string;
    description_header?: string;
    description?: string;
    section_name?: {
        about: string;
        projects: string;
        skills: string;
        experience: string;
    };
}

export interface SkillIcon {
    name: string;
    class: string;
    level: string;
}

export interface Skills {
    icons: SkillIcon[];
}

export interface SharedData {
    basic_info: BasicInfo;
    skills: Skills;
}

export interface ProjectTool {
    class: string;
    name: string;
}

export interface ProjectData {
    title: string;
    startDate: string;
    description: string;
    images: string[];
    url: string;
    tools: ProjectTool[];
}

export interface ExperienceData {
    company: string;
    title: string;
    years: string;
    mainTool: string[];
    tools: string[];
}

export interface PrimaryLanguageData {
    basic_info: BasicInfo;
    projects: ProjectData[];
    experience: ExperienceData[];
}
