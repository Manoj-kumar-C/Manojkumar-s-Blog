import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import Head from "next/head";

export default function Home() {
  
  return (
    <>
    <Head>
    <meta name="google-site-verification" content="vU2S4X2WplF-3GnKqFWhDM477c6OewGr1Rd7nBzZPcU" />
    </Head>
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />


    </main>
    </>
  )
}
