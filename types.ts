export interface ISkill {
  name: string;
  description: string;
}
export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: ICategory[];
  tags: string[];
  id: number;
}

export type ICategory = '.Net' | 'React' | 'Nodejs' | 'Desktop' | 'Mobile';
