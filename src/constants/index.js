const API_ENDPOINT = process.env.API_ENDPOINT || 'localhost';
const GA_ID = process.env.GA_ID || '';

const IMAGE_PATH = 'assets/images';
const VIDEO_PATH = 'assets/videos';

const LANGUAGES = {
  en: 'EN',
  ko: 'KR'
};

const COMPONENT_COLOR = {
  BLUE: 'primary',
  GREEN: 'success',
  RED: 'danger',
  YELLOW: 'warning',
  GRAY: 'secondary'
};

const VIEW_SIZE = {
  SM: 'size-sm',
  MD: 'size-md',
  lg: 'size-lg'
};

const ACCESS_TOKEN = 'jwt';

export {
  API_ENDPOINT,
  GA_ID,
  IMAGE_PATH,
  VIDEO_PATH,
  LANGUAGES,
  COMPONENT_COLOR,
  VIEW_SIZE,
  ACCESS_TOKEN
};
