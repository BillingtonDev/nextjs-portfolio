function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

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
            href="https://github.com/BillingtonDev/nextjs-portfolio">
            <ArrowIcon />
            <p className="ml-2 h-7">nextjs-portfolio</p>
            </a>
        

        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            Exploring Image Modeling for Melanoma Detection
        </h2>
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BillingtonDev/AIProject">
                <ArrowIcon />
                <p className="ml-2 h-7">AIProject</p>
        </a>
        

        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            YouTube Comments Analysis
        </h2>
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/RupeshRang95/Sentiment_Analysis_Youtube">
                <ArrowIcon />
                <p className="ml-2 h-7">Sentiment_Analysis_Youtube</p>
        </a>
        

        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
            Basic Discord Bot
        </h2>
        <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BillingtonDev/DiscordBot">
                <ArrowIcon />
                <p className="ml-2 h-7">DiscordBot</p>
        </a>
      </div>
    
    </section>
  )
}
