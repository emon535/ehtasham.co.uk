import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Header/>
      <div className="container mx-auto px-4 py-8">
       {/* Section 1: My Story */}
       {/* Section 1: My Story with Image */}
<section className="mb-16">
<h2 className="text-4xl font-bold text-brown-700 mb-6">My Story</h2>
  <div className="flex flex-col md:flex-row items-center md:items-start">
    
  


    {/* My Story Text */}
    <div className="md:w-2/3 md:pl-8">
      <p className="text-lg text-brown-600 leading-relaxed">
        My expertise lies in driving social change through impactful campaigns informed by rigorous research, grassroots engagement, and strategic digital media utilization. 
        I possess a diverse background as a researcher, community organizer, campaigner, and politician.
      </p>
      <p className="mt-4 text-lg text-brown-600 leading-relaxed">
        I hold a BA in International Relations (London Metropolitan University), an MA in Management (University of Westminster), and a Postgraduate Diploma in Law & Community Leadership (SOAS University of London).
      </p>
    </div>
    <div className="mb-6 md:mb-0 md:w-1/3 -order-1">
    <Image
      className="rounded-lg shadow-lg md:order-1"
      src="/images/profile.jpeg"
      width={500}
      height={500}
      layout="responsive"       

      alt="Picture of the author"
    />
      
    </div>
  </div>
</section>
      {/* Section 2: Achievements */}
      <section className="bg-brown-50 p-10">
  <div className="container mx-auto px-4">
    {/* Achievements Title */}
    <h2 className="text-4xl font-bold text-brown-700 mb-8 text-center">Achievements</h2>

    {/* Achievements Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Achievement Details */}
      <div className="text-lg text-brown-600 leading-relaxed">
        <p className="mb-4">
          My expertise lies in driving social change through impactful campaigns informed by rigorous research, grassroots engagement, and strategic digital media utilization. I possess a diverse background as a researcher, community organizer, campaigner, and politician.
        </p>
        <p className="mb-4">
          My notable accomplishments include the successful removal of the slaver Robert Milligan&apos;s statue from West India Quay, the reinstatement of party members' rights to select candidates in elections, and the implementation of international development projects in India with Raleigh International.
        </p>
        <p className="mb-4">
          Additionally, I have conducted several capacity-building assignments in Brazil, Europe, and America for civil servants from Bangladesh.
        </p>
      </div>

      {/* Visual Element (Optional) */}
      <div className="relative">
        <div className="rounded-lg shadow-lg bg-white p-8 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-brown-700 mb-6">Key Accomplishments</h3>
          <ul className="list-disc pl-5 space-y-4 text-brown-600">
            <li>Successful removal of Robert Milligan&apos;s statue.</li>
            <li>Reinstated party members&apos; rights to select candidates.</li>
            <li>International development projects in India.</li>
            <li>Capacity-building in Brazil, Europe, and America.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Section 3: Blog Post Links (Gallery) */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-4">
          {/* Blog Post 1 */}
          <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
            {/* Image at the top */}
            <div className="mb-4">
            <Image
                className="rounded-lg shadow-lg"
                src="/images/bell.png"
                width={500}
                height={500}
                layout="responsive"       

                alt="Picture of the author"
              />
            </div>

            {/* Blog Post Content */}
            <h3 className="text-2xl font-semibold text-brown-700 mb-3">Save the Whitechapel Bell Foundry</h3>
            {/* <p className="text-brown-600 mb-4">Short description of the blog post content goes here.</p> */}
            <a href="/bell" className="text-brown-700 font-medium hover:text-brown-900">Read More</a>
          </div>

          {/* Blog Post 2 */}
          <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
            {/* Image at the top */}
            <div className="mb-4">
            <Image
                className="rounded-lg shadow-lg"
                src="/images/vote.png"
                width={500}
                height={500}
                layout="responsive"       

                alt="Picture of the author"
              />
            </div>

            {/* Blog Post Content */}
            <h3 className="text-2xl font-semibold text-brown-700 mb-3">Towerhamlets Labour</h3>

            {/* <p className="text-brown-600 mb-4">Short description of the blog post content goes here.</p> */}
            <a href="#" className="text-brown-700 font-medium hover:text-brown-900">Read More</a>
          </div>

          {/* Blog Post 3 */}
          <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
            {/* Image at the top */}
            <div className="mb-4">
            <Image
                className="rounded-lg shadow-lg"
                src="/images/black.png"
                width={500}
                height={500}
                layout="responsive"       

                alt="Picture of the author"
              />
            </div>

            
            {/* Blog Post Content */}
            <h3 className="text-2xl font-semibold text-brown-700 mb-3">Black Lifes Matter</h3>

            {/* <p className="text-brown-600 mb-4">Short description of the blog post content goes here.</p> */}
            <a href="#" className="text-brown-700 font-medium hover:text-brown-900">Read More</a>
          </div>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  );
}
