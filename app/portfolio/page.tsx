export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Projects
      </h1>
      <p className="mb-4">
        {'Here is the source code for some of the things I have worked on. Mostly they are little tid bits of something I was learning, or I was curious about how something worked under the hood.'}
      </p>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            This Website
        </h2 >
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BillingtonDev/nextjs-portfolio">nextjs-portfolio</a>
        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            Exploring Image Modeling for Melanoma Detection
        </h2>
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BillingtonDev/AIProject">AIProject</a>
        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            YouTube Comments Analysis
        </h2>
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/RupeshRang95/Sentiment_Analysis_Youtube">Sentiment_Analysis_Youtube</a>
        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            Basic Discord Bot
        </h2>
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BillingtonDev/DiscordBot">DiscordBot</a>
      </div>

    
    </section>
  )
}
