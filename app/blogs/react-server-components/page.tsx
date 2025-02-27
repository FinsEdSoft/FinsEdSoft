"use client"

import Link from 'next/link'
import React from 'react'

function BlogPost() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Cover image */}
            <div className="w-full h-64 md:h-80 relative">
                <img 
                    src="/blog/react-server-components.png" 
                    alt="React Server Components" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                        Understanding React Server Components
                    </h1>
                </div>
                <Link 
          href="/blogs" 
          className="absolute top-4 left-4  bg-opacity-50 hover:bg-opacity-70 text-white px-3 py-2 rounded-md transition duration-200"
        >
          <span className="text-lg">←</span>
          <span>Back to Blogs</span>
        </Link>
            </div>
            
            {/* Content with black stripes on sides */}
            <div className="flex flex-grow">
                {/* Left black stripe */}
                <div className="hidden md:block w-1/6 "></div>
                
                {/* Main content */}
                <div className="w-full md:w-4/6 bg-white p-6 md:p-12 prose max-w-none">
                <div className="flex items-center text-gray-500 text-sm font-medium pb-5">
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
                    <h1 className="text-4xl font-bold mb-4">Understanding React Server Components in Next.js with Tailwind CSS</h1>
                    <p>React Server Components (RSCs) are a groundbreaking feature that allows developers to build more efficient and performant web applications by rendering components on the server. When combined with Next.js and Tailwind CSS, you can create modern, fast, and visually appealing applications with ease. In this blog post, we'll dive into what React Server Components are, how they work in Next.js, and how to style them using Tailwind CSS.</p>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-4">What Are React Server Components?</h2>
                    <p>React Server Components enable developers to render components on the server, reducing the amount of JavaScript sent to the client. This leads to faster page loads, improved performance, and better SEO. Unlike traditional React components, which are rendered on the client side, Server Components allow you to:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Fetch data directly on the server.</li>
                        <li>Reduce the size of the JavaScript bundle.</li>
                        <li>Improve interactivity by combining Server and Client Components.</li>
                    </ul>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-4">Why Use React Server Components in Next.js?</h2>
                    <p>Next.js, a popular React framework, has built-in support for React Server Components. By leveraging RSCs in Next.js, you can:</p>
                    <ol className="list-decimal list-inside mb-4">
                        <li><strong>Improve Performance</strong>: Server-side rendering reduces the time to first byte (TTFB) and ensures faster page loads.</li>
                        <li><strong>Simplify Data Fetching</strong>: Fetch data directly in your components without needing <code>getServerSideProps</code> or <code>getStaticProps</code>.</li>
                        <li><strong>Enhance SEO</strong>: Server-rendered content is more accessible to search engine crawlers.</li>
                    </ol>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-4">Getting Started with React Server Components in Next.js</h2>
                    <p>Let's walk through the steps to create a Next.js application with React Server Components and style it using Tailwind CSS.</p>
                    <hr className="my-8" />
                    <h3 className="text-2xl font-semibold mb-4">Step 1: Set Up a Next.js Project</h3>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Create a new Next.js project:
                            <pre><code>npx create-next-app@latest my-nextjs-app
cd my-nextjs-app</code></pre>
                        </li>
                        <li>Install Tailwind CSS:
                            <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init</code></pre>
                        </li>
                        <li>Configure Tailwind CSS:
                            <p>Update <code>tailwind.config.js</code>:</p>
                            <pre><code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};`}</code></pre>
                            <p>Add Tailwind directives to your <code>globals.css</code>:</p>
                            <pre><code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code></pre>
                        </li>
                    </ol>
                    <hr className="my-8" />
                    <h3 className="text-2xl font-semibold mb-4">Step 2: Create a React Server Component</h3>
                    <p>In Next.js, Server Components are the default. Let's create a simple Server Component that fetches and displays data.</p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Create a new file <code>app/page.js</code>:
                            <pre><code>{`// app/page.js
async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

export default async function Page() {
    const posts = await fetchData();

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
            <div className="max-w-4xl mx-auto">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}`}</code></pre>
                        </li>
                        <li>Run the development server:
                            <pre><code>npm run dev</code></pre>
                        </li>
                        <li>Open your browser and navigate to <code>http://localhost:3000</code>. You'll see a list of blog posts fetched from the API and styled with Tailwind CSS.</li>
                    </ol>
                    <hr className="my-8" />
                    <h3 className="text-2xl font-semibold mb-4">Step 3: Combine Server and Client Components</h3>
                    <p>While Server Components are great for rendering static content, you may need interactivity on the client side. Let's create a Client Component to handle user interactions.</p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Create a new file <code>app/Counter.js</code>:
                            <pre><code>{`'use client'; // Mark this as a Client Component

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-blue-50 p-4 rounded-lg shadow-inner text-center">
            <p className="text-lg font-medium mb-2">Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Increment
            </button>
        </div>
    );
}`}</code></pre>
                        </li>
                        <li>Use the <code>Counter</code> component in your Server Component (<code>app/page.js</code>):
                            <pre><code>{`import Counter from './Counter';

export default async function Page() {
    const posts = await fetchData();

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
            <div className="max-w-4xl mx-auto">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto mt-8">
                <Counter />
            </div>
        </div>
    );
}`}</code></pre>
                        </li>
                    </ol>
                    <hr className="my-8" />
                    <h3 className="text-2xl font-semibold mb-4">Step 4: Deploy Your Application</h3>
                    <p>Deploy your Next.js app to Vercel for seamless integration with Server Components:</p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Install the Vercel CLI:
                            <pre><code>npm install -g vercel</code></pre>
                        </li>
                        <li>Deploy your app:
                            <pre><code>vercel</code></pre>
                        </li>
                    </ol>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-4">Benefits of Using React Server Components</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Faster Load Times</strong>: By rendering components on the server, you reduce the amount of JavaScript sent to the client.</li>
                        <li><strong>Improved SEO</strong>: Server-rendered content is more accessible to search engines.</li>
                        <li><strong>Simplified Data Fetching</strong>: Fetch data directly in your components without additional APIs.</li>
                    </ul>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
                    <p>React Server Components are a powerful addition to the React ecosystem, and Next.js makes it easy to integrate them into your projects. By combining Server Components with Tailwind CSS, you can build performant, visually stunning applications with minimal effort. Start experimenting with React Server Components in your Next.js projects today and experience the benefits firsthand!</p>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-4">Additional Resources</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><a href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" className="text-blue-500 hover:underline">Next.js Documentation on Server Components</a></li>
                        <li><a href="https://tailwindcss.com/docs" className="text-blue-500 hover:underline">Tailwind CSS Documentation</a></li>
                        <li><a href="https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html" className="text-blue-500 hover:underline">React Server Components RFC</a></li>
                    </ul>
                    <p className="text-center mt-12">Happy coding! 🚀</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost