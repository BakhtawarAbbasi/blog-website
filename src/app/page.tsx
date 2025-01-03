import BlogCard from "./components/BlogCard";
import { client } from "@/sanity/lib/client";
import { Post } from "../../typing";

export const revalidate = 10;

export default async function Home() {
  const query = `*[_type == 'post'] | order(_createdAt asc){
    summary, title, image,
    "slug": slug.current
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-accentDarkSecondary sm:text-3xl lg:text-5xl">
        Read the Blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
