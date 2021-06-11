import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getPostSlugs } from "../../util/data";

export default function Home({ posts }) {
  return (
    <div className="absolute w-full h-full bg-background overflow-hidden">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-24">
        <h1 className="py-24 text-center font-black text-8xl md:text-fat bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy">Blog</h1>

        <div className="space-y-5 text-white">
          {posts.map((blog) => (
            <div key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                <div className="cursor-pointer transition duration-500 ease-in-out bg-gradient-to-r from-blue-700 via-blue-500 to-skyblue animate-gradient-xy rounded-xl p-6 hover:bg-blue-700 hover:shadow-2xl">
                  <h2 className="text-2xl font-bold">{blog.title}</h2>
                  <h3>{format(parseISO(blog.date), "MMMM do, uuu")}</h3>
                  <p>{blog.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getPostSlugs();
  console.log(allPosts);
  return {
    props: {
      posts: allPosts.map((item) => ({
        date: item.data.date.toISOString(),
        title: item.data.title,
        description: item.data.description,
        content: item.content,        
        slug: item.slug,
      })),
    },
  };
}
