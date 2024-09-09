
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Blog Title */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold text-brown-700 mb-6">The Impact of Digital Campaigns on Social Change</h1>
          <p className="text-lg text-brown-500 italic">Posted on September 9, 2024 • By Ehtasham Haque</p>
        </section>

        {/* Blog Content */}
        <section className="mb-12">
          <div className="relative mb-6">
            <Image
              className="rounded-lg shadow-lg"
              src="/images/blog-sample.jpg"
              alt="Blog Post Image"
              width={800}
              height={400}
              layout="responsive"
            />
          </div>

          <div className="text-lg text-brown-600 leading-relaxed">
            <p className="mb-4">
              In the modern age, digital campaigns have become a critical tool for driving social change. With the rise of social media platforms, activists and organizations can now reach a broader audience and amplify their message like never before.
            </p>
            <p className="mb-4">
              Digital campaigns often combine grassroots efforts with online advocacy, allowing for increased participation and engagement. From Twitter hashtags to viral videos, these campaigns have the power to mobilize thousands, even millions, of people in a short span of time.
            </p>
            <blockquote className="bg-brown-50 p-6 italic border-l-4 border-brown-300 mb-6">
              Social media gives people the power to organize and enact change at a scale never before possible. It’s truly democratized activism. - Jane Doe, Digital Campaigner
            </blockquote>
            <p className="mb-4">
              One of the most successful examples of a digital campaign driving real-world change is the Black Lives Matter movement. Sparked by a tweet, it evolved into a global phenomenon, bringing awareness to racial injustice and police violence.
            </p>
            <p className="mb-4">
              Other examples include climate action campaigns, such as Fridays for Future, and initiatives for gender equality, like the #MeToo movement. These movements have demonstrated how online platforms can lead to tangible changes in policies, laws, and societal attitudes.
            </p>
          </div>
        </section>

        {/* Blog Footer - Author Info */}
        <section className="bg-brown-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-brown-700 mb-4">About the Author</h2>
          <div className="flex items-center">
            <Image
              className="rounded-full"
              src="/images/profile.jpeg"
              alt="Author Image"
              width={100}
              height={100}
            />
            <div className="ml-4">
              <p className="text-lg text-brown-600">
                Ehtasham Haque is a community organizer and digital strategist with over 10 years of experience in leading grassroots campaigns. He has worked on numerous social change initiatives, focusing on human rights and environmental protection.
              </p>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-6">Comments</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <p className="text-lg text-brown-600"><strong>Jane Smith:</strong> This is an amazing read! The digital era has truly revolutionized how we approach activism. I can’t wait to see what’s next for social change campaigns.</p>
            </div>
            <div className="border-b pb-6">
              <p className="text-lg text-brown-600"><strong>Mike Johnson:</strong> Really insightful! I’ve been a part of several local campaigns, and I can attest to the power of online platforms in amplifying our voice.</p>
            </div>
            <div>
              <p className="text-lg text-brown-600"><strong>Emily Lee:</strong> This article perfectly captures the essence of modern activism. Kudos to the author for putting this together.</p>
            </div>
          </div>
        </section>

        {/* Add Comment Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-6">Leave a Comment</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-brown-700">Your Name</label>
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-brown-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-brown-700">Your Comment</label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-brown-200"
                rows="5"
                placeholder="Write your comment here"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-brown-700 text-white font-semibold rounded-lg hover:bg-brown-800 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
