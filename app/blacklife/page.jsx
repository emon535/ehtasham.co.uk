
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function BlackLivesMatter() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        
        {/* Section 1: Campaign Introduction */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-brown-700 mb-6">Black Lives Matter Campaign</h1>
          <div className="">
            <Image
            src="/images/blm.jpg"
            alt="Campaigners in front of the Foundry"
            width={300}
            height={300}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
          </div>
          <h2 className="text-3xl font-bold text-brown-700 my-4">Removal of the Robert Milligans Statue</h2>

          <p className="text-lg text-brown-600 leading-relaxed">
          In solidarity with the US campaign, I launched a petition to remove
slaver Robert Milligan’s statue from West India Quay. Milligan owned
526 slaves who worked on his sugar plantation, and much of his wealth
was acquired through the trade and exploitation of slaves. My petition
received more than 5,000 signatures within 48 hours, and I also called
for a protest at West India Quay until it was removed by the Canal and
River Trust
          </p>
        </section>



        {/* Section 3: Sir John Cass School & Cass Business School */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Sr John Cass Secondary School & University
          of London Business School</h2>
          <p className="text-lg text-brown-600 leading-relaxed">

          I also successfully campaigned to change the name of Sir John Cass’s
Secondary School and the University of London’s Cass Business School.
Sir John Cass was a director of the Royal African Company and
amassed his wealth as a beneficiary of the Atlantic slave trade.

          </p>
        </section>

        {/* Section 4: Review of the Public Realm */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Review of the Public Realm</h2>
          <p className="text-lg text-brown-600 leading-relaxed">
            As a result of the campaign, the Mayor of London, Sadiq Khan, announced a commission to review the capital’s landmarks—including street names, public buildings, and plaques—to ensure the removal of those linked to slavery.
          </p>
        </section>

        {/* Section 5: Interview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Cllr Haque Interview with TRT World</h2>

          {/* Embedded YouTube Video */}
          <div className="w-full h-0 pb-[56.25%] relative mb-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Wo5MDOg8LYo?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Section 6: News Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Newspaper Articles</h2>

          {/* News Articles Links */}
          <ul className="list-disc pl-5 space-y-4 text-brown-600">
            <li>
              <a href="https://www.dailymail.co.uk/news/article-10644703/Statue-Robert-Milligan-Museum-London-removed-BLM-protests.html" 
                className="text-brown-700 hover:text-brown-900 transition">
                Statue of Robert Milligan Removed after BLM Protests - Daily Mail
              </a>
            </li>
            <li>
              <a href="https://www.theguardian.com/uk-news/2020/jun/09/statue-of-slave-trader-robert-milligan-removed-in-london" 
                className="text-brown-700 hover:text-brown-900 transition">
                Robert Milligans Statue Removed - The Guardian
              </a>
            </li>
          </ul>
        </section>

      </div>
      <Footer />
    </div>
  );
}
