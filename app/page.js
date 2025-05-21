import Image from "next/image";
import { BlogListByPublish, BlogListByCategory } from './components/BlogPostsList'
import RecentPosts from './components/RecentPosts'
import About from './components/About'

export default function Home() {
  return (
    <main>
      <About />
      <RecentPosts />
    </main>
  );
}
