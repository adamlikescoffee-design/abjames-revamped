import blogTrees from "@/assets/blog-trees.jpg";
import blogCommunity from "@/assets/blog-community.jpg";
import blogCafe from "@/assets/blog-cafe.jpg";
import blogWriter from "@/assets/blog-writer.jpg";
import blogLiberty from "@/assets/blog-liberty.jpg";
import blogPoliceCoffee from "@/assets/blog-police-coffee.jpg";
import blogVolunteering from "@/assets/blog-volunteering.jpg";
import blogCambodia from "@/assets/blog-cambodia.jpg";
import blogAustralianYear from "@/assets/blog-australian-year.jpg";
import blogChalk from "@/assets/blog-chalk.jpg";
import blogRationality from "@/assets/blog-rationality.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date?: string;
  category?: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tree-removal-noosa",
    title: "Tree Removal Noosa: What Homeowners on the Sunshine Coast Need to Know",
    excerpt:
      "If you're searching for Tree Removal Noosa or Tree Lopping Noosa, chances are you're dealing with a tree that's become unsafe, overgrown, or storm-damaged...",
    image: blogTrees,
    date: "February 1, 2026",
    category: "Notices",
    content: [
      "If you're searching for Tree Removal Noosa or Tree Lopping Noosa, chances are you're dealing with a tree that's become unsafe, overgrown, storm-damaged, or simply unsuitable for your property. Your first call should be with a local tree removal specialist such as Mudjimba Trees.",
      "Across Noosa, Sunshine Coast, and nearby areas like Caloundra, tree removal is tightly regulated — and for good reason. Protected vegetation, coastal conditions, and extreme weather mean the job must be done properly.",
      "In most cases, tree removal in Noosa requires council approval, especially if the tree is native or protected, over a certain height or trunk diameter, located in an environmental or coastal overlay, or on a property subject to vegetation protection controls.",
      "Exceptions may apply if the tree is dead or dying, an immediate safety risk, causing structural damage, or a declared weed species. Removing a protected tree without approval can result in fines and enforcement notices.",
      "Many homeowners search for Tree Lopping Noosa, but the term is often misunderstood. Tree lopping refers to cutting branches or reducing canopy size, and is often done incorrectly by unqualified operators, which can weaken the tree and increase future risk. In most situations, proper pruning or full removal by a licensed arborist is safer than aggressive lopping.",
      "A certified arborist on the Sunshine Coast brings more than a chainsaw. They provide professional risk assessments, knowledge of council regulations, safe removal near homes, fences, and power lines, insurance coverage and compliance, and clean-up and stump management options.",
      "Across the Sunshine Coast, the most common reasons for tree removal include storm damage or split trunks, trees leaning toward homes or sheds, root damage to plumbing or foundations, bushfire risk reduction, and new construction or landscaping projects.",
      "Whether you're dealing with an unsafe tree in Noosa or comparing tree removal Sunshine Coast services, the goal is the same: protect your home, your family, and your property value. Professional tree removal isn't just about cutting trees — it's about managing risk the right way.",
    ],
  },
  {
    slug: "daily-grind-for-ashley",
    title: "Daily Grind for Ashley — A Community United in Kindness",
    excerpt:
      "A heartfelt story about a remarkable five-year-old named Ashley Kong, whose journey touched the hearts of many in Brisbane's northside...",
    image: blogCommunity,
    date: "November 2014",
    category: "Media",
    content: [
      "In October 2014, The Northside Chronicle featured a heartfelt story about a remarkable five-year-old named Ashley Kong, whose journey touched the hearts of many in Brisbane's northside.",
      "Ashley, who faced significant challenges with her speech and development, needed therapy ahead of her first year of school. Recognising this need, the local café Cup From Above launched a community initiative to help raise funds for Ashley's therapy.",
      "The café, already well known for its social mission and community outreach, became a beacon of hope once again — this time for Ashley and her family. The café's \"daily grind\" took on a deeper meaning as locals came together over coffee to contribute to Ashley's cause.",
      "Stories like Ashley's remind us that small acts — like buying a coffee or spreading the word — can make a profound difference in someone's life. Cup From Above wasn't just a café; it was a place where kindness brewed daily and where the community found purpose in lifting one another up.",
      "Even years later, this story remains a beautiful example of how Brisbane's northside community rallied together to change a child's life — and how a café built on compassion became the heart of it all.",
    ],
  },
  {
    slug: "a-little-help-from-above",
    title: "A Little Help From Above: How a Brisbane Café is Changing Lives",
    excerpt:
      "Through his social enterprise, Cup from Above, Adam uses coffee as a catalyst for community transformation...",
    image: blogCafe,
    date: "2014",
    category: "Media",
    content: [
      "At a small café in Aspley, Adam is proving that a cup of coffee can do more than just wake you up — it can change lives.",
      "Through his social enterprise, Cup from Above, Adam uses coffee as a catalyst for community transformation. The café gives disadvantaged and disabled locals the opportunity to gain real-world experience and qualifications in hospitality, helping them build skills and confidence for future employment.",
      "After working for a decade as a disability support worker, Adam saw firsthand how few employment pathways existed for people with disabilities. That insight inspired him to open Cup from Above in 2012. Since then, more than 30 volunteers have gained experience and purpose through the café.",
      "One of the café's signature initiatives is its \"Suspended Coffees\" program, which lets customers pre-pay for a coffee that someone in need can later redeem. The program has expanded to include free meals, creating a ripple effect of kindness that helps those doing it tough — from the homeless to struggling families.",
      "Adam's mission is simple but powerful: to blend coffee with community. By offering training, mentorship, and a sense of belonging, Cup from Above has become a sanctuary where people rediscover dignity and connection.",
      "Cup from Above is more than a café; it's a movement of compassion, proof that small acts of generosity can brew big change.",
    ],
  },
  {
    slug: "silent-writer-finds-keys-to-success",
    title: "In The Media: Silent Writer Finds The Keys to Success",
    excerpt:
      "The article highlights Glen Sheppard, a 33-year-old author and poet born with Down syndrome and diagnosed with severe autism...",
    image: blogWriter,
    date: "2015",
    category: "Media",
    content: [
      "This article highlights Glen Sheppard, a 33-year-old author and poet born with Down syndrome and diagnosed with severe autism. For half of his life, he was unable to communicate.",
      "At age 16½, Glen learned to communicate using a plastic keyboard and translator, which changed his life. This breakthrough opened up a world of expression for Glen, who went on to become a published author and poet.",
      "Glen's story is a powerful reminder that every person has a voice — sometimes it just takes the right tools and the right support to unlock it. His journey from silence to published author is nothing short of inspirational.",
      "The story was featured as part of the broader community work connected to Cup From Above and the social enterprise initiatives that Adam has been involved with over the years.",
      "Glen's achievements challenge our assumptions about capability and potential. His published works have touched readers and demonstrated that determination, combined with community support, can overcome seemingly insurmountable barriers.",
    ],
  },
  {
    slug: "liberty-enterprises-social-enterprise",
    title: "Liberty Enterprises: A Social Enterprise Creating Opportunity",
    excerpt:
      "In Brisbane's north, a quiet movement is helping women reclaim their confidence and independence after trauma...",
    image: blogLiberty,
    date: "2016",
    category: "Media",
    content: [
      "In Brisbane's north, a quiet movement is helping women reclaim their confidence and independence after trauma. Liberty Enterprises is a social enterprise dedicated to creating real opportunities for women who have experienced domestic violence, homelessness, or other life-altering hardships.",
      "The enterprise provides hands-on training in practical skills — from sewing and crafting to small business management — giving participants the tools they need to rebuild their lives and find sustainable employment.",
      "What makes Liberty Enterprises special is its holistic approach. It's not just about job skills; it's about restoring dignity, building community, and showing women that they have value and potential beyond their circumstances.",
      "The program has helped dozens of women take their first steps back into the workforce, many of whom have gone on to start their own small businesses or secure stable employment in their communities.",
      "Liberty Enterprises stands as a testament to the power of social enterprise — proving that business can be a force for good, creating pathways where none existed before.",
    ],
  },
  {
    slug: "brewing-community-police-coffee",
    title: "Brewing Community: How a Local Police Coffee Initiative Mirrors Our Health & Life-Change Journey",
    excerpt:
      "When I came across the story of a local police-café initiative, I was struck not just by the novelty of officers serving coffee...",
    image: blogPoliceCoffee,
    date: "2017",
    category: "Community",
    content: [
      "When I came across the story of a local police-café initiative titled \"Local Police Espresso\", I was struck not just by the novelty of officers serving coffee, but by the deeper message it carried about community connection.",
      "The initiative saw local police officers stepping out from behind their badges to serve coffee alongside community members. It was a simple act, but one that broke down barriers and fostered genuine human connection.",
      "This mirrors something I've always believed: that transformation — whether in health, business, or life — starts with connection. When we sit across from someone, share a cup of coffee, and listen, walls come down.",
      "In my own journey with Cup From Above, I've seen how a café can become neutral ground — a place where people from all walks of life can meet, share stories, and support one another.",
      "The police coffee initiative reminded me that community isn't built through programs or policies alone. It's built through presence, through showing up, and through the willingness to be human first.",
      "Whether it's a police officer serving an espresso or a volunteer finding purpose behind a coffee machine, the recipe for community change is always the same: genuine connection, one cup at a time.",
    ],
  },
  {
    slug: "volunteering-tips-for-volunteers",
    title: "Volunteering Tips for Volunteers",
    excerpt:
      "Here's some advice for anyone wanting to volunteer from someone who's been involved at every level of community work for over 15 years...",
    image: blogVolunteering,
    date: "2020",
    category: "Advice",
    content: [
      "Here's some advice for anyone wanting to volunteer from someone who's been involved at every level of community work for over 15 years:",
      "1. If you find yourself wanting to volunteer consider very carefully why you want to do it. If it's because you are feeling deeply troubled inside, empty, lonely, scared & lost — go look after yourself first and get some great help for YOU. Get a great therapist, mentor, or pastor, or even better all three. Invest in yourself. After a year or two of doing this, or however long it takes, you'll find yourself in a place of emotional abundance and genuinely able to contribute to people who are struggling in the broader community.",
      "2. Consider your skill set that you'd like to contribute. Consider the exact amount of hours you are willing to sacrifice and invest. Consider the tenure of this season that you are willing to commit to. Have this clear in your heart and mind and communicate that clearly to your family, your friends and of course the organisation. If you start and then stop you have not only wasted all of those hours but every hour the organisation spent with you has also now gone to waste.",
      "3. Pick one great organisation, group, church, political party or charity. Read a few books on it so you're sure in your mind but also something you're passionate about so you'll stick with it when it gets messy. Unless you're a millionaire retired at 40 with no kids you will only have time to significantly help ONE mission. Only one. That's it.",
      "4. Consistency is King. Two hours dedicated and consistently delivered every week with any deviation thoughtfully communicated in advance is far more valuable than 1,000 hours at your personal convenience. These organisations don't exist to satisfy your need to feel good about yourself. The purpose of volunteering is to genuinely sacrifice your time and resources to a collective that is coordinated to alleviate poverty or somehow help serve the greater good. Consistency & reliability are vital for success.",
      "5. Patience. If you want to be involved with a great organisation with exceptional systems and procedures then go work for Apple or the government. Be prepared that the very nature of grassroots community organisations means that it's gonna be messy. Get over it. If it really means something, then you will need to step into that role to create the systems and procedures and implement them throughout the organisation — for free.",
    ],
  },
  {
    slug: "the-colours-of-cambodia",
    title: "The Colours of Cambodia",
    excerpt:
      "Here are some of my favourite photos I took while sojourning amongst the Khmer people...",
    image: blogCambodia,
    date: "2018",
    category: "Travel",
    content: [
      "Here are some of my favourite photos I took while sojourning amongst the Khmer people.",
      "Cambodia is a country of profound beauty and resilience. Despite its tragic recent history, the warmth of its people and the vibrancy of its culture shines through in every corner — from the ancient temples of Angkor to the bustling streets of Phnom Penh.",
      "The colours of Cambodia are unlike anywhere else I've been. The saffron robes of monks against weathered stone temples, the brilliant greens of rice paddies stretching to the horizon, the warm earth tones of the red dust roads, and the vivid market stalls bursting with tropical fruits and handmade textiles.",
      "What struck me most was the generosity of the Khmer people. Despite having so little by Western standards, they gave so freely — their time, their smiles, their stories. It was a humbling reminder that true wealth isn't measured in possessions.",
      "These photos capture just a fraction of the beauty I experienced. Each image holds a memory, a conversation, a moment of connection that transcended language and culture.",
    ],
  },
  {
    slug: "nominated-for-australian-of-the-year",
    title: "Nominated for Australian of the Year",
    excerpt:
      "A recognition of years of community work and social enterprise — being nominated for Australian of the Year was both humbling and inspiring...",
    image: blogAustralianYear,
    date: "2016",
    category: "Recognition",
    content: [
      "Being nominated for Australian of the Year was one of the most humbling experiences of my life. It wasn't something I ever set out to achieve — it came as a result of years of community work through Cup From Above and the social enterprises we built.",
      "The nomination recognised the collective effort of so many people — the volunteers who showed up week after week, the customers who bought suspended coffees, the families who found hope through our programs, and the community that rallied around our mission.",
      "It was a reminder that when you pour yourself into helping others, the recognition sometimes follows — but that was never the point. The point was always the people. The lives changed. The dignity restored. The connections forged over a simple cup of coffee.",
      "This nomination belongs to every volunteer, every supporter, and every person who walked through our doors looking for a fresh start. They are the real heroes of this story.",
      "While the formal recognition was wonderful, the real reward has always been seeing the tangible impact in people's lives — watching someone who was once homeless find employment, seeing a person with a disability gain confidence and skills, witnessing a community come together in genuine care for one another.",
    ],
  },
  {
    slug: "knowing-where-to-mark-the-chalk",
    title: "Knowing Where To Mark The Chalk",
    excerpt:
      "Charles Proteus Steinmetz was known as the 'Wizard of Schenectady'. Despite his physical complications, he became a giant among scientific thinkers...",
    image: blogChalk,
    date: "August 31, 2019",
    category: "Leadership",
    content: [
      "Charles Proteus Steinmetz was known as the \"Wizard of Schenectady\". He stood just four feet tall and had several disabilities. Despite his physical complications, he became a giant among scientific thinkers, counting Albert Einstein, Nikola Tesla and Thomas Edison as friends. His contributions to mathematics and electrical engineering made him famous in his day.",
      "He was born in 1865 in Breslau, Germany (now Wroclaw, Poland). Steinmetz became a brilliant student of mathematics and chemistry at the University of Breslau, but he was forced to flee the country after the authorities became interested in his involvement with the Socialist Party. He arrived at Ellis Island, New York in 1888 and was nearly turned away because he was a dwarf.",
      "In 1894 he moved to Schenectady, New York. He began working for General Electric and the evidence of his genius was immediate. Using complex mathematical equations, Steinmetz developed ways to analyze values in alternating current circuits. His discoveries changed the way engineers thought about circuits and machines.",
      "Henry Ford, whose electrical engineers couldn't solve some problems they were having with a massive generator, called Steinmetz to the plant. Upon arriving, Steinmetz rejected all assistance and asked only for a notebook, pencil and a bed. He listened to the generator and scribbled computations on the notepad for two straight days and nights. On the second night, he asked for a ladder, climbed up and made a chalk mark on its side. Then he told Ford's engineers to remove a plate at the mark and replace sixteen windings from the field coil. They did, and the generator performed to perfection.",
      "Henry Ford was thrilled until he got an invoice from General Electric to the amount of $10,000. Ford acknowledged Steinmetz's success but balked at the figure. He asked for an itemized bill. Steinmetz responded personally: Making chalk mark on generator: $1. Knowing where to make mark: $9,999. Ford paid the bill.",
      "I found this story inspiring for several reasons. Firstly, anyone can mark some chalk. The value is all about knowing where to mark the chalk. His disability also brought him immense pain, and in turn, a sense of loss. However, he steps into it. He doesn't use it as a crutch. It seems that this all added to the value of the chalk.",
      "I think we naturally want to hide our failings, disabilities, pain and other blemishes from the world. Especially in commercial settings. But there are times when sophisticated and authentic honesty holds immense value.",
    ],
  },
  {
    slug: "rationality-by-steven-pinker",
    title: "Rationality by Steven Pinker – Summary & Quotes",
    excerpt:
      "Cognitive biases distort our cognitive system and prevent us from making rational decisions. A deep dive into Pinker's essential book...",
    image: blogRationality,
    date: "July 17, 2022",
    category: "Book Reviews",
    content: [
      "Cognitive biases distort our cognitive system and prevent us from making rational decisions. The myth that we are reasonable creatures stems from the incorrect assumption that our brains are, by default, rational thinking machines.",
      "Steven Pinker's \"Rationality\" is a masterful exploration of why intelligent people can believe irrational things, and how we can do better. The book takes us on a tour through the tools of rationality — logic, probability, Bayesian reasoning, and decision theory — showing how they can help us navigate an increasingly complex world.",
      "One of the book's most powerful insights is that rationality is not just an academic exercise — it's a matter of life and death. From medical decisions to public policy, the ability to think clearly and evaluate evidence can have profound consequences.",
      "Pinker argues that motivated reasoning — the tendency to seek out information that confirms what we already believe — is one of the biggest obstacles to rational thinking. We don't just passively receive information; we actively filter it through our existing beliefs and tribal loyalties.",
      "The book also explores why conspiracy theories, fake news, and superstition persist in an age of unprecedented access to information. Pinker suggests that the problem isn't a lack of intelligence but a lack of the right cognitive tools and the social incentives to use them.",
      "This is essential reading for anyone who wants to think more clearly, make better decisions, and understand why the world often seems to defy logic. Pinker's writing is as engaging as it is enlightening, making complex ideas accessible without dumbing them down.",
    ],
  },
];
