export interface Project {
  id: string;
  kitNumber: string;
  title: string;
  description: string;
  pieceCount: number;
  imageUrl: string;
  themeColor: 'red' | 'blue' | 'green' | 'yellow';
}

export interface NavItem {
  label: string;
  href: string;
  color: 'red' | 'blue' | 'yellow' | 'green';
}

export interface StatItem {
  value: string;
  label: string;
  color: 'red' | 'blue' | 'yellow' | 'green';
  textColor: 'white' | 'black';
}
