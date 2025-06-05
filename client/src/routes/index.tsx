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

function BlogLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e2127] text-[#d4d4d4] px-4 relative overflow-hidden font-sans">
      {/* Animated background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-gradient-move"
        style={{
          background:
            'linear-gradient(120deg, #23262b 0%, #282c34 50%, #1e2127 100%)',
          opacity: 0.18,
        }}
      />
      {/* Transparent forest image overlay */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Forest background"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-10 -z-20"
        aria-hidden="true"
      />
      {/* Minimal Navigation Header */}
      <nav className="w-full max-w-3xl flex justify-between items-center py-6 mb-8">
        <span className="text-2xl font-bold uppercase tracking-widest text-[#c9c9c9] animate-fade-in">SwissBlog</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-[#7fb4ff] text-[#a3aed2] transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>Home</a>
          <a href="#" className="hover:text-[#7fb4ff] text-[#a3aed2] transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>About</a>
          <a href="#" className="hover:text-[#7fb4ff] text-[#a3aed2] transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>Contact</a>
        </div>
      </nav>
      <header className="w-full max-w-3xl border-b border-[#282c34] pb-8 mb-12 flex flex-col items-start">
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
            className="bg-[#23262b]/80 border border-[#282c34] p-6 rounded-md shadow-lg transition hover:bg-[#23262b]/95 animate-fade-in"
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
      <footer className="w-full max-w-3xl mt-16 border-t border-[#282c34] pt-6 flex justify-between text-[#a3aed2] text-xs tracking-widest uppercase animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span>&copy; {new Date().getFullYear()} My Swiss Blog</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
}