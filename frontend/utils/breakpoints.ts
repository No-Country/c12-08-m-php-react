import tailwindConfig from '@/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

const getEndpointInt = (endpoint: string) => {
  const endpointInt = endpoint.replace('px', '');
  return parseInt(endpointInt);
};

// @ts-ignore: Unreachable code error
const tailwindBreakpoints = resolveConfig(tailwindConfig).theme.screens;

function parseTailwindBreakpoints() {
  const nuevoObjeto: any = {};

  Object.keys(tailwindBreakpoints).forEach(key => {
    if (!key.includes('-')) {
      nuevoObjeto[key] = getEndpointInt(tailwindBreakpoints[key]);
    }
    return;
  });

  return nuevoObjeto as {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  };
}

const breakpoints = parseTailwindBreakpoints();

export default breakpoints;
