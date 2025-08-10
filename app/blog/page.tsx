import { BlogPosts } from 'app/components/posts'
declare module "*.jpg";
import imageToAdd from 'app/assets/laptop.jpg'

function MyComponent() {
  return <img src={imageToAdd} alt="A Laptop" />;
}

export const metadata = {
  title: 'Blog',
  description: 'Notes to Self.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
      <MyComponent/>
    </section>
  )
}

