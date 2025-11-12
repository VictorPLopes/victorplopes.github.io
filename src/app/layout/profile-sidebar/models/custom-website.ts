export interface CustomWebsite {
  id: number;
  label: string;
  url: string;
  style?: 'text' | 'filled' | 'elevated' | 'outlined' | 'tonal';
  icon?: string;
}
