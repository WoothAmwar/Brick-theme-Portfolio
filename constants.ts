import { NavItem, Project, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home', color: 'red' },
  { label: 'BUILDS', href: '#builds', color: 'blue' },
  { label: 'MANUAL', href: '#manual', color: 'yellow' },
  { label: 'CONTACT', href: '#contact', color: 'green' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    kitNumber: 'KIT #001',
    title: 'Neural Network',
    description: 'A complex AI visualization engine built with clean connections and modular logic.',
    pieceCount: 482,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHVqBt2c97Qzh5TEvLqxh3ExdrITN9CiBhwyckK-Td4Y2G0tQk0J91YQ8ThbyPFolIxhW7qKFpGwXa3iqLwTmRoWyjAANqjUM_aaCJYr-w6NKAYR_Tun36CfVWolHqYR7peEiLo3QAWTu8_1mXBTcJB5CEoLcFmBKkF4Wpf90456u0cYU-VNzXJDkBhgeJRldEBTVLMIPOHifJwfxuxba95LJUlmQxMVKSJ9NgOqeiBqgw3RoJ1cOjj0m5UHjidj6mC8okQnKtaeh4',
    themeColor: 'red',
  },
  {
    id: '2',
    kitNumber: 'KIT #002',
    title: 'Cloud Base',
    description: 'Infrastructure automation that scales like a skyscraper. Secure, sturdy, and sky-high.',
    pieceCount: 1204,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNuCZrJibm5rhIOahOgHYvInbq_bFNy9Lm7CNzxeMIfWUuDab9Vxw6xMUMU58EnJefah0EEn8DHz1XTWSVSrkK1jvjkTUHBSPRLNuvtXk-QX2PlGYutIaA55aVJnu8L8HJP-tjI02UV5Dc5yUHMpiamAtxqV3WaIsPeAAEityGD5lG0nlT0xwjKzAYqtugV32bPWi8qGGZxHYpCysEVQ0RGbvQyVyMHoqbESCOVAa70HsNQFqq78mcGddhxBpO4kTqsqxNrogTpt2k',
    themeColor: 'blue',
  },
  {
    id: '3',
    kitNumber: 'KIT #003',
    title: 'Pixel Playground',
    description: 'Creative UI components library designed for rapid prototyping and colorful interactions.',
    pieceCount: 256,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEg9b_sDb6XmYmwmUBoJIYYQ_J0Bm-VKKU1a9Pi_5sph23VoQdNcc-_5TkZ7rBkUvAHWOfzK51p9CbP6_1L37uNP9lwasKxFDGoZMelPFoWBRv2ynqo9gooJCimT-Xu6ktFLRQff1tC9W1YlwuItbEQ6VgvfK4N-LDK0I2XVeuL2JTSrPxwSVl1R5ciuKKJ0F8QYC7zOsFVZCrHUt_IQ8R37dxvI6UEE56HuQJ39NPXqvVoevMweIpVPRR8ASnUiyaJpfT9yoiXYBl',
    themeColor: 'green',
  },
];

export const STATS: StatItem[] = [
  { value: '150+', label: 'Sets Built', color: 'red', textColor: 'white' },
  { value: '12k', label: 'Bricks Moved', color: 'blue', textColor: 'white' },
  { value: '8', label: 'Years Exp', color: 'yellow', textColor: 'black' },
  { value: '100%', label: 'Original Pieces', color: 'green', textColor: 'white' },
];
