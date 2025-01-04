import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { components } from "@/app/components/CustomComponent";

export const revalidate = 60; //seconds

 export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item:{slug:string})=>(
    item.slug
  ));
  // console.log(slugRoutes)
  return slugRoutes.map((slug:string)=>(
    {slug}
  ))
  
}

// To create static pages for dynamic routes
export default async function page({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,summary,image,content,
      author->{bio,image,name}
  }[0]`;
  const post = await client.fetch(query);
  // console.log(post);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={500}
        height={500}
        alt="AI for everyone"
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
        <PortableText 
        value={post.content} 
        components={components} 
        />
        
      </section>
    </article>
  );
}