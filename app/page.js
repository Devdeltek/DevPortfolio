import Image from "next/image";
import { BlogListByPublish, BlogListByCategory } from './components/BlogPostsList'
import HighlightedPosts from './components/HighlightedPosts'
import About from './components/About'

export default function Home() {
  return (
    <main>
      <About />
      <HighlightedPosts />
    </main>
  );
}
