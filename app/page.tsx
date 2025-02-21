import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey There!
      </h1>
      <p className="mb-4">
        {`I am a data analyst studying computer science at Wilfrid Laurier University mastering Python, 
        SQL, R, and Power BI. As I try to better understand the world around us through data, engineering, 
        and statistics I also love to get pulled into the worlds of history and economics. While I am 
        learning how to apply my skills to the insurance industry, I would love to have a chat about your 
        journey, and how my skills could impact your business make more efficient processes, and better 
        decision making.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
    
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Schedule Your Peer Tutor Session!
      </h1>
      <p className="mb-4">
        {`If you are not meeting your current academic goals in computer science, mathematics, or statistics 
        I would love to connect! As a certified tutor in Laurier’s Tutor Connection Program I give you tools 
        to support your learning outside of the lecture hall, even if all you want is some dedicated time to 
        study with a peer.`}
      </p>
      <div className="my-8">
        <a href="https://micahstutoring.setmore.com/">Book Now</a>
      </div>
    
    </section>
  )
}
