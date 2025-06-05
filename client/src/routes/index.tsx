import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: BlogLandingPage,
})

const posts = [
  {
    title: 'Latest Post Title',
    desc: 'A brief description of the latest blog post goes here.',
    tags: ['design', 'programming'],
  },
  {
    title: 'Another Post Title',
    desc: 'A brief description of another blog post goes here.',
    tags: ['science'],
  },
  {
    title: 'Swiss Design',
    desc: 'Exploring the principles of Swiss design in web development.',
    tags: ['design'],
  },
  {
    title: 'Minimalism',
    desc: 'Why less is more in modern UI/UX.',
    tags: ['design', 'science'],
  },
  {
    title: 'Typography',
    desc: 'The art of type in digital design.',
    tags: ['design'],
  },
  {
    title: 'Color Theory',
    desc: 'How to use color effectively in your projects.',
    tags: ['design', 'science', 'maths'],
  },
];

// bg-[#1e2127] text-[#d4d4d4]

function BlogLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 relative overflow-hidden font-sans">
      {/* Animated background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-gradient-move"
        style={{
          background:
            'linear-gradient(120deg, #23262b 0%, #282c34 50%, #1e2127 100%)',
          opacity: 0.18,
        }}
      />
      {/* Minimal Navigation Header */}
      <header className="w-full max-w-3xl px-6 py-2 bg-[var(--background)] border-b border-[#282c34] pb-8 mb-12 flex flex-col items-start">
        <h1 className="text-5xl font-bold tracking-tight uppercase leading-tight font-sans text-[#e6e6e6] animate-fade-in">
          My Swiss Blog
        </h1>
        <p className="text-xl mt-4 font-light tracking-wide text-[#7fb4ff] animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Insights, stories, and thoughts — designed with Swiss precision.
        </p>
      </header>
      <main className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article
            key={post.title}
            className="bg-[var(--background)]/90 border border-[#282c34] p-6 rounded-md shadow-lg transition hover:bg-[var(--background)]/100 animate-fade-in"
            style={{ animationDelay: `${0.5 + i * 0.1}s` }}
          >
            <h2 className="text-lg font-semibold tracking-wide mb-1 text-[#e6e6e6]">{post.title}</h2>
            <p className="text-[#7fb4ff] text-sm mb-3">{post.desc}</p>
            <a href="#" className="text-[#7fb4ff] text-xs uppercase tracking-wider hover:underline mb-3 inline-block">Read more</a>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-[#282c34] text-xs text-[#7fb4ff] border border-[#3a4151] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}