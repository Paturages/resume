import type { ReactNode } from "react";

export interface HeaderSection {
  name: string;
  subtitle: string;
  picture: string;
}

export interface FooterSection {
  url: string;
}

export interface ContactSection {
  legend: string;
  items: [string, ReactNode][];
}

export interface EducationSection {
  legend: string;
  logo: string;
  year: string;
  title: string;
  subtitle: string;
}

export interface SkillSection {
  legend: string;
  items: [string, string, string][];
}

export type ProjectItem = [string, string, ReactNode];

export interface ProjectSection {
  legend: string;
  items: [string, string, string, string, ProjectItem[]][];
}

export interface ResumeData {
  footer: FooterSection;
  header: HeaderSection;
  contact: ContactSection;
  education: EducationSection;
  skills: SkillSection;
  extra: SkillSection;
  languages: SkillSection;
  industry: ProjectSection;
  personal: ProjectSection;
}
