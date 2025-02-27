import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About FinEdSoft | Technology Education',
    description: 'Learn about FinEdSoft, a leading education company creating apps, blogs, and videos to provide education about technology.',
};

const AboutPage = () => {
    return (
        <main className="container mx-auto px-4 py-12 max-w-6xl">

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                    At FinEdSoft, we believe that technology education should be accessible, engaging, and practical.
                    Our mission is to demystify complex technology concepts and empower learners of all levels to 
                    build real-world skills through high-quality educational content.
                </p>
                <p className="text-lg">
                    Whether you're a beginner taking your first steps in coding or an experienced professional
                    looking to expand your skillset, our diverse range of educational resources is designed to 
                    support your learning journey.
                </p>
            </section>

            <section className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Educational Apps</h3>
                    <p>
                        Interactive applications designed to make learning technology concepts intuitive and engaging,
                        with hands-on exercises and real-time feedback.
                    </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Tech Blogs</h3>
                    <p>
                        In-depth articles, tutorials, and guides covering the latest technology trends, programming
                        languages, and industry best practices.
                    </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Video Content</h3>
                    <p>
                        Comprehensive video courses and quick tutorials that break down complex concepts into
                        easily digestible lessons for visual learners.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-lg mb-4">
                    Have questions about our educational content or interested in collaboration opportunities?
                    We'd love to hear from you!
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2"><strong>Email:</strong> finedsoft@gmail.com</p>
                    <p className="mb-2"><strong>Location:</strong> Durgapur, WB, India</p>
                    <p><strong>Social Media:</strong> @finedsoft</p>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;