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
        if(post.meta.private !== true){
          posts.push(post);
        }
      }
      return posts;
    },
  };
};

function sortDesc(a, b){
  if(a < b){
    return 1;
  }
  if(a > b){
    return -1;
  }
  return 0;
}

function sortAsc(a, b){
  if(a < b){
    return -1;
  }
  if(a > b){
    return 1;
  }
  return 0;
}

async function getPosts() {
  const files = fs.readdirSync(POSTS_FOLDER);
  const folders = files.filter((file) => {
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
}

async function getSortedPostsAlphabetical(priv = false){
  const posts = await getPosts();
  return posts.filter((p) => p.meta.private == priv).sort((a,b) => sortAsc(a.meta.title, b.meta.title));
}

async function getSortedPostsPublish(priv = false){
  const posts = await getPosts();
  return posts.filter((p) => p.meta.private == priv).sort((a,b) => sortDesc(a.meta.publish_date, b.meta.publish_date));
}

async function getSortedPostsUpdate(priv = false){
  const posts = await getPosts();
  return posts.filter((p) => p.meta.private == priv).sort((a,b) => sortDesc(a.meta.update_date, b.meta.update_date));
}

async function getSortedPostsByCategory(priv = false){
  const sortedPosts = await getSortedPostsPublish(priv);

  const posts = [];
  sortedPosts.forEach(post =>{
    let postCategory = [post.meta.category];
    posts.forEach(section =>{
      if(postCategory.includes(section.category)){
        section.posts.push(post);
        postCategory.splice(postCategory.indexOf(section.category), 1);
      }
    })
    postCategory.forEach(cat =>{
      posts.push({category:cat, posts:[post]});
    })
  });

  posts.sort((a, b) => sortAsc(a.category, b.category));
  return posts;
}

async function getSortedPostsBytags(priv = false){
  const sortedPosts = await getSortedPostsPublish(priv);

  const posts = [];
  sortedPosts.forEach(post =>{
    let postTags = post.meta.tags;
    posts.forEach(section =>{
      if(postTags.includes(section.tag)){
        section.posts.push(post);
        postTags.splice(postTags.indexOf(section.tag), 1)
      }
    })
    postTags.forEach(t =>{
      posts.push({tag:t, posts:[post]})
    })
  });
  posts.sort((a, b) => sortAsc(a.tag, b.tag));
  return posts;
}

export const postsByAlpha = await getSortedPostsAlphabetical();
export const postsByPublish = await getSortedPostsPublish();
export const postsByUpdate = await getSortedPostsUpdate();
export const postsByCategory = await getSortedPostsByCategory();
export const postsByTags = await getSortedPostsBytags();


export default Posts;