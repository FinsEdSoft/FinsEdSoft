'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function TailwindGuide() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <header className="mb-10">
            <Link 
          href="/blogs" 
          className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center gap-2 transition-colors duration-200 ease-in-out"
        >
          <span className="text-lg">←</span>
          <span>Back to Blogs</span>
        </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Building Modern UIs with Tailwind CSS
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

            <div className="prose prose-lg max-w-none">
                <Image 
                    src="/blog/tailwind-css-guide.png" 
                    alt="Tailwind CSS illustration" 
                    width={900} 
                    height={500} 
                    className="rounded-lg my-6"
                />

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Introduction to Tailwind CSS</h2>
                    <p className="mb-4">
                        Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without leaving their HTML. 
                        Unlike other CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs.
                    </p>
                    <p className="mb-4">
                        In this guide, we'll explore how to use Tailwind CSS effectively to build modern, responsive UIs for your web applications.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Getting Started with Tailwind</h2>
                    <p className="mb-4">
                        Setting up Tailwind CSS in your project is straightforward. With Next.js, it's even easier as Tailwind is supported out of the box.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-6">
                        <pre className="overflow-x-auto">
                            <code>
                                npm install -D tailwindcss postcss autoprefixer{'\n'}
                                npx tailwindcss init -p
                            </code>
                        </pre>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Core Concepts</h2>
                    
                    <h3 className="text-2xl font-semibold mb-3">Utility-First Approach</h3>
                    <p className="mb-4">
                        Instead of writing custom CSS, you apply pre-existing classes directly in your HTML. This approach keeps your CSS bundle size small and makes your development process faster.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3">Responsive Design</h3>
                    <p className="mb-4">
                        Tailwind makes responsive design simple with breakpoint prefixes like sm:, md:, lg:, and xl:.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-6">
                        <pre className="overflow-x-auto">
                            <code>
                                {'<div className="text-center md:text-left">\n  Responsive text alignment\n</div>'}
                            </code>
                        </pre>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Building Components</h2>
                    <p className="mb-4">
                        Let's build a simple card component using Tailwind CSS:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-6">
                        <pre className="overflow-x-auto">
                            <code>
                                {'<div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">\n  <h3 className="text-xl font-semibold text-gray-800">Card Title</h3>\n  <p className="text-gray-600 mt-2">This is a simple card built with Tailwind CSS.</p>\n  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">Learn More</button>\n</div>'}
                            </code>
                        </pre>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Advanced Techniques</h2>
                    <h3 className="text-2xl font-semibold mb-3">Custom Configuration</h3>
                    <p className="mb-4">
                        Tailwind allows you to customize everything from colors to spacing in your tailwind.config.js file.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3">Extracting Components</h3>
                    <p className="mb-4">
                        When you find yourself repeating combinations of utilities, consider extracting them into reusable components.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                    <p className="mb-4">
                        Tailwind CSS offers a powerful approach to building modern UIs by providing low-level utility classes. Its flexibility and extensibility make it an excellent choice for developers who want complete control over their designs without writing custom CSS.
                    </p>
                    <p className="mb-4">
                        Start incorporating Tailwind in your projects today and experience the productivity boost it offers.
                    </p>
                </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Related Resources</h3>
                <ul className="space-y-2">
                    <li>
                        <Link href="https://tailwindcss.com/docs/grid-template-columns" className="text-blue-600 hover:underline">
                            CSS Grid Layout with Tailwind
                        </Link>
                    </li>
                    <li>
                        <Link href="https://tailwindcss.com/docs/responsive-design" className="text-blue-600 hover:underline">
                            Responsive Design Best Practices
                        </Link>
                    </li>
                    <li>
                        <Link href="https://prismic.io/blog/tailwind-animations" className="text-blue-600 hover:underline">
                            Animating UI Elements with Tailwind
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}