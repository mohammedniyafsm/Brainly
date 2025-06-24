declare module 'react-twitter-embed' {
  import { ComponentType } from 'react';

  interface TwitterEmbedProps {
    tweetId: string;
    options?: {
      height?: number | string;
      width?: number | string;
      theme?: 'light' | 'dark';
      [key: string]: any;
    };
  }

  const TwitterEmbed: ComponentType<TwitterEmbedProps>;
  export default TwitterEmbed;
}