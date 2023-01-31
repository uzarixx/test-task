// <reference types="react-scripts" />


declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png' {
  const content: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}