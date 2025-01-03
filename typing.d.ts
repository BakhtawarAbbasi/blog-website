import { SanityImageSource } from '@sanity/image-url/lib/types';

type Post = {
  title: string;
  summary: string;
  image: SanityImageSource; // Or string if you're storing URLs
  slug: string;
};
