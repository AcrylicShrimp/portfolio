export interface ProjectInfo {
  id: string;
  type: ProjectType;
  name: string;
  beginAt: string;
  endAt?: string;
  description: string;
  tag: string;
}

export enum ProjectType {
  Career = 'career',
  Personal = 'personal',
}
