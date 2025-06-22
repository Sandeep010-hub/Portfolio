'use client'

import { motion } from 'framer-motion'

const blogs = [
  {
    title: 'React vs Next.js: My Real Project Experience',
    excerpt: 'A deep dive into the pros and cons of React and Next.js from real-world projects.',
    slug: 'react-vs-nextjs',
    date: '2024-04-01',
  },
  {
    title: 'Optimizing Webortex for 98+ Lighthouse Score',
    excerpt: 'How I improved performance and SEO for a production landing page.',
    slug: 'optimizing-webortex',
    date: '2024-03-15',
  },
  {
    title: 'Designing Career Platforms for Indian Students',
    excerpt: 'Lessons learned building Job Bridge, a student portfolio and career guidance platform.',
    slug: 'career-platforms-india',
    date: '2024-02-20',
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding container-max">
      <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <motion.a
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col card-hover cursor-pointer"
          >
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{new Date(blog.date).toLocaleDateString()}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{blog.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">{blog.excerpt}</p>
            <span className="mt-4 text-primary-500 font-semibold">Read More →</span>
          </motion.a>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        Blog posts are powered by <span className="font-semibold">MDX</span> (add your <code>/blog/[slug].tsx</code> pages for full support).
      </div>
    </section>
  )
}

export default BlogSection 