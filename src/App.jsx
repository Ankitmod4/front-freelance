import React, { useState } from 'react';
import { Plus, Minus, Search, Star } from 'lucide-react'; 

// ----------------------------------------------------------------------
// Main App Component containing the entire UI (Responsive Version)
// ----------------------------------------------------------------------

function App() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // --- Data Definitions (Same as before) ---
  const navItems = ['Search', 'How It Works', 'Pricing', 'Login', 'Join as Brand', 'Join as Creator'];
  const popularKeywords = ['Rising Instagram Stars', 'Rising TikTok Stars', 'Most Viewed', 'Under $250', 'UGC', 'Fashion', 'Beauty', 'Health & Fitness'];
  const categories = [
    { title: 'Fashion', imageUrl: 'https://via.placeholder.com/400x300?text=Fashion' },
    { title: 'Music & Dance', imageUrl: 'https://via.placeholder.com/400x300?text=Music+and+Dance' },
    { title: 'Beauty', imageUrl: 'https://via.placeholder.com/400x300?text=Beauty' },
    { title: 'Travel', imageUrl: 'https://via.placeholder.com/400x300?text=Travel' },
  ];
  const faqs = [
      { question: 'What is Influencer Marketing?', answer: 'Influencer marketing is a type of social media marketing that uses endorsements and product mentions from individuals who have a dedicated social following and are viewed as experts in their niche.' },
      { question: 'How Does Influencer Marketing Work?', answer: 'It involves a brand collaborating with an online influencer to market a product or service. The collaboration typically results in sponsored content where the influencer promotes the brand to their followers.' },
      { question: 'Why is Influencer Marketing Important?', answer: 'It builds trust and credibility, reaches target audiences effectively, and often results in higher ROI compared to traditional advertising.' },
      { question: 'How Can I Find the Right Influencers for My Brand?', answer: 'Platforms like Collabstr offer search tools and categories to filter influencers by niche, platform, follower count, and more to ensure a perfect brand-creator match.' },
      { question: 'What Are the Benefits of Influencer Marketing for My brand?', answer: 'Increased brand awareness, improved sales, creation of authentic content, and building trust with your customer base.' },
      { question: 'How Much Does Influencer Marketing Cost?', answer: 'Costs vary widely based on the influencer\'s reach, platform, engagement rate, and the scope of the campaign. Prices can range from $50 to well over $15,000 per post.' },
  ];
  const influencerData = {
    TikTok: {
      title: "Hire TikTok Influencers",
      locations: ['Portland, OR, US', 'Tampa, FL, US', 'Stuttgart, BW, DE', 'Los Angeles, CA, US'],
      influencers: [
        { name: 'Daniela Rae', followers: '1.5k', category: 'Travel, Outdoors, Lifestyle', location: 'Vancouver, BC, CA', price: '$100', topCreator: false, respondsFast: false },
        { name: 'Nafoor Aljundi', followers: '5.9k', category: 'Beauty, Influencer', location: 'Dubai, DU, AE', price: '$50', topCreator: false, respondsFast: false },
        { name: 'Ian Anderson', followers: '20.3k', category: 'I Will Create Authentic And...', location: 'Stowe, VT, US', price: '$65', topCreator: true, respondsFast: true },
        { name: 'Ailee-Sutton...', followers: '57.9k', category: 'Model, Actress And Lifestyle...', location: 'Nashville, TN, US', price: '$200', topCreator: true, respondsFast: false },
      ]
    },
    Instagram: {
      title: "Hire Instagram Influencers",
      locations: ['Miami, FL, US', 'Chicago, IL, US', 'Whitby, ON, CA', 'Los Angeles, CA, US'],
      influencers: [
        { name: 'Lauren Gastineau', followers: '56.6k', category: 'Prnw Adventure & Inspiration Creator', location: 'Portland, OR, US', price: '$500', topCreator: false, respondsFast: false },
        { name: 'Haleigh Schroth', followers: '19.4k', category: 'Fashion, Travel Creator', location: 'Tampa, FL, US', price: '$150', topCreator: false, respondsFast: false },
        { name: 'Christina Alexia', followers: '174.5k', category: 'Fashion, Beauty, Lifestyle &...', location: 'Stuttgart, BW, DE', price: '$900', topCreator: false, respondsFast: false },
        { name: 'Content Machine', followers: '1.4M', category: 'Comedy Duo (500k)', location: 'Los Angeles, CA, US', price: '$15,000', topCreator: true, respondsFast: false },
      ]
    },
  };
  const reviews = [
      { quote: "I've used Collabstr from both the Creator side and the Brand side! It is extremely user-friendly and has lead to some great relationships with creators/brands I wouldn't have been connected to otherwise. Love the platform!", author: 'Layla', title: 'Influencer & Founder' },
      { quote: "Best platform to connect with influencers and content creators. I've signed up to many platforms; collabstr is the easiest to use and gives the best results for my brand.", author: 'Myriam', title: 'Founder of BBeyond' },
      { quote: "Been using Collabstr to generate content for our seasonal clothing lines. Super easy for us to search for relevant influencers and pay them. We save at least 10-20 hours a month on recruiting.", author: 'Courtney', title: 'Marketer' },
  ];
  const footerLinks = {
      Resources: [
          { name: 'Blog' }, { name: 'Resource Hub' }, { name: 'Affiliate Program' }, { name: 'TikTok Ebook For Brands' }, { name: '2025 Influencer Marketing Report' },
      ],
      Tools: [
          { name: 'Influencer Price Calculator' }, { name: 'Instagram Fake Follower Checker' }, { name: 'TikTok Fake Follower Checker' }, { name: 'Instagram Engagement Rate Calculator' }, { name: 'TikTok Engagement Rate Calculator' }, { name: 'Influencer Campaign Brief Template' }, { name: 'Influencer Contract Template' }, { name: 'Influencer Analytics & Tracking' }, { name: 'Instagram Reels Downloader' }, { name: 'TikTok Video Downloader' },
      ],
      Discover: [
          { name: 'Find Influencers' }, { name: 'Top Influencers' }, { name: 'Search Influencers' }, { name: 'Buy Shoutouts' },
      ],
      Support: [
          { name: 'Contact Us' }, { name: 'How It Works' }, { name: 'Frequently Asked Questions' },
      ],
  };

  // --- Helper Components (Nested for single file structure) ---

  const InfluencerCard = ({ data, platform, index }) => (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
        <img 
            src={`https://via.placeholder.com/300x400?text=${platform}+${index + 1}`} 
            alt={data.name} 
            className="w-full h-80 object-cover" 
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
            {data.topCreator && (
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Top Creator</span>
            )}
            {data.respondsFast && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Responds Fast</span>
            )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex justify-between items-center mb-1">
                <span className="text-white text-lg font-semibold">{data.name}</span>
                <span className="text-pink-400 text-lg font-bold">{data.price}</span>
            </div>
            <p className="text-white text-sm">
                <span className="bg-pink-500 text-xs px-1 rounded mr-1">{data.followers}</span>
                {data.category}
            </p>
            <p className="text-gray-300 text-xs mt-1">{data.location}</p>
        </div>
    </div>
  );

  const InfluencerListSection = ({ platform }) => {
    const data = influencerData[platform];
    if (!data) return null;

    return (
      <section className="py-12">
          {/* Top Locations/Cities Bar (Scrollable on mobile) */}
          <div className="flex space-x-4 md:space-x-8 text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap justify-start md:justify-center pb-2">
              {data.locations.map((loc, index) => (
                  <span key={index} className="flex-shrink-0">{loc}</span>
              ))}
          </div>

          <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">{platform}</h2>
              <a href="#" className="text-pink-500 font-semibold hover:underline">See All</a>
          </div>

          <p className="text-xl text-gray-700 mb-6">{data.title}</p>

          {/* Influencer Grid (2 cols on mobile, 4 on large screens) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {data.influencers.map((influencer, index) => (
                  <InfluencerCard
                      key={index}
                      data={influencer}
                      platform={platform}
                      index={index}
                  />
              ))}
          </div>
      </section>
    );
  };


  // ----------------------------------------------------------------------
  // Render JSX
  // ----------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* 1. Header (Navigation Bar) */}
      <header className="py-4 shadow-md sticky top-0 z-10 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-pink-500">collabstr</span>
            <span className="text-gray-700">♥</span>
          </div>
          {/* Hide Nav items on smaller screens, can add a mobile menu icon here */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`text-gray-600 hover:text-pink-500 transition duration-300 ${
                  item === 'Join as Creator' ? 'text-pink-500 font-semibold' : ''
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="lg:hidden text-gray-600">
            {/* Hamburger Icon Placeholder */}
            ☰
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8">
        
        {/* 2. Hero Section & Search Bar */}
        <section className="text-center py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-500 mb-4">
            Influencer Marketing Made Easy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10">
            Find and hire top Instagram, TikTok, YouTube, and UGC influencers to create unique content for your brand
          </p>

          {/* Responsive Search Bar: Columns on desktop, stacked on mobile */}
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center border border-gray-300 rounded-lg p-3 shadow-lg bg-white">
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4 mr-0 md:mr-4">
              <input type="text" placeholder="Choose a platform" className="p-2 border-b md:border-r md:border-b-0 border-gray-200 focus:outline-none" />
              <input type="text" placeholder="Enter keywords, niches or categories" className="p-2 focus:outline-none" />
            </div>
            <button className="w-full md:w-auto mt-3 md:mt-0 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition duration-300">
              <Search size={24} className="mx-auto md:mx-0"/>
            </button>
          </div>

          {/* Popular Keywords/Chips */}
          <div className="flex justify-center flex-wrap mt-8 gap-3">
            {popularKeywords.map((keyword) => (
              <span
                key={keyword}
                className="py-1 px-3 md:py-2 md:px-4 border border-gray-300 rounded-full text-xs md:text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition duration-300"
              >
                {keyword}
              </span>
            ))}
          </div>
          
          {/* Featured Section (Simplified) */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-semibold">Featured</h2>
                <a href="#" className="text-pink-500 hover:underline text-sm">See All</a>
            </div>
            {/* 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-48 md:h-64 bg-gray-100 rounded-lg flex items-end p-3 relative hover:shadow-xl transition">
                        <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Top Creator</span>
                        <p className="text-white text-xs md:text-sm bg-black bg-opacity-50 p-1 rounded">Creator Name {i+1}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* 3. Category Section */}
        <div className="py-12 md:py-16">
          <h2 className="text-3xl font-semibold mb-6 md:mb-8">Categories</h2>
          {/* 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <div key={category.title} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-48 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* "As seen in" Section (More compact on mobile) */}
        <div className="flex flex-wrap justify-center items-center py-8 md:py-12 border-t border-b border-gray-100">
            <p className="text-gray-500 italic text-sm md:text-xl mr-4 mb-2 md:mb-0">As seen in</p>
            <div className="flex flex-wrap justify-center space-x-3 md:space-x-8 text-center text-sm">
                <span className="font-bold text-gray-700">BuzzFeed</span>
                <span className="font-bold text-gray-700">Bloomberg</span>
                <span className="font-bold text-gray-700 hidden sm:inline">The New York Times</span>
                <span className="font-bold text-gray-700">Forbes</span>
                <span className="font-bold text-gray-700">shopify</span>
            </div>
        </div>

        {/* 4. Influencer Listings (TikTok & Instagram) */}
        <InfluencerListSection platform="TikTok" />
        <InfluencerListSection platform="Instagram" />

        {/* 5. Review Section */}
        <section className="text-center py-12 md:py-16 bg-gray-50 rounded-lg my-12 md:my-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-12">
                250,000+ Brands Work With Influencers on Collabstr
            </h2>
            {/* Reviews: 1 col on mobile, 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left px-4">
                {reviews.map((review, index) => (
                    <div key={index} className="p-6 bg-white border border-gray-100 rounded-xl shadow-md flex flex-col h-full">
                        <div className="flex text-pink-500 mb-3">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <blockquote className="italic text-gray-700 flex-grow text-sm md:text-base">
                            "{review.quote}"
                        </blockquote>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="font-semibold text-gray-800">{review.author}</p>
                            <p className="text-sm text-pink-500">{review.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* YouTube Influencer listing placement */}
            <h3 className="text-3xl font-bold mt-12 mb-6">YouTube</h3>
            <p className="text-xl text-gray-700 mb-6">Hire YouTube influencers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
                {influencerData.Instagram.influencers.slice(0,4).map((influencer, index) => (
                    <InfluencerCard key={`yt-${index}`} data={influencer} platform="YouTube" index={index} />
                ))}
            </div>
        </section>


        {/* 6. FAQ Section */}
        <div className="py-12 md:py-16">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4 md:py-6">
                    <button
                        className="flex justify-between items-center w-full text-left text-base md:text-xl font-semibold text-gray-800 hover:text-pink-500 transition duration-300"
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                        {openFAQIndex === index ? <Minus size={24} className="text-pink-500" /> : <Plus size={24} className="text-gray-500" />}
                    </button>
                    {openFAQIndex === index && (
                        <div className="mt-3 md:mt-4 pr-0 md:pr-12 text-sm md:text-base text-gray-600">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* 7. Tracking Section (Text and image stack on mobile) */}
        <section className="py-12 md:py-16">
            <span className="inline-block px-4 py-1 bg-pink-500 text-white font-semibold rounded-full text-sm mb-4">
                Track
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 md:mb-12">
                Track Post Analytics and Performance in Real Time
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Text/Feature Column */}
                <div className="md:w-1/2 space-y-6 md:space-y-8 text-gray-600">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">One-Click Tracking</h3>
                        <p className="text-sm md:text-base">Track Instagram, TikTok, and YouTube content in real time from a single dashboard. Say goodbye to manual tracking and messy spreadsheets.</p>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Advanced Analytics & Reporting</h3>
                        <p className="text-sm md:text-base">Analyze content performance over time, including impressions, engagement and more. Organize performance by campaign and effortlessly build reports.</p>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Fully Automated</h3>
                        <p className="text-sm md:text-base">Metrics are updated every 24 hours, ensuring performance data is always up-to-date.</p>
                    </div>
                </div>

                {/* Dashboard Mockup Column */}
                <div className="md:w-1/2 relative p-4 w-full">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl border-2 border-gray-200">
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="https://via.placeholder.com/50" alt="Profile" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold text-sm">gönke</p>
                                <p className="text-xs text-gray-500">View Post</p>
                            </div>
                        </div>
                        
                        <div className="flex justify-between text-center mb-4 md:mb-6 border-b pb-4 text-xs md:text-sm">
                            <div><p className="text-base md:text-xl font-bold">0</p><p className="text-xs text-gray-500">Views</p></div>
                            <div><p className="text-base md:text-xl font-bold">317K</p><p className="text-xs text-gray-500">Likes</p></div>
                            <div><p className="text-base md:text-xl font-bold">11K</p><p className="text-xs text-gray-500">Comments</p></div>
                            <div><p className="text-base md:text-xl font-bold">11.0%</p><p className="text-xs text-gray-500">Engagement Rate</p></div>
                        </div>

                        <div className="text-center font-bold text-gray-800 py-2 border-y border-gray-300 text-sm">
                            Golf Activewear Line Launch + Track New Post
                        </div>
                        
                        {/* Simplified Chart Area */}
                        <div className="mt-4 h-32 md:h-48 bg-gray-50 border border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                            <Star size={32} className="text-yellow-500 mr-2"/>
                            <span className="ml-2">Performance Over Time Chart Mockup</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      
      {/* 8. Footer (2 cols on mobile, 4 on desktop) */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10 md:py-12 mt-12 md:mt-16">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {Object.keys(footerLinks).map((title) => (
                    <div key={title}>
                        <h4 className="font-bold text-base md:text-lg mb-4 text-gray-800">{title}</h4>
                        <ul className="space-y-2">
                            {footerLinks[title].map((link) => (
                                <li key={link.name}>
                                    <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;