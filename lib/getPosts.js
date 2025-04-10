import fs from "fs";
import path from "path";
//define a path to the directory containing blog posts
const POSTS_FOLDER = path.join(process.cwd(), "app", "blog", "(posts)");

//Create a function object called posts to get a list of posts
const Posts = () => {
  return{
    //create an async function called get that gets posts 
    get: async () => {
      const files = fs.readdirSync(POSTS_FOLDER);
      const folders = files.filter((file) =>{
        return fs.lstatSync(path.join(POSTS_FOLDER, file)).isDirectory();
      });
      const posts = [];
      for (const folder of folders){
        const { meta } = await import(`../app/blog/(posts)/${folder}/page.mdx`);
        const link = `/blog/${folder}`
        const post = {
          link,
          meta,
        };
        posts.push(post);
      }
      return posts;
    },
  };
};

export default Posts;