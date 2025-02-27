"use client"
import React from 'react' 
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'react-feather'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Sample blog data - you can replace this with your actual data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description: "Learn the basics of Next.js 15 and how to build modern web applications.",
    image: "/blog/getting-started-nextjs.png",
    link: "/blogs/getting-started-nextjs",
    date: "Feb 28, 2025"
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    description: "Deep dive into React Server Components and their benefits.",
    image: "/blog/react-server-components.png",
    link: "/blogs/react-server-components",
    date: "Feb 28, 2025"
  },
  {
    id: 3,
    title: "Building Modern UIs with Tailwind CSS",
    description: "Master Tailwind CSS to create beautiful user interfaces quickly.",
    image: "/blog/tailwind-css-guide.png",
    link: "/blogs/tailwind-css-guide",
    date: "Feb 28, 2025"
  }
]

function Blogs({       showBackButton = "true" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {showBackButton == "true" ? <>
          <Link 
          href="/"
          className="inline-flex items-center mb-8 text-indigo-600 hover:text-indigo-800 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link> <h1 className="text-4xl font-bold mb-2 text-gray-900">Our Blogs</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">Insights, tutorials and updates from our team</p></>: ""
        }
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="relative w-full aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-medium mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                <Link 
                  href={post.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs

