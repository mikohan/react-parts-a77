import { IDesktopHeaderVariant, IMobileHeaderVariant } from '~/store/options/optionsTypes';

interface IConfig {
    desktopHeaderVariant: IDesktopHeaderVariant;
    mobileHeaderVariant: IMobileHeaderVariant;
}

const config: IConfig = {
    // desktopHeaderVariant: 'spaceship/one',
    desktopHeaderVariant: 'classic/one',
    mobileHeaderVariant: 'one',
};

export default config;

export const blogBaseUrl: string = `http://localhost:8000/blog/posts`;
