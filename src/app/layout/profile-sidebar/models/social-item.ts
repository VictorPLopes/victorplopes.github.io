export interface SocialItem {
  id: string | number;
  label: string;
  url: string;
  style?: 'text' | 'filled' | 'elevated' | 'outlined' | 'tonal';
  icon?: string;
}
