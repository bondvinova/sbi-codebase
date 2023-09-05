export const ROUTES_NAME = {
  ROOT: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  TWO_FACTOR_AUTHENTICATION: '/two-factor-authentication',
  ERROR: '*',
  CLIENTMANAGEMENT: '/client-management',
} as const;

export enum LayoutType {
  Blank = 'blank',
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
