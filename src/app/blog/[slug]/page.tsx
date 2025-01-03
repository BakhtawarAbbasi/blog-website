import { components } from "@/app/components/CustomComponent";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 10;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}


export default async function page({ params: { slug } }: PageProps) {
  const query = `*[_type == 'post' && slug.current== '${slug}']{
    title, summary, image, content
  }[0]`;
  const post = await client.fetch(query);

  if (!post) {
    // Handle the case where the post is not found
    return <div>Post not found</div>;
  }



  return (
<article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image).toString()}
        width={500}
        height={500}
        alt={post.title}
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={post.content} components={components} />
      </section>
    </article>
  );
}