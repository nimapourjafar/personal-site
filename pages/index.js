import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute w-full h-full bg-background">
        <div className="flex items-center justify-left ml-10 h-64">
          <h1 className="text-9xl font-extrabold text-white pt-44">
            Hey, I'm{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-navyblue to-skyblue animate-gradient-x"
            >
              NIMA
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
