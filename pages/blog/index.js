import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getPostSlugs } from "../../util/data";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-5 text-white">
        {posts.map((blog) => (
          <div key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <div className="cursor-pointer transition duration-500 ease-in-out bg-blue-600 rounded-xl p-6 hover:bg-blue-700 hover:shadow-2xl">
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <h3>{format(parseISO(blog.date), "MMMM do, uuu")}</h3>
                <p>{blog.content}</p>
              </div>
            </Link>
          </div>
        ))}
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
        content: item.content,
        slug: item.slug,
      })),
    },
  };
}
