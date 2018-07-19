const API_ENDPOINT = process.env.API_ENDPOINT || 'localhost';
const GA_ID = process.env.GA_ID || '';

const IMAGE_PATH = 'assets/images';
const VIDEO_PATH = 'assets/videos';

const COMPONENT_COLOR = {
  BLUE: 'primary',
  GREEN: 'success',
  RED: 'danger',
  YELLOW: 'warning',
  GRAY: 'secondary'
};

export { API_ENDPOINT, GA_ID, IMAGE_PATH, VIDEO_PATH, COMPONENT_COLOR };
