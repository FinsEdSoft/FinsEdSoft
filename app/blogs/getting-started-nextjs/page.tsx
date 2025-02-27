"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BlogPost() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl bg-white min-h-screen">
      {/* Header Section */}
      <header className="mb-8 space-y-4">
        <Link 
          href="/blogs" 
          className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center gap-2 transition-colors duration-200 ease-in-out"
        >
          <span className="text-lg">←</span>
          <span>Back to Blogs</span>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Getting Started with Next.js 15
        </h1>
        <div className="flex items-center text-gray-500 text-sm font-medium">
          <time className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Feb 28, 2025
          </time>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            5 min read
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/blog/getting-started-nextjs.png"
          alt="Getting Started with Next.js 15"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-800 prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
        <p className="leading-relaxed">
          Next.js has become one of the most popular React frameworks for building modern web applications. 
          With the release of Next.js 15, developers can now leverage even more powerful features to create 
          fast, scalable, and SEO-friendly applications. Whether you're a beginner or an experienced developer, 
          this guide will walk you through the steps to get started with Next.js 15 and build your first project.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Prerequisites</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Basic understanding of JavaScript and React</li>
          <li>Node.js installed on your machine</li>
          <li>A code editor (e.g., VS Code)</li>
          <li>A terminal or command prompt</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Step-by-Step Guide</h2>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Install Node.js and npm</h3>
        <p className="mb-4">
          First, ensure you have Node.js and npm installed. Open your terminal and run:
        </p>
        <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
          <code className="text-sm">node --version
npm --version</code>
        </pre>
        <p className="mt-4">
          If not installed, download and install from the official Node.js website.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Create a New Next.js 15 Project</h3>
        <p className="mb-4">
          Create a new Next.js project using the following command:
        </p>
        <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
          <code className="text-sm">npx create-next-app@latest my-nextjs-app</code>
        </pre>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Run the Development Server</h3>
        <p className="mb-4">
          Navigate to your project directory and start the development server:
        </p>
        <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
          <code className="text-sm">cd my-nextjs-app
npm run dev</code>
        </pre>
        <p className="mt-4">
          Your app will be available at <code>http://localhost:3000</code>
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: Create Your First Page</h3>
        <p className="mb-4">
          Create a new page in your Next.js application:
        </p>
        <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
          <code className="text-sm">{`// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js 15!</h1>
      <p>This is your first Next.js app.</p>
    </div>
  );
}`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 5: Add Styling</h3>
        <p className="mb-4">
          Next.js supports various styling options. Here's an example using CSS Modules:
        </p>
        <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
          <code className="text-sm">{`// styles/Home.module.css
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 6: Deploy Your Application</h3>
        <p className="mb-4">
          The easiest way to deploy your Next.js app is using Vercel:
        </p>
        <ol className="list-decimal list-inside">
          <li>Push your code to GitHub</li>
          <li>Import your repository to Vercel</li>
          <li>Vercel will automatically deploy your application</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Tips and Best Practices</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li className="text-gray-700">Use Server Components for better performance</li>
          <li className="text-gray-700">Implement proper error boundaries</li>
          <li className="text-gray-700">Optimize images using next/image</li>
          <li className="text-gray-700">Leverage the new caching mechanisms</li>
          <li className="text-gray-700">Follow the official documentation for best practices</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Additional Resources</h2>
        <ul className="space-y-4">
          <li>
            <a 
              href="https://nextjs.org/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Next.js Official Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/vercel/next.js" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Next.js GitHub Repository
            </a>
          </li>
          <li>
            <a 
              href="https://vercel.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Vercel Deployment Guide
            </a>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">
            Ready to Start Building?
          </h3>
          <p className="text-blue-800 leading-relaxed">
            Check out the official{' '}
            <a 
              href="https://nextjs.org/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            >
              Next.js documentation
            </a>
            {' '}for more detailed information.
          </p>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
