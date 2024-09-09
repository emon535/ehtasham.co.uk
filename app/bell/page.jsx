import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function Bell() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-brown-700 mb-6">Whitechapel Bell Foundry</h1>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg text-brown-600 leading-relaxed">
            On November 9, 2019, Councillor Ehtasham Haque and Jill Wilson led a protest against the decision by the London Borough of Tower Hamlets to redevelop the historic Whitechapel Bell Foundry into a boutique hotel. The foundry, which closed in June 2017 after nearly 450 years of operation, is renowned for casting iconic bells such as Big Ben and the Liberty Bell.
          </p>
          <p className="mt-4 text-lg text-brown-600 leading-relaxed">
            Haque and Wilson, alongside the East End Preservation Society, are urging the council to preserve this site of significant historical importance. The property, now owned by developer Raycliff, faces potential transformation that campaigners believe would erase a crucial part of East Londons heritage.
          </p>
        </section>
        <section className="mb-8">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/belldetails.avif"
                alt="Whitechapel Bell Foundry Protest"
                width={400}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/images/whitechapel.webp"
                alt="Campaigners in front of the Foundry"
                width={400}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* News Coverage */}
        {/* News Coverage */}
<section className="mb-8">
  <h2 className="text-2xl font-semibold text-brown-700 mb-4">News Coverage</h2>

  {/* News Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* News Card 1 */}
    <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-brown-700 mb-4">
        Controversial Plan to Redevelop Whitechapel Bell Foundry Given Green Light
      </h3>
      <p className="text-brown-600 mb-4">
        A controversial plan to redevelop the historic Whitechapel Bell Foundry into a boutique hotel has been approved, despite objections from campaigners.
      </p>
      <a 
        href="https://www.standard.co.uk/news/london/controversial-plan-to-redevelop-whitechapel-bell-foundry-given-green-light-a4287736.html" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-brown-700 font-medium hover:text-brown-900"
      >
        Read More
      </a>
    </div>

    {/* News Card 2 */}
    <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-brown-700 mb-4">
      Opponents brand redevelopment plan for historic bell foundry a ‘travesty’
      </h3>
      <p className="text-brown-600 mb-4">
      Whitechapel Bell Foundry in London is listed as Britain’s oldest manufacturing firm and produced Big Ben.
      </p>
      <a 
        href="https://www.belfasttelegraph.co.uk/news/uk/opponents-brand-redevelopment-plan-for-historic-bell-foundry-a-travesty/38689821.html" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-brown-700 font-medium hover:text-brown-900"
      >
        Read More
      </a>
    </div>

    {/* News Card 3 */}
    <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-brown-700 mb-4">
      Bell tolls for 450-year-old foundry
      </h3>
      <p className="text-brown-600 mb-4">
        The transformation of the foundry has ignited heated discussions between developers, local officials, and preservationists.
      </p>
      <a 
        href="https://www.thetimes.com/world/us-world/article/bell-tolls-for-450-year-old-foundry-3sw5m96jg" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-brown-700 font-medium hover:text-brown-900"
      >
        Read More
      </a>
    </div>

    {/* News Card 4 */}
    

    {/* News Card 5 */}
    <div className="border p-6 bg-white shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-brown-700 mb-4">
      Anger at council plan to convert ancient bell foundry into boutique hotel
      </h3>
      <p className="text-brown-600 mb-4">
      CAMPAIGNERS fighting to conserve Britain’s oldest bell foundry have condemned a council decision to let it be converted into a boutique hotel.
      </p>
      <a 
        href="https://www.churchtimes.co.uk/articles/2019/22-november/news/uk/anger-at-council-plan-to-convert-ancient-bell-foundry-into-boutique-hotel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-brown-700 font-medium hover:text-brown-900"
      >
        Read More
      </a>
    </div>

  </div>
</section>


        {/* Video Gallery */}
        {/* Video Section */}
<section className="mb-8">


  {/* Embedded YouTube Video */}
  <div className="w-full h-0 pb-[56.25%] relative">
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
      <Footer />
    </div>
  );
}
