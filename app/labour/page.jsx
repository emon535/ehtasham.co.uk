
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from 'next/image';



export default function TowerHamletsLabour() {
  return (
    <div>
      <Header/>
      <div className="container mx-auto px-4 py-8">
        
        {/* Section 1: Introduction */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-brown-700 mb-6">Tower Hamlets Labour</h1>
          <p className="text-lg text-brown-600 leading-relaxed">
            Along with other colleagues, I became active in securing my local Labour Partys nomination of Jeremy Corbyn to retain his leadership in 2016. Historically, the Tower Hamlets Labour Party was led by the center-left comrades, and Corbyns leadership was not viewed favorably by them.
          </p>
        </section>

        {/* Section 2: Jeremy Corbyns Leadership */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Jeremy Corbyns Leadership</h2>
          <p className="text-lg text-brown-600 leading-relaxed">
            I was instrumental in ending the special measure that was imposed on the local Labour Party. Special measures meant the local party members were not able to choose their candidates for council elections.
          </p>
        </section>

        {/* Section 3: Labour Councillor for Blackwall & Cubitt Town */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Labour Councillor for Blackwall & Cubitt Town (2018-2022)</h2>
          <p className="text-lg text-brown-600 leading-relaxed">
            During my tenure as an elected councillor in Tower Hamlets, London, I held the position of Chair of the Licensing and Housing & Regeneration Sub-Committee. I also served as the elected Media and Communications Officer for the Labour Group in Tower Hamlets.
          </p>
        </section>

        {/* Section 4: News */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">News</h2>

          {/* News Items */}
          <ul className="list-disc pl-5 space-y-4 text-brown-600">
            <li>
              <a href="https://www.eastlondonadvertiser.co.uk/news/local-council/20956116.labour-councillors-issue-open-letter-tower-rewards-scheme-strike-action-begins/" 
                className="text-brown-700 hover:text-brown-900 transition">
                Tower Rewards Scheme Open Letter
              </a>
            </li>
            <li>
              <a href="https://www.eastlondonadvertiser.co.uk/news/20951326.seven-liveable-streets-schemes-restarted/" 
                className="text-brown-700 hover:text-brown-900 transition">
                Livable Street Debate
              </a>
            </li>
            <li>
              <a href="https://www.lbc.co.uk/news/uk/heritage-vandalism-plans-to-redevelop-whitechapel/" 
                className="text-brown-700 hover:text-brown-900 transition">
                Opposed Whitechapel Bell Foundry redevelopment
              </a>
            </li>
            <li>
              <a href="https://www.dailymail.co.uk/news/article-10644703/Statue-Robert-Milligan-Museum-London-removed-BLM-protests.html" 
                className="text-brown-700 hover:text-brown-900 transition">
                Black Lives Matter - Robert Milligan Statue
              </a>
            </li>
          </ul>
        </section>

        {/* Section 5: Videos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brown-700 mb-4">Videos</h2>

          {/* Embedded Video */}
          <div className="w-full h-0 pb-[56.25%] relative mb-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/IStKAwJB67o?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

      </div>
      <Footer/>
    </div>

  );
}
