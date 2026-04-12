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
import blogDefault from "@/assets/blog-volunteering.jpg";

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
,
  {
    slug: "inclusion-confusion",
    title: "Inclusion Confusion",
    excerpt: "Last year I was in a forum with some of the top leaders from Queensland to develop a thirty year plan for the state.  One of the questions was \"How do...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Last year I was in a forum with some of the top leaders from Queensland to develop a thirty year plan for the state.  One of the questions was \"How do we advance education?\". One politician suggested we need to remove people with disabilities from the classroom (a person with autism was the example used).  The reason... \"they pull all the other students down\"."
      "Having worked with people with disabilities for 10 years... I'm glad I was there to disagree!"
      "\"... the sick, weak, deformed children, in short, their destruction, was more decent and in truth a thousand times more human ...\" -Adolf Hitler"
      "Hitler and his Nazi's were driven by a social philosophy called eugenics.  The idea that we could improve the human species by discouraging reproduction by persons having genetic defects or presumed to have inheritable undesirable traits."
      "When we take it to this extreme it's obviously wrong but what about the weird loud autistic kid disrupting the classroom and causing the other kids to get sub-optimal grades?"
      "The young man in the photo on the right is Connor Perring.  Connor is legally blind.  Last week he told me that going through school he was separated from his peers and placed with the \"special kids\".  He was continually told what he could NOT do."
      "Connor now has his own music production company called Epic Music Australia.  He single handedly organises the community events at Cup From Above.  Connor every now and then needs some support because of his limited eyesight.  But since given the opportunity to show his capABILITY, despite his disability, he has flourished."
      "Something worse happens when we segregate young men like Connor.  We have classrooms of children growing up in a world with only \"normal\" people.  We rob these children of the lessons of how to connect and communicate with complex, unusual and colourful individuals."
      "\"It is time for parents to teach young people early on that in diversity there is beauty and there is strength.\" -Maya Angelou"
      "Working with people with disabilities for ten years made me a better person.  They taught me rich lessons that I could not have learnt from anyone else or from any book.  If we separate these wonderful and colourful people from the \"smarter majority\" it's true that they may get better marks and become more efficient accountants and lawyers and teachers.  However if we stay together we will get better at being patient, we'll develop better fathers, we will all be better at community."
      "You don't need to run a program or do a course to learn how to do this.  You shouldn't have to artificially create diversity by statistically delegating teams and boards by gender and race.  Just delete all prejudice in your heart and diversity will happen naturally around you."
      "Here's an old shot of my team at Cup From Above.  I don't think you could get more diverse than us!  Each team member has something unique to offer and plays a vital role.  I believe that's in part what makes us so strong as a team and I believe we should embrace this as a culture.  Queensland and the world will be better for it.",
    ],
  },
  {
    slug: "me-on-postcard-radio",
    title: "Me on Postcard Radio",
    excerpt: "I had the honour of being interviewed by Paul Wetzig from Postcard Radio.  Here's the link if you wanna hear me talk with Paul about how my faith has ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I had the honour of being interviewed by Paul Wetzig from Postcard Radio.  Here's the link if you wanna hear me talk with Paul about how my faith has inspired certain parts of what we do at Cup From Above."
      "http://www.postcardradio.com/changing-the-world-one-cup-at-a-time/",
    ],
  },
  {
    slug: "a-lesson-from-john-wooden",
    title: "A Lesson From John Wooden",
    excerpt: "A few years ago I learnt about John Wooden.  Considered by many as the greatest basketball coach of all time.  He had an extraordinary leadership styl...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "A few years ago I learnt about John Wooden.  Considered by many as the greatest basketball coach of all time.  He had an extraordinary leadership style which transcended the game of basketball.  I devoured several books on this great man and it has impacted how I do what I do now."
      "He saw his job as an opportunity to mentor the men in his team.  Winning basketball games was merely a result of Wooden working with them to become better people."
      "“Success comes from knowing that you did your best to become the best that you are capable of becoming.” ― John Wooden"
      "“Never try to be better than someone else. Learn from others, and try to be the best you can be. Success is the by-product of that preparation.” ― John Wooden"
      "There are only 5 people in a basketball team with a few reserves.  Wooden consistently mentored these small teams year after and has now positively influenced millions of people.  How is this possible?  It was not through quantity but by the quality of his character and consistency."
      "Every day at my cafe I have a small group of people volunteering.  Most of them struggling with some sort of disadvantage.  Years ago I started taking this opportunity to train them with hospitality skills so they could become great baristas.  More than that I now do what I can to help them as people.  To teach them, encourage them & help them make the best choices possible.  Great coffee is merely a by product of them seeing their potential as people."
      "This picture on the right is a photo of my team sitting down reading the 7 Habits Of Highly Effective People together.  With the common goal of learning together and encouraging one another to reach the potential.  Allocating time for \"Personal Development\"  is not uncommon in today's workplace.  I guess what's unusual for us is in that photo is the most diverse group of people you could possibly put together:  an ex-con, a middle aged woman, a paranoid schizophrenic, a personal trainer... to name a few.  Your background or your current level of ability does not prohibit you from advancing forwards unless you allow it."
      "This week most likely you will be around a team in your workplace.  You may not be the CEO.  Your current position does NOT matter.  You have the opportunity to encourage the people around you, educate them as best you can and empower them.  Just as Wooden did.  What you do is irrelevant.  HOW you do it can have an immeasurable impact"
      "If you want to read more about John Wooden I recommend starting with \"Coach Wooden's Pyramid of Success:  Building Blocks For A Better Life\".",
    ],
  },
  {
    slug: "thoughts-on-homelessness",
    title: "Thoughts on Homelessness",
    excerpt: "I've spent this week on the streets of Brisbane.  I'm up to day six.  Two more nights to go.  Every day I've been speaking with homeless folk and list...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I've spent this week on the streets of Brisbane.  I'm up to day six.  Two more nights to go.  Every day I've been speaking with homeless folk and listening deeply to their stories.  I've been wearing track suit pants and a flanno I bought for four bucks at an op shop on Monday.  My stench is pretty accurate by now too.  People are looking at me differently.  It's diminishing.  Soul crushing.  I feel powerless... voiceless."
      "Last night we slept under Kurilpa Bridge.  There were several homeless folk hidden around a wall.  We slept right under the bridge in a more comfortable spot out of the way but visible if you were looking for us."
      "The police arrived at 2am.  They told us to move on.  I asked if we had to... we had an appointment near there the next morning in only a few hours and really needed the sleep.  She said all homeless folk needed to move on.  I asked her where they would go.  She said she didn't care just not here.  I told her that we weren't actually homeless but we were raising awareness for the homeless.  She said we weren't doing anything for homeless people.  I told her I ran a charity and we kinda actually do quite a lot (trying not to be smart about it).  She said we still had to move on.  I asked if all the other homeless folk who were hidden around the corner would have to go too.  She said it was okay if they were hiding.  Like that was a real solution.  And I guess it is because she's employed to police what the community charge her to do... what most people are too afraid to do.  It's cowardly members of the community who call them on the their smart phones while going for a jog in their Lorna Jane gear before they start their six figure salary job for the day... they're just outsourcing the bullying to the police.  So for the police if the homeless bloke is effectively hidden they don't get the phone call and the issue is solved.  If the problem is hidden we, as a community, don't need to deal with it.  But that's not okay.  And that's what I told her.  Hiding the homeless isn't solving it."
      "Proverbs 31:8-9 says \"Speak out for those who cannot speak, for the rights of all the destitute.  Speak out, judge righteously, defend the rights of the poor and needy."
      "Every person I've spoken to has had several devastating blows that have driven them on to the street.  Yeh there's a few weirdos who actually choose it.  Most want to live a healthy normal life and they're doing what they can to get there."
      "I'm filled with rage over what our society is doing to these people.  We just pick on them.  We're kicking them while we're down and we need to stop.  Hear this, if you're doing nothing right now, then you're part of the problem."
      "There are a few hundred beds in various hostels around Brisbane.  The problem is there's a few thousand homeless people.  Whatever family and friends they are lucky to have remaining are here in Brisbane so we can't just send them away without causing even more harm to already strained relationships.  Until we setup more accommodation for them they're gonna be on our streets and it's our responsibility to look after them as the church, as a community... and as a city."
      "We need to face this.  It is an issue.  We need to stop looking away and start dealing with it.",
    ],
  },
  {
    slug: "are-you-hsp",
    title: "Are you a HSP?",
    excerpt: "A highly sensitive person (HSP) experiences our world differently than most people.  It is a biological difference, not psychological, that they’re bo...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "A highly sensitive person (HSP) experiences our world differently than most people.  It is a biological difference, not psychological, that they’re born with, highly sensitive people are more aware of subtleties and process information deeply. They tend to be creative, insightful, and empathetic, but it also means they’re more prone than others to stress and anxiety."
      "It is not a disease or a disorder.  It’s often misunderstood because only around 20 percent of the population are HSPs."
      "Are you a highly sensitive person? If you relate to most of these signs, there’s a good chance you’re a HSP."
      "The cornerstone of being an HSP is you process information deeply. This means you do plenty of reflecting on your experiences — more so than other people. Unfortunately, this also means you’re more prone to negative overthinking. Sometimes you obsessively play events over and over in your mind or spiral into anxious thoughts."
      "Although highly sensitive people are not necessarily empaths, HSPs tend to “absorb” other people’s emotions, almost like an empath would. It’s not unusual for an HSP to walk into a room and immediately sense the moods of the people in it. That’s because highly sensitive people are very aware of subtleties including facial expressions, body language, and tone of voice that others may miss. Pair this with the sensitive person’s naturally high levels of empathy, and it’s no wonder HSPs feel emotions that are not their own. As a result, highly sensitive people tend to suffer from frequent emotional exhaustion."
      "For instance in school, timed quizzes or speed tests would have made you extremely anxious perhaps to the point of not being able to perform as well as you normally would. As an adult, when you have too many things on your to-do list and not enough time to finish them, you feel very stressed. HSPs are more sensitive to stimulation, and time pressure is no exception."
      "Whether you’re an introvert or an extrovert, you need plenty of downtime, preferably alone. You often find yourself withdrawing to a quiet, darkened room at the end of a long day — in order to lower your stimulation level, soothe your senses, and recharge."
      "When someone sneaks up on you, you jump like a frightened cat. Many HSPs have a high “startle reflex” because even in non-threatening situations, their nervous systems are dialed up."
      "Everyone hates violence and cruelty, but for highly sensitive people, seeing or hearing about it can be extremely unsettling. You might be an HSP if you can’t watch very scary, gory, or violent movies without getting upset or even feeling physically ill. Similarly, you may not be able to stomach a news story about animal cruelty or similar brutal acts."
      "HSPs seek answers to the big questions in life. They ask why things are the way they are and what their role in all of it is. If you’re a highly sensitive person, you may have always wondered why other people aren’t as captivated by the mysteries of human nature and the universe as you are."
      "You’ve always been sensitive to what you wear. Scratchy fabric or restrictive clothing — like pants with a tight waistband or pantyhose — really irritate you. Of course, non-HSPs might dislike these things too, but an HSP will carefully select their wardrobe to completely avoid them. And if an HSP inadvertently wears one of these things out, the discomfort may detract from their entire experience."
      "Many HSPs are more sensitive to pain of all kinds — headaches, body aches, injuries, etc. — than non-HSPs."
      "Again, due to your deep processing, you have a rich inner world. As a child, you may have had several imaginary friends, enjoyed fantasy-based play, and were prone to daydreaming. As an adult, you may have vividly realistic dreams."
      "HSPs take comfort in their routines, because the familiar is far less stimulating than something brand new. For this reason, change — both positive and negative — can really throw off HSPs. For example, when dating someone new or getting a job promotion, HSPs may feel as equally stressed as they do overjoyed. Generally, HSPs need more time than others to adjust to change."
      "Similarly, moving to a new home or traveling (even if it’s just a “fun” vacation!) can be quite difficult for you, because your senses are bombarded with so much new stimuli.",
    ],
  },
  {
    slug: "chaplins-great-speech",
    title: "Chaplin's Great Speech",
    excerpt: "Charlie Chaplin & Hitler were both born within a week of each other (Chaplin 4/16/1889, Hitler 4/20/1889), they were roughly the same height and weigh...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Charlie Chaplin & Hitler were both born within a week of each other (Chaplin 4/16/1889, Hitler 4/20/1889), they were roughly the same height and weight and both struggled in poverty until they reached great success in very different fields. When Chaplin learned of Hitler's policies of racial oppression and nationalist aggression he seized the unlikely serendipitous opportunity."
      "His uncanny resemblance of Hitler gave this world famous comedian a powerful satirical bullet to fire at the dictator.  Better than simply deriding Hitler he delivers what I believe to be the most beautiful articulation of what the world should and could be."
      "Chaplin himself almost cancelled the film as the extent of Nazi atrocities  became clearer. The film star feared there was simply nothing funny about Nazis. He also worried that many countries might simply ban the flick."
      "President Franklin Roosevelt heard of Chaplin’s intention to scrap the film. The president sent an aide to deliver a message to Chaplin. “Make this film,” the president advised. Roosevelt promised he would use his influence to ensure none of America’s allies banned the movie.  Hitler once had extolled Chaplin as one of the greatest performers of all time. There were rumors that Hitler was heartbroken to see Chaplin’s impersonation of him."
      "For those who haven't heard it here is a clip of the speech...",
    ],
  },
  {
    slug: "why-gardening-is-necessary-for-everyone",
    title: "Why Gardening Is Necessary For Everyone",
    excerpt: "Gardening is so good for you I don't think it should be considered merely as therapy.  I think it's so good for you that it's actually a necessity.  I...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Gardening is so good for you I don't think it should be considered merely as therapy.  I think it's so good for you that it's actually a necessity.  In the same way I don't think breathing is just therapeutic or a hobby.  Breathing is a necessary function for human life.  It seems that some people can NOT garden and not have too many adverse affects.  But there are so many benefits it's statistically improbable that by not doing any gardening there will be some adverse affects in your life.  This may seem like an exaggeration but allow me to convince you..."
      "This is the most obvious one but not so many people know why and how much better.  Most produce loses an average of 30 percent of nutrients three days after harvest.  University of California studies show that vegetables can lose 15 to 55 percent of vitamin C, for instance, within a week.  Some spinach can lose 90 per cent within the first 24 hours after harvest and 50 per cent in 30 minutes. 1"
      "The answer is simple.  Fresh produce is meant to be grown near your home and eaten straight after being picked.  Sure it's okay to supplement your meals with frozen vegetables.  But if the purpose of food is nutrition delivery then you can't beat growing it in your garden."
      "In this paper 2 from the Royal College of Physicians by Dr Richard Thompson (The Queen's former Doctor) He goes so far to say, \"Health professionals should encourage their patients to make use of green space and to work in gardens, and should pressure local authorities to increase open spaces and the number of trees, thus also helping to counteract air pollution and climate change\"."
      "Gardening can help reduce symptoms 3 of depression and anxiety."
      "Getting dirt under your nails while digging in the ground can make you happier. 4"
      "In fact, inhaling M. vaccae, a healthy bacteria that lives in soil, can increase levels of serotonin and reduce anxiety. 5"
      "One group of holistic therapies that aim to treat the whole person and has been well researched through surveys and randomised trials is referred to as green care, or therapy by exposure to plants and gardening.6,7 Several trials have demonstrated the beneficial effects on mood and mental health of observing nature, or simply even images of natural scenes."
      "In a Japanese study, viewing plants altered EEG recordings and reduced stress, fear, anger and sadness, as well as reducing blood pressure, pulse rate and muscle tension.8 Another Japanese study simply found that it more beneficial physiologically to view a green hedge rather than a concrete fence.  In a randomised study by the environmental psychologist, Roger Ulrich views of plants and trees from post-operative wards improved the mood of patients, and reduced analgesic use, surgical complications and length of stay. Similar beneficial results have been found for patients undergoing dental treatment and viewing natural scenes together with natural sounds improved the experience of bronchoscopy.  Another carefully controlled study showed that viewing sculpture gardens without any greenery through the windows of an oncology ward caused a negative reaction in many patients. Even randomly exposing post operative patients to pictures of the countryside on the walls of their rooms can reduce pain and anxiety while abstract images increased anxiety.9,10"
      "The charity MIND compared short walks through a garden with walks in a shopping complex and showed that the former improved mental health, whereas the latter made it worse.11 In a prison in Michigan, residents who had a view of the countryside from their cells used the prison medical services less than those with an internal courtyard view.12"
      "In another randomised experiment, when post-operative patients were exposed to eight different species of indoor plants, both pain and length of stay were once again reduced and patients’ satisfaction with their hospital rooms was improved.13 In another study, putting plants in a computer room improved productivity and lowered blood pressure.14 Indoor gardening has been used to treat patients with mental health problems.15"
      "Many studies in the UK and other countries agree that higher proportions of green space, especially biodiverse habitats,16 are associated with less depression, anxiety and stress, even after controlling for potential confounding factors such as deprivation.17"
      "It is not only the appearance of plants that is beneficial: their leaves remove toxins, dust and microorganisms from the air.  NASA proved this one. 18"
      "One obvious benefit of gardening is that it is a form of light physical activity which everyone knows is good for you.  The science backs this assumption up too. 19,20 Gardening also gives us exposure to sunlight. Sunlight lowers blood pressure as well as increasing vitamin D levels. 21"
      "Less green space in people's living environment coincided with feelings of loneliness and with a perceived shortage of social support.  Loneliness and perceived shortage of social support partly mediated the relation between green space and health. 22",
    ],
  },
  {
    slug: "thoughts-on-maslows-toward-a-psychology-of-being",
    title: "Thoughts on Maslow's \"Toward a Psychology of Being\"",
    excerpt: "Abraham Harold Maslow is the guy who came up with \"Maslow's Hierarchy of Needs\" which a lot of people have heard of but maybe aren't aware of its sign...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Abraham Harold Maslow is the guy who came up with \"Maslow's Hierarchy of Needs\" which a lot of people have heard of but maybe aren't aware of its significance."
      "This book was first published in 1962, (the second edition was published in 1968) Toward a Psychology of Being examines Maslow's thoughts on the self-actualized human.  E.g. The top of the pyramid."
      "Humans have certain needs and when those needs aren't satisfied, the result can be neurosis. A need is defined as that which, in its absence breeds illness, when present prevents illness and if restored, cures illness. Maslow also felt that the need is inactive, at a low ebb, or functionally absent in a healthy person. But, needs exist in a hierarchy and so when one need is satisfied the person becomes aware of another need. These needs produce motivation."
      "Maslow did not believe that a proper definition of motivation had yet been created, but he uses the concept anyway. The movement from one level of need to the next is what leads to motivation. Some people are strongly driven to grow, to constantly seek out more and more. Simply stated, they experience motivation; the inward desire to improve. It is this group that has reached the self-actualization level."
      "As people progress along the hierarchy, the satisfied need doesn't entirely go away but stays in a sort of repressed state. Therefore, it is possible to regress if that need ceases to be met. Even a self-actualized person will fall back down the hierarchy if a lower level need becomes unsatisfied."
      "In his research, Maslow made an interesting observation about creativity in healthy, evolved, and mature, self-actualized people. He discovered that many who are considered creative were not really healthy and that creativity was not the sole property of what is considered the creative professions, such as artists and writers. In fact, people in many varied situations proved to be creative, that it was a tendency of self-actualized people."
      "Toward a Psychology of Being is written for psychologists.  It's no easy read.  However, for anyone serious about understanding human behaviour it is worth the effort."
      "He doesn't pretend to have easy answers or all the answers or solutions.  He does seem to have an infectious hope for humanity.  It's refreshing and shines through the academic style of writing.  There is an optimistic tone toward a future based on the intrinsic values of humanity.  Maslow states that, \"This inner nature, as much as we know of it so far, seems not to be intrinsically evil, but rather either neutral or positively 'good.' What we call evil behaviour appears most often to be a secondary reaction to frustration of this intrinsic nature.\" He demonstrates that human beings can be loving, noble, and creative, and are capable of pursuing the highest values and aspirations."
      "Here are some of my favourite excerpts throughout the book..."
      "“Every human being has both sets of forces within him. One set clings to safety and defensiveness out of fear, tending to regress backward, hanging on to the past, afraid to grow away from the primitive communication with the mother’s uterus and breast, afraid to take chances, afraid to jeopardize what he already has, afraid of independence, freedom and separateness. The other set of forces impels him forward toward wholeness of Self and uniqueness of Self, toward full functioning of all his capacities, toward confidence in the face of the external world at the same time that he can accept his deepest, real, unconscious Self.”"
      "“Not allowing people to go through their pain, and protecting them from it, may turn out to be a kind of over-protection, which in turn implies a certain lack of respect for the integrity and the intrinsic nature and the future development of the individual.”"
      "“The needs for safety, belonging, love relations and for respect can be satisfied only by other people, i.e., only from outside the person. This means considerable dependence on the environment. A person in this dependent position cannot really be said to be governing himself, or in control of his own fate. He must be beholden to the sources of supply of needed gratifications. Their wishes, their whims, their rules and laws govern him and must be appeased lest he jeopardizes his sources of supply. He must be, to an extent, “other-directed,” and must be sensitive to other people’s approval, affection and goodwill. This is the same as saying that he must adapt and adjust by being flexible and responsive and by changing himself to fit the external situation. He is the dependent variable; the environment is the fixed, independent variable.”"
      "“Most people experience both tragedy and joy in varying proportions. Any philosophy which leaves out either cannot be considered to be comprehensive.”"
      "“Every age but ours has had its model, its ideal. All of these have been given up by our culture; the saint, the hero, the gentleman, the knight, the mystic. About all we have left is the well-adjusted man without problems, a very pale and doubtful substitute.”",
    ],
  },
  {
    slug: "taking-the-time-to-chill",
    title: "Taking The Time To Chill",
    excerpt: "I’ve put on a LOT of weight this year.  My PTSD flashbacks and overall anxiety levels are the worst they’ve ever been.  I slept over at a mate’s place...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I’ve put on a LOT of weight this year.  My PTSD flashbacks and overall anxiety levels are the worst they’ve ever been.  I slept over at a mate’s place a few weeks ago and he told me I have sleep apnoea.  I’m not formally diagnosed but he said I was making some extremely weird choking noises while sleeping on his couch.  Also, to a much lower degree, I have mild insomnia.  I’ve started addressing it but the complexity of my current life situation means I needed to implement a simple, flexible strategy.  One that doesn’t take a lot of time, low cost, addresses weight loss, anxiety management, PTSD, apnoea & insomnia."
      "So I thought I’d revisit the Wim Hof Method."
      "I first learned about Wim Hof 10 years ago and used his techniques which I found transformational at the time.  The man, Wim Hof, is simply astounding.  I read his book The Way Of The Iceman by Wim Hof & Koen De Jong for the first time today.  It’s a great short book which I highly recommend."
      "I’ve just started using some of his techniques again tonight which I wanted to share with you."
      "Most people would look at any one of Wim's feats and say they’re impossible. Some of which include running a half-marathon barefoot on ice, swimming under ice for a record distance of 57.5 meters, and of course, climbing Mount Everest in shorts.  Wim is certainly gifted but he argues in his book that he has simply studied, trained and mastered several techniques which are now known as the Wim Hof Method."
      "It’s a unique combination of 3 practices with benefits to increase athletic performance, reduce stress, and help you sleep better, along with several other benefits as you’ll discover below."
      "It’s a set of skills that, when practised consistently, can provide your mind and body a wide variety of benefits."
      "The Wim Hof Method combines 3 different practices: Cold Therapy, Breathing Exercises, and Commitment."
      "Embracing the cold is healthy for you."
      "In fact, exposure to the cold provides an array of health benefits including increased brown fat (the good kind) which results in fat loss, reduced inflammation, and an improved immune system."
      "Plus, you’ll have better-balanced hormones, better sleep, and more endorphins."
      "The second practice of the Wim Hof Method involves a focus on breathing. You’re always passively breathing, but you may be unaware of the potential of focused, concentrated breathing exercises. Increased oxygen levels come with a range of physical benefits including reduced stress and better immune responses."
      "VICE journalist Justin Ong, who visited Singapore to test out the Wim Hof Method for himself, said, “I went from doing 40 push-ups without breathing, to 60. I could now hold my breath for almost three minutes, up from 43 seconds. In both instances, I felt I could push myself even more.”"
      "The final practice is the most important. Without a commitment to improving your body and mind, you don't see transformational results."
      "In order to fully master the Method (and reap the numerous physical rewards it has to offer), you need a certain level of patience and determination.",
    ],
  },
  {
    slug: "new-laws-needed-for-equality",
    title: "New Laws Needed For Equality",
    excerpt: "Most people are under no delusion that women are equally violent as men and, despite being less physically strong, equally capable of horrific crimes....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Most people are under no delusion that women are equally violent as men and, despite being less physically strong, equally capable of horrific crimes.The problem is the system is based around a Matriarchal structure which assumes that \"all men are perpetrators and all women are victims\"."
      "A few years ago I was supporting a man whose wife was extremely and consistently violent, moderately financially abusive, extremely controlling. She would use his 2 daughters as leverage. She would hit them to punish him. Because she knew he couldn't do anything. They were still toddlers. He told me he would pick them up in his arms and stand in a corner so she would just hit his back. He'd stay there until she stopped."
      "One day he asked me if we could go out and talk it through. She said he was only allowed out for an hour because she was tired. She'd just gone to Europe for 2 weeks, paid for by him, and she was still feeling jet lagged a week later. He said he hadn't had a day off work or looking after the kids in 7 months so he was going to be out for a few hours with me."
      "She said that wasn't okay."
      "While he was with me he received several hundred messages and missed calls. I encouraged not to cower to her. The messages became more extreme. I didn't realise how bad it was. Men tend to play these things down out of embarrassment and exhaustion. Men just don't like drama. He played me recordings of the abuse just from the last few days. I told him that he needs to press charges. He can't allow her to abuse him and the girls like that. He winced at the idea."
      "She is a \"Christian\". She said that what he was doing was against God because he was abandoning his family and quoted some scripture. Then she said God was going to kill his daughters as a punishment. She is a prophet sent by God and if he didn't obey the word of God then this will be the consequence. I said mate we're going to the police."
      "The police officer flat out refused to take a complaint. I told the officer I've been working in this area for a long time. (This was the first man I'd taken to the police in a situation like this). The police leaned in and whispered, \"come with me\"."
      "We walked outside where noone could hear. He said, \"Listen guys, you have to play the long game, I've just been through this myself, record everything and build a case, you'll need to fight it out in court and it will take years. But there is nothing I can do. Good luck.\""
      "I drove him back to the home. She has a tracking app on his phone so she knew we were at the police station. From that day on she his forbidden him to talk with me. We messaged once and I saw him briefly in public once. She got his phone and found out and punished him. I haven't seen or heard from him since."
      "Then she got her friends together and tracked down every ex girlfriend of mine. Every person who has an issue with me and started a smear campaign. A few of my mates' wives (wife of my mates? I don't know how to say this) received messages, not from her, but from her friend with a list of allegations about me. Some were stupid things that I've done years ago that they found out. Most of the things on the list were things that happened TO ME not done BY ME. I read the list and I sounded like an awful person! I would hate me if I heard this stuff about me. I lost several friendships and supporters of my charity through this."
      "These are types of abuse women use every day. But we don't have any laws to prosecute women who do this. Men go to prison in our country for selling cannabis or punching someone in a bar. But women can destroy lives without consequence. This is the Matriarchy and we need to address this if we are going to have a fair and equal society.",
    ],
  },
  {
    slug: "not-the-peoples-china",
    title: "Not The People's Republic Of China",
    excerpt: "I have many Chinese friends. I have 2 really close friends who are chinese. I visited China in 1999. I have walked along the great wall of China. I've...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I have many Chinese friends. I have 2 really close friends who are chinese. I visited China in 1999. I have walked along the great wall of China. I've visited the Ice City in far north China near Russia. I've bought street food on the streets of Shanghai when I was 17.  I love Chinese culture, Chinese people, Chinese history. I love Chinese philosophy and have read Sun Tzu, Confucius & Laozi.",
    ],
  },
  {
    slug: "occams-razor-cutting-off-unnecessary-complexity",
    title: "Occam's Razor: Cutting Off Unnecessary Complexity",
    excerpt: "The term \"Occam's Razor\" comes from a misspelling of the name William of Ockham. William Ockham (circa 1287–1347) was an English Franciscan friar, the...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "The term \"Occam's Razor\" comes from a misspelling of the name William of Ockham. William Ockham (circa 1287–1347) was an English Franciscan friar, theologian, philosopher, and logician in the medieval period. One of his rules of thumb has become a standard guideline for thinking through issues logically. Occam's Razor is the principle that [in Latin], \"non sunt multiplicanda entia praeter necessitatem\" [in English \"don't multiply the agents in a theory beyond what's necessary.\"] Said most simply:  “the simplest solution is almost always the best.”"
      "What does that mean? If two competing theories explain a single phenomenon, and they both generally reach a similar conclusion, and they are both equally persuasive and convincing, and they both explain the problem or situation satisfactorily, the logician should always pick the less complex one. The one with the fewer number of moving parts is most likely to be correct. The idea is always to cut out extra unnecessary bits, hence the name \"razor.\" An example will help illustrate this."
      "Suppose you come home and discover that your dog has escaped from the kennel and chewed large chunks out of the couch. Two possible theories occur to you."
      "Either theory would be an adequate and plausible explanation. Both explain what needs to be explained, which is the escaped dog, and both use the same theory of how, i.e., that the latch was opened somehow, as opposed to some far-fetched theory about canine teleportation or something crazy like that."
      "Which theory is most likely correct?  If you don't find additional evidence like strange fingerprints or human footprints or missing possessions to support theory #2, William of Ockham would say that the simpler solution (#1) is most likely to be correct in this case.  The first solution only involves two parts–two entities and two actions. On the other hand, the second theory requires at least five parts–you, the dog, a hypothetical unknown intruder, some plausible motivation, and various actions. It is needlessly complex. Occam's basic rule was \"Thou shalt not multiply extra entities unnecessarily,\" or to phrase it in modern terms, \"Don't speculate about extra hypothetical components if you can find an explanation that is equally plausible without them.\" All things being equal, the simpler theory is more likely to be correct, rather than one that relies upon many hypothetical additions to the evidence already collected."
      "A variation used in medicine is called the \"Zebra\": a physician should reject an exotic medical diagnosis when a more commonplace explanation is more likely, derived from Theodore Woodward's dictum \"When you hear hoofbeats, think of horses, not zebras\"."
      "As explained by John G. Sotos, medical novices are predisposed to make rare diagnoses because of (a) the availability heuristic (\"events more easily remembered are judged more probable\") and (b) the phenomenon first enunciated in Rhetorica ad Herennium (circa 85 BC), \"the striking and the novel stay longer in the mind.\" Thus, the aphorism is an important caution against these biases when teaching medical students to weigh medical evidence."
      "Medical Diagnosticians have warned, however, that \"zebra\"-type diagnoses must nonetheless be held in mind until the evidence conclusively rules them out."
      "Occam's Razor is a tool we all use knowingly or unknowingly.  If your personality is high in trait neuroticism then you need to be especially aware of this bias."
      "Two very easy questions to help quickly guide you to a better explanation for your situation:",
    ],
  },
  {
    slug: "gender-wage-non-gap",
    title: "Gender Wage Non-gap",
    excerpt: "All numbers from ABS 2019....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "All numbers from ABS 2019."
      "Female average work hours: 36.9 hours.Male average work hours: 40.8"
      "Female weekly earnings: $1433.60Male weekly earnings: $1678.40"
      "Overtime in Australia begins at 38 hours, and is paid at 1.5x – 2x hourly rate. We will split the difference and use 1.75x."
      "Female average overtime worked = 0Male average overtime worked = 2.8 hours (40.8 – 38)."
      "2.8 hours paid at 1.75x rate equates to 4.9 hours worked. Including overtime men work equivalent of 42.9 hours per week (38 + 4.9)"
      "Thus female hourly rate = $1433.60 / 36.9 hours = $38.85 per hour."
      "Male hourly rate = $1678.40 / 42.9 hours = $39.1 per hour."
      "$38.85 vs $39.1 per hour.You'll notice most matriarchal arguments will obfuscate the data in weekly or annual figures so that it appears men earn significantly more.  This claim is patently false."
      "There is no significant gender wage gap in Australia.  There is a gender work hours gap."
      "This calculation was sourced from the team at Domestic Violence Awareness Australia (DVAA).",
    ],
  },
  {
    slug: "bond-cleaning-brisbane",
    title: "Bond Cleaning Brisbane",
    excerpt: "Whenever you move house in Brisbane a bond clean is a necessary part of the ordeal.  When it comes to bond cleaning Brisbane, property managers are pa...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Whenever you move house in Brisbane a bond clean is a necessary part of the ordeal.  When it comes to bond cleaning Brisbane, property managers are particularly thorough.  They are very strict with the Qld government RTA guidelines."
      "My place was a mess.  Not as bad as this photo.  This is just a random photo.  But you get the idea."
      "I booked in Liberty Services Brisbane Bond Cleaning.  Yes, this is a shameless plug of my own social enterprise.  But, it's true.  The team took care of everything.  They completed the bond clean itself, carpet cleaning and some minor repairs.  We had a whole heap of rubbish that had accumulated which had to be removed.  Liberty Services did everything.",
    ],
  },
  {
    slug: "twenty-twenty-book-list",
    title: "Twenty Twenty Book List",
    excerpt: "I got through 58 books last year which I think just might be my PB....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I got through 58 books last year which I think just might be my PB."
      "Some of my favourites were..."
      "I learned some great lessons from nearly all of the books.  Reading is powerful for personal and professional growth.  When someone commits to writing a book they dedicate a significant quantity of time to concisely document what, in many cases, has taken a lifetime for them to learn.  We, the readers, have the benefit of consuming this invaluable information they have succinctly written in a matter of hours."
      "Before reading any book I carefully research the author and reviews about the book.  I look out for criticisms and see what people say is incorrect about the book... where does it go too far... in some cases, this is enough to convince me not to read it.  But everyone's got haters.  If the worst of what is said about it is unconvincing then I'll read it.  In some cases, the research will reveal another book that is better to read or in addition."
      "This year I sketched out a reading plan for the next 10 years.  There are some authors, who I really admire, and I plan to read most or all of their body of work.  I've found that by reading several in succession I get to really understand them.  You get to see patterns and themes that grow or wane through their books.  For some authors, who I'm really interested in, I've found that reading a biography about them really helps with understanding them. Also, if they've written one, an autobiography.  This gives you an understanding of what is driving them, the events and experiences they endured.  The circumstances going on around them in the world at that time.  All these factors led to the thoughts that ultimately resulted in the books."
      "I've noticed how different books have a different effect on me and my daily performance.  Some books are mentally draining others are simply distracting from my day to day activities.  I've found I need to balance my reading interspersed with light reading or simply books that I really enjoy."
      "I use Goodreads to track all my reading.  It's a really great platform.  This is a log of my 2020 reading challenge."
      "https://www.goodreads.com/user_challenges/19312110"
      "In 2021 I'm going to reduce the number of books and read some heavier ones on my bucket list.  I found I was rushing this year to get the quantity of reading in.  I also choose smaller books.  Next year, I want the mental space to read and understand more.  My target for 2021 is going to be 40 books in total."
      "I hope this has given you a few tips you can take away for your own reading plan.  New Years Day is a great time to set goals for the year ahead.  If you've set a reading goal for 2021 comment up and let me know!",
    ],
  },
  {
    slug: "turnaround-your-lockdown",
    title: "Turnaround Your Lockdown",
    excerpt: "In 1665, the bubonic plague was ravishing London.  About 15% of the population died.  Entire villages went into lockdown.  Institutions and of course ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "In 1665, the bubonic plague was ravishing London.  About 15% of the population died.  Entire villages went into lockdown.  Institutions and of course businesses were being closed down for one reason or another.  One of those institutions was the University of Cambridge.  There are tales of people losing their minds from the response to the plague and committing suicide."
      "One young student took advantage of the situation.  He took whatever books he could carry and retreated to a small village called Woolthorpe in the relative safety of the countryside.  He took the opportunity to work on his ideas and read books outside the usual highly structured and onerous curriculum.  Most importantly he had time to think."
      "His window overlooked an orchard.  Later in his life, he shared how he had watched an apple fall from the tree outside his chamber window, and in his mind, he questioned why it fell straight to the ground."
      "In answering that question, he theorised that everything in existence is attracted to everything else, and this attraction, the force of gravity, ties the universe together.  The young student was of course Isaac Newton.",
    ],
  },
  {
    slug: "the-james-webb-telescope",
    title: "The James Webb Telescope",
    excerpt: "This is going to be one of the biggest advancements for humanity in our life time.  Certainly at least for the year 2022.  The James Webb Space Telesc...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "This is going to be one of the biggest advancements for humanity in our life time.  Certainly at least for the year 2022.  The James Webb Space Telescope (JWST) was launched on the 25th December 2021 and sent off into outer space."
      "In 1990, the Hubble Space Telescope was launched into Low Earth Orbit.  It revealed the most incredible photos of our Universe that we had never seen before.  More than that, it gave us information about our place in the Universe."
      "The James Webb Space Telescope has a mass about half of Hubble Space Telescope's, but a 6.5 m diameter gold-coated beryllium primary mirror made of 18 hexagonal mirrors, giving it a total size over six times as large as Hubble's 2.4 m. Beryllium is a very stiff, hard, lightweight metal often used in aerospace that is non-magnetic and keeps its shape accurately in an ultra-cold environment.  The gold coating provides infrared reflectivity and durability."
      "The James Webb Space Telescope has four key goals:"
      "JWST will orbit the Sun near the second Lagrange point (L2) of the Sun-Earth system, which is 1,500,000 km farther from the Sun than the Earth's orbit.  Normally an object circling the Sun farther out than Earth would take longer than one year to complete its orbit.  But near the L2 point, the combined gravitational pull of the Earth and the Sun allow a spacecraft to orbit the Sun in the same time that it takes the Earth.  Staying close to Earth allows data rates to be much faster for a given size of antenna.  The larger distance from Earth & the Sun is to ensure it's free from interference."
      "The incredible precision and innovation of the design and its placement in orbit means that the JWST will be effectively 100x more accurate than the Hubble.  This is a game changer.  We will learn new things about our Universe."
      "We will also be able to find more \"goldilocks\" planets like Kepler 186f.  Planets that can sustain life.  Planets that we can start making plans to visit."
      "We will start to see photos from the James Webb around June of this year.  They will be inspiring and mind blowing.  Over the next few years astrophysicists will get data that will better explain our Universe and just maybe our part to play in it.  Most importantly, I think space exploration unites us.  In a time when we're more fragmented and disconnected than ever, ventures like this bring us together as humans.",
    ],
  },
  {
    slug: "2021-reading-list-review",
    title: "2021 Reading List Review",
    excerpt: "This year I reduced my reading schedule to 40 books.  I was able to read several books that had been on my list for many years.  Here is my 2021 readi...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "This year I reduced my reading schedule to 40 books.  I was able to read several books that had been on my list for many years.  Here is my 2021 reading list on Good Reads.  https://www.goodreads.com/user_challenges/25070879"
      "Drawing on his twenty-five years of groundbreaking research on moral psychology, social psychologist Jonathan Haidt shows how moral judgments arise not from reason but from gut feelings. He shows why liberals, conservatives, and libertarians have such different intuitions about right and wrong, and he shows why each side is actually right about many of its central concerns.In this subtle yet accessible book, Haidt gives you the key to understanding the miracle of human cooperation, as well as the curse of our eternal divisions and conflicts. If you’re ready to trade in anger for understanding, read The Righteous Mind."
      "\"Best Nonfiction Book of the 20th Century\" (Time)"
      "“It is impossible to name a book that had a greater effect on the political and moral consciousness of the late 20th century.” (David Remnick, The New Yorker)"
      "The Nobel Prize winner’s towering masterpiece of world literature, the searing record of four decades of terror and oppression, in one abridged volume (authorized by the author). Features a new foreword by Anne Applebaum."
      "Drawing on his own experiences before, during, and after his 11 years of incarceration and exile, on evidence provided by more than 200 fellow prisoners, and on Soviet archives, Solzhenitsyn reveals with torrential narrative and dramatic power the entire apparatus of Soviet repression, the state within the state that once ruled all-powerfully with its creation by Lenin in 1918. Through truly Shakespearean portraits of its victims – this man, that woman, that child – we encounter the secret police operations, the labor camps and prisons, the uprooting or extermination of whole populations, the “welcome” that awaited Russian soldiers who had been German prisoners of war. Yet we also witness astounding moral courage, the incorruptibility with which the occasional individual or a few scattered groups, all defenseless, endured brutality and degradation. And Solzhenitsyn’s genius has transmuted this grisly indictment into a literary miracle."
      "“The greatest and most powerful single indictment of a political regime ever leveled in modern times.” (George F. Kennan)"
      "“Solzhenitsyn’s masterpiece.... The Gulag Archipelago helped create the world we live in today.” (Anne Applebaum, Pulitzer Prize-winning author of Gulag: A History, from the foreword)"
      "The dramatic inside story of the first four historic flights that launched SpaceX – and Elon Musk – from a shaky startup into the world's leading edge rocket company."
      "In 2006, SpaceX – a brand-new venture with fewer than 200 employees – rolled its first, single-engine rocket onto a launch pad at Kwajalein Atoll. After a groundbreaking launch from the middle of the Pacific Ocean, the Falcon 1 rocket designed by Elon Musk’s engineers rose in the air for approximately 30 seconds. Then, its engine flamed out and the rocket crashed back into the ocean."
      "When he founded SpaceX, Elon Musk had only budgeted for three launches. After two more failed flight tests, and with only one Falcon 1 rocket left in its factory, SpaceX decided to try one last, dramatic launch. Over eight weeks, engineers worked furiously to prepare this final rocket. If it crashed and burned, so would SpaceX. In September 2008, SpaceX’s last chance for success lifted off...and accelerated like a dream, soaring into orbit flawlessly."
      "That success would launch a miraculous decade for the company, in which SpaceX grew from building a single-engine rocket to one with a staggering 27 engines, created two different spacecrafts and mastered reusable-rocket descents using mobile drone ships on the open seas. But these achievements would not have been possible without SpaceX’s first four flight tests."
      "Drawing on unparalleled access and exclusive interviews with dozens of former and current employees – engineers, designers, mechanics and executives, including Elon Musk – Eric Berger tells the complete story of this foundational generation that transformed SpaceX into the world’s leading space company."
      "Economic Facts and Fallacies exposes some of the most popular fallacies about economic issues-and does so in a lively manner and without requiring any prior knowledge of economics by the reader. These include many beliefs widely disseminated in the media and by politicians, such as mistaken ideas about urban problems, income differences, male-female economic differences, as well as economics fallacies about academia, about race, and about Third World countries."
      "One of the themes of Economic Facts and Fallacies is that fallacies are not simply crazy ideas but in fact have a certain plausibility that gives them their staying power-and makes careful examination of their flaws both necessary and important, as well as sometimes humorous. Written in the easy-to-follow style of the author's Basic Economics, this latest book is able to go into greater depth, with real world examples, on specific issues.",
    ],
  },
  {
    slug: "al-akam-al-khamsa-the-five-decisions",
    title: "Al-aḥkām Al-khamsa:  The Five Decisions",
    excerpt: "I came across this idea in Islamic tradition today.  It's known as the \"5 Decisions\".  One of my contractors said to me \"it is Halal for me to do this...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I came across this idea in Islamic tradition today.  It's known as the \"5 Decisions\".  One of my contractors said to me \"it is Halal for me to do this\".  I had only known of Halal as a food preparation standard similar to what \"Kosher\" is for Jews.  The word Halal means permissible and has a broader definition, at least for some muslims, to mean that which is \"the right thing to do\".  I was intrigued by the concept and dug a little deeper."
      "As I understand it (if you're a muslim and you're reading this and I'm wrong please let me know!), there is a simple binary understanding of most things.  Either \"Halal\", that which is permissible and the right thing or \"haram\", that which is not permissible and is the wrong thing."
      "Now, I was thinking probably what you're thinking right now.  That's too simple.  It turns out they found the same thing and so over the centuries under Sharia they developed it.  I should say at this point that I disagree with some applications of Sharia law and the Islamic faith.  I think liberal democracy like we have in the west is a much better system especially because we deliberately and carefully seperate religion, law and the government.  However, there are many muslims I know and respect.  I think this an insightful concept and worth pondering."
      "Sharia rulings fall into one of five categories known as “the five rulings” (al-aḥkām al-khamsa):"
      "It is a sin or a crime to perform a forbidden action or not to perform a mandatory action.  Reprehensible acts should be avoided, but they are not considered to be sinful or punishable in court.  Avoiding reprehensible acts and performing recommended acts is held to be subject of reward in the afterlife, while allowed actions entail no judgement from God.  Jurists disagree on whether the term ḥalāl covers the first three or the first four categories.  The legal and moral verdict depends on whether the action is committed out of necessity (ḍarūra)."
      "We have no comparable system like this in the West.  Especially rarely in the religious sense.  In many muslim cultures, religion, law and government are inextricably intertwined.  From a purely legal and cultural perspective we do see these categories being used everyday in our society."
      "Take for example \"wearing face masks\".  One day it's \"fard\", and if you aren't wearing one, even in your car all alone, it's illegal and if you're caught by the wrong person you might be publicly ridiculed.  Or conversely, if you live somewhere like Byron Bay where the culture is so intensely anti-vax and if your personal opinion is neutral \"mubah\" but you get vaccinated because you need to for work then you might still face a religious-like persecution for capitulating to the pharmaceutical devils and be outcast as an apostate.  The extreme nature of certain tribes mean that they will impose an arbitrary extreme binary judgement such as \"Haram\"."
      "Mainstream religions had developed these sometimes useful tools to help better manage their communities with more nuanced structures.  They needed this because of the wobbly foundation when building complex societies based on various individual interpretations of spurious scriptures.  With the decline of mainstream religions we're seeing a huge portion of the population join fragmented ideological groups such as feminism, marxism, fascism and whatever this new \"woke-ism\" pseudo religion is.  People still have a need to belong.  Immature people, who once joined religions with well structured systems and clearer value sets, will now join these small ideological groups with less structure and more ambiguous values.  Upon entry they ask existing group members who they need to hate and punish to belong to that tribe.  They'll be quickly informed and handed instructions, ammunition and dossiers.",
    ],
  },
  {
    slug: "building-a-storybrand-by-donald-miller-book-review",
    title: "Building a StoryBrand by Donald Miller:  Book Review",
    excerpt: "A friend recently recommended I read this book by Donald Miller.  It's a great short read packed full of interesting and useful information.  This is ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "A friend recently recommended I read this book by Donald Miller.  It's a great short read packed full of interesting and useful information.  This is a quick summary and review of the book.  I definitely recommend giving it a read if you're interested in marketing or business.  Donald Miller is a world famous story teller.  He presents some novel ideas.  I 'read' it on audible.  It's a quick book that takes a little over 4 hours to get through."
      "Building a StoryBrand is about making your customer the hero of a story."
      "Every successful business understands that you need to make your customer the hero of the story, not your brand."
      "“Businesses that invite their customers into a heroic story grow. Businesses that don’t are forgotten.”"
      "Chapter 1: The Key to Being Seen, Heard, and Understood"
      "“Pretty websites don’t sell things. Words sell things. And if we haven’t clarified our message, our customers won’t listen.”"
      "“The more simple and predictable the communication, the easier it is for the brain to digest.”"
      "Mike McHargue, a friend of Miller’s, says there are two critical mistakes brands make when talking about their products and services:",
    ],
  },
  {
    slug: "nicomachean-ethics-book-review",
    title: "Nicomachean Ethics – Book Review",
    excerpt: "I recently finished reading Nicomachean Ethics by Aristotle.  This is a true classic.  It's one of the most influential books of all time.  It has bee...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I recently finished reading Nicomachean Ethics by Aristotle.  This is a true classic.  It's one of the most influential books of all time.  It has been famous through different eras especially during the middle ages.  Aristotle was referred to during this time as \"The Philosopher\"."
      "The book is most likely titled in honour of Aristotle's father Nicomachus.  His son's name was Nicomachus and was involved in editing the final manuscripts that formed the book that we know today.  The work was completed some time during the 4th Century BC."
      "Aristotle postulates the highest human good is \"eudaimonia\" or what is probably best translated into English as \"flourishing\" but often unfortunately translated as mere \"happiness\".  A substantial component in the path to such human happiness is acting with the appropriate virtues over the course of an entire lifetime.  The details of these Aristotelean teachings form the Nicomachean Ethics, one of the most influential works in the entire history of Western Civilisation."
      "As a way of sharing a small example of Aristotle’s extensive philosophy outlined in these pages, I will focus on Book IV Chapter 8 where this brilliant ancient Greek philosopher addresses the virtue of being witty, sensitive to others, discerning and perceptive, particularly when we are at our leisure."
      "Here are six Aristotle quotes and some thoughts:"
      "“Since life includes rest as well as activity, and in this is included leisure and amusement, there seems here also to be a kind of intercourse which is tasteful; there is such a thing as saying- and again listening to- what one should and as one should.”"
      "Aristotle’s focus on time spent outside of work, what we nowadays refer to as ‘leisure time’, makes this section of his ethical teachings particularly relevant for us today, most especially since we are bombarded by a nonstop barrage of advertisements, store signs and billboards.  Some obvious, others not."
      "“The kind of people one is speaking to or listening to will also make a difference.”"
      "It is paramount who we associate with both at work and outside of work. Aristotle is positive that we can actively participate in society and exercise discrimination as we develop wisdom to speak as we should and listen as we should. In contrast, another Greek philosopher, Epicurus, was not so optimistic on this point. Epicurus judged conventional society as blind and dumb, particularly as it pertains to men and women expounding values regarding such things as riches and fame and what constitutes our true human needs. The answer for Epicurus: withdraw into a separate community with like-minded friends and philosophers."
      "“Regarding people’s views on humour there is both an excess and a deficiency as compared with the mean. Those who carry humour to excess are thought to be vulgar buffoons, striving after humour at all costs, and aiming rather at raising a laugh than at saying what is becoming and at avoiding pain to the object of their fun while those who can neither make a joke themselves nor put up with those who do are thought to be boorish and unpolished.”"
      "Aristotle is optimistic that someone who aspires to philosophic excellence, virtue and the mean (maintaining a centrist position between two extremes) can live among buffoons and boors without being pulled down to their level."
      "“The ridiculous side of things is not far to seek, however, and most people delight more than they should in amusement and in jestingly and so even buffoons are called ready-witted because they are found attractive; but that they differ from the ready-witted man, and to no small extent, is clear from what has been said.”"
      "Aristotle observes how buffoonery can easily lapse into the social norm.  Thus our challenge is how to retain our integrity when surrounded by slobs and buffoons."
      "“To the middle state belongs also tact; it is the mark of a tactful man to say and listen to such things as befit a good and well-bred man; for there are some things that it befits such a man to say and to hear by way of jest, and the well-bred man's jesting differs from that of a vulgar man, and the joking of an educated man from that of an uneducated.”"
      "Aristotle’s overarching observation on how the wisdom of the middle way between two extremes applies here.  It's not good to find yourself at either extreme, being a boor or being a buffoon. Unfortunately, speaking and otherwise communicating in a buffoonish or boorish way is in no way restricted to the uneducated or dull.  We've all witnessed numerous instances of buffoonery and boorishness among the highly educated and intellectually astute.",
    ],
  },
  {
    slug: "book-review-of-why-we-get-sick-the-hidden-epidemic-at-the-root-of-most-chronic-diseaseand-how-to-fight-it",
    title: "Book Review of Why We Get Sick: The Hidden Epidemic at the Root of Most Chronic Disease―and How to Fight It",
    excerpt: "I recently read Dr. Benjamin Bikman’s book, Why We Get Sick. Bikman is a Brigham Young University scientist and biomedical professor whose expertise i...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I recently read Dr. Benjamin Bikman’s book, Why We Get Sick. Bikman is a Brigham Young University scientist and biomedical professor whose expertise is in bioenergetics and metabolic disorders. Unlike many authors who write on this topic, Bikman is not a medical doctor. He has a PhD."
      "Bikman communicates that many of today’s chronic medical disorders including cancer, heart disease, high cholesterol, Alzheimer’s disease, vascular dementia, Parkinson’s disease, hypertension, as well as many others, are linked to insulin resistance.  His analysis is backed up with more than 30 pages of endnotes chronicling an abundance of research in multiple disciplines along with his scientific understanding of how the body works."
      "In the Introduction, Bikman emphatically states that “insulin resistance is the most common health disorder worldwide, and it affects more people—adults and children—each year than any other. (Page xv) Like many other people, I previously understood the connection between insulin resistance and diabetes and Alzheimers. However, I didn’t fully appreciate how insulin levels can affect the entire body. Bikman effectively points out why diabetes and Alzheimers are only a small part of the story."
      "Bikman explains the role of insulin in the body and how insulin resistance stands side by side with almost every chronic disease. It affects heart health, the brain, and neurological disorder, reproductive health, cancer, skin, muscles and bones, the GI tract and kidney health, obesity, and metabolic syndrome. Readers can easily move from one chapter to the next by scrolling through well organised headings, subheadings, graphs, and highlighted sidebars to find information relevant to their situation."
      "He intertwines facts with clear explanations of current medical research. These kernels of information will make most people pause briefly. Perhaps, relevant statements will create an opportunity to evaluate daily choices, especially when such a high percentage of people have insulin resistance. Diet and activity levels are directly related to health status."
      "The following statements highlight a cross-section of some of these important facts:"
      "“…half of all U.S. adults, and roughly one in three Americans are know to have it. However, this number could be as high as 88% of Americans. (Page 3)"
      "“from the brain to the toes, insulin regulates how a cell uses energy, changes its size, influences production of other hormones, and even determines whether cells live or die.” (Page 4-5)"
      "“…insulin resistance and cardiovascular disease are almost inseparable.” (Page 13)"
      "“…insulin resistance and high insulin levels directly cause high blood pressure.” (page 14)"
      "“First, insulin resistance increases blood pressure increasing the likelihood of blood vessel damage. Next, it increases lipid deposition in blood vessel walls. Finally, insulin resistance increases inflammation, promoting the ongoing infiltration of the blood vessel with macrophages, which become increasingly laden with oxidized lipids, changing into foam cells.” (page 22)"
      "“The brain’s inability to get enough glucose is a cardinal feature of Alzheimer’s disease. As in our muscles, insulin facilitates the movement of glucose into the brain. However, as the brain becomes progressively insulin resistant, it becomes less and less able to obtain enough glucose to meet its energy demands. So, like an engine running on empty, the brain doesn’t work well.” (Page 29)"
      "“…vascular dementia occurs because the brain suffers from insufficient blood flow…subjects with insulin resistance have about twice the risk of developing vascular dementia compared with insulin-sensitive subjects.” Page 30)"
      "“Up to 30% of patients with Parkinson’s disease have type 2 diabetes, with possibly up to 80% having insulin resistance or pre diabetes.” Page 31)"
      "“…cancer is a disease of cellular growth; certain cells begin to multiply uncontrollably. And insulin resistance is part of this equation, because it pushes cancer cells to grow faster.” (Page 51)",
    ],
  },
  {
    slug: "the-powerful-image-of-a-frail-old-lion-moments-before-his-death",
    title: "The powerful image of a frail old lion moments before his death",
    excerpt: "These heart-breaking images show the final moments of a frail old lion who was once king of his land before he starved to death....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "These heart-breaking images show the final moments of a frail old lion who was once king of his land before he starved to death."
      "He was kicked out of his pride and became emaciated after the protection and food that his family used to provide was stripped away."
      "The lion, known as Skybed Scar, was well known in Kruger National Park, South Africa, where he was pictured."
      "The heart-breaking images were captured by Larry Anthony Pannell from California."
      "In his blog, he described coming across the lion, who he initially saw drinking from a watering hole."
      "'After he had his fill of water he struggled to his feet hardly able to stand. What you did not notice while he was drinking, he literally was nothing but skin and bones.'"
      "He describes how as the lion moved away from the water 'he staggered as if he was drunk towards a small rise' trying to catch his breath every few steps."
      "After reaching the rise he began slowly descending to the ground but eventually collapsed."
      "After a while, Larry and a friend drove over to where the lion had come to rest."
      "'We found him lying in the grass, exhausted unable to move. We were no more than five feet from him as he lay dying in the shade of a tree."
      "'Dropping my camera we stared at one another locking eyes for what seemed for an eternity. I just wanted him to know that he would not die alone as he struggled to breath, his chest rising only every so often."
      "'Then a last twitch of an ear, his last breath, he was gone. The King was dead.'"
      "He later said: 'I knew that I was witnessing something of a very special nature, the real nature both life and death."
      "'I sat with him only feet away, locking eyes and starting at one another as I watched for an hour as the life leave his body. I wanted him to know he would not die alone."
      "'Not wanting to sound crass I remember when my grandmother was in the hospital and I visited her for the last time the night she passed.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-no-2-danielle-jordan",
    title: "Comparing Jari's Case To Similar Cases: No.2 Danielle Jordan",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is a case to compare with Jari's:"
      "Danielle Jordan aka Danielle Fleming"
      "Relationship of P & V:"
      "Canberra, ACT, Australia."
      "Ms Jordan suffered catastrophic head injuries after she allegedly fell from the bonnet of a car being driven by Mr O'Connell in the north Canberra suburb of Melba."
      "The couple were having an argument at a home in Melba early in the morning of 15 April 2022."
      "The couple went outside and Mr O’Connell allegedly got into the driver’s seat of a Mitsubishi Triton parked in the driveway while Ms Fleming sat on its bonnet.  He allegedly started driving off while she was still sitting on the car despite a friend of hers, who had also been at the home, walking in front of it to make him stop.  Ms Fleming allegedly held onto the bonnet as he drove off, accelerating out of the friend’s sight."
      "The documents also revealed witnesses reported having seen the car drive off and hearing a thump.  Witnesses allegedly also saw Mr O'Connell pick Ms Jordan up off the road and put her in the car.  Police said CCTV footage showed he took her to Calvary Hospital, carrying her limp body into the building.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases",
    title: "Comparing Jari's Case To Similar Cases:  No.5 Gayle Potter",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is a case to compare:"
      "Relationship of P & V:"
      "Traralgon, Victoria, Australia."
      "Ms Potter, 46, was found bloodied and battered in the driveway of her home after she was dragged under Mr Martyn's Mitsubishi Pajero following a heated argument."
      "Mr Martyn was confronted by the son the couple shared, and told him that Ms Potter was \"banging\" on his side of the car, and that he thought he had only \"bumped\" her as he drove off.  He was trying to get away from her as she yelled at him and hit the car.  Gayle was drunk and \"went at him\", she grabbed him and pulled at his clothes, in a fit of rage, and threw herself at his car."
      "The case was handed to the major crash investigators but was then handed over to the homicide squad."
      "Police charged Glenn with manslaughter, dangerous driving causing death, and failing to stop after an accident."
      "Glenn was found not guilty of all charges by a jury.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-pt1",
    title: "Comparing Jari's Case to Similar Cases:  No.1 Matthew Leadbetter & Katherine Field & Her Unborn Child",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is another case to compare with:"
      "Katherine Leadbetter and Matthew Field.  Katherine's unborn child."
      "Relationship of P & V:"
      "A teenage drug addict stole a vehicle and accidentally ran into Katherine & Matthew killing them and their unborn baby instantly.  The teenager fled the scene but was arrested shortly after."
      "The perpetrator was placed in remand.  Police charged him with 2 counts of murder.  He later plead guilty to manslaughter.  He was also charged with dangerous operation of a motor vehicle while adversely affected by intoxicating substances, driving while disqualified, and failing to fulfil duties at the scene of a traffic accident"
      "The perpetrator was sentenced to 10 years and eligible for parole after 6 years."
      "As of 11th June 2022, Queensland’s attorney-general, Shannon Fentiman, has confirmed she may appeal against the sentence in order to have it increased."
      "Redland City Council Mayor Karen Williams has started a petition asking Fentiman to lodge an appeal, as well as make changes to the Youth Justice Act."
      "Queensland’s LNP opposition supports the petition, with Leader David Crisafulli saying the sentence was too lenient and would not deter other youth offenders."
      "https://www.brisbanetimes.com.au/national/queensland/a-g-may-appeal-against-sentence-of-teen-driver-who-killed-couple-20220611-p5aszm.html"
      "https://www.abc.net.au/news/2022-06-08/hit-and-run-pregnant-couple-alexandra-hills-brisbane-leadbetter/101135384",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-pt3",
    title: "Comparing Jari's Case To Similar Cases:  No.3 Kyralee Clark",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is a case to compare with Jari's:"
      "Relationship of P & V:"
      "Passenger and acquaintance of the driver."
      "Wodonga, Victoria, Australia."
      "Smyth reached speeds of up to 180km/h as he led police on a cross-border chase on December 4, 2011, that ended with him losing control of and crashing a car.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-no-7-michelle-ruitenbeek",
    title: "Comparing Jari’s Case To Similar Cases: No.7 Michelle Ruitenbeek",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is a case to compare with Jari's:"
      "Michelle Ruitenbeek, 50"
      "Relationship of P & V:"
      "Melbourne, Victoria, Australia."
      "On 28th March 2019, Michelle Ruitenbeek was seriously injured and subsequently died after being hit while riding her bike on the Nepean Highway.  Ms Ruitenbeek was a serious, competitive and capable cyclist who had done everything to make herself visible.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-pt4",
    title: "Comparing Jari’s Case To Similar Cases:  No.4 Jennifer Board",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is a case to compare with Jari's:",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-case-no-7-veronique-sakr-sienna-abdallah-angelina-antony",
    title: "Comparing Jari’s Case To Similar Cases: Case No.7 Veronique Sakr, Sienna Abdallah, Angelina & Antony",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here."
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case."
      "Here is a case to compare with Jari's:"
      "Veronique Sakr, 11, and her cousins, Sienna Abdallah, eight, and her siblings Angelina, 12, and Antony, 13"
      "Samuel William Davidson"
      "Relationship of P & V:"
      "Sydney, New South Wales, Australia."
      "The 29-year-old ploughed into them after his ute mounted a kerb at Oatlands, in Sydney's northwest on February 1, 2020."
      "On the day of the crash, he had spent more than 12 hours drinking, and he was three times over the legal limit when he hit the children."
      "He also had cocaine and other drugs in his system."
      "Davidson had a blood alcohol reading of 0.182 at the scene of the crash before returning a second reading of 0.15 at Castle Hill police station. A blood test suggested he had taken MDMA during the day."
      "Arrested on site and placed on remand.  Charged with 4 counts of manslaughter and several other charges related to the incident."
      "The professional truck driver pleaded guilty to four counts of manslaughter and to charges related to the injuries caused to three other children."
      "Mr Davidson was jailed in April 2021 for 28 years with a non-parole period of 21 years."
      "In a majority decision, the NSW Court of Criminal Appeal concluded the term was manifestly excessive.",
    ],
  },
  {
    slug: "father-arrested-for-discussing-childs-gender-transition",
    title: "Father arrested for discussing child’s gender transition",
    excerpt: "A Canadian man was arrested this week after violating a court order that banned him from speaking publicly about his daughter’s gender transition....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "A Canadian man was arrested this week after violating a court order that banned him from speaking publicly about his daughter’s gender transition."
      "The man, whose identity is reportedly under a publication ban by a British Columbia Court of Appeals to protect his child, was found in contempt of court and arrested Tuesday for calling the teen, his daughter, which she is, and publicly referring to her with the pronouns “she” and “her,” according to The Post Millennial."
      "The teenager was born as a female and reportedly identifies as transgender and prefers the use of male pronouns."
      "The father reportedly began litigation against the teen’s mother after learning of the transition, and the matter was settled by the province’s highest court earlier this year, according to Global News. The parents are separated."
      "The high court ordered the dad to not stand in the way of the 15-year-old’s hormone therapy and to try and better understand gender dysphoria, the outlet reported. He was also told to stop speaking to the media about the case and warned that his public attempts to undermine his child’s wishes was a form of family violence, according to the article."
      "His daughter has identified as male since the age of 11, and changed her name at age 12 before pursuing hormone therapy with the support of his mother, a psychologist and an endocrinologist, according to Canadian law firm Torkin Manes."
      "“[The father’s] refusal to respect [the boy’s] decisions regarding his gender identity is troublesome,” Chief Justice Robert Bauman and Justice Barbara Fisher wrote in the January decision, according to Global News."
      "The father’s rejection of his son’s identity has caused the boy “significant pain” that has “resulted in a rupture of what both parties refer to as an otherwise loving parent-child relationship,” justices reportedly wrote."
      "This rupture is not in [the boy’s] best interests,” the decision said, according to the outlet. “He clearly wants and needs acceptance and support from his father.”"
      "The father confirmed his legal woes on an online fundraising campaign soliciting donations."
      "“The far left issued an arrest warrant on Thursday, March 04! I will be turning myself in on March 16!,” the man posted in a Go Get Funding page where he has raised more than $22,000 Canadian amid his legal fight."
      "“I am fighting the far left based on a civil disobedience defense! I am now back in court for a five day criminal trial that will last at least five days . . . From April 12-16. That trial that could land me in jail for up to five years for speaking truth about state sponsored child abuse. FYI . . . I am blocked from sharing any videos at this time that oppose the sterilization of children!,” the caption continued."
      "The dad, and his arrest, have been lauded by some ideologues who say gender is not a biological or social construct."
      "“They’ve created a delusion, and they’re forcing parents to live in this delusion,” the father previously said, according to The Post Millennial."
      "“What happens when the bubble explodes and the delusion ends? … She can never go back to being a girl in the healthy body she should have had … These kids don’t understand. What kind of 13-year-old is thinking about having a family and kids?”",
    ],
  },
  {
    slug: "norwegian-feminist-faces-three-years-in-prison-for-hateful-tweets-allegedly-criticising-transgenderism",
    title: "Norwegian feminist faces three years in prison for 'hateful' tweets (for allegedly) criticising transgenderism",
    excerpt: "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect you...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect young lesbians’ interests is.  How does it help young lesbians when males claim to be lesbian, too?” Ellingsen wrote in her offending remarks."
      "A feminist in Norway is facing up to three years in prison for stating that biological men cannot be lesbians."
      "Her remarks come as more and more members of the LGBTQI+ community insist that biological men who identify as women and are attracted to biological women are in fact “lesbians.”"
      "Christina Ellingsen, who leads Women’s Declaration International (WDI), an international feminist organisation, faces police investigation after she allegedly stated in a tweet that males cannot be lesbians."
      "She made her remarks in response to the trans activist group Foreningen FRI."
      "“Why [does] FRI teach young people that males can be lesbians? Isn’t that conversion therapy?” Ellingsen allegedly wrote, Reduxx reported."
      "Ellingsen tweeted in response to a trans activist and FRI advisor, Christine Jentoft, who identifies as a lesbian despite being biologically male."
      "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect young lesbians’ interests is. How does it help young lesbians when males claim to be lesbian, too?” Ellingsen wrote in her offending remarks."
      "According to WDI, Ellingsen now faces an investigation over her tweets."
      "“A Woman is an adult human female. It is physically impossible to change sex. Gender identity refers to a persons subjective convictions, and to persecute women for refusing to accept subjective convictions they do not agree to, is a human rights violation,” wrote WDI in a statement. “Women must have the right to correctly sex men, to refuse men's subjective convictions and to freely express what they see with their own eyes without facing criminal persecution.”"
      "“‘Gender identity’ is per definition a specific kind of subjective belief. The introduction of subjective beliefs in criminal law, is essentially a reintroduction of blasphemy-laws.  Additionally, this kind of blasphemy-laws are especially used against women,” WDI continued. “In Norway, men who *claim* to be girls, women, mothers or lesbian, are protected against hate-crimes. But actual girls, women, mothers and lesbians have no such protection. The only \"women\" who are protected against hate crimes in Norway, are those who in fact are men.”"
      "In addition to the possible legal action against her, Amnesty International joined in the criticism of Ellingsen, accusing her of harassing Jentoft by identifying the trans activist as a man on national television, Reduxx reported."
      "&quot;Gender identity&quot; is per definition a specific kind of subjective belief. The introduction of subjective beliefs in criminal law, is essentially a reontroduction of blasphemy-laws.  Additionally, this kind of blasphemy-laws are especially used against women. pic.twitter.com/UsNui8ogis"
      "Under Norwegian law, Ellingsen could face a prison sentence of up to three years if she is found guilty of misgendering the transgender activist. In January 2021, Norway added gender identity to its list of protected groups under the country’s hate crime laws."
      "As detailed by Reclaim the Net, a Norwegian man was jailed for three weeks in 2021 and received a substantial fine after being found guilty of misgendering a person who identified as transgender on Facebook.  Ironically, it seems consequences, like a prison term, are still only for humans with a penis in Norway.",
    ],
  },
  {
    slug: "speechless-controlling-words-controlling-minds-by-michael-knowles",
    title: "Speechless: Controlling Words, Controlling Minds by Michael Knowles – Book Summary & review",
    excerpt: "Political commentator and media personality Michael Knowles has authored an examination of politically correct speech in his book Speechless: Controll...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Political commentator and media personality Michael Knowles has authored an examination of politically correct speech in his book Speechless: Controlling Words, Controlling Minds, from Regnery Publishing."
      "We use language to communicate not only what we perceive and believe, but also to describe reality. This is frequently at odds with politically correct speech, and politics has become a war of words. Knowles makes the point that “according to political correctness, words do not describe reality; they constitute it.”"
      "A book like Speechless couldn’t be more relevant. In an age when the term “birthing person” is used, Knowles points out that our first words, “mama” or “papa,” may be politically incorrect. With speech, people frequently yield out of politeness. Furthermore, in modern America, people remain silent out of fear. Truth is regarded as not only dangerous but as Knowles can confirm: stating facts can get you physically attacked."
      "Opponents of political correctness frequently poke fun at the absurdity in the latest politically correct phrase du jour or insist on the necessity of free speech. In Speechless, Knowles argues instead that this frequently misses the point: “we must not merely demand the right to speak; more importantly, we must have something to say.” It’s a potent point during a time when one not only can’t dissent with mainstream narratives, but even questioning is forbidden."
      "Speechless is a thoroughly researched work and the information presented is meticulously referenced. The book is rich with historical lore on political correctness and speech suppression as well as examples from current events. Knowles dismantled many of the enduring historical misconceptions relating to speech."
      "My biggest takeaway from Speechless by Michael Knowles is that political correctness is not and has never been about coherence. That’s not the purpose. Society cannot simultaneously embrace contradictory beliefs and viewpoints, but as Knowles illustrates, political correctness requires it. For your political correctness to be up to date, no belief can be fixed. Political correctness moves at too rapid a pace. Reality and political correctness are at odds with one another."
      "Speechless is not light reading however it is written quite eloquently.  Knowles’ command of the English language is masterful, much like his broadcasts. After such substantial reading, it’s fitting he should end with some of his unique and at times satirical humor.  The “Glossary of Jargon,” displays the trademark Knowlesian wit and provides some guidance on navigating politically correct terms."
      "Speechless is recommended for those curious minds who want to look beneath the surface of politically correct speech and censorship. Knowles’ book is the product of a sharp mind. You will see how the manipulation of words is effective and how they achieve goals with these devious methods."
      "“People who worry about microaggressions usually have never faced macroaggressions.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds"
      "“Under political correctness, saying the right thing supplants doing the right thing.” ―  Michael J. Knowles,   Speechless: Controlling Words, Controlling Minds"
      "“Boundaries must constrain free speech if only to protect speech, as in the case of laws against sedition or rules against the heckler’s veto. Tolerance cannot tolerate intolerance. And openness cannot leave itself open to closed-mindedness.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds"
      "“Until the Supreme Court’s landmark decision in Texas v. Johnson, which created or recognized, according to one’s point of view, the constitutional right to burn the American flag, the law could prohibit desecration of venerated objects. Now courts hold that the First Amendment protects flag-burning. And yet in 2019, an Iowa judge sentenced thirty-year-old Adolfo Martinez to fifteen years in prison for the “hate crime” of stealing and burning a rainbow flag, which symbolizes colorful sexual desires. So in fact, the government still outlaws desecration of venerated objects; it’s just that the objects of veneration are different.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds"
      "“Both leftist critiques of the ‘American dream’ and conservative defenses of social mobility, each based on its side’s cherished statistics, miss the more fundamental transformation: radicals have replaced the virtue of diligence with the sin of sloth in the pantheon of public values.” ―  Michael J. Knowles,   Speechless: Controlling Words, Controlling Minds"
      "“Psychology Today admitted in 2019 that ‘people with conservative political attitudes tend to have better health than their liberal counterparts because the former place greater value on personal responsibility.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds"
      "“The gospel of radical leftism- call it any name you like- trades the virtue of charity for the sin of envy. According to the radicals’ new standard, it is greedy to keep one’s own property but charitable to covet and steal the possessions of another, a perfect inversion of the old standards of justice…. The greedy want something for themselves; the envious merely want others not to have it.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
    ],
  },
  {
    slug: "survivorship-bias",
    title: "Survivorship Bias",
    excerpt: "During World War II, fighter planes would come back from battle with bullet holes. The Allies initially sought to strengthen the most commonly damaged...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "During World War II, fighter planes would come back from battle with bullet holes. The Allies initially sought to strengthen the most commonly damaged parts of the planes to increase combat survivability."
      "A mathematician, Abraham Wald, pointed out that perhaps the reason certain areas of the planes weren’t covered in bullet holes was that planes that were shot in certain critical areas did not return. This insight led to the armour being reinforced on the parts of returning planes where there were no bullet holes.  This wisdom was also beneficially applied to the Skyraider during the Korean War."
      "This shows that sometimes the missing data may be more meaningful than the available data.  This phenomena is now known as \"survivorship bias\".  Is not only true for matters of aircraft design and defence during war time.  We shouldn't only assess the evidence available to us but consider the evidence we don't have, because it might have been shot down.",
    ],
  },
  {
    slug: "my-account-of-events-part-2",
    title: "My Account Of Events:  Part 2",
    excerpt: "I'm passionate about helping people out of crisis situations. When I was young I went through hell and noone was there for me. I had a few well intent...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "I'm passionate about helping people out of crisis situations. When I was young I went through hell and noone was there for me. I had a few well intentioned people try and help. The few times I trusted people I'd tell them what was going on and their eyes would glaze over. They simply didn't have the capability to deal with it. If you mix religion, mental health, violence and other criminal behaviour no one wants to touch it. No one wants to even hear about it."
      "Religious leaders will teach about difficult topics and pray for you from a distance. But they don’t actually help you. The police help with simple black & white breaches of the law. But that’s it (if you’re lucky). Lawyers help themselves make money and occasionally clients with legal problems. Good psychologists are good. But they don’t help you on the field. A social worker, case manager, coach or chaplain is perhaps the role that exists to effectively help people in these situations. If you’re very lucky."
      "I spent many years doing therapy and worked hard on my self. I addressed and overcame my own problems.  I still see a psychologist and have other supporters around me as needed.  I started a charity helping people in severe concurrent crisis situations. I did a coaching course. So I refer to myself as a “crisis coach”. I coach people out of crisis and towards their purpose."
      "In my twenties, I worked for a few organisations helping people out of crisis situations. I learned from some great people. I was in some great teams who helped people develop new life skills, make better choices and depart crisis sustainably. We worked with the worst in Qld."
      "I considered it an honour to serve my community this way. I also did it after hours on my own time as a hobby."
      "I often risked my life to save people. Especially a lot of near suicide attempts. I’ve rescued people from burning alive 3x, hanging from a noose, drowning, jumping off a cliff, other various attempts. Many many deliberate, & accidental, car accidents."
      "I’ve been held up at knife point and other weapons more times than I can remember. One time I was taken hostage and was in a high speed chase."
      "Every time I was able to save my client from dying & protect the community.  I’ve never had a client die while working with them.  Every suicide I successfully intervened and encouraged them to choose life.  Every time I was attacked with a knife no blood was ever spilled. Unrepentant crims went back to prison. Those who were willing to change went on and improved their lives."
      "If you’d like to support me with my legal and other costs it’d be appreciated. You can contribute here.#adamsaccount",
    ],
  },
  {
    slug: "my-account-of-events-part-3",
    title: "My Account Of Events:  Part 3",
    excerpt: "One night a woman set fire to the facility we were in, to suicide by fire. She was under house arrest for arson. She was a giant woman. Taller than me...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "One night a woman set fire to the facility we were in, to suicide by fire. She was under house arrest for arson. She was a giant woman. Taller than me and twice my size. The facility was set up like a minimum security prison. We looked after a couple of murderers there who had significant disabilities and intellectual impairment. There were magnetic locks on all drawers, windows and doors. Even the TV was locked behind a Perspex screen box."
      "The police had taken her out for an appointment that day and returned her in the evening. She was asked if she had a lighter. She said no."
      "I could see her section from the office but there were 5 gates and doors between us and her. The fire alarm rang. It’s pretty common for these clients to sneak in cigarettes. Nonetheless, I went in as quickly as possible. She had lit the bed on fire and one wall was already burning. I ran back and got an extinguisher. I emptied it on the blaze. I ran back and got the second extinguisher by the time I returned the fire was triple the size. I emptied the 2nd extinguisher pointlessly on the flames."
      "I yelled at her to get out but she sat down in the fire. I realised then that she didn’t want to get away. She wanted to burn."
      "The smoke was pouring out of the flames. Thick black smoke from the chest up."
      "In my mind, I thought I could get her out if I grabbed a blanket, punched her in the head and knocked her out, rolled her onto the blanket and carried her out like Santa Claus."
      "The other staff had already run away from the facility to get away from the fire. If I left her, she was gonna be trapped because of the magnetic locks on all the doors and gates. She would’ve died a really horrific death."
      "I realised in that moment she had been so abused that she was already dead inside. Me yelling at her was just reinforcing her reason to burn. I thought a bit of love might get her out alive."
      "I sat down next to her. It was getting really hot in there. Fortunately sitting down I was underneath the smoke. If you've ever been in a fire you'd know what I mean."
      "She looked at me like I was an idiot. I asked her something unprofound like, “how are you?” Her incredulity and hatred turned into tears. She understood that I was there for her. I wasn’t going to make her do anything. She started sharing her story. I suggested we move outside to continue talking somewhere cooler. She agreed and we walked away from the flames. No one got hurt."
      "I learned a lot from that experience."
      "I’m also passionate about helping people in domestic violence situations. I’ve supported many victims and perpetrators of domestic violence. Prob over 100. My family went through the most extreme experiences of domestic violence. No one was there to provide genuine honest unbiased solutions. I know better than anyone that innocent people die when good people do nothing."
      "If you’d like to support me with my legal and other costs it’d be appreciated. You can contribute here.#adamsaccount",
    ],
  },
  {
    slug: "in-the-media-coffee-as-a-cure-for-community",
    title: "In The Media:  Coffee As A Cure For Community",
    excerpt: "Link to the original article online 25 November 2017....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Link to the original article online 25 November 2017."
      "https://www.couriermail.com.au/news/queensland/qweekend/coffee-served-with-a-slice-of-community/news-story/1dcac8b8584c0ddaf16ebcd94c88331d"
      "Cup From Above (a social enterprise that trains people to work in hospitality) grew out of a business deal that went sour. I’d moved back to Brisbane from the Sunshine Coast when an old school friend asked me to be a shareholder in a cafe; it didn’t work out and I was left with the cafe in Aspley (in Brisbane’s north). It was in the worst ­situation possible – it was in debt, running at a loss, the overdraft was maxed out and we had nothing."
      "Becoming a social enterprise wasn’t a deliberate decision. I just thought, I’ll ­operate a business and try to help people along the way. The homeless and hungry were coming in; we had food, so we’d just feed them. It’s an extension of my faith. I’m not a member of any organised ­religion, more an organic Christian."
      "I follow the basic teachings of Jesus, ­caring for those who are disadvantaged. That was the heart of it, to try to run a ­profitable business that ­empowered people in the community."
      "We started training the homeless, drug addicts, former criminals to be baristas and to work in hospitality. They would volunteer to learn and work in the cafe, to get ­experience, till they started getting jobs elsewhere. Cup From Above is five years old now. We recently moved into Fortitude Valley and linked up with a registered training organisation so our trainees earn recognised qualifications."
      "The downside of training your ­people to have ­exceptional skills and stand out when going for a job is you ­become so fussy about your coffee, and it’s hard to go anywhere to drink stuff that doesn’t taste as good."
      "We often joke we’re changing the world one cup at a time. A lot of people ask us, why open a cafe? The psychology of ­community building talks about the ­concept of third place, which is the social surroundings separate from home and work. That third place used to be the church 100 years ago. Where can people meet now to have a conversation and build healthy relationships? The coffee shop. Coffee is the symbol for community."
      "I grew up in Aspley, in a messy family I’m not really close to. After school I ­studied jazz piano and guitar at the Jazz ­Musical ­Institute (at inner-north Bowen Hills), but I needed a job as well and eventually got one in the aged care sector."
      "That was my introduction to social work, in between (music) gigging. During 10 years on the ­ Sunshine Coast I worked with people with disabil­ities and specialised in those with advanced difficult behaviours. I worked with murderers, ­rapists, the worst of the worst, helping them reintegrate into the community after being incarcer­ated."
      "So much can be accounted for by bad families and unhealthy environments, being taught how to be violent, but these people can be loved back to life."
      "Disconnection is the disease and community is the cure. That’s my one-liner. Coffee facilitates community. We’ve seen some beautiful results. Guys who have been taking hard drugs for 10-plus years and had several incarcerations who are now reconnecting with family, getting off drugs, getting jobs; these solutions grew out of healthy relationships. It’s what ­people are craving."
      "As a culture I think we’re avoiding the one thing that would cure so much, and that’s becoming vulnerable and connecting with someone who is really hurting. That’s hard. You can’t connect with 1000 people but you can connect with one or two or three. Be humble enough to reduce those numbers and love a few ­people who are ­difficult to love."
      "I don’t have a partner or pet as I’m too busy with Cup From Above, but I love going to the beach, climbing mountains, ­reconnecting with nature. Every couple of weeks some friends and I will go to the Glass House Mountains, where it’s so quiet and peaceful."
      "I also love reading anything I can get my hands on, particularly bio­graphies. Long Walk to Freedom by Nelson Mandela is probably one of my favourites. I love ­reading about the great things people have done and learning those lessons.",
    ],
  },
  {
    slug: "in-the-media-aspleys-cup-from-above-cafe-to-close-doors-this-month",
    title: "In The Media:  Aspley’s Cup From Above Cafe to close doors this month",
    excerpt: "A social enterprise made the shock announcement it would close its doors on April 29 less than a year after it spent up to $30,000 on upgrades to its ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "A social enterprise made the shock announcement it would close its doors on April 29 less than a year after it spent up to $30,000 on upgrades to its facilities."
      "https://www.couriermail.com.au/questnews/north/aspleys-cup-from-above-cafe-to-close-doors-this-month/news-story/cdc1d53c8a5692d9a4c6e19744554cd8"
      "ASPLEY’S Cup From Above cafe will close its doors in just two weeks after a shock announcement on Facebook earlier this month."
      "The social enterprise helps everyone from homeless pregnant women to refugees and people struggling with drug addiction."
      "It will cease operating on April 29 after failing to reach a new lease agreement, organisation founder Adam James confirmed."
      "“It’s a bit painful but I think it will be a blessing in the end,” Mr James said."
      "Mr James said the organisation spent up to $30,000 on upgrades to the kitchen only last September when it expected to stay at the site for a further six years."
      "But now he was on the hunt for a new site somewhere between the CBD and North Lakes that better suited the cafe’s new direction."
      "Mr James planned to operate two distinct arms of Cup From Above. One would be a for-profit cafe with a greatly reduced role in helping vulnerable people learn job skills. The other arm would be a dedicated charity division, still based in Aspley."
      "“Profits (from the new cafe) will roll back into the charity arm,” he said."
      "The Aspley cafe turned a profit only one month out of the past 60, Mr James said."
      "Mr James encouraged Cup From Above supporters to drop in before the last day of trading.",
    ],
  },
  {
    slug: "in-the-media-rallying-around-bella",
    title: "In The Media:  Rallying Around Bella",
    excerpt: "From sometime in 2012...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "From sometime in 2012",
    ],
  },
  {
    slug: "suspended-coffee-movement-gains-supporters-around-australia",
    title: "Suspended coffee movement gains supporters around Australia",
    excerpt: "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee-movement-gains-supporters-around-australia/5505160...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee-movement-gains-supporters-around-australia/5505160"
      "The 'suspended coffee' movement, which encourages cafe patrons to buy coffees and food for future customers who are in need, is gaining popularity worldwide. Kate Walton and Maria Tickle investigate the progress of the movement in Australia and meet some of its supporters."
      "This article contains external content that failed to load. It may have been removed or is no longer available."
      "When you come across a homeless person asking for money on the street do you sometimes wish you could give more than just coins? Maybe a meal and a hot drink?"
      "A grassroots charitable scheme spreading rapidly through cafes around the world allows you to do just that."
      "The ‘suspended coffee’ movement encourages patrons to buy two coffees, leaving one ‘in suspense’ for someone in need. It's a new incarnation of an old trend that is thought to have started more than a century ago in the working class cafes of Naples."
      "It’s built the most unlikely friendships and connections; we have millionaires sitting next to people who are borderline homeless, we have  responsible lawyers sitting next to people really struggling with addiction.The story goes that when a person experienced good luck they would buy two coffees, one for themselves, and one for someone in need. After the Second World War the tradition declined but since the global financial crisis of 2007/8 there's been a resurgence and the initiative has spread to the cafes of Europe, US, Canada, South America and Australia."
      "Cup from Above, a cafe in the Brisbane suburb of Aspley, was one of the first Australian businesses to adopt the Italian tradition and recently extended the scheme to meals as well."
      "‘If they’re familiar with the system they just come in, grab a token and ask for what they like, just as though they were putting down money,’ says Adam Cocks, the cafe's founder and a former social worker."
      "He says social media plays an integral role in the promotion of the suspended coffee movement."
      "‘On the weekend we had quite a few tokens, on Monday we got inundated with people in need of a hot drink and by Monday lunchtime we had zero on the wall. We put a call out to the community to say the rack’s empty and within 24 hours we were overloaded again.'"
      "Cocks' call out led to around 80 food and drink donations. Like many cafes, Cup from Above has a system where suspended coffee and food tokens can be bought at the cafe or online, which means you could donate a meal to anyone, anywhere, any time."
      "‘It’s built the most unlikely friendships and connections; we have millionaires sitting next to people who are borderline homeless, we have  responsible lawyers sitting next to people really struggling with addiction,’ he says."
      "Shirley James-Sharry runs a Facebook page that promotes suspended coffee in Queensland. She says different cafes have different systems. While some use tokens, others tally the coffees on a chalkboard. She prefers the token system, as the physical act of hanging the token on the wall is part of the process of giving."
      "‘Some include your names, I like the anonymousness too, because it’s just that idea that someone that you don’t even know wants you to enjoy something. So there’s that real connectedness and to me it’s kindness and inclusion,’ she says.",
    ],
  },
  {
    slug: "caffeine-kindness-on-abc-radio-national",
    title: "Caffeine Kindness on ABC Radio National",
    excerpt: "Originally Broadcast Sat 31 May 2014 at 9:48am...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Originally Broadcast Sat 31 May 2014 at 9:48am"
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee/5483134"
      "They say that charity begins at home, but now it can start at your local cafe. The growing international trend of buying two coffees and leaving one 'in suspense' is a new incarnation of an old trend that is thought to have started more than a century ago in the working class cafes of Naples in Italy."
      "The story goes that when a person experienced good luck they would buy two coffees, one for themselves, and one for someone in need. After the Second World War the tradition declined but since the GFC there's been a resurgence and it's spread to the cafes of Europe, US, Canada, South America and here in Australia."
      "We visit a couple of Brisbane cafes that have taken the suspended coffee movement to heart.",
    ],
  },
  {
    slug: "the-one-where-i-cut-a-worm-out-of-my-chest",
    title: "The One Where I Cut A Worm Out Of My Chest",
    excerpt: "When I was about 20 years old I was working on a farm just outside the township of Shepparton in Northern Victoria.  I was working hard and living in ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "When I was about 20 years old I was working on a farm just outside the township of Shepparton in Northern Victoria.  I was working hard and living in a tent at the edge of an orchard of pears perched beside a rusted out old tractor.  The days were long.  When you’re picking pears you have to start before the sun which meant getting on the tractor at 5am."
      "I noticed a sore had developed on my chest but it didn’t become a problem until the third day.  I began to work but it was just too painful.  I went over to the farmer and told him.  Mark was 5 foot nothing but compensated for his lack of height with volume and foul language.  He was used to telling people what to do and they did it.  He advised me in colourful detail that I was very lazy and said to get back to work.  I showed him the sore on my chest and it silenced him immediately.  He just started nodding and agreed that I should go to the doctor.  I was living in a tent with no proper bathroom or mirror.  So Mark’s reaction was the first real cause for my concern."
      "I went to the doctor, he had a look and said he wanted to operate on it.  I asked how much it was gonna cost and he explained a few hundred dollars.  A few hundred dollars which I didn’t have.  I know now that I could have just driven on to the hospital and they probably would’ve just done it for free.  But noone told me that and I had no money.  I had to work.  So the doc gives me some antibiotics.  I asked him for some tips.  Cause this was before internet was everywhere.  You can probably learn how to do surgery on youtube now.  I headed back home to my tent on the farm to operate."
      "My bathroom was a temporary builders portaloo with a tiny cracked mirror and a miniature hand basin.  I had some scissors, paper towels, a knife and some rum.  I disinfected everything best as possible and prepared my chest for the blade.  Now squinting into mirror I could see it was the size of half a mango on my chest.  Something like a boil had formed on the bottom of it.  That seemed like the best entry point so I lanced it with the blade.  Outrageous amounts of pus flowed like lava from the incision.  At the start I didn’t even have to touch it.  It flowed freely.  I gently massaged from up near my collar bone and more flowed out until it stopped.  Now I could tell there was more in there but something was blocking it.  I tilted my head straight down but the angle wasn’t enough to see clearly.  I leaned in close to the mirror in an attempt to see more clearly and to my horror I could see a small white... something...  I pinched at it.  Then pulled.  I could feel it sliding down under my skin from up near my collar bone.  I paused in terror.  I was having trouble believing what was happening.  I didn’t think this was even possible.  I considered all my options and resolved that, whatever this was, I had to get it out of me.  No-one else was gonna do it for me.  I stood back up and slowly continued to pull this parasite from my chest.  I don’t wanna ruin pasta for you but it looked like fettuccine.  I got what I thought was all of it out. I disinfected and cleaned everything.  Then popped the Flucloxacillin the doctor had prescribed and passed out.  The next day I felt strong as an ox.  I went and worked a full day and doubled my usual quota.  The antibiotics seemed to be working well and I felt great.  Until 2 weeks later it grew back."
      "I went back to the doctor and relayed what had happened.  He didn't inspire much confidence.  I remember wondering if he was a real doctor.  He was so short his feet barely touched the ground as he sat in his doctors chair.  I remember the white in his eyes were intensely contrasted and against his dark skin and furrowed brow as I told him what I did.  I finished and he slowly nodded and in thick accent queried, “so was it wrrrrigling??”.  I searched his face for humour yet found none."
      "He then says I need to tell my friend and ask him to come here.  I wait and this guy rocks up who looks like Bill Gates cousin.  He’s about 6 foot 2 all elbows and knees with a pair of magnifying glasses on his face.  I tell the story yet again.  This doctor tells me, \"a branch has snapped off in my chest while I was working and my body \"cocooned\" it and healed over it.  Then I clarify with, \"yeh nah, that didn’t happen\" but he continued to argue with me.  I was starting to think if this is the best help I’m gonna get then I’m toast.  I say, “well then shall we cut it out and have a look see hey?”.  They both said they didn't want to do it.  So I ask them to hook me up with some tools so I can do it DIY again."
      "They hand me one of those operating trays with all those clean little torture devices and there I am operating on myself again.  I cut a bit more of this worm thing out and the short doctor opens up a plastic medical container and I dropped it in.  The plan was to send it to a university in Melbourne to get it analysed.  I get another prescription of antibiotics and hope to God I had got the last of it out.  The next day I feel great.  A few days later I moved onto another orchard to harvest golden delicious apples.  On this farm, I had a run down old cottage to stay in.  The first night I lay down on the bed and thought that the hum of the electricity was unusually loud.  But as I lay there in the dark I realised the building had never had electricity.  The hum was, in fact, a hive of bees nested in the wall which was confirmed after a few bees landed on me through the night.  I ended up sleeping in my car."
      "Sure enough, 2 weeks later it started growing back again.  The results came back from the university “inconclusive”.  I had some money together by this time and started to head back to Brisbane.  It was excruciating having the seatbelt press over the wound.  Every bump would send a wave of poison through my blood.  A friend was in Sydney at the time I was driving through.  He let me stay there the night.  I thought this is my opportunity to finally get this thing once and for all.  I took my shirt off and my friend asks me if I had been shot.  He wasn't joking.  I explained to him what had happened so far.  I got a butter knife and slipped it in. Then I got another knife and scraped the rest of whatever the thing was out.  I slept on an actual bed that night for the first time in a long time."
      "The next day I drove to Brisbane.  After returning home I went to the hospital and spoke to a doctor there.  She examined it and said she thought it was staphylococcus.  It had started to heal over and you couldn't really tell anymore.  So we’ll never know for sure what it really was...",
    ],
  },
  {
    slug: "music-connects",
    title: "Music, Connection, Old Love & Bob Marley",
    excerpt: "Today I went into the city to explore and capture some images and develop some ideas about connection and community.  I sought for photos to illustrat...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Today I went into the city to explore and capture some images and develop some ideas about connection and community.  I sought for photos to illustrate my upcoming Tedx talk/book “Community is the Cure; disconnection is the disease\"."
      "I walked around and to be honest I was so lost in thought listening to Bob Marley that not so many great photos were taken.  \"One Love! One Heart! Let's get together and feel all right\"... his lyrics constantly pound out a message of connection to his congregation of emancipated sojourners who had triumphed against racial injustice but were still facing overcoming a planetary divide over mostly mere skin colour."
      "I came across an aboriginal man sleeping under a blanket in a public park.  Obviously homeless and classically disconnected from what we would consider a full and healthy life.  Or maybe he'd just had a fight with his wife and took up Bob Marley's sagely advice and thought \"no woman, no cry\" and just thought he'd keep the peace and have a nap in the park.  Probably not but maybe my assumption was prejudiced.  As I took the photo I noticed the well dressed couple to his left.  Sitting in an astoundingly beautiful park immersed in all the glorious warm sunshine Brisbane's winter days have offer and I noticed they didn't talk once.  They were seated together, the sun is shining, but unanimously, independently, disconnectedly, autonomously and vicariously seeking a transcendental virtual high from beyond their smart phones.  Maybe they were more disconnected than the homeless man who lay mere metres away."
      "Connection is what we all crave.  Connection with God, the universe, our friends, our lovers, our colleagues, our comrades, our brothers, our other half, our planet, our environment, our animals.  It drives every part of us and fuels our greatest endeavours, our most noble long lasting marriages.  And our craving for connection misplaced and misguided is sufficient cause for our worst choices.  I've found that even great people, connected the wrong way or the wrong time, simply risks bringing about a more painful disconnection, both within and without.  You see even connection is painful.  It hurts to forgive, and it hurts to be patient, it hurts to be overly gracious but nothing great was ever built painlessly.  We use the word passion often to refer to a sexually driven explosive encounter.  But passion comes from the latin word \"passio\" which literally meant \"to suffer\".   Nothing more passionate than elderly couples (that's a dangerous sentence but you know what I mean).  Because you know that old love was suffered and fought for.  The truth is, everyone is going to hurt you.  You just got to find the ones worth suffering for.  It's that rich selfless old love that anchors our communities.  Out of those wells of wisdom there's a surplus we can draw on to love on difficult homeless people, drug addicts, the mentally ill.  Maybe it also works the other way round?  Maybe by loving difficult people, the ones we choose to journey life with become easier to love?  I don't know."
      "I stumbled across Bryn who was busking on his keyboard near Central Station.  We got chatting and had a bit of a jam.  Then a man, who could've passed for being homeless apart from the valuable luggage he carried, turned out he was a Romanian cellist backpacking across Australia.  He literally got off the train into Brisbane city for the first time and we were the first people he met.  Well I couldn't turn down the opportunity to challenge my new friend to a musical duel.  Man this cellist could play.  I had just been thinking how music brings people together.  \"True love that now exist is the love I can't resist, So jam by my side.  We're Jammin' I wanna jam with you\".  I think Bob is talking about music?... but it might be... let's assume it's music.  He drops this line in that song \"We all defend the right; Jah – Jah children must unite\".  Jah is an abbreviation of Yahweh.  I think Bob believed we are all children of the same God, black and white, rich and poor and he used music as his pulpit.  I'm not the type to go and roll a joint now but I have gleaned some wisdom about community and connection from his sermons.  Here's a clip of our little jam session..."
      "We only shared a few words before launching into this debate of melodies.  Music is an international language.  If you've studied the language then you're equipped to talk to anyone on the planet who also knows it."
      "I have an affinity for jazz.  I've studied it and I can play a bit but I've since devoted my hours to other endeavours and can't really swing like I want to.  For years I've questioned my affection for the genre and there are a few answers which I won't go into on this blog post."
      "You see music is all about rhythm and melody.  I mentioned before that there's only one international language for music.  Which is true.  But there are thousands of genres of music right.  I guess like dialects.  They have nuances and variations that they value that defines the genre.  For example 80's rock valued loud egotistical guitar solos.  Jazz values the use of dissonant harmonies that are placed together intentionally, thoughtfully and arrogantly creating something far more exquisitely beautiful than any genre that segregates those combinations of tones."
      "You see life is messy.  Loving people who are different is uncomfortable.  It's easy to just separate ourselves from them.  Walk on the other side of the street, pretend we didn't see them or even just neglect to proactively smile.  We can sit back and allow our governments to make things simple and segregated.  But when we do that we take the jazz out of life.  Life is magnificently dissonant and if we choose to acknowledge and embrace that with our hearts and arms wide open we both offer and receive redemption.",
    ],
  },
  {
    slug: "my-account-of-events-part-5",
    title: "My Account Of Events:  Part 5",
    excerpt: "April 2019, a school chaplain from SU QLD referred \"someone in need\" to my charity.  The woman was stated to be a victim of DV and facing homelessness...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "April 2019, a school chaplain from SU QLD referred \"someone in need\" to my charity.  The woman was stated to be a victim of DV and facing homelessness.  We provided immediate support by way of money for rent, food & furniture.  She explained to us that she had a lot of debt and had been selling herself to cover living costs.  We offered her an honest job as a cleaner and paid her wages according to Fairwork Australia."
      "She explained to us that she had over $50,000 on credit card debts and consequently had to make a minimum of $700 per week just to cover all the interest payments and basic living costs. She was married to an Australian man in the middle of nowhere in the outback. She had met him online and moved to Australia to marry him. She explained that not long after they were married he became violent and had to leave the marriage. She then moved onto another relationship and that relationship was also violent. The daughter was with her first marriage to a man in the United States. She said he was also angry and violent. She said he had abandoned them when he learned that the daughter had a disability. She described him as a \"loser\"."
      "She didn't have a car. While she was engaged with our services, her daughter wasn't allowed to attend school because of issues with their Visas. This meant for her to go to work, her daughter had to attend. We specifically sought after cleaning jobs that were flexible and with clients who were understanding and would allow her daughter to be there. Not only that but we had to drive both her and the daughter, and the other staff, and the equipment to each job. Fortunately, we were able to secure several bond cleans which met all these criteria."
      "She asked for legal support to help her obtain Permanent Residency status here in Australia. She explained that because she was divorcing her Australian husband she was at risk of being deported back to the U.S.  Her daughter had been ill & they were not eligible for medicare as they were now on a Bridging Visa.  Her daughter also has a disability and required medical support. She had already accrued thousands of dollars in debt from various hospitals around Australia.  I spoke to a friend of mine who is a great lawyer.  He agreed to do what he could to help her get her visa.  I relayed this to her and asked her for all her documents to give to the lawyer to assist with her immigration application."
      "Around the 14/4/19, we had a conversation. One of the lawyers had raised the possibility of a Criminal Justice Visa and asked if there were any current charges pertaining to the domestic violence. If there were charges pending against one of her partners that she was allegedly abused by then she may be eligible. She did not know about the Criminal Justice Visa. She said that no charges were made against anyone despite her contacting police many times in an attempt to charge them."
      "I relayed this good news to her and met with her to collect the supporting documents. I asked to meet with her at a cafe to collect documents (instead of in her home). We had to go through the documents so I imagined it would be thirty minutes to an hour. I was very clearly not asking her on a personal romantic date. The purpose of the meeting was to collect the documents, review them and assist with compiling what was actually necessary for the lawyer. She stated she did not want to meet with me at a cafe. I said \"that's fine\", attempting to address what I perceived to be the awkward subtext and indicate this wasn't social but professional. However, if she wanted me to collect the documents then we would have to meet."
      "She seemed to understand but then insisted I just collect them from her home and go through them there. For the sake of expediency and lack of reasonable alternatives I agreed. Her daughter was present the entire time but no other adults were present. What's ridiculous about all this is that no accusations have been made about me being alone with her in her home. In my mind at the time, this is what I was most worried about."
      "Now, upon receiving the documents it was apparent she was lying about many details of her story. It's actually fairly normal for people in crisis to lie about their situation. It's so frustrating as a support worker. It seems the extremity and distress of their crisis situations leads them to disregard their higher virtues to most swiftly get back to a semblance of safety. These lies might look like stating that they would \"never take drugs\" but then not disclosing that they're smoking marijuana every day. Or saying they \"don't have a criminal history\" and then it turns out they got charged for shoplifting several times when they were younger. This sort of thing is common."
      "The real issue is when someone you're supporting is lying to you about the entire situation and effectively using you to achieve some ulterior or wicked motive. I've come across this several times over the years and we developed these organisational principles to help guide our responses when coming across these extremely complex cases."
      "The documents she gave us revealed that she was here in Australia with her daughter illegally.  I calmly questioned her about the discrepancies in her story in contrast with the documents. At that point, I still thought she might have been a legitimate victim but was embarrassed about the stupid decisions she'd made. One court document revealed that the biological father of the daughter had taken her to court to have shared custody of the child. This was fitting the description of a \"loser who'd given up on his daughter because she had a disability\". Amongst the documents was information about her Australian husband and the \"domestic violence\" she had endured. The husband's police records were there too. There were 2 pages detailing all the crimes he'd committed. He was a dangerous violent criminal. His psych records showed that he's a diagnosed schizophrenic. Amongst the crimes were assaulting police officers, robbery, assault and more. What's more is that he, and his family, claimed that she had used him to come to Australia."
      "Then there was the issue with her parents. She told us they were abusive and she could never speak to them or return to the U.S. because of them. After one job she asked us to stop in to the post office because she had a parcel from the U.S. she was very excited to receive. When she collected she explained that it was filled with her favourite American candy. I asked who it was from. She said, \"her mom\". She explained her parents were very wealthy and had a big beautiful home but they were very strict and mean. She said they could send her money so that she wouldn't have to be poor but they chose not to because they wanted to control her. She said her mother had paid for open ended plane tickets for her and her daughter to return home but she wouldn't take them."
      "It seemed considering all this we weren't supporting someone who actually sincerely needed help. She was not facing imminent homelessness. She has a safe home in her country that she could choose to return to. However, she would have to co-parent with the father of her child and be a responsible adult. Instead, she was choosing to risk her daughter's life in a foreign country, with no medical insurance and prostituting herself to pay for rent."
      "I also found out that the chaplain who had referred her to us was continuing to support her. Only a week or so earlier she had been singing our praises. Then toward the end of April, she had gone cold on us. Out of professional respect, I called her up and explained the concerns we were facing and the evidence we had found against her. The chaplain seemed unwilling to discuss it and was quite vague on the phone. I thought she must have been fed the same story \"H\" had told others."
      "There are several issues here though. A woman has brought a child to Australia illegally. It's effectively a case of child stealing/abduction. The child has complex medical needs and has no medical insurance or cover whatsoever. The mother has had the child around violent and dangerous individuals, not been able to adequately feed the child or care for her responsibly. But the chaplain was continuing to support her. In my mind and in my experience working in this field, these factors compelled me to report her actions to the authorities."
      "I contacted the Chaplain's manager at SU Qld who I personally know from working together supporting other individuals in complex situations in the community. I requested a meeting to sit down with the chaplain and ideally the client too. I was hoping a plan could be worked through to discuss the concerns and work out a solution that is ultimately best for the child, that is legal, safe and fair. SU Qld management and the chaplain declined to have a meeting. In the subsequent weeks I heard the chaplain was relaying gossip that came from \"H\" to donors of Liberty. At that point, I sent the chaplain a stern email requesting she discontinue any further defamatory remarks.",
    ],
  },
  {
    slug: "green-tea-and-fat-loss",
    title: "Green Tea and Fat Loss: What's the Connection?",
    excerpt: "Let's have a yarn about green tea and how it's helped me shed a few kilos....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Let's have a yarn about green tea and how it's helped me shed a few kilos."
      "Green Tea and Fat Loss: What's the Connection?"
      "Green tea has been around for forever, and it's packed with goodies called catechins, especially one named epigallocatechin gallate (EGCG). These little rippers are believed to boost our metabolism and help burn fat. A study from way back in 1999 found that folks who had a tea rich in catechins saw a drop in body fat, suggesting green tea might give our fat-burning engines a nudge."
      "Another piece of research showed that green tea could increase energy expenditure and fat oxidation in healthy blokes, hinting at its potential to aid weight loss."
      "A more recent review in 2024 looked into green tea extract's effects on obesity. What did they find? Green tea extract might help tackle obesity by influencing various fat-related factors in our bodies."
      "A Few Things to Keep in Mind"
      "While green tea sounds like a top addition to our daily routine, it's not without its quirks. Here are some things to watch out for:"
      "Green tea could be a handy ally in our quest for better health and weight loss. But, like with all good things, moderation is key. Enjoy a few cups a day, keep an eye on how your body reacts, and remember that no single drink will do all the heavy lifting. Pair your green tea habit with a balanced diet and regular exercise, and you'll be on the right track."
      "Cheers to making healthier choices, one cuppa at a time!",
    ],
  },
  {
    slug: "whats-in-a-name-other-noteworthy-adam-james-es",
    title: "What's in a name? Other Noteworthy Adam James – es",
    excerpt: "It turns out the name Adam James is shared by several public figures across diverse fields. Here’s a look at some of the more prominent ones, what the...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "It turns out the name Adam James is shared by several public figures across diverse fields. Here’s a look at some of the more prominent ones, what they do, and links to learn more."
      "A British actor known for theatre, TV and film roles. He trained at the Guildhall School of Music and Drama and has appeared in productions such as Band of Brothers, Dr Foster, and more. Wikipedia+2IMDb+2Website/Profile: His IMDb page – IMDb – Adam James IMDbShort summary: Well-established actor with a range of credits in UK and US productions, theatre and screen."
      "An American football player who played at Texas Tech Red Raiders; his father is former NFL player and analyst Craig James. Texas Tech Red Raiders+2247Sports+2Website/Profile: Official roster page – TexasTech.com – Adam James Texas Tech Red RaidersShort summary: Former college football wide receiver/tight end, involved in high-profile team stories and media coverage."
      "An Australian recording artist blending Indigenous heritage, country, blues and jazz. He hails from Quandamooka Country (North Stradbroke Island) and has released several albums, while performing across Australia. adamjames.com.au+1Website/Profile: adamjames.com.au adamjames.com.au+1Short summary: A talented singer-songwriter whose music and cultural roots converge — offering a distinctive voice among artists."
      "He’s also the founder of Business Advice and The Upkeepers, initiatives focused on helping Australian businesses scale sustainably. Through his personal work at abjames.com, Adam shares insights on business, mindset, and modern marketing — blending strategy, creativity, and purpose to help people and brands grow.",
    ],
  },
  {
    slug: "caffeine-and-kindness-the-story-behind-the-suspended-coffee-movement-in-australia",
    title: "Caffeine and Kindness: The Story Behind the Suspended Coffee Movement in Australia",
    excerpt: "Originally broadcast on ABC Radio National’s “First Bite” with Adam James...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Originally broadcast on ABC Radio National’s “First Bite” with Adam James"
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee/5483134"
      "They say charity begins at home — but sometimes, it starts at your local café."
      "Across Australia, a quiet but powerful movement has been brewing — the suspended coffee. It’s a simple act of kindness: when you buy your morning coffee, you pay for an extra one and “suspend” it for someone in need. Later, that coffee can be claimed by anyone doing it tough — no questions asked, no forms to fill, just goodwill in its purest form."
      "The idea of suspended coffee (or caffè sospeso, as it’s known in Italian) began more than a century ago in the working-class cafés of Naples. When someone was blessed with good fortune, they would pay for two coffees — one for themselves and one for a stranger who couldn’t afford it."
      "It was a simple yet profound social ritual — a way to express gratitude and acknowledge that sometimes, luck and hardship are only a cup apart."
      "After World War II, the practice faded, but when the Global Financial Crisis hit in the late 2000s, it re-emerged. Across Europe, North America, South America and eventually in Australia, the suspended coffee movement returned as a gentle reminder that generosity still matters — even in difficult times."
      "In 2014, journalist Adam James explored this small but significant act of community in a feature for ABC Radio National’s “First Bite”. The segment, titled “Caffeine and Kindness,” took listeners inside Brisbane cafés that had embraced the idea of suspended coffees."
      "These cafés weren’t driven by marketing campaigns or corporate social responsibility targets. They were driven by empathy. Regulars would quietly pay for an extra coffee; café owners would mark it down and serve it later to someone who needed a moment of warmth — whether it was financial hardship, loneliness, or just a bad day."
      "As James noted, the suspended coffee wasn’t really about caffeine at all. It was about connection. It turned an ordinary café into a small but meaningful hub of human kindness."
      "For the person who receives it, that free cup of coffee might mean much more than a caffeine fix. It’s a reminder that they haven’t been forgotten — that community still exists, and that even a stranger’s kindness can make a rough day a little easier."
      "And for the person who gives, it’s a simple way to practice compassion in daily life — to act on the belief that kindness doesn’t need to be grand to be good."
      "A decade on from its broadcast, Caffeine and Kindness still resonates. The suspended coffee movement continues to percolate quietly across cafés in Australia, reminding us that the simplest gestures often have the most lasting impact."
      "In a fast-paced, contactless world, it’s comforting to know that something as small as a coffee can still bring people together — one cup, one act of kindness at a time."
      "Adam James is a storyteller, business consultant and juggler who explores the intersection of culture, community, and everyday kindness. His work has appeared on ABC Radio National, and through his platform ABJames.com, he continues to share stories that inspire compassion, curiosity, and human connection.",
    ],
  },
  {
    slug: "community-connection-over-coffee-local-police-and-residents-break-the-ice",
    title: "Community Connection Over Coffee: Local Police and Residents Break the Ice",
    excerpt: "In March 2016, residents in Brisbane North were invited to join a unique outreach session by the Queensland Police Service that paired a casual coffee...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "In March 2016, residents in Brisbane North were invited to join a unique outreach session by the Queensland Police Service that paired a casual coffee setting with meaningful conversation. The initiative (originally referred to as a “local police expresso” session) provided a relaxed opportunity for community members to meet officers, ask questions and build trust."
      "The appeal of such initiatives lies in their informal framing — people meeting face-to-face, over a cup of coffee, removing uniform and procedural distance. The event underscored how law-enforcement agencies can engage proactively with the public, beyond reactionary policing.",
    ],
  },
  {
    slug: "a-vengeful-act-remembering-the-maroochydore-arson-case",
    title: "Remembering one of the Sunny Coast Arson Cases",
    excerpt: "This event happened in October 2010.  It was one of many arson events I had while doing this work....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "This event happened in October 2010.  It was one of many arson events I had while doing this work."
      "I had asked the young man to go to bed the night before."
      "The police officers told me he said that he intended to burn me alive while I slept.  He didn't receive any consequences as per usual."
      "If I didn't put the fire out the whole house would've burned.  I put the fire out best I could and went through each room to make sure he wasn't inside.  The fire had jumped from the stove into the oily rangehood and had started spread inside the walls and ceiling cavities.  I grabbed the fire extinguisher to put it out completely... but he had emptied the fire extinguisher outside and replaced it.  It was empty.After 19 years doing this work, this is what I think.  There is this idea you should be either 1.  Kind & Liberal.  OR 2.  Tough & Conservative.  It's neither and both.  If someone does something really bad, like try to burn them alive in their sleep.  The consequences should be proportionate.  This young man is a danger to society.  However, there should be a liberal opportunity to earn freedom.  If he behaves in a maximum security prison, then he can go to a minimum security farming prison, if he behaves there, then he can get day passes.  If he doesn't improve his behaviour, he should stay locked up and serve a full sentence like any other arsonist."
      "I continued working with this young man for a few more months to make sure he was in a new safer house with better supervision."
      "Link to the original article",
    ],
  },
  {
    slug: "actor-adam-james-a-life-in-performance",
    title: "Actor Adam James: A Life in Performance",
    excerpt: "Source: Grokipedia – Adam James (actor)...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "Source: Grokipedia – Adam James (actor)"
      "Adam James (born 9 September 1972, London) is a celebrated English actor whose work spans television, film, and theatre. A Guildhall School of Music and Drama graduate, and godson of Jon Pertwee, James has earned acclaim for his adaptability across genres—from Doctor Foster and Vigil to the Broadway stage in King Charles III."
      "The son of actress Polly James, Adam grew up surrounded by creativity. His formal training at Guildhall placed him among peers like Dominic West and Daniel Evans, shaping a foundation for his nuanced, disciplined approach to acting."
      "Across decades of work, James’ credits include Band of Brothers, Doctor Who, Ashes to Ashes, and Belgravia. He portrayed Prime Minister Evans in King Charles III on Broadway (2015), Hovstad in An Enemy of the People (2016), and Glinda’s father in the upcoming Wicked adaptations (2024–2025). On screen, his range extends from war drama to political satire and high-fantasy storytelling."
      "James exemplifies the quiet excellence of a craftsman actor—never chasing celebrity but mastering substance. His work reflects commitment, adaptability, and emotional intelligence—qualities that resonate far beyond the stage."
      "He married former actress and psychotherapist Victoria Shalet in 2015. The couple welcomed their first child in 2016, and James has a daughter from a previous relationship."
      "Read more: Grokipedia – Adam James (actor)",
    ],
  },
  {
    slug: "coffee-community-and-second-chances-how-one-cafe-turned-a-setback-into-purpose",
    title: "Coffee, community and second chances: how one café turned a setback into purpose",
    excerpt: "The story of Cup From Above is a reminder: when you align mission and model, you not only survive bumps in the road—you thrive....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
,      "The story of Cup From Above is a reminder: when you align mission and model, you not only survive bumps in the road—you thrive."
      "On the “Brisbane Breakfast” show, ABC Radio Brisbane featured the café’s recent move and relaunch after a forced relocation. ABC"
      "https://www.abc.net.au/listen/programs/brisbane-breakfast/cup-from-above/8589250"
      "For five years the café operated at a site in Aspley, serving more than just coffee: it was a welcoming space for people at risk of homelessness, a hub of training and support. Then the site was lost. The business had to vacate. Suddenly, the café with a heart found itself displaced. ABC"
      "Rather than fold, the team sought a new home—and landed in Fortitude Valley. The move signifies more than geography; it’s a fresh chapter. Their founder, Adam James (in the radio piece), talks about being “grateful his charity café has found a new home.” ABC"
      "You’re focused on reclaiming health, better habits, reinvention—and this is a parallel story. Consider:"
      "Cup From Above isn’t just a café—it’s a case study in integrating business, mission and community. For anyone trying to reclaim or rebuild—health, business, identity—the lessons are direct and relevant."
      "If you’re on a path of change (which you are), notice how everyday business stories mirror personal ones. The courage to say “we’ll move, we’ll adapt, we’ll keep the mission alive” is just as applicable to lifting weights, changing diet, changing mindset, as it is to shifting café premises.",
    ],
  }
,
  {
    slug: "inclusion-confusion",
    title: "Inclusion Confusion",
    excerpt: "Last year I was in a forum with some of the top leaders from Queensland to develop a thirty year plan for the state.  One of the questions was \"How do...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Last year I was in a forum with some of the top leaders from Queensland to develop a thirty year plan for the state.  One of the questions was \"How do we advance education?\". One politician suggested we need to remove people with disabilities from the classroom (a person with autism was the example used).  The reason... \"they pull all the other students down\".",
      "Having worked with people with disabilities for 10 years... I'm glad I was there to disagree!",
      "\"... the sick, weak, deformed children, in short, their destruction, was more decent and in truth a thousand times more human ...\" -Adolf Hitler",
      "Hitler and his Nazi's were driven by a social philosophy called eugenics.  The idea that we could improve the human species by discouraging reproduction by persons having genetic defects or presumed to have inheritable undesirable traits.",
      "When we take it to this extreme it's obviously wrong but what about the weird loud autistic kid disrupting the classroom and causing the other kids to get sub-optimal grades?",
      "The young man in the photo on the right is Connor Perring.  Connor is legally blind.  Last week he told me that going through school he was separated from his peers and placed with the \"special kids\".  He was continually told what he could NOT do.",
      "Connor now has his own music production company called Epic Music Australia.  He single handedly organises the community events at Cup From Above.  Connor every now and then needs some support because of his limited eyesight.  But since given the opportunity to show his capABILITY, despite his disability, he has flourished.",
      "Something worse happens when we segregate young men like Connor.  We have classrooms of children growing up in a world with only \"normal\" people.  We rob these children of the lessons of how to connect and communicate with complex, unusual and colourful individuals.",
      "\"It is time for parents to teach young people early on that in diversity there is beauty and there is strength.\" -Maya Angelou",
      "Working with people with disabilities for ten years made me a better person.  They taught me rich lessons that I could not have learnt from anyone else or from any book.  If we separate these wonderful and colourful people from the \"smarter majority\" it's true that they may get better marks and become more efficient accountants and lawyers and teachers.  However if we stay together we will get better at being patient, we'll develop better fathers, we will all be better at community.",
      "You don't need to run a program or do a course to learn how to do this.  You shouldn't have to artificially create diversity by statistically delegating teams and boards by gender and race.  Just delete all prejudice in your heart and diversity will happen naturally around you.",
      "Here's an old shot of my team at Cup From Above.  I don't think you could get more diverse than us!  Each team member has something unique to offer and plays a vital role.  I believe that's in part what makes us so strong as a team and I believe we should embrace this as a culture.  Queensland and the world will be better for it.",
    ],
  },
  {
    slug: "me-on-postcard-radio",
    title: "Me on Postcard Radio",
    excerpt: "I had the honour of being interviewed by Paul Wetzig from Postcard Radio.  Here's the link if you wanna hear me talk with Paul about how my faith has ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I had the honour of being interviewed by Paul Wetzig from Postcard Radio.  Here's the link if you wanna hear me talk with Paul about how my faith has inspired certain parts of what we do at Cup From Above.",
      "http://www.postcardradio.com/changing-the-world-one-cup-at-a-time/",
    ],
  },
  {
    slug: "a-lesson-from-john-wooden",
    title: "A Lesson From John Wooden",
    excerpt: "A few years ago I learnt about John Wooden.  Considered by many as the greatest basketball coach of all time.  He had an extraordinary leadership styl...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A few years ago I learnt about John Wooden.  Considered by many as the greatest basketball coach of all time.  He had an extraordinary leadership style which transcended the game of basketball.  I devoured several books on this great man and it has impacted how I do what I do now.",
      "He saw his job as an opportunity to mentor the men in his team.  Winning basketball games was merely a result of Wooden working with them to become better people.",
      "“Success comes from knowing that you did your best to become the best that you are capable of becoming.” ― John Wooden",
      "“Never try to be better than someone else. Learn from others, and try to be the best you can be. Success is the by-product of that preparation.” ― John Wooden",
      "There are only 5 people in a basketball team with a few reserves.  Wooden consistently mentored these small teams year after and has now positively influenced millions of people.  How is this possible?  It was not through quantity but by the quality of his character and consistency.",
      "Every day at my cafe I have a small group of people volunteering.  Most of them struggling with some sort of disadvantage.  Years ago I started taking this opportunity to train them with hospitality skills so they could become great baristas.  More than that I now do what I can to help them as people.  To teach them, encourage them & help them make the best choices possible.  Great coffee is merely a by product of them seeing their potential as people.",
      "This picture on the right is a photo of my team sitting down reading the 7 Habits Of Highly Effective People together.  With the common goal of learning together and encouraging one another to reach the potential.  Allocating time for \"Personal Development\"  is not uncommon in today's workplace.  I guess what's unusual for us is in that photo is the most diverse group of people you could possibly put together:  an ex-con, a middle aged woman, a paranoid schizophrenic, a personal trainer... to name a few.  Your background or your current level of ability does not prohibit you from advancing forwards unless you allow it.",
      "This week most likely you will be around a team in your workplace.  You may not be the CEO.  Your current position does NOT matter.  You have the opportunity to encourage the people around you, educate them as best you can and empower them.  Just as Wooden did.  What you do is irrelevant.  HOW you do it can have an immeasurable impact",
      "If you want to read more about John Wooden I recommend starting with \"Coach Wooden's Pyramid of Success:  Building Blocks For A Better Life\".",
    ],
  },
  {
    slug: "thoughts-on-homelessness",
    title: "Thoughts on Homelessness",
    excerpt: "I've spent this week on the streets of Brisbane.  I'm up to day six.  Two more nights to go.  Every day I've been speaking with homeless folk and list...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I've spent this week on the streets of Brisbane.  I'm up to day six.  Two more nights to go.  Every day I've been speaking with homeless folk and listening deeply to their stories.  I've been wearing track suit pants and a flanno I bought for four bucks at an op shop on Monday.  My stench is pretty accurate by now too.  People are looking at me differently.  It's diminishing.  Soul crushing.  I feel powerless... voiceless.",
      "Last night we slept under Kurilpa Bridge.  There were several homeless folk hidden around a wall.  We slept right under the bridge in a more comfortable spot out of the way but visible if you were looking for us.",
      "The police arrived at 2am.  They told us to move on.  I asked if we had to... we had an appointment near there the next morning in only a few hours and really needed the sleep.  She said all homeless folk needed to move on.  I asked her where they would go.  She said she didn't care just not here.  I told her that we weren't actually homeless but we were raising awareness for the homeless.  She said we weren't doing anything for homeless people.  I told her I ran a charity and we kinda actually do quite a lot (trying not to be smart about it).  She said we still had to move on.  I asked if all the other homeless folk who were hidden around the corner would have to go too.  She said it was okay if they were hiding.  Like that was a real solution.  And I guess it is because she's employed to police what the community charge her to do... what most people are too afraid to do.  It's cowardly members of the community who call them on the their smart phones while going for a jog in their Lorna Jane gear before they start their six figure salary job for the day... they're just outsourcing the bullying to the police.  So for the police if the homeless bloke is effectively hidden they don't get the phone call and the issue is solved.  If the problem is hidden we, as a community, don't need to deal with it.  But that's not okay.  And that's what I told her.  Hiding the homeless isn't solving it.",
      "Proverbs 31:8-9 says \"Speak out for those who cannot speak, for the rights of all the destitute.  Speak out, judge righteously, defend the rights of the poor and needy.",
      "Every person I've spoken to has had several devastating blows that have driven them on to the street.  Yeh there's a few weirdos who actually choose it.  Most want to live a healthy normal life and they're doing what they can to get there.",
      "I'm filled with rage over what our society is doing to these people.  We just pick on them.  We're kicking them while we're down and we need to stop.  Hear this, if you're doing nothing right now, then you're part of the problem.",
      "There are a few hundred beds in various hostels around Brisbane.  The problem is there's a few thousand homeless people.  Whatever family and friends they are lucky to have remaining are here in Brisbane so we can't just send them away without causing even more harm to already strained relationships.  Until we setup more accommodation for them they're gonna be on our streets and it's our responsibility to look after them as the church, as a community... and as a city.",
      "We need to face this.  It is an issue.  We need to stop looking away and start dealing with it.",
    ],
  },
  {
    slug: "are-you-hsp",
    title: "Are you a HSP?",
    excerpt: "A highly sensitive person (HSP) experiences our world differently than most people.  It is a biological difference, not psychological, that they’re bo...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A highly sensitive person (HSP) experiences our world differently than most people.  It is a biological difference, not psychological, that they’re born with, highly sensitive people are more aware of subtleties and process information deeply. They tend to be creative, insightful, and empathetic, but it also means they’re more prone than others to stress and anxiety.",
      "It is not a disease or a disorder.  It’s often misunderstood because only around 20 percent of the population are HSPs.",
      "Are you a highly sensitive person? If you relate to most of these signs, there’s a good chance you’re a HSP.",
      "The cornerstone of being an HSP is you process information deeply. This means you do plenty of reflecting on your experiences — more so than other people. Unfortunately, this also means you’re more prone to negative overthinking. Sometimes you obsessively play events over and over in your mind or spiral into anxious thoughts.",
      "Although highly sensitive people are not necessarily empaths, HSPs tend to “absorb” other people’s emotions, almost like an empath would. It’s not unusual for an HSP to walk into a room and immediately sense the moods of the people in it. That’s because highly sensitive people are very aware of subtleties including facial expressions, body language, and tone of voice that others may miss. Pair this with the sensitive person’s naturally high levels of empathy, and it’s no wonder HSPs feel emotions that are not their own. As a result, highly sensitive people tend to suffer from frequent emotional exhaustion.",
      "For instance in school, timed quizzes or speed tests would have made you extremely anxious perhaps to the point of not being able to perform as well as you normally would. As an adult, when you have too many things on your to-do list and not enough time to finish them, you feel very stressed. HSPs are more sensitive to stimulation, and time pressure is no exception.",
      "Whether you’re an introvert or an extrovert, you need plenty of downtime, preferably alone. You often find yourself withdrawing to a quiet, darkened room at the end of a long day — in order to lower your stimulation level, soothe your senses, and recharge.",
      "When someone sneaks up on you, you jump like a frightened cat. Many HSPs have a high “startle reflex” because even in non-threatening situations, their nervous systems are dialed up.",
      "Everyone hates violence and cruelty, but for highly sensitive people, seeing or hearing about it can be extremely unsettling. You might be an HSP if you can’t watch very scary, gory, or violent movies without getting upset or even feeling physically ill. Similarly, you may not be able to stomach a news story about animal cruelty or similar brutal acts.",
      "HSPs seek answers to the big questions in life. They ask why things are the way they are and what their role in all of it is. If you’re a highly sensitive person, you may have always wondered why other people aren’t as captivated by the mysteries of human nature and the universe as you are.",
      "You’ve always been sensitive to what you wear. Scratchy fabric or restrictive clothing — like pants with a tight waistband or pantyhose — really irritate you. Of course, non-HSPs might dislike these things too, but an HSP will carefully select their wardrobe to completely avoid them. And if an HSP inadvertently wears one of these things out, the discomfort may detract from their entire experience.",
      "Many HSPs are more sensitive to pain of all kinds — headaches, body aches, injuries, etc. — than non-HSPs.",
      "Again, due to your deep processing, you have a rich inner world. As a child, you may have had several imaginary friends, enjoyed fantasy-based play, and were prone to daydreaming. As an adult, you may have vividly realistic dreams.",
      "HSPs take comfort in their routines, because the familiar is far less stimulating than something brand new. For this reason, change — both positive and negative — can really throw off HSPs. For example, when dating someone new or getting a job promotion, HSPs may feel as equally stressed as they do overjoyed. Generally, HSPs need more time than others to adjust to change.",
      "Similarly, moving to a new home or traveling (even if it’s just a “fun” vacation!) can be quite difficult for you, because your senses are bombarded with so much new stimuli.",
    ],
  },
  {
    slug: "chaplins-great-speech",
    title: "Chaplin's Great Speech",
    excerpt: "Charlie Chaplin & Hitler were both born within a week of each other (Chaplin 4/16/1889, Hitler 4/20/1889), they were roughly the same height and weigh...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Charlie Chaplin & Hitler were both born within a week of each other (Chaplin 4/16/1889, Hitler 4/20/1889), they were roughly the same height and weight and both struggled in poverty until they reached great success in very different fields. When Chaplin learned of Hitler's policies of racial oppression and nationalist aggression he seized the unlikely serendipitous opportunity.",
      "His uncanny resemblance of Hitler gave this world famous comedian a powerful satirical bullet to fire at the dictator.  Better than simply deriding Hitler he delivers what I believe to be the most beautiful articulation of what the world should and could be.",
      "Chaplin himself almost cancelled the film as the extent of Nazi atrocities  became clearer. The film star feared there was simply nothing funny about Nazis. He also worried that many countries might simply ban the flick.",
      "President Franklin Roosevelt heard of Chaplin’s intention to scrap the film. The president sent an aide to deliver a message to Chaplin. “Make this film,” the president advised. Roosevelt promised he would use his influence to ensure none of America’s allies banned the movie.  Hitler once had extolled Chaplin as one of the greatest performers of all time. There were rumors that Hitler was heartbroken to see Chaplin’s impersonation of him.",
      "For those who haven't heard it here is a clip of the speech...",
    ],
  },
  {
    slug: "why-gardening-is-necessary-for-everyone",
    title: "Why Gardening Is Necessary For Everyone",
    excerpt: "Gardening is so good for you I don't think it should be considered merely as therapy.  I think it's so good for you that it's actually a necessity.  I...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Gardening is so good for you I don't think it should be considered merely as therapy.  I think it's so good for you that it's actually a necessity.  In the same way I don't think breathing is just therapeutic or a hobby.  Breathing is a necessary function for human life.  It seems that some people can NOT garden and not have too many adverse affects.  But there are so many benefits it's statistically improbable that by not doing any gardening there will be some adverse affects in your life.  This may seem like an exaggeration but allow me to convince you...",
      "This is the most obvious one but not so many people know why and how much better.  Most produce loses an average of 30 percent of nutrients three days after harvest.  University of California studies show that vegetables can lose 15 to 55 percent of vitamin C, for instance, within a week.  Some spinach can lose 90 per cent within the first 24 hours after harvest and 50 per cent in 30 minutes. 1",
      "The answer is simple.  Fresh produce is meant to be grown near your home and eaten straight after being picked.  Sure it's okay to supplement your meals with frozen vegetables.  But if the purpose of food is nutrition delivery then you can't beat growing it in your garden.",
      "In this paper 2 from the Royal College of Physicians by Dr Richard Thompson (The Queen's former Doctor) He goes so far to say, \"Health professionals should encourage their patients to make use of green space and to work in gardens, and should pressure local authorities to increase open spaces and the number of trees, thus also helping to counteract air pollution and climate change\".",
      "Gardening can help reduce symptoms 3 of depression and anxiety.",
      "Getting dirt under your nails while digging in the ground can make you happier. 4",
      "In fact, inhaling M. vaccae, a healthy bacteria that lives in soil, can increase levels of serotonin and reduce anxiety. 5",
      "One group of holistic therapies that aim to treat the whole person and has been well researched through surveys and randomised trials is referred to as green care, or therapy by exposure to plants and gardening.6,7 Several trials have demonstrated the beneficial effects on mood and mental health of observing nature, or simply even images of natural scenes.",
      "In a Japanese study, viewing plants altered EEG recordings and reduced stress, fear, anger and sadness, as well as reducing blood pressure, pulse rate and muscle tension.8 Another Japanese study simply found that it more beneficial physiologically to view a green hedge rather than a concrete fence.  In a randomised study by the environmental psychologist, Roger Ulrich views of plants and trees from post-operative wards improved the mood of patients, and reduced analgesic use, surgical complications and length of stay. Similar beneficial results have been found for patients undergoing dental treatment and viewing natural scenes together with natural sounds improved the experience of bronchoscopy.  Another carefully controlled study showed that viewing sculpture gardens without any greenery through the windows of an oncology ward caused a negative reaction in many patients. Even randomly exposing post operative patients to pictures of the countryside on the walls of their rooms can reduce pain and anxiety while abstract images increased anxiety.9,10",
      "The charity MIND compared short walks through a garden with walks in a shopping complex and showed that the former improved mental health, whereas the latter made it worse.11 In a prison in Michigan, residents who had a view of the countryside from their cells used the prison medical services less than those with an internal courtyard view.12",
      "In another randomised experiment, when post-operative patients were exposed to eight different species of indoor plants, both pain and length of stay were once again reduced and patients’ satisfaction with their hospital rooms was improved.13 In another study, putting plants in a computer room improved productivity and lowered blood pressure.14 Indoor gardening has been used to treat patients with mental health problems.15",
      "Many studies in the UK and other countries agree that higher proportions of green space, especially biodiverse habitats,16 are associated with less depression, anxiety and stress, even after controlling for potential confounding factors such as deprivation.17",
      "It is not only the appearance of plants that is beneficial: their leaves remove toxins, dust and microorganisms from the air.  NASA proved this one. 18",
      "One obvious benefit of gardening is that it is a form of light physical activity which everyone knows is good for you.  The science backs this assumption up too. 19,20 Gardening also gives us exposure to sunlight. Sunlight lowers blood pressure as well as increasing vitamin D levels. 21",
      "Less green space in people's living environment coincided with feelings of loneliness and with a perceived shortage of social support.  Loneliness and perceived shortage of social support partly mediated the relation between green space and health. 22",
    ],
  },
  {
    slug: "thoughts-on-maslows-toward-a-psychology-of-being",
    title: "Thoughts on Maslow's “Toward a Psychology of Being”",
    excerpt: "Abraham Harold Maslow is the guy who came up with \"Maslow's Hierarchy of Needs\" which a lot of people have heard of but maybe aren't aware of its sign...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Abraham Harold Maslow is the guy who came up with \"Maslow's Hierarchy of Needs\" which a lot of people have heard of but maybe aren't aware of its significance.",
      "This book was first published in 1962, (the second edition was published in 1968) Toward a Psychology of Being examines Maslow's thoughts on the self-actualized human.  E.g. The top of the pyramid.",
      "Humans have certain needs and when those needs aren't satisfied, the result can be neurosis. A need is defined as that which, in its absence breeds illness, when present prevents illness and if restored, cures illness. Maslow also felt that the need is inactive, at a low ebb, or functionally absent in a healthy person. But, needs exist in a hierarchy and so when one need is satisfied the person becomes aware of another need. These needs produce motivation.",
      "Maslow did not believe that a proper definition of motivation had yet been created, but he uses the concept anyway. The movement from one level of need to the next is what leads to motivation. Some people are strongly driven to grow, to constantly seek out more and more. Simply stated, they experience motivation; the inward desire to improve. It is this group that has reached the self-actualization level.",
      "As people progress along the hierarchy, the satisfied need doesn't entirely go away but stays in a sort of repressed state. Therefore, it is possible to regress if that need ceases to be met. Even a self-actualized person will fall back down the hierarchy if a lower level need becomes unsatisfied.",
      "In his research, Maslow made an interesting observation about creativity in healthy, evolved, and mature, self-actualized people. He discovered that many who are considered creative were not really healthy and that creativity was not the sole property of what is considered the creative professions, such as artists and writers. In fact, people in many varied situations proved to be creative, that it was a tendency of self-actualized people.",
      "Toward a Psychology of Being is written for psychologists.  It's no easy read.  However, for anyone serious about understanding human behaviour it is worth the effort.",
      "He doesn't pretend to have easy answers or all the answers or solutions.  He does seem to have an infectious hope for humanity.  It's refreshing and shines through the academic style of writing.  There is an optimistic tone toward a future based on the intrinsic values of humanity.  Maslow states that, \"This inner nature, as much as we know of it so far, seems not to be intrinsically evil, but rather either neutral or positively 'good.' What we call evil behaviour appears most often to be a secondary reaction to frustration of this intrinsic nature.\" He demonstrates that human beings can be loving, noble, and creative, and are capable of pursuing the highest values and aspirations.",
      "Here are some of my favourite excerpts throughout the book...",
      "“Every human being has both sets of forces within him. One set clings to safety and defensiveness out of fear, tending to regress backward, hanging on to the past, afraid to grow away from the primitive communication with the mother’s uterus and breast, afraid to take chances, afraid to jeopardize what he already has, afraid of independence, freedom and separateness. The other set of forces impels him forward toward wholeness of Self and uniqueness of Self, toward full functioning of all his capacities, toward confidence in the face of the external world at the same time that he can accept his deepest, real, unconscious Self.”",
      "“Not allowing people to go through their pain, and protecting them from it, may turn out to be a kind of over-protection, which in turn implies a certain lack of respect for the integrity and the intrinsic nature and the future development of the individual.”",
      "“The needs for safety, belonging, love relations and for respect can be satisfied only by other people, i.e., only from outside the person. This means considerable dependence on the environment. A person in this dependent position cannot really be said to be governing himself, or in control of his own fate. He must be beholden to the sources of supply of needed gratifications. Their wishes, their whims, their rules and laws govern him and must be appeased lest he jeopardizes his sources of supply. He must be, to an extent, “other-directed,” and must be sensitive to other people’s approval, affection and goodwill. This is the same as saying that he must adapt and adjust by being flexible and responsive and by changing himself to fit the external situation. He is the dependent variable; the environment is the fixed, independent variable.”",
      "“Most people experience both tragedy and joy in varying proportions. Any philosophy which leaves out either cannot be considered to be comprehensive.”",
      "“Every age but ours has had its model, its ideal. All of these have been given up by our culture; the saint, the hero, the gentleman, the knight, the mystic. About all we have left is the well-adjusted man without problems, a very pale and doubtful substitute.”",
    ],
  },
  {
    slug: "taking-the-time-to-chill",
    title: "Taking The Time To Chill",
    excerpt: "I’ve put on a LOT of weight this year.  My PTSD flashbacks and overall anxiety levels are the worst they’ve ever been.  I slept over at a mate’s place...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I’ve put on a LOT of weight this year.  My PTSD flashbacks and overall anxiety levels are the worst they’ve ever been.  I slept over at a mate’s place a few weeks ago and he told me I have sleep apnoea.  I’m not formally diagnosed but he said I was making some extremely weird choking noises while sleeping on his couch.  Also, to a much lower degree, I have mild insomnia.  I’ve started addressing it but the complexity of my current life situation means I needed to implement a simple, flexible strategy.  One that doesn’t take a lot of time, low cost, addresses weight loss, anxiety management, PTSD, apnoea & insomnia.",
      "So I thought I’d revisit the Wim Hof Method.",
      "I first learned about Wim Hof 10 years ago and used his techniques which I found transformational at the time.  The man, Wim Hof, is simply astounding.  I read his book The Way Of The Iceman by Wim Hof & Koen De Jong for the first time today.  It’s a great short book which I highly recommend.",
      "I’ve just started using some of his techniques again tonight which I wanted to share with you.",
      "Most people would look at any one of Wim's feats and say they’re impossible. Some of which include running a half-marathon barefoot on ice, swimming under ice for a record distance of 57.5 meters, and of course, climbing Mount Everest in shorts.  Wim is certainly gifted but he argues in his book that he has simply studied, trained and mastered several techniques which are now known as the Wim Hof Method.",
      "It’s a unique combination of 3 practices with benefits to increase athletic performance, reduce stress, and help you sleep better, along with several other benefits as you’ll discover below.",
      "It’s a set of skills that, when practised consistently, can provide your mind and body a wide variety of benefits.",
      "The Wim Hof Method combines 3 different practices: Cold Therapy, Breathing Exercises, and Commitment.",
      "Embracing the cold is healthy for you.",
      "In fact, exposure to the cold provides an array of health benefits including increased brown fat (the good kind) which results in fat loss, reduced inflammation, and an improved immune system.",
      "Plus, you’ll have better-balanced hormones, better sleep, and more endorphins.",
      "The second practice of the Wim Hof Method involves a focus on breathing. You’re always passively breathing, but you may be unaware of the potential of focused, concentrated breathing exercises. Increased oxygen levels come with a range of physical benefits including reduced stress and better immune responses.",
      "VICE journalist Justin Ong, who visited Singapore to test out the Wim Hof Method for himself, said, “I went from doing 40 push-ups without breathing, to 60. I could now hold my breath for almost three minutes, up from 43 seconds. In both instances, I felt I could push myself even more.”",
      "The final practice is the most important. Without a commitment to improving your body and mind, you don't see transformational results.",
      "In order to fully master the Method (and reap the numerous physical rewards it has to offer), you need a certain level of patience and determination.",
    ],
  },
  {
    slug: "new-laws-needed-for-equality",
    title: "New Laws Needed For Equality",
    excerpt: "Most people are under no delusion that women are equally violent as men and, despite being less physically strong, equally capable of horrific crimes....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Most people are under no delusion that women are equally violent as men and, despite being less physically strong, equally capable of horrific crimes.The problem is the system is based around a Matriarchal structure which assumes that \"all men are perpetrators and all women are victims\".",
      "A few years ago I was supporting a man whose wife was extremely and consistently violent, moderately financially abusive, extremely controlling. She would use his 2 daughters as leverage. She would hit them to punish him. Because she knew he couldn't do anything. They were still toddlers. He told me he would pick them up in his arms and stand in a corner so she would just hit his back. He'd stay there until she stopped.",
      "One day he asked me if we could go out and talk it through. She said he was only allowed out for an hour because she was tired. She'd just gone to Europe for 2 weeks, paid for by him, and she was still feeling jet lagged a week later. He said he hadn't had a day off work or looking after the kids in 7 months so he was going to be out for a few hours with me.",
      "She said that wasn't okay.",
      "While he was with me he received several hundred messages and missed calls. I encouraged not to cower to her. The messages became more extreme. I didn't realise how bad it was. Men tend to play these things down out of embarrassment and exhaustion. Men just don't like drama. He played me recordings of the abuse just from the last few days. I told him that he needs to press charges. He can't allow her to abuse him and the girls like that. He winced at the idea.",
      "She is a \"Christian\". She said that what he was doing was against God because he was abandoning his family and quoted some scripture. Then she said God was going to kill his daughters as a punishment. She is a prophet sent by God and if he didn't obey the word of God then this will be the consequence. I said mate we're going to the police.",
      "The police officer flat out refused to take a complaint. I told the officer I've been working in this area for a long time. (This was the first man I'd taken to the police in a situation like this). The police leaned in and whispered, \"come with me\".",
      "We walked outside where noone could hear. He said, \"Listen guys, you have to play the long game, I've just been through this myself, record everything and build a case, you'll need to fight it out in court and it will take years. But there is nothing I can do. Good luck.\"",
      "I drove him back to the home. She has a tracking app on his phone so she knew we were at the police station. From that day on she his forbidden him to talk with me. We messaged once and I saw him briefly in public once. She got his phone and found out and punished him. I haven't seen or heard from him since.",
      "Then she got her friends together and tracked down every ex girlfriend of mine. Every person who has an issue with me and started a smear campaign. A few of my mates' wives (wife of my mates? I don't know how to say this) received messages, not from her, but from her friend with a list of allegations about me. Some were stupid things that I've done years ago that they found out. Most of the things on the list were things that happened TO ME not done BY ME. I read the list and I sounded like an awful person! I would hate me if I heard this stuff about me. I lost several friendships and supporters of my charity through this.",
      "These are types of abuse women use every day. But we don't have any laws to prosecute women who do this. Men go to prison in our country for selling cannabis or punching someone in a bar. But women can destroy lives without consequence. This is the Matriarchy and we need to address this if we are going to have a fair and equal society.",
    ],
  },
  {
    slug: "not-the-peoples-china",
    title: "Not The People's Republic Of China",
    excerpt: "I have many Chinese friends. I have 2 really close friends who are chinese. I visited China in 1999. I have walked along the great wall of China. I've...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I have many Chinese friends. I have 2 really close friends who are chinese. I visited China in 1999. I have walked along the great wall of China. I've visited the Ice City in far north China near Russia. I've bought street food on the streets of Shanghai when I was 17.  I love Chinese culture, Chinese people, Chinese history. I love Chinese philosophy and have read Sun Tzu, Confucius & Laozi.",
    ],
  },
  {
    slug: "occams-razor-cutting-off-unnecessary-complexity",
    title: "Occam's Razor: Cutting Off Unnecessary Complexity",
    excerpt: "The term \"Occam's Razor\" comes from a misspelling of the name William of Ockham. William Ockham (circa 1287–1347) was an English Franciscan friar, the...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "The term \"Occam's Razor\" comes from a misspelling of the name William of Ockham. William Ockham (circa 1287–1347) was an English Franciscan friar, theologian, philosopher, and logician in the medieval period. One of his rules of thumb has become a standard guideline for thinking through issues logically. Occam's Razor is the principle that [in Latin], \"non sunt multiplicanda entia praeter necessitatem\" [in English \"don't multiply the agents in a theory beyond what's necessary.\"] Said most simply:  “the simplest solution is almost always the best.”",
      "What does that mean? If two competing theories explain a single phenomenon, and they both generally reach a similar conclusion, and they are both equally persuasive and convincing, and they both explain the problem or situation satisfactorily, the logician should always pick the less complex one. The one with the fewer number of moving parts is most likely to be correct. The idea is always to cut out extra unnecessary bits, hence the name \"razor.\" An example will help illustrate this.",
      "Suppose you come home and discover that your dog has escaped from the kennel and chewed large chunks out of the couch. Two possible theories occur to you.",
      "Either theory would be an adequate and plausible explanation. Both explain what needs to be explained, which is the escaped dog, and both use the same theory of how, i.e., that the latch was opened somehow, as opposed to some far-fetched theory about canine teleportation or something crazy like that.",
      "Which theory is most likely correct?  If you don't find additional evidence like strange fingerprints or human footprints or missing possessions to support theory #2, William of Ockham would say that the simpler solution (#1) is most likely to be correct in this case.  The first solution only involves two parts–two entities and two actions. On the other hand, the second theory requires at least five parts–you, the dog, a hypothetical unknown intruder, some plausible motivation, and various actions. It is needlessly complex. Occam's basic rule was \"Thou shalt not multiply extra entities unnecessarily,\" or to phrase it in modern terms, \"Don't speculate about extra hypothetical components if you can find an explanation that is equally plausible without them.\" All things being equal, the simpler theory is more likely to be correct, rather than one that relies upon many hypothetical additions to the evidence already collected.",
      "A variation used in medicine is called the \"Zebra\": a physician should reject an exotic medical diagnosis when a more commonplace explanation is more likely, derived from Theodore Woodward's dictum \"When you hear hoofbeats, think of horses, not zebras\".",
      "As explained by John G. Sotos, medical novices are predisposed to make rare diagnoses because of (a) the availability heuristic (\"events more easily remembered are judged more probable\") and (b) the phenomenon first enunciated in Rhetorica ad Herennium (circa 85 BC), \"the striking and the novel stay longer in the mind.\" Thus, the aphorism is an important caution against these biases when teaching medical students to weigh medical evidence.",
      "Medical Diagnosticians have warned, however, that \"zebra\"-type diagnoses must nonetheless be held in mind until the evidence conclusively rules them out.",
      "Occam's Razor is a tool we all use knowingly or unknowingly.  If your personality is high in trait neuroticism then you need to be especially aware of this bias.",
      "Two very easy questions to help quickly guide you to a better explanation for your situation:",
    ],
  },
  {
    slug: "gender-wage-non-gap",
    title: "Gender Wage Non-gap",
    excerpt: "All numbers from ABS 2019....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "All numbers from ABS 2019.",
      "Female average work hours: 36.9 hours.Male average work hours: 40.8",
      "Female weekly earnings: $1433.60Male weekly earnings: $1678.40",
      "Overtime in Australia begins at 38 hours, and is paid at 1.5x – 2x hourly rate. We will split the difference and use 1.75x.",
      "Female average overtime worked = 0Male average overtime worked = 2.8 hours (40.8 – 38).",
      "2.8 hours paid at 1.75x rate equates to 4.9 hours worked. Including overtime men work equivalent of 42.9 hours per week (38 + 4.9)",
      "Thus female hourly rate = $1433.60 / 36.9 hours = $38.85 per hour.",
      "Male hourly rate = $1678.40 / 42.9 hours = $39.1 per hour.",
      "$38.85 vs $39.1 per hour.You'll notice most matriarchal arguments will obfuscate the data in weekly or annual figures so that it appears men earn significantly more.  This claim is patently false.",
      "There is no significant gender wage gap in Australia.  There is a gender work hours gap.",
      "This calculation was sourced from the team at Domestic Violence Awareness Australia (DVAA).",
    ],
  },
  {
    slug: "bond-cleaning-brisbane",
    title: "Bond Cleaning Brisbane",
    excerpt: "Whenever you move house in Brisbane a bond clean is a necessary part of the ordeal.  When it comes to bond cleaning Brisbane, property managers are pa...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Whenever you move house in Brisbane a bond clean is a necessary part of the ordeal.  When it comes to bond cleaning Brisbane, property managers are particularly thorough.  They are very strict with the Qld government RTA guidelines.",
      "My place was a mess.  Not as bad as this photo.  This is just a random photo.  But you get the idea.",
      "I booked in Liberty Services Brisbane Bond Cleaning.  Yes, this is a shameless plug of my own social enterprise.  But, it's true.  The team took care of everything.  They completed the bond clean itself, carpet cleaning and some minor repairs.  We had a whole heap of rubbish that had accumulated which had to be removed.  Liberty Services did everything.",
    ],
  },
  {
    slug: "twenty-twenty-book-list",
    title: "Twenty Twenty Book List",
    excerpt: "I got through 58 books last year which I think just might be my PB....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I got through 58 books last year which I think just might be my PB.",
      "Some of my favourites were...",
      "I learned some great lessons from nearly all of the books.  Reading is powerful for personal and professional growth.  When someone commits to writing a book they dedicate a significant quantity of time to concisely document what, in many cases, has taken a lifetime for them to learn.  We, the readers, have the benefit of consuming this invaluable information they have succinctly written in a matter of hours.",
      "Before reading any book I carefully research the author and reviews about the book.  I look out for criticisms and see what people say is incorrect about the book... where does it go too far... in some cases, this is enough to convince me not to read it.  But everyone's got haters.  If the worst of what is said about it is unconvincing then I'll read it.  In some cases, the research will reveal another book that is better to read or in addition.",
      "This year I sketched out a reading plan for the next 10 years.  There are some authors, who I really admire, and I plan to read most or all of their body of work.  I've found that by reading several in succession I get to really understand them.  You get to see patterns and themes that grow or wane through their books.  For some authors, who I'm really interested in, I've found that reading a biography about them really helps with understanding them. Also, if they've written one, an autobiography.  This gives you an understanding of what is driving them, the events and experiences they endured.  The circumstances going on around them in the world at that time.  All these factors led to the thoughts that ultimately resulted in the books.",
      "I've noticed how different books have a different effect on me and my daily performance.  Some books are mentally draining others are simply distracting from my day to day activities.  I've found I need to balance my reading interspersed with light reading or simply books that I really enjoy.",
      "I use Goodreads to track all my reading.  It's a really great platform.  This is a log of my 2020 reading challenge.",
      "https://www.goodreads.com/user_challenges/19312110",
      "In 2021 I'm going to reduce the number of books and read some heavier ones on my bucket list.  I found I was rushing this year to get the quantity of reading in.  I also choose smaller books.  Next year, I want the mental space to read and understand more.  My target for 2021 is going to be 40 books in total.",
      "I hope this has given you a few tips you can take away for your own reading plan.  New Years Day is a great time to set goals for the year ahead.  If you've set a reading goal for 2021 comment up and let me know!",
    ],
  },
  {
    slug: "turnaround-your-lockdown",
    title: "Turnaround Your Lockdown",
    excerpt: "In 1665, the bubonic plague was ravishing London.  About 15% of the population died.  Entire villages went into lockdown.  Institutions and of course ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "In 1665, the bubonic plague was ravishing London.  About 15% of the population died.  Entire villages went into lockdown.  Institutions and of course businesses were being closed down for one reason or another.  One of those institutions was the University of Cambridge.  There are tales of people losing their minds from the response to the plague and committing suicide.",
      "One young student took advantage of the situation.  He took whatever books he could carry and retreated to a small village called Woolthorpe in the relative safety of the countryside.  He took the opportunity to work on his ideas and read books outside the usual highly structured and onerous curriculum.  Most importantly he had time to think.",
      "His window overlooked an orchard.  Later in his life, he shared how he had watched an apple fall from the tree outside his chamber window, and in his mind, he questioned why it fell straight to the ground.",
      "In answering that question, he theorised that everything in existence is attracted to everything else, and this attraction, the force of gravity, ties the universe together.  The young student was of course Isaac Newton.",
    ],
  },
  {
    slug: "the-james-webb-telescope",
    title: "The James Webb Telescope",
    excerpt: "This is going to be one of the biggest advancements for humanity in our life time.  Certainly at least for the year 2022.  The James Webb Space Telesc...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "This is going to be one of the biggest advancements for humanity in our life time.  Certainly at least for the year 2022.  The James Webb Space Telescope (JWST) was launched on the 25th December 2021 and sent off into outer space.",
      "In 1990, the Hubble Space Telescope was launched into Low Earth Orbit.  It revealed the most incredible photos of our Universe that we had never seen before.  More than that, it gave us information about our place in the Universe.",
      "The James Webb Space Telescope has a mass about half of Hubble Space Telescope's, but a 6.5 m diameter gold-coated beryllium primary mirror made of 18 hexagonal mirrors, giving it a total size over six times as large as Hubble's 2.4 m. Beryllium is a very stiff, hard, lightweight metal often used in aerospace that is non-magnetic and keeps its shape accurately in an ultra-cold environment.  The gold coating provides infrared reflectivity and durability.",
      "The James Webb Space Telescope has four key goals:",
      "JWST will orbit the Sun near the second Lagrange point (L2) of the Sun-Earth system, which is 1,500,000 km farther from the Sun than the Earth's orbit.  Normally an object circling the Sun farther out than Earth would take longer than one year to complete its orbit.  But near the L2 point, the combined gravitational pull of the Earth and the Sun allow a spacecraft to orbit the Sun in the same time that it takes the Earth.  Staying close to Earth allows data rates to be much faster for a given size of antenna.  The larger distance from Earth & the Sun is to ensure it's free from interference.",
      "The incredible precision and innovation of the design and its placement in orbit means that the JWST will be effectively 100x more accurate than the Hubble.  This is a game changer.  We will learn new things about our Universe.",
      "We will also be able to find more \"goldilocks\" planets like Kepler 186f.  Planets that can sustain life.  Planets that we can start making plans to visit.",
      "We will start to see photos from the James Webb around June of this year.  They will be inspiring and mind blowing.  Over the next few years astrophysicists will get data that will better explain our Universe and just maybe our part to play in it.  Most importantly, I think space exploration unites us.  In a time when we're more fragmented and disconnected than ever, ventures like this bring us together as humans.",
    ],
  },
  {
    slug: "2021-reading-list-review",
    title: "2021 Reading List Review",
    excerpt: "This year I reduced my reading schedule to 40 books.  I was able to read several books that had been on my list for many years.  Here is my 2021 readi...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "This year I reduced my reading schedule to 40 books.  I was able to read several books that had been on my list for many years.  Here is my 2021 reading list on Good Reads.  https://www.goodreads.com/user_challenges/25070879",
      "Drawing on his twenty-five years of groundbreaking research on moral psychology, social psychologist Jonathan Haidt shows how moral judgments arise not from reason but from gut feelings. He shows why liberals, conservatives, and libertarians have such different intuitions about right and wrong, and he shows why each side is actually right about many of its central concerns.In this subtle yet accessible book, Haidt gives you the key to understanding the miracle of human cooperation, as well as the curse of our eternal divisions and conflicts. If you’re ready to trade in anger for understanding, read The Righteous Mind.",
      "\"Best Nonfiction Book of the 20th Century\" (Time)",
      "“It is impossible to name a book that had a greater effect on the political and moral consciousness of the late 20th century.” (David Remnick, The New Yorker)",
      "The Nobel Prize winner’s towering masterpiece of world literature, the searing record of four decades of terror and oppression, in one abridged volume (authorized by the author). Features a new foreword by Anne Applebaum.",
      "Drawing on his own experiences before, during, and after his 11 years of incarceration and exile, on evidence provided by more than 200 fellow prisoners, and on Soviet archives, Solzhenitsyn reveals with torrential narrative and dramatic power the entire apparatus of Soviet repression, the state within the state that once ruled all-powerfully with its creation by Lenin in 1918. Through truly Shakespearean portraits of its victims – this man, that woman, that child – we encounter the secret police operations, the labor camps and prisons, the uprooting or extermination of whole populations, the “welcome” that awaited Russian soldiers who had been German prisoners of war. Yet we also witness astounding moral courage, the incorruptibility with which the occasional individual or a few scattered groups, all defenseless, endured brutality and degradation. And Solzhenitsyn’s genius has transmuted this grisly indictment into a literary miracle.",
      "“The greatest and most powerful single indictment of a political regime ever leveled in modern times.” (George F. Kennan)",
      "“Solzhenitsyn’s masterpiece.... The Gulag Archipelago helped create the world we live in today.” (Anne Applebaum, Pulitzer Prize-winning author of Gulag: A History, from the foreword)",
      "The dramatic inside story of the first four historic flights that launched SpaceX – and Elon Musk – from a shaky startup into the world's leading edge rocket company.",
      "In 2006, SpaceX – a brand-new venture with fewer than 200 employees – rolled its first, single-engine rocket onto a launch pad at Kwajalein Atoll. After a groundbreaking launch from the middle of the Pacific Ocean, the Falcon 1 rocket designed by Elon Musk’s engineers rose in the air for approximately 30 seconds. Then, its engine flamed out and the rocket crashed back into the ocean.",
      "When he founded SpaceX, Elon Musk had only budgeted for three launches. After two more failed flight tests, and with only one Falcon 1 rocket left in its factory, SpaceX decided to try one last, dramatic launch. Over eight weeks, engineers worked furiously to prepare this final rocket. If it crashed and burned, so would SpaceX. In September 2008, SpaceX’s last chance for success lifted off...and accelerated like a dream, soaring into orbit flawlessly.",
      "That success would launch a miraculous decade for the company, in which SpaceX grew from building a single-engine rocket to one with a staggering 27 engines, created two different spacecrafts and mastered reusable-rocket descents using mobile drone ships on the open seas. But these achievements would not have been possible without SpaceX’s first four flight tests.",
      "Drawing on unparalleled access and exclusive interviews with dozens of former and current employees – engineers, designers, mechanics and executives, including Elon Musk – Eric Berger tells the complete story of this foundational generation that transformed SpaceX into the world’s leading space company.",
      "Economic Facts and Fallacies exposes some of the most popular fallacies about economic issues-and does so in a lively manner and without requiring any prior knowledge of economics by the reader. These include many beliefs widely disseminated in the media and by politicians, such as mistaken ideas about urban problems, income differences, male-female economic differences, as well as economics fallacies about academia, about race, and about Third World countries.",
      "One of the themes of Economic Facts and Fallacies is that fallacies are not simply crazy ideas but in fact have a certain plausibility that gives them their staying power-and makes careful examination of their flaws both necessary and important, as well as sometimes humorous. Written in the easy-to-follow style of the author's Basic Economics, this latest book is able to go into greater depth, with real world examples, on specific issues.",
    ],
  },
  {
    slug: "al-akam-al-khamsa-the-five-decisions",
    title: "Al-aḥkām Al-khamsa:  The Five Decisions",
    excerpt: "I came across this idea in Islamic tradition today.  It's known as the \"5 Decisions\".  One of my contractors said to me \"it is Halal for me to do this...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I came across this idea in Islamic tradition today.  It's known as the \"5 Decisions\".  One of my contractors said to me \"it is Halal for me to do this\".  I had only known of Halal as a food preparation standard similar to what \"Kosher\" is for Jews.  The word Halal means permissible and has a broader definition, at least for some muslims, to mean that which is \"the right thing to do\".  I was intrigued by the concept and dug a little deeper.",
      "As I understand it (if you're a muslim and you're reading this and I'm wrong please let me know!), there is a simple binary understanding of most things.  Either \"Halal\", that which is permissible and the right thing or \"haram\", that which is not permissible and is the wrong thing.",
      "Now, I was thinking probably what you're thinking right now.  That's too simple.  It turns out they found the same thing and so over the centuries under Sharia they developed it.  I should say at this point that I disagree with some applications of Sharia law and the Islamic faith.  I think liberal democracy like we have in the west is a much better system especially because we deliberately and carefully seperate religion, law and the government.  However, there are many muslims I know and respect.  I think this an insightful concept and worth pondering.",
      "Sharia rulings fall into one of five categories known as “the five rulings” (al-aḥkām al-khamsa):",
      "It is a sin or a crime to perform a forbidden action or not to perform a mandatory action.  Reprehensible acts should be avoided, but they are not considered to be sinful or punishable in court.  Avoiding reprehensible acts and performing recommended acts is held to be subject of reward in the afterlife, while allowed actions entail no judgement from God.  Jurists disagree on whether the term ḥalāl covers the first three or the first four categories.  The legal and moral verdict depends on whether the action is committed out of necessity (ḍarūra).",
      "We have no comparable system like this in the West.  Especially rarely in the religious sense.  In many muslim cultures, religion, law and government are inextricably intertwined.  From a purely legal and cultural perspective we do see these categories being used everyday in our society.",
      "Take for example \"wearing face masks\".  One day it's \"fard\", and if you aren't wearing one, even in your car all alone, it's illegal and if you're caught by the wrong person you might be publicly ridiculed.  Or conversely, if you live somewhere like Byron Bay where the culture is so intensely anti-vax and if your personal opinion is neutral \"mubah\" but you get vaccinated because you need to for work then you might still face a religious-like persecution for capitulating to the pharmaceutical devils and be outcast as an apostate.  The extreme nature of certain tribes mean that they will impose an arbitrary extreme binary judgement such as \"Haram\".",
      "Mainstream religions had developed these sometimes useful tools to help better manage their communities with more nuanced structures.  They needed this because of the wobbly foundation when building complex societies based on various individual interpretations of spurious scriptures.  With the decline of mainstream religions we're seeing a huge portion of the population join fragmented ideological groups such as feminism, marxism, fascism and whatever this new \"woke-ism\" pseudo religion is.  People still have a need to belong.  Immature people, who once joined religions with well structured systems and clearer value sets, will now join these small ideological groups with less structure and more ambiguous values.  Upon entry they ask existing group members who they need to hate and punish to belong to that tribe.  They'll be quickly informed and handed instructions, ammunition and dossiers.",
    ],
  },
  {
    slug: "building-a-storybrand-by-donald-miller-book-review",
    title: "Building a StoryBrand by Donald Miller:  Book Review",
    excerpt: "A friend recently recommended I read this book by Donald Miller.  It's a great short read packed full of interesting and useful information.  This is ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A friend recently recommended I read this book by Donald Miller.  It's a great short read packed full of interesting and useful information.  This is a quick summary and review of the book.  I definitely recommend giving it a read if you're interested in marketing or business.  Donald Miller is a world famous story teller.  He presents some novel ideas.  I 'read' it on audible.  It's a quick book that takes a little over 4 hours to get through.",
      "Building a StoryBrand is about making your customer the hero of a story.",
      "Every successful business understands that you need to make your customer the hero of the story, not your brand.",
      "“Businesses that invite their customers into a heroic story grow. Businesses that don’t are forgotten.”",
      "Chapter 1: The Key to Being Seen, Heard, and Understood",
      "“Pretty websites don’t sell things. Words sell things. And if we haven’t clarified our message, our customers won’t listen.”",
      "“The more simple and predictable the communication, the easier it is for the brain to digest.”",
      "Mike McHargue, a friend of Miller’s, says there are two critical mistakes brands make when talking about their products and services:",
    ],
  },
  {
    slug: "nicomachean-ethics-book-review",
    title: "Nicomachean Ethics – Book Review",
    excerpt: "I recently finished reading Nicomachean Ethics by Aristotle.  This is a true classic.  It's one of the most influential books of all time.  It has bee...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I recently finished reading Nicomachean Ethics by Aristotle.  This is a true classic.  It's one of the most influential books of all time.  It has been famous through different eras especially during the middle ages.  Aristotle was referred to during this time as \"The Philosopher\".",
      "The book is most likely titled in honour of Aristotle's father Nicomachus.  His son's name was Nicomachus and was involved in editing the final manuscripts that formed the book that we know today.  The work was completed some time during the 4th Century BC.",
      "Aristotle postulates the highest human good is \"eudaimonia\" or what is probably best translated into English as \"flourishing\" but often unfortunately translated as mere \"happiness\".  A substantial component in the path to such human happiness is acting with the appropriate virtues over the course of an entire lifetime.  The details of these Aristotelean teachings form the Nicomachean Ethics, one of the most influential works in the entire history of Western Civilisation.",
      "As a way of sharing a small example of Aristotle’s extensive philosophy outlined in these pages, I will focus on Book IV Chapter 8 where this brilliant ancient Greek philosopher addresses the virtue of being witty, sensitive to others, discerning and perceptive, particularly when we are at our leisure.",
      "Here are six Aristotle quotes and some thoughts:",
      "“Since life includes rest as well as activity, and in this is included leisure and amusement, there seems here also to be a kind of intercourse which is tasteful; there is such a thing as saying- and again listening to- what one should and as one should.”",
      "Aristotle’s focus on time spent outside of work, what we nowadays refer to as ‘leisure time’, makes this section of his ethical teachings particularly relevant for us today, most especially since we are bombarded by a nonstop barrage of advertisements, store signs and billboards.  Some obvious, others not.",
      "“The kind of people one is speaking to or listening to will also make a difference.”",
      "It is paramount who we associate with both at work and outside of work. Aristotle is positive that we can actively participate in society and exercise discrimination as we develop wisdom to speak as we should and listen as we should. In contrast, another Greek philosopher, Epicurus, was not so optimistic on this point. Epicurus judged conventional society as blind and dumb, particularly as it pertains to men and women expounding values regarding such things as riches and fame and what constitutes our true human needs. The answer for Epicurus: withdraw into a separate community with like-minded friends and philosophers.",
      "“Regarding people’s views on humour there is both an excess and a deficiency as compared with the mean. Those who carry humour to excess are thought to be vulgar buffoons, striving after humour at all costs, and aiming rather at raising a laugh than at saying what is becoming and at avoiding pain to the object of their fun while those who can neither make a joke themselves nor put up with those who do are thought to be boorish and unpolished.”",
      "Aristotle is optimistic that someone who aspires to philosophic excellence, virtue and the mean (maintaining a centrist position between two extremes) can live among buffoons and boors without being pulled down to their level.",
      "“The ridiculous side of things is not far to seek, however, and most people delight more than they should in amusement and in jestingly and so even buffoons are called ready-witted because they are found attractive; but that they differ from the ready-witted man, and to no small extent, is clear from what has been said.”",
      "Aristotle observes how buffoonery can easily lapse into the social norm.  Thus our challenge is how to retain our integrity when surrounded by slobs and buffoons.",
      "“To the middle state belongs also tact; it is the mark of a tactful man to say and listen to such things as befit a good and well-bred man; for there are some things that it befits such a man to say and to hear by way of jest, and the well-bred man's jesting differs from that of a vulgar man, and the joking of an educated man from that of an uneducated.”",
      "Aristotle’s overarching observation on how the wisdom of the middle way between two extremes applies here.  It's not good to find yourself at either extreme, being a boor or being a buffoon. Unfortunately, speaking and otherwise communicating in a buffoonish or boorish way is in no way restricted to the uneducated or dull.  We've all witnessed numerous instances of buffoonery and boorishness among the highly educated and intellectually astute.",
    ],
  },
  {
    slug: "book-review-of-why-we-get-sick-the-hidden-epidemic-at-the-root-of-most-chronic-diseaseand-how-to-fight-it",
    title: "Book Review of Why We Get Sick: The Hidden Epidemic at the Root of Most Chronic Disease―and How to Fight It",
    excerpt: "I recently read Dr. Benjamin Bikman’s book, Why We Get Sick. Bikman is a Brigham Young University scientist and biomedical professor whose expertise i...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I recently read Dr. Benjamin Bikman’s book, Why We Get Sick. Bikman is a Brigham Young University scientist and biomedical professor whose expertise is in bioenergetics and metabolic disorders. Unlike many authors who write on this topic, Bikman is not a medical doctor. He has a PhD.",
      "Bikman communicates that many of today’s chronic medical disorders including cancer, heart disease, high cholesterol, Alzheimer’s disease, vascular dementia, Parkinson’s disease, hypertension, as well as many others, are linked to insulin resistance.  His analysis is backed up with more than 30 pages of endnotes chronicling an abundance of research in multiple disciplines along with his scientific understanding of how the body works.",
      "In the Introduction, Bikman emphatically states that “insulin resistance is the most common health disorder worldwide, and it affects more people—adults and children—each year than any other. (Page xv) Like many other people, I previously understood the connection between insulin resistance and diabetes and Alzheimers. However, I didn’t fully appreciate how insulin levels can affect the entire body. Bikman effectively points out why diabetes and Alzheimers are only a small part of the story.",
      "Bikman explains the role of insulin in the body and how insulin resistance stands side by side with almost every chronic disease. It affects heart health, the brain, and neurological disorder, reproductive health, cancer, skin, muscles and bones, the GI tract and kidney health, obesity, and metabolic syndrome. Readers can easily move from one chapter to the next by scrolling through well organised headings, subheadings, graphs, and highlighted sidebars to find information relevant to their situation.",
      "He intertwines facts with clear explanations of current medical research. These kernels of information will make most people pause briefly. Perhaps, relevant statements will create an opportunity to evaluate daily choices, especially when such a high percentage of people have insulin resistance. Diet and activity levels are directly related to health status.",
      "The following statements highlight a cross-section of some of these important facts:",
      "“…half of all U.S. adults, and roughly one in three Americans are know to have it. However, this number could be as high as 88% of Americans. (Page 3)",
      "“from the brain to the toes, insulin regulates how a cell uses energy, changes its size, influences production of other hormones, and even determines whether cells live or die.” (Page 4-5)",
      "“…insulin resistance and cardiovascular disease are almost inseparable.” (Page 13)",
      "“…insulin resistance and high insulin levels directly cause high blood pressure.” (page 14)",
      "“First, insulin resistance increases blood pressure increasing the likelihood of blood vessel damage. Next, it increases lipid deposition in blood vessel walls. Finally, insulin resistance increases inflammation, promoting the ongoing infiltration of the blood vessel with macrophages, which become increasingly laden with oxidized lipids, changing into foam cells.” (page 22)",
      "“The brain’s inability to get enough glucose is a cardinal feature of Alzheimer’s disease. As in our muscles, insulin facilitates the movement of glucose into the brain. However, as the brain becomes progressively insulin resistant, it becomes less and less able to obtain enough glucose to meet its energy demands. So, like an engine running on empty, the brain doesn’t work well.” (Page 29)",
      "“…vascular dementia occurs because the brain suffers from insufficient blood flow…subjects with insulin resistance have about twice the risk of developing vascular dementia compared with insulin-sensitive subjects.” Page 30)",
      "“Up to 30% of patients with Parkinson’s disease have type 2 diabetes, with possibly up to 80% having insulin resistance or pre diabetes.” Page 31)",
      "“…cancer is a disease of cellular growth; certain cells begin to multiply uncontrollably. And insulin resistance is part of this equation, because it pushes cancer cells to grow faster.” (Page 51)",
    ],
  },
  {
    slug: "the-powerful-image-of-a-frail-old-lion-moments-before-his-death",
    title: "The powerful image of a frail old lion moments before his death",
    excerpt: "These heart-breaking images show the final moments of a frail old lion who was once king of his land before he starved to death....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "These heart-breaking images show the final moments of a frail old lion who was once king of his land before he starved to death.",
      "He was kicked out of his pride and became emaciated after the protection and food that his family used to provide was stripped away.",
      "The lion, known as Skybed Scar, was well known in Kruger National Park, South Africa, where he was pictured.",
      "The heart-breaking images were captured by Larry Anthony Pannell from California.",
      "In his blog, he described coming across the lion, who he initially saw drinking from a watering hole.",
      "'After he had his fill of water he struggled to his feet hardly able to stand. What you did not notice while he was drinking, he literally was nothing but skin and bones.'",
      "He describes how as the lion moved away from the water 'he staggered as if he was drunk towards a small rise' trying to catch his breath every few steps.",
      "After reaching the rise he began slowly descending to the ground but eventually collapsed.",
      "After a while, Larry and a friend drove over to where the lion had come to rest.",
      "'We found him lying in the grass, exhausted unable to move. We were no more than five feet from him as he lay dying in the shade of a tree.",
      "'Dropping my camera we stared at one another locking eyes for what seemed for an eternity. I just wanted him to know that he would not die alone as he struggled to breath, his chest rising only every so often.",
      "'Then a last twitch of an ear, his last breath, he was gone. The King was dead.'",
      "He later said: 'I knew that I was witnessing something of a very special nature, the real nature both life and death.",
      "'I sat with him only feet away, locking eyes and starting at one another as I watched for an hour as the life leave his body. I wanted him to know he would not die alone.",
      "'Not wanting to sound crass I remember when my grandmother was in the hospital and I visited her for the last time the night she passed.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-no-2-danielle-jordan",
    title: "Comparing Jari's Case To Similar Cases: No.2 Danielle Jordan",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Danielle Jordan aka Danielle Fleming",
      "Relationship of P & V:",
      "Canberra, ACT, Australia.",
      "Ms Jordan suffered catastrophic head injuries after she allegedly fell from the bonnet of a car being driven by Mr O'Connell in the north Canberra suburb of Melba.",
      "The couple were having an argument at a home in Melba early in the morning of 15 April 2022.",
      "The couple went outside and Mr O’Connell allegedly got into the driver’s seat of a Mitsubishi Triton parked in the driveway while Ms Fleming sat on its bonnet.  He allegedly started driving off while she was still sitting on the car despite a friend of hers, who had also been at the home, walking in front of it to make him stop.  Ms Fleming allegedly held onto the bonnet as he drove off, accelerating out of the friend’s sight.",
      "The documents also revealed witnesses reported having seen the car drive off and hearing a thump.  Witnesses allegedly also saw Mr O'Connell pick Ms Jordan up off the road and put her in the car.  Police said CCTV footage showed he took her to Calvary Hospital, carrying her limp body into the building.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases",
    title: "Comparing Jari's Case To Similar Cases:  No.5 Gayle Potter",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare:",
      "Relationship of P & V:",
      "Traralgon, Victoria, Australia.",
      "Ms Potter, 46, was found bloodied and battered in the driveway of her home after she was dragged under Mr Martyn's Mitsubishi Pajero following a heated argument.",
      "Mr Martyn was confronted by the son the couple shared, and told him that Ms Potter was \"banging\" on his side of the car, and that he thought he had only \"bumped\" her as he drove off.  He was trying to get away from her as she yelled at him and hit the car.  Gayle was drunk and \"went at him\", she grabbed him and pulled at his clothes, in a fit of rage, and threw herself at his car.",
      "The case was handed to the major crash investigators but was then handed over to the homicide squad.",
      "Police charged Glenn with manslaughter, dangerous driving causing death, and failing to stop after an accident.",
      "Glenn was found not guilty of all charges by a jury.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-pt1",
    title: "Comparing Jari's Case to Similar Cases:  No.1 Matthew Leadbetter & Katherine Field & Her Unborn Child",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is another case to compare with:",
      "Katherine Leadbetter and Matthew Field.  Katherine's unborn child.",
      "Relationship of P & V:",
      "A teenage drug addict stole a vehicle and accidentally ran into Katherine & Matthew killing them and their unborn baby instantly.  The teenager fled the scene but was arrested shortly after.",
      "The perpetrator was placed in remand.  Police charged him with 2 counts of murder.  He later plead guilty to manslaughter.  He was also charged with dangerous operation of a motor vehicle while adversely affected by intoxicating substances, driving while disqualified, and failing to fulfil duties at the scene of a traffic accident",
      "The perpetrator was sentenced to 10 years and eligible for parole after 6 years.",
      "As of 11th June 2022, Queensland’s attorney-general, Shannon Fentiman, has confirmed she may appeal against the sentence in order to have it increased.",
      "Redland City Council Mayor Karen Williams has started a petition asking Fentiman to lodge an appeal, as well as make changes to the Youth Justice Act.",
      "Queensland’s LNP opposition supports the petition, with Leader David Crisafulli saying the sentence was too lenient and would not deter other youth offenders.",
      "https://www.brisbanetimes.com.au/national/queensland/a-g-may-appeal-against-sentence-of-teen-driver-who-killed-couple-20220611-p5aszm.html",
      "https://www.abc.net.au/news/2022-06-08/hit-and-run-pregnant-couple-alexandra-hills-brisbane-leadbetter/101135384",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-pt3",
    title: "Comparing Jari's Case To Similar Cases:  No.3 Kyralee Clark",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Relationship of P & V:",
      "Passenger and acquaintance of the driver.",
      "Wodonga, Victoria, Australia.",
      "Smyth reached speeds of up to 180km/h as he led police on a cross-border chase on December 4, 2011, that ended with him losing control of and crashing a car.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-no-7-michelle-ruitenbeek",
    title: "Comparing Jari’s Case To Similar Cases: No.7 Michelle Ruitenbeek",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Michelle Ruitenbeek, 50",
      "Relationship of P & V:",
      "Melbourne, Victoria, Australia.",
      "On 28th March 2019, Michelle Ruitenbeek was seriously injured and subsequently died after being hit while riding her bike on the Nepean Highway.  Ms Ruitenbeek was a serious, competitive and capable cyclist who had done everything to make herself visible.",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-pt4",
    title: "Comparing Jari’s Case To Similar Cases:  No.4 Jennifer Board",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
    ],
  },
  {
    slug: "comparing-jaris-case-to-similar-cases-case-no-7-veronique-sakr-sienna-abdallah-angelina-antony",
    title: "Comparing Jari’s Case To Similar Cases: Case No.7 Veronique Sakr, Sienna Abdallah, Angelina & Antony",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Veronique Sakr, 11, and her cousins, Sienna Abdallah, eight, and her siblings Angelina, 12, and Antony, 13",
      "Samuel William Davidson",
      "Relationship of P & V:",
      "Sydney, New South Wales, Australia.",
      "The 29-year-old ploughed into them after his ute mounted a kerb at Oatlands, in Sydney's northwest on February 1, 2020.",
      "On the day of the crash, he had spent more than 12 hours drinking, and he was three times over the legal limit when he hit the children.",
      "He also had cocaine and other drugs in his system.",
      "Davidson had a blood alcohol reading of 0.182 at the scene of the crash before returning a second reading of 0.15 at Castle Hill police station. A blood test suggested he had taken MDMA during the day.",
      "Arrested on site and placed on remand.  Charged with 4 counts of manslaughter and several other charges related to the incident.",
      "The professional truck driver pleaded guilty to four counts of manslaughter and to charges related to the injuries caused to three other children.",
      "Mr Davidson was jailed in April 2021 for 28 years with a non-parole period of 21 years.",
      "In a majority decision, the NSW Court of Criminal Appeal concluded the term was manifestly excessive.",
    ],
  },
  {
    slug: "father-arrested-for-discussing-childs-gender-transition",
    title: "Father arrested for discussing child’s gender transition",
    excerpt: "A Canadian man was arrested this week after violating a court order that banned him from speaking publicly about his daughter’s gender transition....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A Canadian man was arrested this week after violating a court order that banned him from speaking publicly about his daughter’s gender transition.",
      "The man, whose identity is reportedly under a publication ban by a British Columbia Court of Appeals to protect his child, was found in contempt of court and arrested Tuesday for calling the teen, his daughter, which she is, and publicly referring to her with the pronouns “she” and “her,” according to The Post Millennial.",
      "The teenager was born as a female and reportedly identifies as transgender and prefers the use of male pronouns.",
      "The father reportedly began litigation against the teen’s mother after learning of the transition, and the matter was settled by the province’s highest court earlier this year, according to Global News. The parents are separated.",
      "The high court ordered the dad to not stand in the way of the 15-year-old’s hormone therapy and to try and better understand gender dysphoria, the outlet reported. He was also told to stop speaking to the media about the case and warned that his public attempts to undermine his child’s wishes was a form of family violence, according to the article.",
      "His daughter has identified as male since the age of 11, and changed her name at age 12 before pursuing hormone therapy with the support of his mother, a psychologist and an endocrinologist, according to Canadian law firm Torkin Manes.",
      "“[The father’s] refusal to respect [the boy’s] decisions regarding his gender identity is troublesome,” Chief Justice Robert Bauman and Justice Barbara Fisher wrote in the January decision, according to Global News.",
      "The father’s rejection of his son’s identity has caused the boy “significant pain” that has “resulted in a rupture of what both parties refer to as an otherwise loving parent-child relationship,” justices reportedly wrote.",
      "This rupture is not in [the boy’s] best interests,” the decision said, according to the outlet. “He clearly wants and needs acceptance and support from his father.”",
      "The father confirmed his legal woes on an online fundraising campaign soliciting donations.",
      "“The far left issued an arrest warrant on Thursday, March 04! I will be turning myself in on March 16!,” the man posted in a Go Get Funding page where he has raised more than $22,000 Canadian amid his legal fight.",
      "“I am fighting the far left based on a civil disobedience defense! I am now back in court for a five day criminal trial that will last at least five days . . . From April 12-16. That trial that could land me in jail for up to five years for speaking truth about state sponsored child abuse. FYI . . . I am blocked from sharing any videos at this time that oppose the sterilization of children!,” the caption continued.",
      "The dad, and his arrest, have been lauded by some ideologues who say gender is not a biological or social construct.",
      "“They’ve created a delusion, and they’re forcing parents to live in this delusion,” the father previously said, according to The Post Millennial.",
      "“What happens when the bubble explodes and the delusion ends? … She can never go back to being a girl in the healthy body she should have had … These kids don’t understand. What kind of 13-year-old is thinking about having a family and kids?”",
    ],
  },
  {
    slug: "norwegian-feminist-faces-three-years-in-prison-for-hateful-tweets-allegedly-criticising-transgenderism",
    title: "Norwegian feminist faces three years in prison for 'hateful' tweets (for allegedly) criticising transgenderism",
    excerpt: "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect you...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect young lesbians’ interests is.  How does it help young lesbians when males claim to be lesbian, too?” Ellingsen wrote in her offending remarks.",
      "A feminist in Norway is facing up to three years in prison for stating that biological men cannot be lesbians.",
      "Her remarks come as more and more members of the LGBTQI+ community insist that biological men who identify as women and are attracted to biological women are in fact “lesbians.”",
      "Christina Ellingsen, who leads Women’s Declaration International (WDI), an international feminist organisation, faces police investigation after she allegedly stated in a tweet that males cannot be lesbians.",
      "She made her remarks in response to the trans activist group Foreningen FRI.",
      "“Why [does] FRI teach young people that males can be lesbians? Isn’t that conversion therapy?” Ellingsen allegedly wrote, Reduxx reported.",
      "Ellingsen tweeted in response to a trans activist and FRI advisor, Christine Jentoft, who identifies as a lesbian despite being biologically male.",
      "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect young lesbians’ interests is. How does it help young lesbians when males claim to be lesbian, too?” Ellingsen wrote in her offending remarks.",
      "According to WDI, Ellingsen now faces an investigation over her tweets.",
      "“A Woman is an adult human female. It is physically impossible to change sex. Gender identity refers to a persons subjective convictions, and to persecute women for refusing to accept subjective convictions they do not agree to, is a human rights violation,” wrote WDI in a statement. “Women must have the right to correctly sex men, to refuse men's subjective convictions and to freely express what they see with their own eyes without facing criminal persecution.”",
      "“‘Gender identity’ is per definition a specific kind of subjective belief. The introduction of subjective beliefs in criminal law, is essentially a reintroduction of blasphemy-laws.  Additionally, this kind of blasphemy-laws are especially used against women,” WDI continued. “In Norway, men who *claim* to be girls, women, mothers or lesbian, are protected against hate-crimes. But actual girls, women, mothers and lesbians have no such protection. The only \"women\" who are protected against hate crimes in Norway, are those who in fact are men.”",
      "In addition to the possible legal action against her, Amnesty International joined in the criticism of Ellingsen, accusing her of harassing Jentoft by identifying the trans activist as a man on national television, Reduxx reported.",
      "&quot;Gender identity&quot; is per definition a specific kind of subjective belief. The introduction of subjective beliefs in criminal law, is essentially a reontroduction of blasphemy-laws.  Additionally, this kind of blasphemy-laws are especially used against women. pic.twitter.com/UsNui8ogis",
      "Under Norwegian law, Ellingsen could face a prison sentence of up to three years if she is found guilty of misgendering the transgender activist. In January 2021, Norway added gender identity to its list of protected groups under the country’s hate crime laws.",
      "As detailed by Reclaim the Net, a Norwegian man was jailed for three weeks in 2021 and received a substantial fine after being found guilty of misgendering a person who identified as transgender on Facebook.  Ironically, it seems consequences, like a prison term, are still only for humans with a penis in Norway.",
    ],
  },
  {
    slug: "speechless-controlling-words-controlling-minds-by-michael-knowles",
    title: "Speechless: Controlling Words, Controlling Minds by Michael Knowles – Book Summary & review",
    excerpt: "Political commentator and media personality Michael Knowles has authored an examination of politically correct speech in his book Speechless: Controll...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Political commentator and media personality Michael Knowles has authored an examination of politically correct speech in his book Speechless: Controlling Words, Controlling Minds, from Regnery Publishing.",
      "We use language to communicate not only what we perceive and believe, but also to describe reality. This is frequently at odds with politically correct speech, and politics has become a war of words. Knowles makes the point that “according to political correctness, words do not describe reality; they constitute it.”",
      "A book like Speechless couldn’t be more relevant. In an age when the term “birthing person” is used, Knowles points out that our first words, “mama” or “papa,” may be politically incorrect. With speech, people frequently yield out of politeness. Furthermore, in modern America, people remain silent out of fear. Truth is regarded as not only dangerous but as Knowles can confirm: stating facts can get you physically attacked.",
      "Opponents of political correctness frequently poke fun at the absurdity in the latest politically correct phrase du jour or insist on the necessity of free speech. In Speechless, Knowles argues instead that this frequently misses the point: “we must not merely demand the right to speak; more importantly, we must have something to say.” It’s a potent point during a time when one not only can’t dissent with mainstream narratives, but even questioning is forbidden.",
      "Speechless is a thoroughly researched work and the information presented is meticulously referenced. The book is rich with historical lore on political correctness and speech suppression as well as examples from current events. Knowles dismantled many of the enduring historical misconceptions relating to speech.",
      "My biggest takeaway from Speechless by Michael Knowles is that political correctness is not and has never been about coherence. That’s not the purpose. Society cannot simultaneously embrace contradictory beliefs and viewpoints, but as Knowles illustrates, political correctness requires it. For your political correctness to be up to date, no belief can be fixed. Political correctness moves at too rapid a pace. Reality and political correctness are at odds with one another.",
      "Speechless is not light reading however it is written quite eloquently.  Knowles’ command of the English language is masterful, much like his broadcasts. After such substantial reading, it’s fitting he should end with some of his unique and at times satirical humor.  The “Glossary of Jargon,” displays the trademark Knowlesian wit and provides some guidance on navigating politically correct terms.",
      "Speechless is recommended for those curious minds who want to look beneath the surface of politically correct speech and censorship. Knowles’ book is the product of a sharp mind. You will see how the manipulation of words is effective and how they achieve goals with these devious methods.",
      "“People who worry about microaggressions usually have never faced macroaggressions.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“Under political correctness, saying the right thing supplants doing the right thing.” ―  Michael J. Knowles,   Speechless: Controlling Words, Controlling Minds",
      "“Boundaries must constrain free speech if only to protect speech, as in the case of laws against sedition or rules against the heckler’s veto. Tolerance cannot tolerate intolerance. And openness cannot leave itself open to closed-mindedness.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“Until the Supreme Court’s landmark decision in Texas v. Johnson, which created or recognized, according to one’s point of view, the constitutional right to burn the American flag, the law could prohibit desecration of venerated objects. Now courts hold that the First Amendment protects flag-burning. And yet in 2019, an Iowa judge sentenced thirty-year-old Adolfo Martinez to fifteen years in prison for the “hate crime” of stealing and burning a rainbow flag, which symbolizes colorful sexual desires. So in fact, the government still outlaws desecration of venerated objects; it’s just that the objects of veneration are different.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“Both leftist critiques of the ‘American dream’ and conservative defenses of social mobility, each based on its side’s cherished statistics, miss the more fundamental transformation: radicals have replaced the virtue of diligence with the sin of sloth in the pantheon of public values.” ―  Michael J. Knowles,   Speechless: Controlling Words, Controlling Minds",
      "“Psychology Today admitted in 2019 that ‘people with conservative political attitudes tend to have better health than their liberal counterparts because the former place greater value on personal responsibility.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“The gospel of radical leftism- call it any name you like- trades the virtue of charity for the sin of envy. According to the radicals’ new standard, it is greedy to keep one’s own property but charitable to covet and steal the possessions of another, a perfect inversion of the old standards of justice…. The greedy want something for themselves; the envious merely want others not to have it.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
    ],
  },
  {
    slug: "survivorship-bias",
    title: "Survivorship Bias",
    excerpt: "During World War II, fighter planes would come back from battle with bullet holes. The Allies initially sought to strengthen the most commonly damaged...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "During World War II, fighter planes would come back from battle with bullet holes. The Allies initially sought to strengthen the most commonly damaged parts of the planes to increase combat survivability.",
      "A mathematician, Abraham Wald, pointed out that perhaps the reason certain areas of the planes weren’t covered in bullet holes was that planes that were shot in certain critical areas did not return. This insight led to the armour being reinforced on the parts of returning planes where there were no bullet holes.  This wisdom was also beneficially applied to the Skyraider during the Korean War.",
      "This shows that sometimes the missing data may be more meaningful than the available data.  This phenomena is now known as \"survivorship bias\".  Is not only true for matters of aircraft design and defence during war time.  We shouldn't only assess the evidence available to us but consider the evidence we don't have, because it might have been shot down.",
    ],
  },
  {
    slug: "my-account-of-events-part-2",
    title: "My Account Of Events:  Part 2",
    excerpt: "I'm passionate about helping people out of crisis situations. When I was young I went through hell and noone was there for me. I had a few well intent...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I'm passionate about helping people out of crisis situations. When I was young I went through hell and noone was there for me. I had a few well intentioned people try and help. The few times I trusted people I'd tell them what was going on and their eyes would glaze over. They simply didn't have the capability to deal with it. If you mix religion, mental health, violence and other criminal behaviour no one wants to touch it. No one wants to even hear about it.",
      "Religious leaders will teach about difficult topics and pray for you from a distance. But they don’t actually help you. The police help with simple black & white breaches of the law. But that’s it (if you’re lucky). Lawyers help themselves make money and occasionally clients with legal problems. Good psychologists are good. But they don’t help you on the field. A social worker, case manager, coach or chaplain is perhaps the role that exists to effectively help people in these situations. If you’re very lucky.",
      "I spent many years doing therapy and worked hard on my self. I addressed and overcame my own problems.  I still see a psychologist and have other supporters around me as needed.  I started a charity helping people in severe concurrent crisis situations. I did a coaching course. So I refer to myself as a “crisis coach”. I coach people out of crisis and towards their purpose.",
      "In my twenties, I worked for a few organisations helping people out of crisis situations. I learned from some great people. I was in some great teams who helped people develop new life skills, make better choices and depart crisis sustainably. We worked with the worst in Qld.",
      "I considered it an honour to serve my community this way. I also did it after hours on my own time as a hobby.",
      "I often risked my life to save people. Especially a lot of near suicide attempts. I’ve rescued people from burning alive 3x, hanging from a noose, drowning, jumping off a cliff, other various attempts. Many many deliberate, & accidental, car accidents.",
      "I’ve been held up at knife point and other weapons more times than I can remember. One time I was taken hostage and was in a high speed chase.",
      "Every time I was able to save my client from dying & protect the community.  I’ve never had a client die while working with them.  Every suicide I successfully intervened and encouraged them to choose life.  Every time I was attacked with a knife no blood was ever spilled. Unrepentant crims went back to prison. Those who were willing to change went on and improved their lives.",
      "If you’d like to support me with my legal and other costs it’d be appreciated. You can contribute here.#adamsaccount",
    ],
  },
  {
    slug: "my-account-of-events-part-3",
    title: "My Account Of Events:  Part 3",
    excerpt: "One night a woman set fire to the facility we were in, to suicide by fire. She was under house arrest for arson. She was a giant woman. Taller than me...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "One night a woman set fire to the facility we were in, to suicide by fire. She was under house arrest for arson. She was a giant woman. Taller than me and twice my size. The facility was set up like a minimum security prison. We looked after a couple of murderers there who had significant disabilities and intellectual impairment. There were magnetic locks on all drawers, windows and doors. Even the TV was locked behind a Perspex screen box.",
      "The police had taken her out for an appointment that day and returned her in the evening. She was asked if she had a lighter. She said no.",
      "I could see her section from the office but there were 5 gates and doors between us and her. The fire alarm rang. It’s pretty common for these clients to sneak in cigarettes. Nonetheless, I went in as quickly as possible. She had lit the bed on fire and one wall was already burning. I ran back and got an extinguisher. I emptied it on the blaze. I ran back and got the second extinguisher by the time I returned the fire was triple the size. I emptied the 2nd extinguisher pointlessly on the flames.",
      "I yelled at her to get out but she sat down in the fire. I realised then that she didn’t want to get away. She wanted to burn.",
      "The smoke was pouring out of the flames. Thick black smoke from the chest up.",
      "In my mind, I thought I could get her out if I grabbed a blanket, punched her in the head and knocked her out, rolled her onto the blanket and carried her out like Santa Claus.",
      "The other staff had already run away from the facility to get away from the fire. If I left her, she was gonna be trapped because of the magnetic locks on all the doors and gates. She would’ve died a really horrific death.",
      "I realised in that moment she had been so abused that she was already dead inside. Me yelling at her was just reinforcing her reason to burn. I thought a bit of love might get her out alive.",
      "I sat down next to her. It was getting really hot in there. Fortunately sitting down I was underneath the smoke. If you've ever been in a fire you'd know what I mean.",
      "She looked at me like I was an idiot. I asked her something unprofound like, “how are you?” Her incredulity and hatred turned into tears. She understood that I was there for her. I wasn’t going to make her do anything. She started sharing her story. I suggested we move outside to continue talking somewhere cooler. She agreed and we walked away from the flames. No one got hurt.",
      "I learned a lot from that experience.",
      "I’m also passionate about helping people in domestic violence situations. I’ve supported many victims and perpetrators of domestic violence. Prob over 100. My family went through the most extreme experiences of domestic violence. No one was there to provide genuine honest unbiased solutions. I know better than anyone that innocent people die when good people do nothing.",
      "If you’d like to support me with my legal and other costs it’d be appreciated. You can contribute here.#adamsaccount",
    ],
  },
  {
    slug: "in-the-media-coffee-as-a-cure-for-community",
    title: "In The Media:  Coffee As A Cure For Community",
    excerpt: "Link to the original article online 25 November 2017....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Link to the original article online 25 November 2017.",
      "https://www.couriermail.com.au/news/queensland/qweekend/coffee-served-with-a-slice-of-community/news-story/1dcac8b8584c0ddaf16ebcd94c88331d",
      "Cup From Above (a social enterprise that trains people to work in hospitality) grew out of a business deal that went sour. I’d moved back to Brisbane from the Sunshine Coast when an old school friend asked me to be a shareholder in a cafe; it didn’t work out and I was left with the cafe in Aspley (in Brisbane’s north). It was in the worst ­situation possible – it was in debt, running at a loss, the overdraft was maxed out and we had nothing.",
      "Becoming a social enterprise wasn’t a deliberate decision. I just thought, I’ll ­operate a business and try to help people along the way. The homeless and hungry were coming in; we had food, so we’d just feed them. It’s an extension of my faith. I’m not a member of any organised ­religion, more an organic Christian.",
      "I follow the basic teachings of Jesus, ­caring for those who are disadvantaged. That was the heart of it, to try to run a ­profitable business that ­empowered people in the community.",
      "We started training the homeless, drug addicts, former criminals to be baristas and to work in hospitality. They would volunteer to learn and work in the cafe, to get ­experience, till they started getting jobs elsewhere. Cup From Above is five years old now. We recently moved into Fortitude Valley and linked up with a registered training organisation so our trainees earn recognised qualifications.",
      "The downside of training your ­people to have ­exceptional skills and stand out when going for a job is you ­become so fussy about your coffee, and it’s hard to go anywhere to drink stuff that doesn’t taste as good.",
      "We often joke we’re changing the world one cup at a time. A lot of people ask us, why open a cafe? The psychology of ­community building talks about the ­concept of third place, which is the social surroundings separate from home and work. That third place used to be the church 100 years ago. Where can people meet now to have a conversation and build healthy relationships? The coffee shop. Coffee is the symbol for community.",
      "I grew up in Aspley, in a messy family I’m not really close to. After school I ­studied jazz piano and guitar at the Jazz ­Musical ­Institute (at inner-north Bowen Hills), but I needed a job as well and eventually got one in the aged care sector.",
      "That was my introduction to social work, in between (music) gigging. During 10 years on the ­ Sunshine Coast I worked with people with disabil­ities and specialised in those with advanced difficult behaviours. I worked with murderers, ­rapists, the worst of the worst, helping them reintegrate into the community after being incarcer­ated.",
      "So much can be accounted for by bad families and unhealthy environments, being taught how to be violent, but these people can be loved back to life.",
      "Disconnection is the disease and community is the cure. That’s my one-liner. Coffee facilitates community. We’ve seen some beautiful results. Guys who have been taking hard drugs for 10-plus years and had several incarcerations who are now reconnecting with family, getting off drugs, getting jobs; these solutions grew out of healthy relationships. It’s what ­people are craving.",
      "As a culture I think we’re avoiding the one thing that would cure so much, and that’s becoming vulnerable and connecting with someone who is really hurting. That’s hard. You can’t connect with 1000 people but you can connect with one or two or three. Be humble enough to reduce those numbers and love a few ­people who are ­difficult to love.",
      "I don’t have a partner or pet as I’m too busy with Cup From Above, but I love going to the beach, climbing mountains, ­reconnecting with nature. Every couple of weeks some friends and I will go to the Glass House Mountains, where it’s so quiet and peaceful.",
      "I also love reading anything I can get my hands on, particularly bio­graphies. Long Walk to Freedom by Nelson Mandela is probably one of my favourites. I love ­reading about the great things people have done and learning those lessons.",
    ],
  },
  {
    slug: "in-the-media-aspleys-cup-from-above-cafe-to-close-doors-this-month",
    title: "In The Media:  Aspley’s Cup From Above Cafe to close doors this month",
    excerpt: "A social enterprise made the shock announcement it would close its doors on April 29 less than a year after it spent up to $30,000 on upgrades to its ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A social enterprise made the shock announcement it would close its doors on April 29 less than a year after it spent up to $30,000 on upgrades to its facilities.",
      "https://www.couriermail.com.au/questnews/north/aspleys-cup-from-above-cafe-to-close-doors-this-month/news-story/cdc1d53c8a5692d9a4c6e19744554cd8",
      "ASPLEY’S Cup From Above cafe will close its doors in just two weeks after a shock announcement on Facebook earlier this month.",
      "The social enterprise helps everyone from homeless pregnant women to refugees and people struggling with drug addiction.",
      "It will cease operating on April 29 after failing to reach a new lease agreement, organisation founder Adam James confirmed.",
      "“It’s a bit painful but I think it will be a blessing in the end,” Mr James said.",
      "Mr James said the organisation spent up to $30,000 on upgrades to the kitchen only last September when it expected to stay at the site for a further six years.",
      "But now he was on the hunt for a new site somewhere between the CBD and North Lakes that better suited the cafe’s new direction.",
      "Mr James planned to operate two distinct arms of Cup From Above. One would be a for-profit cafe with a greatly reduced role in helping vulnerable people learn job skills. The other arm would be a dedicated charity division, still based in Aspley.",
      "“Profits (from the new cafe) will roll back into the charity arm,” he said.",
      "The Aspley cafe turned a profit only one month out of the past 60, Mr James said.",
      "Mr James encouraged Cup From Above supporters to drop in before the last day of trading.",
    ],
  },
  {
    slug: "in-the-media-rallying-around-bella",
    title: "In The Media:  Rallying Around Bella",
    excerpt: "From sometime in 2012...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "From sometime in 2012",
    ],
  },
  {
    slug: "suspended-coffee-movement-gains-supporters-around-australia",
    title: "Suspended coffee movement gains supporters around Australia",
    excerpt: "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee-movement-gains-supporters-around-australia/5505160...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee-movement-gains-supporters-around-australia/5505160",
      "The 'suspended coffee' movement, which encourages cafe patrons to buy coffees and food for future customers who are in need, is gaining popularity worldwide. Kate Walton and Maria Tickle investigate the progress of the movement in Australia and meet some of its supporters.",
      "This article contains external content that failed to load. It may have been removed or is no longer available.",
      "When you come across a homeless person asking for money on the street do you sometimes wish you could give more than just coins? Maybe a meal and a hot drink?",
      "A grassroots charitable scheme spreading rapidly through cafes around the world allows you to do just that.",
      "The ‘suspended coffee’ movement encourages patrons to buy two coffees, leaving one ‘in suspense’ for someone in need. It's a new incarnation of an old trend that is thought to have started more than a century ago in the working class cafes of Naples.",
      "It’s built the most unlikely friendships and connections; we have millionaires sitting next to people who are borderline homeless, we have  responsible lawyers sitting next to people really struggling with addiction.The story goes that when a person experienced good luck they would buy two coffees, one for themselves, and one for someone in need. After the Second World War the tradition declined but since the global financial crisis of 2007/8 there's been a resurgence and the initiative has spread to the cafes of Europe, US, Canada, South America and Australia.",
      "Cup from Above, a cafe in the Brisbane suburb of Aspley, was one of the first Australian businesses to adopt the Italian tradition and recently extended the scheme to meals as well.",
      "‘If they’re familiar with the system they just come in, grab a token and ask for what they like, just as though they were putting down money,’ says Adam Cocks, the cafe's founder and a former social worker.",
      "He says social media plays an integral role in the promotion of the suspended coffee movement.",
      "‘On the weekend we had quite a few tokens, on Monday we got inundated with people in need of a hot drink and by Monday lunchtime we had zero on the wall. We put a call out to the community to say the rack’s empty and within 24 hours we were overloaded again.'",
      "Cocks' call out led to around 80 food and drink donations. Like many cafes, Cup from Above has a system where suspended coffee and food tokens can be bought at the cafe or online, which means you could donate a meal to anyone, anywhere, any time.",
      "‘It’s built the most unlikely friendships and connections; we have millionaires sitting next to people who are borderline homeless, we have  responsible lawyers sitting next to people really struggling with addiction,’ he says.",
      "Shirley James-Sharry runs a Facebook page that promotes suspended coffee in Queensland. She says different cafes have different systems. While some use tokens, others tally the coffees on a chalkboard. She prefers the token system, as the physical act of hanging the token on the wall is part of the process of giving.",
      "‘Some include your names, I like the anonymousness too, because it’s just that idea that someone that you don’t even know wants you to enjoy something. So there’s that real connectedness and to me it’s kindness and inclusion,’ she says.",
    ],
  },
  {
    slug: "caffeine-kindness-on-abc-radio-national",
    title: "Caffeine Kindness on ABC Radio National",
    excerpt: "Originally Broadcast Sat 31 May 2014 at 9:48am...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Originally Broadcast Sat 31 May 2014 at 9:48am",
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee/5483134",
      "They say that charity begins at home, but now it can start at your local cafe. The growing international trend of buying two coffees and leaving one 'in suspense' is a new incarnation of an old trend that is thought to have started more than a century ago in the working class cafes of Naples in Italy.",
      "The story goes that when a person experienced good luck they would buy two coffees, one for themselves, and one for someone in need. After the Second World War the tradition declined but since the GFC there's been a resurgence and it's spread to the cafes of Europe, US, Canada, South America and here in Australia.",
      "We visit a couple of Brisbane cafes that have taken the suspended coffee movement to heart.",
    ],
  },
  {
    slug: "the-one-where-i-cut-a-worm-out-of-my-chest",
    title: "The One Where I Cut A Worm Out Of My Chest",
    excerpt: "When I was about 20 years old I was working on a farm just outside the township of Shepparton in Northern Victoria.  I was working hard and living in ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "When I was about 20 years old I was working on a farm just outside the township of Shepparton in Northern Victoria.  I was working hard and living in a tent at the edge of an orchard of pears perched beside a rusted out old tractor.  The days were long.  When you’re picking pears you have to start before the sun which meant getting on the tractor at 5am.",
      "I noticed a sore had developed on my chest but it didn’t become a problem until the third day.  I began to work but it was just too painful.  I went over to the farmer and told him.  Mark was 5 foot nothing but compensated for his lack of height with volume and foul language.  He was used to telling people what to do and they did it.  He advised me in colourful detail that I was very lazy and said to get back to work.  I showed him the sore on my chest and it silenced him immediately.  He just started nodding and agreed that I should go to the doctor.  I was living in a tent with no proper bathroom or mirror.  So Mark’s reaction was the first real cause for my concern.",
      "I went to the doctor, he had a look and said he wanted to operate on it.  I asked how much it was gonna cost and he explained a few hundred dollars.  A few hundred dollars which I didn’t have.  I know now that I could have just driven on to the hospital and they probably would’ve just done it for free.  But noone told me that and I had no money.  I had to work.  So the doc gives me some antibiotics.  I asked him for some tips.  Cause this was before internet was everywhere.  You can probably learn how to do surgery on youtube now.  I headed back home to my tent on the farm to operate.",
      "My bathroom was a temporary builders portaloo with a tiny cracked mirror and a miniature hand basin.  I had some scissors, paper towels, a knife and some rum.  I disinfected everything best as possible and prepared my chest for the blade.  Now squinting into mirror I could see it was the size of half a mango on my chest.  Something like a boil had formed on the bottom of it.  That seemed like the best entry point so I lanced it with the blade.  Outrageous amounts of pus flowed like lava from the incision.  At the start I didn’t even have to touch it.  It flowed freely.  I gently massaged from up near my collar bone and more flowed out until it stopped.  Now I could tell there was more in there but something was blocking it.  I tilted my head straight down but the angle wasn’t enough to see clearly.  I leaned in close to the mirror in an attempt to see more clearly and to my horror I could see a small white... something...  I pinched at it.  Then pulled.  I could feel it sliding down under my skin from up near my collar bone.  I paused in terror.  I was having trouble believing what was happening.  I didn’t think this was even possible.  I considered all my options and resolved that, whatever this was, I had to get it out of me.  No-one else was gonna do it for me.  I stood back up and slowly continued to pull this parasite from my chest.  I don’t wanna ruin pasta for you but it looked like fettuccine.  I got what I thought was all of it out. I disinfected and cleaned everything.  Then popped the Flucloxacillin the doctor had prescribed and passed out.  The next day I felt strong as an ox.  I went and worked a full day and doubled my usual quota.  The antibiotics seemed to be working well and I felt great.  Until 2 weeks later it grew back.",
      "I went back to the doctor and relayed what had happened.  He didn't inspire much confidence.  I remember wondering if he was a real doctor.  He was so short his feet barely touched the ground as he sat in his doctors chair.  I remember the white in his eyes were intensely contrasted and against his dark skin and furrowed brow as I told him what I did.  I finished and he slowly nodded and in thick accent queried, “so was it wrrrrigling??”.  I searched his face for humour yet found none.",
      "He then says I need to tell my friend and ask him to come here.  I wait and this guy rocks up who looks like Bill Gates cousin.  He’s about 6 foot 2 all elbows and knees with a pair of magnifying glasses on his face.  I tell the story yet again.  This doctor tells me, \"a branch has snapped off in my chest while I was working and my body \"cocooned\" it and healed over it.  Then I clarify with, \"yeh nah, that didn’t happen\" but he continued to argue with me.  I was starting to think if this is the best help I’m gonna get then I’m toast.  I say, “well then shall we cut it out and have a look see hey?”.  They both said they didn't want to do it.  So I ask them to hook me up with some tools so I can do it DIY again.",
      "They hand me one of those operating trays with all those clean little torture devices and there I am operating on myself again.  I cut a bit more of this worm thing out and the short doctor opens up a plastic medical container and I dropped it in.  The plan was to send it to a university in Melbourne to get it analysed.  I get another prescription of antibiotics and hope to God I had got the last of it out.  The next day I feel great.  A few days later I moved onto another orchard to harvest golden delicious apples.  On this farm, I had a run down old cottage to stay in.  The first night I lay down on the bed and thought that the hum of the electricity was unusually loud.  But as I lay there in the dark I realised the building had never had electricity.  The hum was, in fact, a hive of bees nested in the wall which was confirmed after a few bees landed on me through the night.  I ended up sleeping in my car.",
      "Sure enough, 2 weeks later it started growing back again.  The results came back from the university “inconclusive”.  I had some money together by this time and started to head back to Brisbane.  It was excruciating having the seatbelt press over the wound.  Every bump would send a wave of poison through my blood.  A friend was in Sydney at the time I was driving through.  He let me stay there the night.  I thought this is my opportunity to finally get this thing once and for all.  I took my shirt off and my friend asks me if I had been shot.  He wasn't joking.  I explained to him what had happened so far.  I got a butter knife and slipped it in. Then I got another knife and scraped the rest of whatever the thing was out.  I slept on an actual bed that night for the first time in a long time.",
      "The next day I drove to Brisbane.  After returning home I went to the hospital and spoke to a doctor there.  She examined it and said she thought it was staphylococcus.  It had started to heal over and you couldn't really tell anymore.  So we’ll never know for sure what it really was...",
    ],
  },
  {
    slug: "music-connects",
    title: "Music, Connection, Old Love & Bob Marley",
    excerpt: "Today I went into the city to explore and capture some images and develop some ideas about connection and community.  I sought for photos to illustrat...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Today I went into the city to explore and capture some images and develop some ideas about connection and community.  I sought for photos to illustrate my upcoming Tedx talk/book “Community is the Cure; disconnection is the disease\".",
      "I walked around and to be honest I was so lost in thought listening to Bob Marley that not so many great photos were taken.  \"One Love! One Heart! Let's get together and feel all right\"... his lyrics constantly pound out a message of connection to his congregation of emancipated sojourners who had triumphed against racial injustice but were still facing overcoming a planetary divide over mostly mere skin colour.",
      "I came across an aboriginal man sleeping under a blanket in a public park.  Obviously homeless and classically disconnected from what we would consider a full and healthy life.  Or maybe he'd just had a fight with his wife and took up Bob Marley's sagely advice and thought \"no woman, no cry\" and just thought he'd keep the peace and have a nap in the park.  Probably not but maybe my assumption was prejudiced.  As I took the photo I noticed the well dressed couple to his left.  Sitting in an astoundingly beautiful park immersed in all the glorious warm sunshine Brisbane's winter days have offer and I noticed they didn't talk once.  They were seated together, the sun is shining, but unanimously, independently, disconnectedly, autonomously and vicariously seeking a transcendental virtual high from beyond their smart phones.  Maybe they were more disconnected than the homeless man who lay mere metres away.",
      "Connection is what we all crave.  Connection with God, the universe, our friends, our lovers, our colleagues, our comrades, our brothers, our other half, our planet, our environment, our animals.  It drives every part of us and fuels our greatest endeavours, our most noble long lasting marriages.  And our craving for connection misplaced and misguided is sufficient cause for our worst choices.  I've found that even great people, connected the wrong way or the wrong time, simply risks bringing about a more painful disconnection, both within and without.  You see even connection is painful.  It hurts to forgive, and it hurts to be patient, it hurts to be overly gracious but nothing great was ever built painlessly.  We use the word passion often to refer to a sexually driven explosive encounter.  But passion comes from the latin word \"passio\" which literally meant \"to suffer\".   Nothing more passionate than elderly couples (that's a dangerous sentence but you know what I mean).  Because you know that old love was suffered and fought for.  The truth is, everyone is going to hurt you.  You just got to find the ones worth suffering for.  It's that rich selfless old love that anchors our communities.  Out of those wells of wisdom there's a surplus we can draw on to love on difficult homeless people, drug addicts, the mentally ill.  Maybe it also works the other way round?  Maybe by loving difficult people, the ones we choose to journey life with become easier to love?  I don't know.",
      "I stumbled across Bryn who was busking on his keyboard near Central Station.  We got chatting and had a bit of a jam.  Then a man, who could've passed for being homeless apart from the valuable luggage he carried, turned out he was a Romanian cellist backpacking across Australia.  He literally got off the train into Brisbane city for the first time and we were the first people he met.  Well I couldn't turn down the opportunity to challenge my new friend to a musical duel.  Man this cellist could play.  I had just been thinking how music brings people together.  \"True love that now exist is the love I can't resist, So jam by my side.  We're Jammin' I wanna jam with you\".  I think Bob is talking about music?... but it might be... let's assume it's music.  He drops this line in that song \"We all defend the right; Jah – Jah children must unite\".  Jah is an abbreviation of Yahweh.  I think Bob believed we are all children of the same God, black and white, rich and poor and he used music as his pulpit.  I'm not the type to go and roll a joint now but I have gleaned some wisdom about community and connection from his sermons.  Here's a clip of our little jam session...",
      "We only shared a few words before launching into this debate of melodies.  Music is an international language.  If you've studied the language then you're equipped to talk to anyone on the planet who also knows it.",
      "I have an affinity for jazz.  I've studied it and I can play a bit but I've since devoted my hours to other endeavours and can't really swing like I want to.  For years I've questioned my affection for the genre and there are a few answers which I won't go into on this blog post.",
      "You see music is all about rhythm and melody.  I mentioned before that there's only one international language for music.  Which is true.  But there are thousands of genres of music right.  I guess like dialects.  They have nuances and variations that they value that defines the genre.  For example 80's rock valued loud egotistical guitar solos.  Jazz values the use of dissonant harmonies that are placed together intentionally, thoughtfully and arrogantly creating something far more exquisitely beautiful than any genre that segregates those combinations of tones.",
      "You see life is messy.  Loving people who are different is uncomfortable.  It's easy to just separate ourselves from them.  Walk on the other side of the street, pretend we didn't see them or even just neglect to proactively smile.  We can sit back and allow our governments to make things simple and segregated.  But when we do that we take the jazz out of life.  Life is magnificently dissonant and if we choose to acknowledge and embrace that with our hearts and arms wide open we both offer and receive redemption.",
    ],
  },
  {
    slug: "my-account-of-events-part-5",
    title: "My Account Of Events:  Part 5",
    excerpt: "April 2019, a school chaplain from SU QLD referred \"someone in need\" to my charity.  The woman was stated to be a victim of DV and facing homelessness...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "April 2019, a school chaplain from SU QLD referred \"someone in need\" to my charity.  The woman was stated to be a victim of DV and facing homelessness.  We provided immediate support by way of money for rent, food & furniture.  She explained to us that she had a lot of debt and had been selling herself to cover living costs.  We offered her an honest job as a cleaner and paid her wages according to Fairwork Australia.",
      "She explained to us that she had over $50,000 on credit card debts and consequently had to make a minimum of $700 per week just to cover all the interest payments and basic living costs. She was married to an Australian man in the middle of nowhere in the outback. She had met him online and moved to Australia to marry him. She explained that not long after they were married he became violent and had to leave the marriage. She then moved onto another relationship and that relationship was also violent. The daughter was with her first marriage to a man in the United States. She said he was also angry and violent. She said he had abandoned them when he learned that the daughter had a disability. She described him as a \"loser\".",
      "She didn't have a car. While she was engaged with our services, her daughter wasn't allowed to attend school because of issues with their Visas. This meant for her to go to work, her daughter had to attend. We specifically sought after cleaning jobs that were flexible and with clients who were understanding and would allow her daughter to be there. Not only that but we had to drive both her and the daughter, and the other staff, and the equipment to each job. Fortunately, we were able to secure several bond cleans which met all these criteria.",
      "She asked for legal support to help her obtain Permanent Residency status here in Australia. She explained that because she was divorcing her Australian husband she was at risk of being deported back to the U.S.  Her daughter had been ill & they were not eligible for medicare as they were now on a Bridging Visa.  Her daughter also has a disability and required medical support. She had already accrued thousands of dollars in debt from various hospitals around Australia.  I spoke to a friend of mine who is a great lawyer.  He agreed to do what he could to help her get her visa.  I relayed this to her and asked her for all her documents to give to the lawyer to assist with her immigration application.",
      "Around the 14/4/19, we had a conversation. One of the lawyers had raised the possibility of a Criminal Justice Visa and asked if there were any current charges pertaining to the domestic violence. If there were charges pending against one of her partners that she was allegedly abused by then she may be eligible. She did not know about the Criminal Justice Visa. She said that no charges were made against anyone despite her contacting police many times in an attempt to charge them.",
      "I relayed this good news to her and met with her to collect the supporting documents. I asked to meet with her at a cafe to collect documents (instead of in her home). We had to go through the documents so I imagined it would be thirty minutes to an hour. I was very clearly not asking her on a personal romantic date. The purpose of the meeting was to collect the documents, review them and assist with compiling what was actually necessary for the lawyer. She stated she did not want to meet with me at a cafe. I said \"that's fine\", attempting to address what I perceived to be the awkward subtext and indicate this wasn't social but professional. However, if she wanted me to collect the documents then we would have to meet.",
      "She seemed to understand but then insisted I just collect them from her home and go through them there. For the sake of expediency and lack of reasonable alternatives I agreed. Her daughter was present the entire time but no other adults were present. What's ridiculous about all this is that no accusations have been made about me being alone with her in her home. In my mind at the time, this is what I was most worried about.",
      "Now, upon receiving the documents it was apparent she was lying about many details of her story. It's actually fairly normal for people in crisis to lie about their situation. It's so frustrating as a support worker. It seems the extremity and distress of their crisis situations leads them to disregard their higher virtues to most swiftly get back to a semblance of safety. These lies might look like stating that they would \"never take drugs\" but then not disclosing that they're smoking marijuana every day. Or saying they \"don't have a criminal history\" and then it turns out they got charged for shoplifting several times when they were younger. This sort of thing is common.",
      "The real issue is when someone you're supporting is lying to you about the entire situation and effectively using you to achieve some ulterior or wicked motive. I've come across this several times over the years and we developed these organisational principles to help guide our responses when coming across these extremely complex cases.",
      "The documents she gave us revealed that she was here in Australia with her daughter illegally.  I calmly questioned her about the discrepancies in her story in contrast with the documents. At that point, I still thought she might have been a legitimate victim but was embarrassed about the stupid decisions she'd made. One court document revealed that the biological father of the daughter had taken her to court to have shared custody of the child. This was fitting the description of a \"loser who'd given up on his daughter because she had a disability\". Amongst the documents was information about her Australian husband and the \"domestic violence\" she had endured. The husband's police records were there too. There were 2 pages detailing all the crimes he'd committed. He was a dangerous violent criminal. His psych records showed that he's a diagnosed schizophrenic. Amongst the crimes were assaulting police officers, robbery, assault and more. What's more is that he, and his family, claimed that she had used him to come to Australia.",
      "Then there was the issue with her parents. She told us they were abusive and she could never speak to them or return to the U.S. because of them. After one job she asked us to stop in to the post office because she had a parcel from the U.S. she was very excited to receive. When she collected she explained that it was filled with her favourite American candy. I asked who it was from. She said, \"her mom\". She explained her parents were very wealthy and had a big beautiful home but they were very strict and mean. She said they could send her money so that she wouldn't have to be poor but they chose not to because they wanted to control her. She said her mother had paid for open ended plane tickets for her and her daughter to return home but she wouldn't take them.",
      "It seemed considering all this we weren't supporting someone who actually sincerely needed help. She was not facing imminent homelessness. She has a safe home in her country that she could choose to return to. However, she would have to co-parent with the father of her child and be a responsible adult. Instead, she was choosing to risk her daughter's life in a foreign country, with no medical insurance and prostituting herself to pay for rent.",
      "I also found out that the chaplain who had referred her to us was continuing to support her. Only a week or so earlier she had been singing our praises. Then toward the end of April, she had gone cold on us. Out of professional respect, I called her up and explained the concerns we were facing and the evidence we had found against her. The chaplain seemed unwilling to discuss it and was quite vague on the phone. I thought she must have been fed the same story \"H\" had told others.",
      "There are several issues here though. A woman has brought a child to Australia illegally. It's effectively a case of child stealing/abduction. The child has complex medical needs and has no medical insurance or cover whatsoever. The mother has had the child around violent and dangerous individuals, not been able to adequately feed the child or care for her responsibly. But the chaplain was continuing to support her. In my mind and in my experience working in this field, these factors compelled me to report her actions to the authorities.",
      "I contacted the Chaplain's manager at SU Qld who I personally know from working together supporting other individuals in complex situations in the community. I requested a meeting to sit down with the chaplain and ideally the client too. I was hoping a plan could be worked through to discuss the concerns and work out a solution that is ultimately best for the child, that is legal, safe and fair. SU Qld management and the chaplain declined to have a meeting. In the subsequent weeks I heard the chaplain was relaying gossip that came from \"H\" to donors of Liberty. At that point, I sent the chaplain a stern email requesting she discontinue any further defamatory remarks.",
    ],
  },
  {
    slug: "green-tea-and-fat-loss",
    title: "Green Tea and Fat Loss: What's the Connection?",
    excerpt: "Let's have a yarn about green tea and how it's helped me shed a few kilos....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Let's have a yarn about green tea and how it's helped me shed a few kilos.",
      "Green Tea and Fat Loss: What's the Connection?",
      "Green tea has been around for forever, and it's packed with goodies called catechins, especially one named epigallocatechin gallate (EGCG). These little rippers are believed to boost our metabolism and help burn fat. A study from way back in 1999 found that folks who had a tea rich in catechins saw a drop in body fat, suggesting green tea might give our fat-burning engines a nudge.",
      "Another piece of research showed that green tea could increase energy expenditure and fat oxidation in healthy blokes, hinting at its potential to aid weight loss.",
      "A more recent review in 2024 looked into green tea extract's effects on obesity. What did they find? Green tea extract might help tackle obesity by influencing various fat-related factors in our bodies.",
      "A Few Things to Keep in Mind",
      "While green tea sounds like a top addition to our daily routine, it's not without its quirks. Here are some things to watch out for:",
      "Green tea could be a handy ally in our quest for better health and weight loss. But, like with all good things, moderation is key. Enjoy a few cups a day, keep an eye on how your body reacts, and remember that no single drink will do all the heavy lifting. Pair your green tea habit with a balanced diet and regular exercise, and you'll be on the right track.",
      "Cheers to making healthier choices, one cuppa at a time!",
    ],
  },
  {
    slug: "whats-in-a-name-other-noteworthy-adam-james-es",
    title: "What's in a name? Other Noteworthy Adam James – es",
    excerpt: "It turns out the name Adam James is shared by several public figures across diverse fields. Here’s a look at some of the more prominent ones, what the...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "It turns out the name Adam James is shared by several public figures across diverse fields. Here’s a look at some of the more prominent ones, what they do, and links to learn more.",
      "A British actor known for theatre, TV and film roles. He trained at the Guildhall School of Music and Drama and has appeared in productions such as Band of Brothers, Dr Foster, and more. Wikipedia+2IMDb+2Website/Profile: His IMDb page – IMDb – Adam James IMDbShort summary: Well-established actor with a range of credits in UK and US productions, theatre and screen.",
      "An American football player who played at Texas Tech Red Raiders; his father is former NFL player and analyst Craig James. Texas Tech Red Raiders+2247Sports+2Website/Profile: Official roster page – TexasTech.com – Adam James Texas Tech Red RaidersShort summary: Former college football wide receiver/tight end, involved in high-profile team stories and media coverage.",
      "An Australian recording artist blending Indigenous heritage, country, blues and jazz. He hails from Quandamooka Country (North Stradbroke Island) and has released several albums, while performing across Australia. adamjames.com.au+1Website/Profile: adamjames.com.au adamjames.com.au+1Short summary: A talented singer-songwriter whose music and cultural roots converge — offering a distinctive voice among artists.",
      "He’s also the founder of Business Advice and The Upkeepers, initiatives focused on helping Australian businesses scale sustainably. Through his personal work at abjames.com, Adam shares insights on business, mindset, and modern marketing — blending strategy, creativity, and purpose to help people and brands grow.",
    ],
  },
  {
    slug: "caffeine-and-kindness-the-story-behind-the-suspended-coffee-movement-in-australia",
    title: "Caffeine and Kindness: The Story Behind the Suspended Coffee Movement in Australia",
    excerpt: "Originally broadcast on ABC Radio National’s “First Bite” with Adam James...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Originally broadcast on ABC Radio National’s “First Bite” with Adam James",
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee/5483134",
      "They say charity begins at home — but sometimes, it starts at your local café.",
      "Across Australia, a quiet but powerful movement has been brewing — the suspended coffee. It’s a simple act of kindness: when you buy your morning coffee, you pay for an extra one and “suspend” it for someone in need. Later, that coffee can be claimed by anyone doing it tough — no questions asked, no forms to fill, just goodwill in its purest form.",
      "The idea of suspended coffee (or caffè sospeso, as it’s known in Italian) began more than a century ago in the working-class cafés of Naples. When someone was blessed with good fortune, they would pay for two coffees — one for themselves and one for a stranger who couldn’t afford it.",
      "It was a simple yet profound social ritual — a way to express gratitude and acknowledge that sometimes, luck and hardship are only a cup apart.",
      "After World War II, the practice faded, but when the Global Financial Crisis hit in the late 2000s, it re-emerged. Across Europe, North America, South America and eventually in Australia, the suspended coffee movement returned as a gentle reminder that generosity still matters — even in difficult times.",
      "In 2014, journalist Adam James explored this small but significant act of community in a feature for ABC Radio National’s “First Bite”. The segment, titled “Caffeine and Kindness,” took listeners inside Brisbane cafés that had embraced the idea of suspended coffees.",
      "These cafés weren’t driven by marketing campaigns or corporate social responsibility targets. They were driven by empathy. Regulars would quietly pay for an extra coffee; café owners would mark it down and serve it later to someone who needed a moment of warmth — whether it was financial hardship, loneliness, or just a bad day.",
      "As James noted, the suspended coffee wasn’t really about caffeine at all. It was about connection. It turned an ordinary café into a small but meaningful hub of human kindness.",
      "For the person who receives it, that free cup of coffee might mean much more than a caffeine fix. It’s a reminder that they haven’t been forgotten — that community still exists, and that even a stranger’s kindness can make a rough day a little easier.",
      "And for the person who gives, it’s a simple way to practice compassion in daily life — to act on the belief that kindness doesn’t need to be grand to be good.",
      "A decade on from its broadcast, Caffeine and Kindness still resonates. The suspended coffee movement continues to percolate quietly across cafés in Australia, reminding us that the simplest gestures often have the most lasting impact.",
      "In a fast-paced, contactless world, it’s comforting to know that something as small as a coffee can still bring people together — one cup, one act of kindness at a time.",
      "Adam James is a storyteller, business consultant and juggler who explores the intersection of culture, community, and everyday kindness. His work has appeared on ABC Radio National, and through his platform ABJames.com, he continues to share stories that inspire compassion, curiosity, and human connection.",
    ],
  },
  {
    slug: "community-connection-over-coffee-local-police-and-residents-break-the-ice",
    title: "Community Connection Over Coffee: Local Police and Residents Break the Ice",
    excerpt: "In March 2016, residents in Brisbane North were invited to join a unique outreach session by the Queensland Police Service that paired a casual coffee...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "In March 2016, residents in Brisbane North were invited to join a unique outreach session by the Queensland Police Service that paired a casual coffee setting with meaningful conversation. The initiative (originally referred to as a “local police expresso” session) provided a relaxed opportunity for community members to meet officers, ask questions and build trust.",
      "The appeal of such initiatives lies in their informal framing — people meeting face-to-face, over a cup of coffee, removing uniform and procedural distance. The event underscored how law-enforcement agencies can engage proactively with the public, beyond reactionary policing.",
    ],
  },
  {
    slug: "a-vengeful-act-remembering-the-maroochydore-arson-case",
    title: "Remembering one of the Sunny Coast Arson Cases",
    excerpt: "This event happened in October 2010.  It was one of many arson events I had while doing this work....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "This event happened in October 2010.  It was one of many arson events I had while doing this work.",
      "I had asked the young man to go to bed the night before.",
      "The police officers told me he said that he intended to burn me alive while I slept.  He didn't receive any consequences as per usual.",
      "If I didn't put the fire out the whole house would've burned.  I put the fire out best I could and went through each room to make sure he wasn't inside.  The fire had jumped from the stove into the oily rangehood and had started spread inside the walls and ceiling cavities.  I grabbed the fire extinguisher to put it out completely... but he had emptied the fire extinguisher outside and replaced it.  It was empty.After 19 years doing this work, this is what I think.  There is this idea you should be either 1.  Kind & Liberal.  OR 2.  Tough & Conservative.  It's neither and both.  If someone does something really bad, like try to burn them alive in their sleep.  The consequences should be proportionate.  This young man is a danger to society.  However, there should be a liberal opportunity to earn freedom.  If he behaves in a maximum security prison, then he can go to a minimum security farming prison, if he behaves there, then he can get day passes.  If he doesn't improve his behaviour, he should stay locked up and serve a full sentence like any other arsonist.",
      "I continued working with this young man for a few more months to make sure he was in a new safer house with better supervision.",
      "Link to the original article",
    ],
  },
  {
    slug: "actor-adam-james-a-life-in-performance",
    title: "Actor Adam James: A Life in Performance",
    excerpt: "Source: Grokipedia – Adam James (actor)...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Source: Grokipedia – Adam James (actor)",
      "Adam James (born 9 September 1972, London) is a celebrated English actor whose work spans television, film, and theatre. A Guildhall School of Music and Drama graduate, and godson of Jon Pertwee, James has earned acclaim for his adaptability across genres—from Doctor Foster and Vigil to the Broadway stage in King Charles III.",
      "The son of actress Polly James, Adam grew up surrounded by creativity. His formal training at Guildhall placed him among peers like Dominic West and Daniel Evans, shaping a foundation for his nuanced, disciplined approach to acting.",
      "Across decades of work, James’ credits include Band of Brothers, Doctor Who, Ashes to Ashes, and Belgravia. He portrayed Prime Minister Evans in King Charles III on Broadway (2015), Hovstad in An Enemy of the People (2016), and Glinda’s father in the upcoming Wicked adaptations (2024–2025). On screen, his range extends from war drama to political satire and high-fantasy storytelling.",
      "James exemplifies the quiet excellence of a craftsman actor—never chasing celebrity but mastering substance. His work reflects commitment, adaptability, and emotional intelligence—qualities that resonate far beyond the stage.",
      "He married former actress and psychotherapist Victoria Shalet in 2015. The couple welcomed their first child in 2016, and James has a daughter from a previous relationship.",
      "Read more: Grokipedia – Adam James (actor)",
    ],
  },
  {
    slug: "coffee-community-and-second-chances-how-one-cafe-turned-a-setback-into-purpose",
    title: "Coffee, community and second chances: how one café turned a setback into purpose",
    excerpt: "The story of Cup From Above is a reminder: when you align mission and model, you not only survive bumps in the road—you thrive....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "The story of Cup From Above is a reminder: when you align mission and model, you not only survive bumps in the road—you thrive.",
      "On the “Brisbane Breakfast” show, ABC Radio Brisbane featured the café’s recent move and relaunch after a forced relocation. ABC",
      "https://www.abc.net.au/listen/programs/brisbane-breakfast/cup-from-above/8589250",
      "For five years the café operated at a site in Aspley, serving more than just coffee: it was a welcoming space for people at risk of homelessness, a hub of training and support. Then the site was lost. The business had to vacate. Suddenly, the café with a heart found itself displaced. ABC",
      "Rather than fold, the team sought a new home—and landed in Fortitude Valley. The move signifies more than geography; it’s a fresh chapter. Their founder, Adam James (in the radio piece), talks about being “grateful his charity café has found a new home.” ABC",
      "You’re focused on reclaiming health, better habits, reinvention—and this is a parallel story. Consider:",
      "Cup From Above isn’t just a café—it’s a case study in integrating business, mission and community. For anyone trying to reclaim or rebuild—health, business, identity—the lessons are direct and relevant.",
      "If you’re on a path of change (which you are), notice how everyday business stories mirror personal ones. The courage to say “we’ll move, we’ll adapt, we’ll keep the mission alive” is just as applicable to lifting weights, changing diet, changing mindset, as it is to shifting café premises.",
    ],
  },
  {
    slug: "inclusion-confusion",
    title: "Inclusion Confusion",
    excerpt: "Last year I was in a forum with some of the top leaders from Queensland to develop a thirty year plan for the state.  One of the questions was \"How do...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Last year I was in a forum with some of the top leaders from Queensland to develop a thirty year plan for the state.  One of the questions was \"How do we advance education?\". One politician suggested we need to remove people with disabilities from the classroom (a person with autism was the example used).  The reason... \"they pull all the other students down\".",
      "Having worked with people with disabilities for 10 years... I'm glad I was there to disagree!",
      "\"... the sick, weak, deformed children, in short, their destruction, was more decent and in truth a thousand times more human ...\" -Adolf Hitler",
      "Hitler and his Nazi's were driven by a social philosophy called eugenics.  The idea that we could improve the human species by discouraging reproduction by persons having genetic defects or presumed to have inheritable undesirable traits.",
      "When we take it to this extreme it's obviously wrong but what about the weird loud autistic kid disrupting the classroom and causing the other kids to get sub-optimal grades?",
      "The young man in the photo on the right is Connor Perring.  Connor is legally blind.  Last week he told me that going through school he was separated from his peers and placed with the \"special kids\".  He was continually told what he could NOT do.",
      "Connor now has his own music production company called Epic Music Australia.  He single handedly organises the community events at Cup From Above.  Connor every now and then needs some support because of his limited eyesight.  But since given the opportunity to show his capABILITY, despite his disability, he has flourished.",
      "Something worse happens when we segregate young men like Connor.  We have classrooms of children growing up in a world with only \"normal\" people.  We rob these children of the lessons of how to connect and communicate with complex, unusual and colourful individuals.",
      "\"It is time for parents to teach young people early on that in diversity there is beauty and there is strength.\" -Maya Angelou",
      "Working with people with disabilities for ten years made me a better person.  They taught me rich lessons that I could not have learnt from anyone else or from any book.  If we separate these wonderful and colourful people from the \"smarter majority\" it's true that they may get better marks and become more efficient accountants and lawyers and teachers.  However if we stay together we will get better at being patient, we'll develop better fathers, we will all be better at community.",
      "You don't need to run a program or do a course to learn how to do this.  You shouldn't have to artificially create diversity by statistically delegating teams and boards by gender and race.  Just delete all prejudice in your heart and diversity will happen naturally around you.",
      "Here's an old shot of my team at Cup From Above.  I don't think you could get more diverse than us!  Each team member has something unique to offer and plays a vital role.  I believe that's in part what makes us so strong as a team and I believe we should embrace this as a culture.  Queensland and the world will be better for it.",
    ],
  }
  {
    slug: "me-on-postcard-radio",
    title: "Me on Postcard Radio",
    excerpt: "I had the honour of being interviewed by Paul Wetzig from Postcard Radio.  Here's the link if you wanna hear me talk with Paul about how my faith has ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I had the honour of being interviewed by Paul Wetzig from Postcard Radio.  Here's the link if you wanna hear me talk with Paul about how my faith has inspired certain parts of what we do at Cup From Above.",
      "http://www.postcardradio.com/changing-the-world-one-cup-at-a-time/",
    ],
  }
  {
    slug: "a-lesson-from-john-wooden",
    title: "A Lesson From John Wooden",
    excerpt: "A few years ago I learnt about John Wooden.  Considered by many as the greatest basketball coach of all time.  He had an extraordinary leadership styl...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A few years ago I learnt about John Wooden.  Considered by many as the greatest basketball coach of all time.  He had an extraordinary leadership style which transcended the game of basketball.  I devoured several books on this great man and it has impacted how I do what I do now.",
      "He saw his job as an opportunity to mentor the men in his team.  Winning basketball games was merely a result of Wooden working with them to become better people.",
      "“Success comes from knowing that you did your best to become the best that you are capable of becoming.” ― John Wooden",
      "“Never try to be better than someone else. Learn from others, and try to be the best you can be. Success is the by-product of that preparation.” ― John Wooden",
      "There are only 5 people in a basketball team with a few reserves.  Wooden consistently mentored these small teams year after and has now positively influenced millions of people.  How is this possible?  It was not through quantity but by the quality of his character and consistency.",
      "Every day at my cafe I have a small group of people volunteering.  Most of them struggling with some sort of disadvantage.  Years ago I started taking this opportunity to train them with hospitality skills so they could become great baristas.  More than that I now do what I can to help them as people.  To teach them, encourage them & help them make the best choices possible.  Great coffee is merely a by product of them seeing their potential as people.",
      "This picture on the right is a photo of my team sitting down reading the 7 Habits Of Highly Effective People together.  With the common goal of learning together and encouraging one another to reach the potential.  Allocating time for \"Personal Development\"  is not uncommon in today's workplace.  I guess what's unusual for us is in that photo is the most diverse group of people you could possibly put together:  an ex-con, a middle aged woman, a paranoid schizophrenic, a personal trainer... to name a few.  Your background or your current level of ability does not prohibit you from advancing forwards unless you allow it.",
      "This week most likely you will be around a team in your workplace.  You may not be the CEO.  Your current position does NOT matter.  You have the opportunity to encourage the people around you, educate them as best you can and empower them.  Just as Wooden did.  What you do is irrelevant.  HOW you do it can have an immeasurable impact",
      "If you want to read more about John Wooden I recommend starting with \"Coach Wooden's Pyramid of Success:  Building Blocks For A Better Life\".",
    ],
  }
  {
    slug: "thoughts-on-homelessness",
    title: "Thoughts on Homelessness",
    excerpt: "I've spent this week on the streets of Brisbane.  I'm up to day six.  Two more nights to go.  Every day I've been speaking with homeless folk and list...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I've spent this week on the streets of Brisbane.  I'm up to day six.  Two more nights to go.  Every day I've been speaking with homeless folk and listening deeply to their stories.  I've been wearing track suit pants and a flanno I bought for four bucks at an op shop on Monday.  My stench is pretty accurate by now too.  People are looking at me differently.  It's diminishing.  Soul crushing.  I feel powerless... voiceless.",
      "Last night we slept under Kurilpa Bridge.  There were several homeless folk hidden around a wall.  We slept right under the bridge in a more comfortable spot out of the way but visible if you were looking for us.",
      "The police arrived at 2am.  They told us to move on.  I asked if we had to... we had an appointment near there the next morning in only a few hours and really needed the sleep.  She said all homeless folk needed to move on.  I asked her where they would go.  She said she didn't care just not here.  I told her that we weren't actually homeless but we were raising awareness for the homeless.  She said we weren't doing anything for homeless people.  I told her I ran a charity and we kinda actually do quite a lot (trying not to be smart about it).  She said we still had to move on.  I asked if all the other homeless folk who were hidden around the corner would have to go too.  She said it was okay if they were hiding.  Like that was a real solution.  And I guess it is because she's employed to police what the community charge her to do... what most people are too afraid to do.  It's cowardly members of the community who call them on the their smart phones while going for a jog in their Lorna Jane gear before they start their six figure salary job for the day... they're just outsourcing the bullying to the police.  So for the police if the homeless bloke is effectively hidden they don't get the phone call and the issue is solved.  If the problem is hidden we, as a community, don't need to deal with it.  But that's not okay.  And that's what I told her.  Hiding the homeless isn't solving it.",
      "Proverbs 31:8-9 says \"Speak out for those who cannot speak, for the rights of all the destitute.  Speak out, judge righteously, defend the rights of the poor and needy.",
      "Every person I've spoken to has had several devastating blows that have driven them on to the street.  Yeh there's a few weirdos who actually choose it.  Most want to live a healthy normal life and they're doing what they can to get there.",
      "I'm filled with rage over what our society is doing to these people.  We just pick on them.  We're kicking them while we're down and we need to stop.  Hear this, if you're doing nothing right now, then you're part of the problem.",
      "There are a few hundred beds in various hostels around Brisbane.  The problem is there's a few thousand homeless people.  Whatever family and friends they are lucky to have remaining are here in Brisbane so we can't just send them away without causing even more harm to already strained relationships.  Until we setup more accommodation for them they're gonna be on our streets and it's our responsibility to look after them as the church, as a community... and as a city.",
      "We need to face this.  It is an issue.  We need to stop looking away and start dealing with it.",
    ],
  }
  {
    slug: "are-you-hsp",
    title: "Are you a HSP?",
    excerpt: "A highly sensitive person (HSP) experiences our world differently than most people.  It is a biological difference, not psychological, that they’re bo...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A highly sensitive person (HSP) experiences our world differently than most people.  It is a biological difference, not psychological, that they’re born with, highly sensitive people are more aware of subtleties and process information deeply. They tend to be creative, insightful, and empathetic, but it also means they’re more prone than others to stress and anxiety.",
      "It is not a disease or a disorder.  It’s often misunderstood because only around 20 percent of the population are HSPs.",
      "Are you a highly sensitive person? If you relate to most of these signs, there’s a good chance you’re a HSP.",
      "The cornerstone of being an HSP is you process information deeply. This means you do plenty of reflecting on your experiences — more so than other people. Unfortunately, this also means you’re more prone to negative overthinking. Sometimes you obsessively play events over and over in your mind or spiral into anxious thoughts.",
      "Although highly sensitive people are not necessarily empaths, HSPs tend to “absorb” other people’s emotions, almost like an empath would. It’s not unusual for an HSP to walk into a room and immediately sense the moods of the people in it. That’s because highly sensitive people are very aware of subtleties including facial expressions, body language, and tone of voice that others may miss. Pair this with the sensitive person’s naturally high levels of empathy, and it’s no wonder HSPs feel emotions that are not their own. As a result, highly sensitive people tend to suffer from frequent emotional exhaustion.",
      "For instance in school, timed quizzes or speed tests would have made you extremely anxious perhaps to the point of not being able to perform as well as you normally would. As an adult, when you have too many things on your to-do list and not enough time to finish them, you feel very stressed. HSPs are more sensitive to stimulation, and time pressure is no exception.",
      "Whether you’re an introvert or an extrovert, you need plenty of downtime, preferably alone. You often find yourself withdrawing to a quiet, darkened room at the end of a long day — in order to lower your stimulation level, soothe your senses, and recharge.",
      "When someone sneaks up on you, you jump like a frightened cat. Many HSPs have a high “startle reflex” because even in non-threatening situations, their nervous systems are dialed up.",
      "Everyone hates violence and cruelty, but for highly sensitive people, seeing or hearing about it can be extremely unsettling. You might be an HSP if you can’t watch very scary, gory, or violent movies without getting upset or even feeling physically ill. Similarly, you may not be able to stomach a news story about animal cruelty or similar brutal acts.",
      "HSPs seek answers to the big questions in life. They ask why things are the way they are and what their role in all of it is. If you’re a highly sensitive person, you may have always wondered why other people aren’t as captivated by the mysteries of human nature and the universe as you are.",
      "You’ve always been sensitive to what you wear. Scratchy fabric or restrictive clothing — like pants with a tight waistband or pantyhose — really irritate you. Of course, non-HSPs might dislike these things too, but an HSP will carefully select their wardrobe to completely avoid them. And if an HSP inadvertently wears one of these things out, the discomfort may detract from their entire experience.",
      "Many HSPs are more sensitive to pain of all kinds — headaches, body aches, injuries, etc. — than non-HSPs.",
      "Again, due to your deep processing, you have a rich inner world. As a child, you may have had several imaginary friends, enjoyed fantasy-based play, and were prone to daydreaming. As an adult, you may have vividly realistic dreams.",
      "HSPs take comfort in their routines, because the familiar is far less stimulating than something brand new. For this reason, change — both positive and negative — can really throw off HSPs. For example, when dating someone new or getting a job promotion, HSPs may feel as equally stressed as they do overjoyed. Generally, HSPs need more time than others to adjust to change.",
      "Similarly, moving to a new home or traveling (even if it’s just a “fun” vacation!) can be quite difficult for you, because your senses are bombarded with so much new stimuli.",
    ],
  }
  {
    slug: "chaplins-great-speech",
    title: "Chaplin's Great Speech",
    excerpt: "Charlie Chaplin & Hitler were both born within a week of each other (Chaplin 4/16/1889, Hitler 4/20/1889), they were roughly the same height and weigh...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Charlie Chaplin & Hitler were both born within a week of each other (Chaplin 4/16/1889, Hitler 4/20/1889), they were roughly the same height and weight and both struggled in poverty until they reached great success in very different fields. When Chaplin learned of Hitler's policies of racial oppression and nationalist aggression he seized the unlikely serendipitous opportunity.",
      "His uncanny resemblance of Hitler gave this world famous comedian a powerful satirical bullet to fire at the dictator.  Better than simply deriding Hitler he delivers what I believe to be the most beautiful articulation of what the world should and could be.",
      "Chaplin himself almost cancelled the film as the extent of Nazi atrocities  became clearer. The film star feared there was simply nothing funny about Nazis. He also worried that many countries might simply ban the flick.",
      "President Franklin Roosevelt heard of Chaplin’s intention to scrap the film. The president sent an aide to deliver a message to Chaplin. “Make this film,” the president advised. Roosevelt promised he would use his influence to ensure none of America’s allies banned the movie.  Hitler once had extolled Chaplin as one of the greatest performers of all time. There were rumors that Hitler was heartbroken to see Chaplin’s impersonation of him.",
      "For those who haven't heard it here is a clip of the speech...",
    ],
  }
  {
    slug: "why-gardening-is-necessary-for-everyone",
    title: "Why Gardening Is Necessary For Everyone",
    excerpt: "Gardening is so good for you I don't think it should be considered merely as therapy.  I think it's so good for you that it's actually a necessity.  I...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Gardening is so good for you I don't think it should be considered merely as therapy.  I think it's so good for you that it's actually a necessity.  In the same way I don't think breathing is just therapeutic or a hobby.  Breathing is a necessary function for human life.  It seems that some people can NOT garden and not have too many adverse affects.  But there are so many benefits it's statistically improbable that by not doing any gardening there will be some adverse affects in your life.  This may seem like an exaggeration but allow me to convince you...",
      "This is the most obvious one but not so many people know why and how much better.  Most produce loses an average of 30 percent of nutrients three days after harvest.  University of California studies show that vegetables can lose 15 to 55 percent of vitamin C, for instance, within a week.  Some spinach can lose 90 per cent within the first 24 hours after harvest and 50 per cent in 30 minutes. 1",
      "The answer is simple.  Fresh produce is meant to be grown near your home and eaten straight after being picked.  Sure it's okay to supplement your meals with frozen vegetables.  But if the purpose of food is nutrition delivery then you can't beat growing it in your garden.",
      "In this paper 2 from the Royal College of Physicians by Dr Richard Thompson (The Queen's former Doctor) He goes so far to say, \"Health professionals should encourage their patients to make use of green space and to work in gardens, and should pressure local authorities to increase open spaces and the number of trees, thus also helping to counteract air pollution and climate change\".",
      "Gardening can help reduce symptoms 3 of depression and anxiety.",
      "Getting dirt under your nails while digging in the ground can make you happier. 4",
      "In fact, inhaling M. vaccae, a healthy bacteria that lives in soil, can increase levels of serotonin and reduce anxiety. 5",
      "One group of holistic therapies that aim to treat the whole person and has been well researched through surveys and randomised trials is referred to as green care, or therapy by exposure to plants and gardening.6,7 Several trials have demonstrated the beneficial effects on mood and mental health of observing nature, or simply even images of natural scenes.",
      "In a Japanese study, viewing plants altered EEG recordings and reduced stress, fear, anger and sadness, as well as reducing blood pressure, pulse rate and muscle tension.8 Another Japanese study simply found that it more beneficial physiologically to view a green hedge rather than a concrete fence.  In a randomised study by the environmental psychologist, Roger Ulrich views of plants and trees from post-operative wards improved the mood of patients, and reduced analgesic use, surgical complications and length of stay. Similar beneficial results have been found for patients undergoing dental treatment and viewing natural scenes together with natural sounds improved the experience of bronchoscopy.  Another carefully controlled study showed that viewing sculpture gardens without any greenery through the windows of an oncology ward caused a negative reaction in many patients. Even randomly exposing post operative patients to pictures of the countryside on the walls of their rooms can reduce pain and anxiety while abstract images increased anxiety.9,10",
      "The charity MIND compared short walks through a garden with walks in a shopping complex and showed that the former improved mental health, whereas the latter made it worse.11 In a prison in Michigan, residents who had a view of the countryside from their cells used the prison medical services less than those with an internal courtyard view.12",
      "In another randomised experiment, when post-operative patients were exposed to eight different species of indoor plants, both pain and length of stay were once again reduced and patients’ satisfaction with their hospital rooms was improved.13 In another study, putting plants in a computer room improved productivity and lowered blood pressure.14 Indoor gardening has been used to treat patients with mental health problems.15",
      "Many studies in the UK and other countries agree that higher proportions of green space, especially biodiverse habitats,16 are associated with less depression, anxiety and stress, even after controlling for potential confounding factors such as deprivation.17",
      "It is not only the appearance of plants that is beneficial: their leaves remove toxins, dust and microorganisms from the air.  NASA proved this one. 18",
      "One obvious benefit of gardening is that it is a form of light physical activity which everyone knows is good for you.  The science backs this assumption up too. 19,20 Gardening also gives us exposure to sunlight. Sunlight lowers blood pressure as well as increasing vitamin D levels. 21",
      "Less green space in people's living environment coincided with feelings of loneliness and with a perceived shortage of social support.  Loneliness and perceived shortage of social support partly mediated the relation between green space and health. 22",
    ],
  }
  {
    slug: "thoughts-on-maslows-toward-a-psychology-of-being",
    title: "Thoughts on Maslow's “Toward a Psychology of Being”",
    excerpt: "Abraham Harold Maslow is the guy who came up with \"Maslow's Hierarchy of Needs\" which a lot of people have heard of but maybe aren't aware of its sign...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Abraham Harold Maslow is the guy who came up with \"Maslow's Hierarchy of Needs\" which a lot of people have heard of but maybe aren't aware of its significance.",
      "This book was first published in 1962, (the second edition was published in 1968) Toward a Psychology of Being examines Maslow's thoughts on the self-actualized human.  E.g. The top of the pyramid.",
      "Humans have certain needs and when those needs aren't satisfied, the result can be neurosis. A need is defined as that which, in its absence breeds illness, when present prevents illness and if restored, cures illness. Maslow also felt that the need is inactive, at a low ebb, or functionally absent in a healthy person. But, needs exist in a hierarchy and so when one need is satisfied the person becomes aware of another need. These needs produce motivation.",
      "Maslow did not believe that a proper definition of motivation had yet been created, but he uses the concept anyway. The movement from one level of need to the next is what leads to motivation. Some people are strongly driven to grow, to constantly seek out more and more. Simply stated, they experience motivation; the inward desire to improve. It is this group that has reached the self-actualization level.",
      "As people progress along the hierarchy, the satisfied need doesn't entirely go away but stays in a sort of repressed state. Therefore, it is possible to regress if that need ceases to be met. Even a self-actualized person will fall back down the hierarchy if a lower level need becomes unsatisfied.",
      "In his research, Maslow made an interesting observation about creativity in healthy, evolved, and mature, self-actualized people. He discovered that many who are considered creative were not really healthy and that creativity was not the sole property of what is considered the creative professions, such as artists and writers. In fact, people in many varied situations proved to be creative, that it was a tendency of self-actualized people.",
      "Toward a Psychology of Being is written for psychologists.  It's no easy read.  However, for anyone serious about understanding human behaviour it is worth the effort.",
      "He doesn't pretend to have easy answers or all the answers or solutions.  He does seem to have an infectious hope for humanity.  It's refreshing and shines through the academic style of writing.  There is an optimistic tone toward a future based on the intrinsic values of humanity.  Maslow states that, \"This inner nature, as much as we know of it so far, seems not to be intrinsically evil, but rather either neutral or positively 'good.' What we call evil behaviour appears most often to be a secondary reaction to frustration of this intrinsic nature.\" He demonstrates that human beings can be loving, noble, and creative, and are capable of pursuing the highest values and aspirations.",
      "Here are some of my favourite excerpts throughout the book...",
      "“Every human being has both sets of forces within him. One set clings to safety and defensiveness out of fear, tending to regress backward, hanging on to the past, afraid to grow away from the primitive communication with the mother’s uterus and breast, afraid to take chances, afraid to jeopardize what he already has, afraid of independence, freedom and separateness. The other set of forces impels him forward toward wholeness of Self and uniqueness of Self, toward full functioning of all his capacities, toward confidence in the face of the external world at the same time that he can accept his deepest, real, unconscious Self.”",
      "“Not allowing people to go through their pain, and protecting them from it, may turn out to be a kind of over-protection, which in turn implies a certain lack of respect for the integrity and the intrinsic nature and the future development of the individual.”",
      "“The needs for safety, belonging, love relations and for respect can be satisfied only by other people, i.e., only from outside the person. This means considerable dependence on the environment. A person in this dependent position cannot really be said to be governing himself, or in control of his own fate. He must be beholden to the sources of supply of needed gratifications. Their wishes, their whims, their rules and laws govern him and must be appeased lest he jeopardizes his sources of supply. He must be, to an extent, “other-directed,” and must be sensitive to other people’s approval, affection and goodwill. This is the same as saying that he must adapt and adjust by being flexible and responsive and by changing himself to fit the external situation. He is the dependent variable; the environment is the fixed, independent variable.”",
      "“Most people experience both tragedy and joy in varying proportions. Any philosophy which leaves out either cannot be considered to be comprehensive.”",
      "“Every age but ours has had its model, its ideal. All of these have been given up by our culture; the saint, the hero, the gentleman, the knight, the mystic. About all we have left is the well-adjusted man without problems, a very pale and doubtful substitute.”",
    ],
  }
  {
    slug: "taking-the-time-to-chill",
    title: "Taking The Time To Chill",
    excerpt: "I’ve put on a LOT of weight this year.  My PTSD flashbacks and overall anxiety levels are the worst they’ve ever been.  I slept over at a mate’s place...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I’ve put on a LOT of weight this year.  My PTSD flashbacks and overall anxiety levels are the worst they’ve ever been.  I slept over at a mate’s place a few weeks ago and he told me I have sleep apnoea.  I’m not formally diagnosed but he said I was making some extremely weird choking noises while sleeping on his couch.  Also, to a much lower degree, I have mild insomnia.  I’ve started addressing it but the complexity of my current life situation means I needed to implement a simple, flexible strategy.  One that doesn’t take a lot of time, low cost, addresses weight loss, anxiety management, PTSD, apnoea & insomnia.",
      "So I thought I’d revisit the Wim Hof Method.",
      "I first learned about Wim Hof 10 years ago and used his techniques which I found transformational at the time.  The man, Wim Hof, is simply astounding.  I read his book The Way Of The Iceman by Wim Hof & Koen De Jong for the first time today.  It’s a great short book which I highly recommend.",
      "I’ve just started using some of his techniques again tonight which I wanted to share with you.",
      "Most people would look at any one of Wim's feats and say they’re impossible. Some of which include running a half-marathon barefoot on ice, swimming under ice for a record distance of 57.5 meters, and of course, climbing Mount Everest in shorts.  Wim is certainly gifted but he argues in his book that he has simply studied, trained and mastered several techniques which are now known as the Wim Hof Method.",
      "It’s a unique combination of 3 practices with benefits to increase athletic performance, reduce stress, and help you sleep better, along with several other benefits as you’ll discover below.",
      "It’s a set of skills that, when practised consistently, can provide your mind and body a wide variety of benefits.",
      "The Wim Hof Method combines 3 different practices: Cold Therapy, Breathing Exercises, and Commitment.",
      "Embracing the cold is healthy for you.",
      "In fact, exposure to the cold provides an array of health benefits including increased brown fat (the good kind) which results in fat loss, reduced inflammation, and an improved immune system.",
      "Plus, you’ll have better-balanced hormones, better sleep, and more endorphins.",
      "The second practice of the Wim Hof Method involves a focus on breathing. You’re always passively breathing, but you may be unaware of the potential of focused, concentrated breathing exercises. Increased oxygen levels come with a range of physical benefits including reduced stress and better immune responses.",
      "VICE journalist Justin Ong, who visited Singapore to test out the Wim Hof Method for himself, said, “I went from doing 40 push-ups without breathing, to 60. I could now hold my breath for almost three minutes, up from 43 seconds. In both instances, I felt I could push myself even more.”",
      "The final practice is the most important. Without a commitment to improving your body and mind, you don't see transformational results.",
      "In order to fully master the Method (and reap the numerous physical rewards it has to offer), you need a certain level of patience and determination.",
    ],
  }
  {
    slug: "new-laws-needed-for-equality",
    title: "New Laws Needed For Equality",
    excerpt: "Most people are under no delusion that women are equally violent as men and, despite being less physically strong, equally capable of horrific crimes....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Most people are under no delusion that women are equally violent as men and, despite being less physically strong, equally capable of horrific crimes.The problem is the system is based around a Matriarchal structure which assumes that \"all men are perpetrators and all women are victims\".",
      "A few years ago I was supporting a man whose wife was extremely and consistently violent, moderately financially abusive, extremely controlling. She would use his 2 daughters as leverage. She would hit them to punish him. Because she knew he couldn't do anything. They were still toddlers. He told me he would pick them up in his arms and stand in a corner so she would just hit his back. He'd stay there until she stopped.",
      "One day he asked me if we could go out and talk it through. She said he was only allowed out for an hour because she was tired. She'd just gone to Europe for 2 weeks, paid for by him, and she was still feeling jet lagged a week later. He said he hadn't had a day off work or looking after the kids in 7 months so he was going to be out for a few hours with me.",
      "She said that wasn't okay.",
      "While he was with me he received several hundred messages and missed calls. I encouraged not to cower to her. The messages became more extreme. I didn't realise how bad it was. Men tend to play these things down out of embarrassment and exhaustion. Men just don't like drama. He played me recordings of the abuse just from the last few days. I told him that he needs to press charges. He can't allow her to abuse him and the girls like that. He winced at the idea.",
      "She is a \"Christian\". She said that what he was doing was against God because he was abandoning his family and quoted some scripture. Then she said God was going to kill his daughters as a punishment. She is a prophet sent by God and if he didn't obey the word of God then this will be the consequence. I said mate we're going to the police.",
      "The police officer flat out refused to take a complaint. I told the officer I've been working in this area for a long time. (This was the first man I'd taken to the police in a situation like this). The police leaned in and whispered, \"come with me\".",
      "We walked outside where noone could hear. He said, \"Listen guys, you have to play the long game, I've just been through this myself, record everything and build a case, you'll need to fight it out in court and it will take years. But there is nothing I can do. Good luck.\"",
      "I drove him back to the home. She has a tracking app on his phone so she knew we were at the police station. From that day on she his forbidden him to talk with me. We messaged once and I saw him briefly in public once. She got his phone and found out and punished him. I haven't seen or heard from him since.",
      "Then she got her friends together and tracked down every ex girlfriend of mine. Every person who has an issue with me and started a smear campaign. A few of my mates' wives (wife of my mates? I don't know how to say this) received messages, not from her, but from her friend with a list of allegations about me. Some were stupid things that I've done years ago that they found out. Most of the things on the list were things that happened TO ME not done BY ME. I read the list and I sounded like an awful person! I would hate me if I heard this stuff about me. I lost several friendships and supporters of my charity through this.",
      "These are types of abuse women use every day. But we don't have any laws to prosecute women who do this. Men go to prison in our country for selling cannabis or punching someone in a bar. But women can destroy lives without consequence. This is the Matriarchy and we need to address this if we are going to have a fair and equal society.",
    ],
  }
  {
    slug: "not-the-peoples-china",
    title: "Not The People's Republic Of China",
    excerpt: "I have many Chinese friends. I have 2 really close friends who are chinese. I visited China in 1999. I have walked along the great wall of China. I've...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I have many Chinese friends. I have 2 really close friends who are chinese. I visited China in 1999. I have walked along the great wall of China. I've visited the Ice City in far north China near Russia. I've bought street food on the streets of Shanghai when I was 17.  I love Chinese culture, Chinese people, Chinese history. I love Chinese philosophy and have read Sun Tzu, Confucius & Laozi.",
    ],
  }
  {
    slug: "occams-razor-cutting-off-unnecessary-complexity",
    title: "Occam's Razor: Cutting Off Unnecessary Complexity",
    excerpt: "The term \"Occam's Razor\" comes from a misspelling of the name William of Ockham. William Ockham (circa 1287–1347) was an English Franciscan friar, the...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "The term \"Occam's Razor\" comes from a misspelling of the name William of Ockham. William Ockham (circa 1287–1347) was an English Franciscan friar, theologian, philosopher, and logician in the medieval period. One of his rules of thumb has become a standard guideline for thinking through issues logically. Occam's Razor is the principle that [in Latin], \"non sunt multiplicanda entia praeter necessitatem\" [in English \"don't multiply the agents in a theory beyond what's necessary.\"] Said most simply:  “the simplest solution is almost always the best.”",
      "What does that mean? If two competing theories explain a single phenomenon, and they both generally reach a similar conclusion, and they are both equally persuasive and convincing, and they both explain the problem or situation satisfactorily, the logician should always pick the less complex one. The one with the fewer number of moving parts is most likely to be correct. The idea is always to cut out extra unnecessary bits, hence the name \"razor.\" An example will help illustrate this.",
      "Suppose you come home and discover that your dog has escaped from the kennel and chewed large chunks out of the couch. Two possible theories occur to you.",
      "Either theory would be an adequate and plausible explanation. Both explain what needs to be explained, which is the escaped dog, and both use the same theory of how, i.e., that the latch was opened somehow, as opposed to some far-fetched theory about canine teleportation or something crazy like that.",
      "Which theory is most likely correct?  If you don't find additional evidence like strange fingerprints or human footprints or missing possessions to support theory #2, William of Ockham would say that the simpler solution (#1) is most likely to be correct in this case.  The first solution only involves two parts–two entities and two actions. On the other hand, the second theory requires at least five parts–you, the dog, a hypothetical unknown intruder, some plausible motivation, and various actions. It is needlessly complex. Occam's basic rule was \"Thou shalt not multiply extra entities unnecessarily,\" or to phrase it in modern terms, \"Don't speculate about extra hypothetical components if you can find an explanation that is equally plausible without them.\" All things being equal, the simpler theory is more likely to be correct, rather than one that relies upon many hypothetical additions to the evidence already collected.",
      "A variation used in medicine is called the \"Zebra\": a physician should reject an exotic medical diagnosis when a more commonplace explanation is more likely, derived from Theodore Woodward's dictum \"When you hear hoofbeats, think of horses, not zebras\".",
      "As explained by John G. Sotos, medical novices are predisposed to make rare diagnoses because of (a) the availability heuristic (\"events more easily remembered are judged more probable\") and (b) the phenomenon first enunciated in Rhetorica ad Herennium (circa 85 BC), \"the striking and the novel stay longer in the mind.\" Thus, the aphorism is an important caution against these biases when teaching medical students to weigh medical evidence.",
      "Medical Diagnosticians have warned, however, that \"zebra\"-type diagnoses must nonetheless be held in mind until the evidence conclusively rules them out.",
      "Occam's Razor is a tool we all use knowingly or unknowingly.  If your personality is high in trait neuroticism then you need to be especially aware of this bias.",
      "Two very easy questions to help quickly guide you to a better explanation for your situation:",
    ],
  }
  {
    slug: "gender-wage-non-gap",
    title: "Gender Wage Non-gap",
    excerpt: "All numbers from ABS 2019....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "All numbers from ABS 2019.",
      "Female average work hours: 36.9 hours.Male average work hours: 40.8",
      "Female weekly earnings: $1433.60Male weekly earnings: $1678.40",
      "Overtime in Australia begins at 38 hours, and is paid at 1.5x – 2x hourly rate. We will split the difference and use 1.75x.",
      "Female average overtime worked = 0Male average overtime worked = 2.8 hours (40.8 – 38).",
      "2.8 hours paid at 1.75x rate equates to 4.9 hours worked. Including overtime men work equivalent of 42.9 hours per week (38 + 4.9)",
      "Thus female hourly rate = $1433.60 / 36.9 hours = $38.85 per hour.",
      "Male hourly rate = $1678.40 / 42.9 hours = $39.1 per hour.",
      "$38.85 vs $39.1 per hour.You'll notice most matriarchal arguments will obfuscate the data in weekly or annual figures so that it appears men earn significantly more.  This claim is patently false.",
      "There is no significant gender wage gap in Australia.  There is a gender work hours gap.",
      "This calculation was sourced from the team at Domestic Violence Awareness Australia (DVAA).",
    ],
  }
  {
    slug: "bond-cleaning-brisbane",
    title: "Bond Cleaning Brisbane",
    excerpt: "Whenever you move house in Brisbane a bond clean is a necessary part of the ordeal.  When it comes to bond cleaning Brisbane, property managers are pa...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Whenever you move house in Brisbane a bond clean is a necessary part of the ordeal.  When it comes to bond cleaning Brisbane, property managers are particularly thorough.  They are very strict with the Qld government RTA guidelines.",
      "My place was a mess.  Not as bad as this photo.  This is just a random photo.  But you get the idea.",
      "I booked in Liberty Services Brisbane Bond Cleaning.  Yes, this is a shameless plug of my own social enterprise.  But, it's true.  The team took care of everything.  They completed the bond clean itself, carpet cleaning and some minor repairs.  We had a whole heap of rubbish that had accumulated which had to be removed.  Liberty Services did everything.",
    ],
  }
  {
    slug: "twenty-twenty-book-list",
    title: "Twenty Twenty Book List",
    excerpt: "I got through 58 books last year which I think just might be my PB....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I got through 58 books last year which I think just might be my PB.",
      "Some of my favourites were...",
      "I learned some great lessons from nearly all of the books.  Reading is powerful for personal and professional growth.  When someone commits to writing a book they dedicate a significant quantity of time to concisely document what, in many cases, has taken a lifetime for them to learn.  We, the readers, have the benefit of consuming this invaluable information they have succinctly written in a matter of hours.",
      "Before reading any book I carefully research the author and reviews about the book.  I look out for criticisms and see what people say is incorrect about the book... where does it go too far... in some cases, this is enough to convince me not to read it.  But everyone's got haters.  If the worst of what is said about it is unconvincing then I'll read it.  In some cases, the research will reveal another book that is better to read or in addition.",
      "This year I sketched out a reading plan for the next 10 years.  There are some authors, who I really admire, and I plan to read most or all of their body of work.  I've found that by reading several in succession I get to really understand them.  You get to see patterns and themes that grow or wane through their books.  For some authors, who I'm really interested in, I've found that reading a biography about them really helps with understanding them. Also, if they've written one, an autobiography.  This gives you an understanding of what is driving them, the events and experiences they endured.  The circumstances going on around them in the world at that time.  All these factors led to the thoughts that ultimately resulted in the books.",
      "I've noticed how different books have a different effect on me and my daily performance.  Some books are mentally draining others are simply distracting from my day to day activities.  I've found I need to balance my reading interspersed with light reading or simply books that I really enjoy.",
      "I use Goodreads to track all my reading.  It's a really great platform.  This is a log of my 2020 reading challenge.",
      "https://www.goodreads.com/user_challenges/19312110",
      "In 2021 I'm going to reduce the number of books and read some heavier ones on my bucket list.  I found I was rushing this year to get the quantity of reading in.  I also choose smaller books.  Next year, I want the mental space to read and understand more.  My target for 2021 is going to be 40 books in total.",
      "I hope this has given you a few tips you can take away for your own reading plan.  New Years Day is a great time to set goals for the year ahead.  If you've set a reading goal for 2021 comment up and let me know!",
    ],
  }
  {
    slug: "turnaround-your-lockdown",
    title: "Turnaround Your Lockdown",
    excerpt: "In 1665, the bubonic plague was ravishing London.  About 15% of the population died.  Entire villages went into lockdown.  Institutions and of course ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "In 1665, the bubonic plague was ravishing London.  About 15% of the population died.  Entire villages went into lockdown.  Institutions and of course businesses were being closed down for one reason or another.  One of those institutions was the University of Cambridge.  There are tales of people losing their minds from the response to the plague and committing suicide.",
      "One young student took advantage of the situation.  He took whatever books he could carry and retreated to a small village called Woolthorpe in the relative safety of the countryside.  He took the opportunity to work on his ideas and read books outside the usual highly structured and onerous curriculum.  Most importantly he had time to think.",
      "His window overlooked an orchard.  Later in his life, he shared how he had watched an apple fall from the tree outside his chamber window, and in his mind, he questioned why it fell straight to the ground.",
      "In answering that question, he theorised that everything in existence is attracted to everything else, and this attraction, the force of gravity, ties the universe together.  The young student was of course Isaac Newton.",
    ],
  }
  {
    slug: "the-james-webb-telescope",
    title: "The James Webb Telescope",
    excerpt: "This is going to be one of the biggest advancements for humanity in our life time.  Certainly at least for the year 2022.  The James Webb Space Telesc...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "This is going to be one of the biggest advancements for humanity in our life time.  Certainly at least for the year 2022.  The James Webb Space Telescope (JWST) was launched on the 25th December 2021 and sent off into outer space.",
      "In 1990, the Hubble Space Telescope was launched into Low Earth Orbit.  It revealed the most incredible photos of our Universe that we had never seen before.  More than that, it gave us information about our place in the Universe.",
      "The James Webb Space Telescope has a mass about half of Hubble Space Telescope's, but a 6.5 m diameter gold-coated beryllium primary mirror made of 18 hexagonal mirrors, giving it a total size over six times as large as Hubble's 2.4 m. Beryllium is a very stiff, hard, lightweight metal often used in aerospace that is non-magnetic and keeps its shape accurately in an ultra-cold environment.  The gold coating provides infrared reflectivity and durability.",
      "The James Webb Space Telescope has four key goals:",
      "JWST will orbit the Sun near the second Lagrange point (L2) of the Sun-Earth system, which is 1,500,000 km farther from the Sun than the Earth's orbit.  Normally an object circling the Sun farther out than Earth would take longer than one year to complete its orbit.  But near the L2 point, the combined gravitational pull of the Earth and the Sun allow a spacecraft to orbit the Sun in the same time that it takes the Earth.  Staying close to Earth allows data rates to be much faster for a given size of antenna.  The larger distance from Earth & the Sun is to ensure it's free from interference.",
      "The incredible precision and innovation of the design and its placement in orbit means that the JWST will be effectively 100x more accurate than the Hubble.  This is a game changer.  We will learn new things about our Universe.",
      "We will also be able to find more \"goldilocks\" planets like Kepler 186f.  Planets that can sustain life.  Planets that we can start making plans to visit.",
      "We will start to see photos from the James Webb around June of this year.  They will be inspiring and mind blowing.  Over the next few years astrophysicists will get data that will better explain our Universe and just maybe our part to play in it.  Most importantly, I think space exploration unites us.  In a time when we're more fragmented and disconnected than ever, ventures like this bring us together as humans.",
    ],
  }
  {
    slug: "2021-reading-list-review",
    title: "2021 Reading List Review",
    excerpt: "This year I reduced my reading schedule to 40 books.  I was able to read several books that had been on my list for many years.  Here is my 2021 readi...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "This year I reduced my reading schedule to 40 books.  I was able to read several books that had been on my list for many years.  Here is my 2021 reading list on Good Reads.  https://www.goodreads.com/user_challenges/25070879",
      "Drawing on his twenty-five years of groundbreaking research on moral psychology, social psychologist Jonathan Haidt shows how moral judgments arise not from reason but from gut feelings. He shows why liberals, conservatives, and libertarians have such different intuitions about right and wrong, and he shows why each side is actually right about many of its central concerns.In this subtle yet accessible book, Haidt gives you the key to understanding the miracle of human cooperation, as well as the curse of our eternal divisions and conflicts. If you’re ready to trade in anger for understanding, read The Righteous Mind.",
      "\"Best Nonfiction Book of the 20th Century\" (Time)",
      "“It is impossible to name a book that had a greater effect on the political and moral consciousness of the late 20th century.” (David Remnick, The New Yorker)",
      "The Nobel Prize winner’s towering masterpiece of world literature, the searing record of four decades of terror and oppression, in one abridged volume (authorized by the author). Features a new foreword by Anne Applebaum.",
      "Drawing on his own experiences before, during, and after his 11 years of incarceration and exile, on evidence provided by more than 200 fellow prisoners, and on Soviet archives, Solzhenitsyn reveals with torrential narrative and dramatic power the entire apparatus of Soviet repression, the state within the state that once ruled all-powerfully with its creation by Lenin in 1918. Through truly Shakespearean portraits of its victims – this man, that woman, that child – we encounter the secret police operations, the labor camps and prisons, the uprooting or extermination of whole populations, the “welcome” that awaited Russian soldiers who had been German prisoners of war. Yet we also witness astounding moral courage, the incorruptibility with which the occasional individual or a few scattered groups, all defenseless, endured brutality and degradation. And Solzhenitsyn’s genius has transmuted this grisly indictment into a literary miracle.",
      "“The greatest and most powerful single indictment of a political regime ever leveled in modern times.” (George F. Kennan)",
      "“Solzhenitsyn’s masterpiece.... The Gulag Archipelago helped create the world we live in today.” (Anne Applebaum, Pulitzer Prize-winning author of Gulag: A History, from the foreword)",
      "The dramatic inside story of the first four historic flights that launched SpaceX – and Elon Musk – from a shaky startup into the world's leading edge rocket company.",
      "In 2006, SpaceX – a brand-new venture with fewer than 200 employees – rolled its first, single-engine rocket onto a launch pad at Kwajalein Atoll. After a groundbreaking launch from the middle of the Pacific Ocean, the Falcon 1 rocket designed by Elon Musk’s engineers rose in the air for approximately 30 seconds. Then, its engine flamed out and the rocket crashed back into the ocean.",
      "When he founded SpaceX, Elon Musk had only budgeted for three launches. After two more failed flight tests, and with only one Falcon 1 rocket left in its factory, SpaceX decided to try one last, dramatic launch. Over eight weeks, engineers worked furiously to prepare this final rocket. If it crashed and burned, so would SpaceX. In September 2008, SpaceX’s last chance for success lifted off...and accelerated like a dream, soaring into orbit flawlessly.",
      "That success would launch a miraculous decade for the company, in which SpaceX grew from building a single-engine rocket to one with a staggering 27 engines, created two different spacecrafts and mastered reusable-rocket descents using mobile drone ships on the open seas. But these achievements would not have been possible without SpaceX’s first four flight tests.",
      "Drawing on unparalleled access and exclusive interviews with dozens of former and current employees – engineers, designers, mechanics and executives, including Elon Musk – Eric Berger tells the complete story of this foundational generation that transformed SpaceX into the world’s leading space company.",
      "Economic Facts and Fallacies exposes some of the most popular fallacies about economic issues-and does so in a lively manner and without requiring any prior knowledge of economics by the reader. These include many beliefs widely disseminated in the media and by politicians, such as mistaken ideas about urban problems, income differences, male-female economic differences, as well as economics fallacies about academia, about race, and about Third World countries.",
      "One of the themes of Economic Facts and Fallacies is that fallacies are not simply crazy ideas but in fact have a certain plausibility that gives them their staying power-and makes careful examination of their flaws both necessary and important, as well as sometimes humorous. Written in the easy-to-follow style of the author's Basic Economics, this latest book is able to go into greater depth, with real world examples, on specific issues.",
    ],
  }
  {
    slug: "al-akam-al-khamsa-the-five-decisions",
    title: "Al-aḥkām Al-khamsa:  The Five Decisions",
    excerpt: "I came across this idea in Islamic tradition today.  It's known as the \"5 Decisions\".  One of my contractors said to me \"it is Halal for me to do this...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I came across this idea in Islamic tradition today.  It's known as the \"5 Decisions\".  One of my contractors said to me \"it is Halal for me to do this\".  I had only known of Halal as a food preparation standard similar to what \"Kosher\" is for Jews.  The word Halal means permissible and has a broader definition, at least for some muslims, to mean that which is \"the right thing to do\".  I was intrigued by the concept and dug a little deeper.",
      "As I understand it (if you're a muslim and you're reading this and I'm wrong please let me know!), there is a simple binary understanding of most things.  Either \"Halal\", that which is permissible and the right thing or \"haram\", that which is not permissible and is the wrong thing.",
      "Now, I was thinking probably what you're thinking right now.  That's too simple.  It turns out they found the same thing and so over the centuries under Sharia they developed it.  I should say at this point that I disagree with some applications of Sharia law and the Islamic faith.  I think liberal democracy like we have in the west is a much better system especially because we deliberately and carefully seperate religion, law and the government.  However, there are many muslims I know and respect.  I think this an insightful concept and worth pondering.",
      "Sharia rulings fall into one of five categories known as “the five rulings” (al-aḥkām al-khamsa):",
      "It is a sin or a crime to perform a forbidden action or not to perform a mandatory action.  Reprehensible acts should be avoided, but they are not considered to be sinful or punishable in court.  Avoiding reprehensible acts and performing recommended acts is held to be subject of reward in the afterlife, while allowed actions entail no judgement from God.  Jurists disagree on whether the term ḥalāl covers the first three or the first four categories.  The legal and moral verdict depends on whether the action is committed out of necessity (ḍarūra).",
      "We have no comparable system like this in the West.  Especially rarely in the religious sense.  In many muslim cultures, religion, law and government are inextricably intertwined.  From a purely legal and cultural perspective we do see these categories being used everyday in our society.",
      "Take for example \"wearing face masks\".  One day it's \"fard\", and if you aren't wearing one, even in your car all alone, it's illegal and if you're caught by the wrong person you might be publicly ridiculed.  Or conversely, if you live somewhere like Byron Bay where the culture is so intensely anti-vax and if your personal opinion is neutral \"mubah\" but you get vaccinated because you need to for work then you might still face a religious-like persecution for capitulating to the pharmaceutical devils and be outcast as an apostate.  The extreme nature of certain tribes mean that they will impose an arbitrary extreme binary judgement such as \"Haram\".",
      "Mainstream religions had developed these sometimes useful tools to help better manage their communities with more nuanced structures.  They needed this because of the wobbly foundation when building complex societies based on various individual interpretations of spurious scriptures.  With the decline of mainstream religions we're seeing a huge portion of the population join fragmented ideological groups such as feminism, marxism, fascism and whatever this new \"woke-ism\" pseudo religion is.  People still have a need to belong.  Immature people, who once joined religions with well structured systems and clearer value sets, will now join these small ideological groups with less structure and more ambiguous values.  Upon entry they ask existing group members who they need to hate and punish to belong to that tribe.  They'll be quickly informed and handed instructions, ammunition and dossiers.",
    ],
  }
  {
    slug: "building-a-storybrand-by-donald-miller-book-review",
    title: "Building a StoryBrand by Donald Miller:  Book Review",
    excerpt: "A friend recently recommended I read this book by Donald Miller.  It's a great short read packed full of interesting and useful information.  This is ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A friend recently recommended I read this book by Donald Miller.  It's a great short read packed full of interesting and useful information.  This is a quick summary and review of the book.  I definitely recommend giving it a read if you're interested in marketing or business.  Donald Miller is a world famous story teller.  He presents some novel ideas.  I 'read' it on audible.  It's a quick book that takes a little over 4 hours to get through.",
      "Building a StoryBrand is about making your customer the hero of a story.",
      "Every successful business understands that you need to make your customer the hero of the story, not your brand.",
      "“Businesses that invite their customers into a heroic story grow. Businesses that don’t are forgotten.”",
      "Chapter 1: The Key to Being Seen, Heard, and Understood",
      "“Pretty websites don’t sell things. Words sell things. And if we haven’t clarified our message, our customers won’t listen.”",
      "“The more simple and predictable the communication, the easier it is for the brain to digest.”",
      "Mike McHargue, a friend of Miller’s, says there are two critical mistakes brands make when talking about their products and services:",
    ],
  }
  {
    slug: "nicomachean-ethics-book-review",
    title: "Nicomachean Ethics – Book Review",
    excerpt: "I recently finished reading Nicomachean Ethics by Aristotle.  This is a true classic.  It's one of the most influential books of all time.  It has bee...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I recently finished reading Nicomachean Ethics by Aristotle.  This is a true classic.  It's one of the most influential books of all time.  It has been famous through different eras especially during the middle ages.  Aristotle was referred to during this time as \"The Philosopher\".",
      "The book is most likely titled in honour of Aristotle's father Nicomachus.  His son's name was Nicomachus and was involved in editing the final manuscripts that formed the book that we know today.  The work was completed some time during the 4th Century BC.",
      "Aristotle postulates the highest human good is \"eudaimonia\" or what is probably best translated into English as \"flourishing\" but often unfortunately translated as mere \"happiness\".  A substantial component in the path to such human happiness is acting with the appropriate virtues over the course of an entire lifetime.  The details of these Aristotelean teachings form the Nicomachean Ethics, one of the most influential works in the entire history of Western Civilisation.",
      "As a way of sharing a small example of Aristotle’s extensive philosophy outlined in these pages, I will focus on Book IV Chapter 8 where this brilliant ancient Greek philosopher addresses the virtue of being witty, sensitive to others, discerning and perceptive, particularly when we are at our leisure.",
      "Here are six Aristotle quotes and some thoughts:",
      "“Since life includes rest as well as activity, and in this is included leisure and amusement, there seems here also to be a kind of intercourse which is tasteful; there is such a thing as saying- and again listening to- what one should and as one should.”",
      "Aristotle’s focus on time spent outside of work, what we nowadays refer to as ‘leisure time’, makes this section of his ethical teachings particularly relevant for us today, most especially since we are bombarded by a nonstop barrage of advertisements, store signs and billboards.  Some obvious, others not.",
      "“The kind of people one is speaking to or listening to will also make a difference.”",
      "It is paramount who we associate with both at work and outside of work. Aristotle is positive that we can actively participate in society and exercise discrimination as we develop wisdom to speak as we should and listen as we should. In contrast, another Greek philosopher, Epicurus, was not so optimistic on this point. Epicurus judged conventional society as blind and dumb, particularly as it pertains to men and women expounding values regarding such things as riches and fame and what constitutes our true human needs. The answer for Epicurus: withdraw into a separate community with like-minded friends and philosophers.",
      "“Regarding people’s views on humour there is both an excess and a deficiency as compared with the mean. Those who carry humour to excess are thought to be vulgar buffoons, striving after humour at all costs, and aiming rather at raising a laugh than at saying what is becoming and at avoiding pain to the object of their fun while those who can neither make a joke themselves nor put up with those who do are thought to be boorish and unpolished.”",
      "Aristotle is optimistic that someone who aspires to philosophic excellence, virtue and the mean (maintaining a centrist position between two extremes) can live among buffoons and boors without being pulled down to their level.",
      "“The ridiculous side of things is not far to seek, however, and most people delight more than they should in amusement and in jestingly and so even buffoons are called ready-witted because they are found attractive; but that they differ from the ready-witted man, and to no small extent, is clear from what has been said.”",
      "Aristotle observes how buffoonery can easily lapse into the social norm.  Thus our challenge is how to retain our integrity when surrounded by slobs and buffoons.",
      "“To the middle state belongs also tact; it is the mark of a tactful man to say and listen to such things as befit a good and well-bred man; for there are some things that it befits such a man to say and to hear by way of jest, and the well-bred man's jesting differs from that of a vulgar man, and the joking of an educated man from that of an uneducated.”",
      "Aristotle’s overarching observation on how the wisdom of the middle way between two extremes applies here.  It's not good to find yourself at either extreme, being a boor or being a buffoon. Unfortunately, speaking and otherwise communicating in a buffoonish or boorish way is in no way restricted to the uneducated or dull.  We've all witnessed numerous instances of buffoonery and boorishness among the highly educated and intellectually astute.",
    ],
  }
  {
    slug: "book-review-of-why-we-get-sick-the-hidden-epidemic-at-the-root-of-most-chronic-diseaseand-how-to-fight-it",
    title: "Book Review of Why We Get Sick: The Hidden Epidemic at the Root of Most Chronic Disease―and How to Fight It",
    excerpt: "I recently read Dr. Benjamin Bikman’s book, Why We Get Sick. Bikman is a Brigham Young University scientist and biomedical professor whose expertise i...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I recently read Dr. Benjamin Bikman’s book, Why We Get Sick. Bikman is a Brigham Young University scientist and biomedical professor whose expertise is in bioenergetics and metabolic disorders. Unlike many authors who write on this topic, Bikman is not a medical doctor. He has a PhD.",
      "Bikman communicates that many of today’s chronic medical disorders including cancer, heart disease, high cholesterol, Alzheimer’s disease, vascular dementia, Parkinson’s disease, hypertension, as well as many others, are linked to insulin resistance.  His analysis is backed up with more than 30 pages of endnotes chronicling an abundance of research in multiple disciplines along with his scientific understanding of how the body works.",
      "In the Introduction, Bikman emphatically states that “insulin resistance is the most common health disorder worldwide, and it affects more people—adults and children—each year than any other. (Page xv) Like many other people, I previously understood the connection between insulin resistance and diabetes and Alzheimers. However, I didn’t fully appreciate how insulin levels can affect the entire body. Bikman effectively points out why diabetes and Alzheimers are only a small part of the story.",
      "Bikman explains the role of insulin in the body and how insulin resistance stands side by side with almost every chronic disease. It affects heart health, the brain, and neurological disorder, reproductive health, cancer, skin, muscles and bones, the GI tract and kidney health, obesity, and metabolic syndrome. Readers can easily move from one chapter to the next by scrolling through well organised headings, subheadings, graphs, and highlighted sidebars to find information relevant to their situation.",
      "He intertwines facts with clear explanations of current medical research. These kernels of information will make most people pause briefly. Perhaps, relevant statements will create an opportunity to evaluate daily choices, especially when such a high percentage of people have insulin resistance. Diet and activity levels are directly related to health status.",
      "The following statements highlight a cross-section of some of these important facts:",
      "“…half of all U.S. adults, and roughly one in three Americans are know to have it. However, this number could be as high as 88% of Americans. (Page 3)",
      "“from the brain to the toes, insulin regulates how a cell uses energy, changes its size, influences production of other hormones, and even determines whether cells live or die.” (Page 4-5)",
      "“…insulin resistance and cardiovascular disease are almost inseparable.” (Page 13)",
      "“…insulin resistance and high insulin levels directly cause high blood pressure.” (page 14)",
      "“First, insulin resistance increases blood pressure increasing the likelihood of blood vessel damage. Next, it increases lipid deposition in blood vessel walls. Finally, insulin resistance increases inflammation, promoting the ongoing infiltration of the blood vessel with macrophages, which become increasingly laden with oxidized lipids, changing into foam cells.” (page 22)",
      "“The brain’s inability to get enough glucose is a cardinal feature of Alzheimer’s disease. As in our muscles, insulin facilitates the movement of glucose into the brain. However, as the brain becomes progressively insulin resistant, it becomes less and less able to obtain enough glucose to meet its energy demands. So, like an engine running on empty, the brain doesn’t work well.” (Page 29)",
      "“…vascular dementia occurs because the brain suffers from insufficient blood flow…subjects with insulin resistance have about twice the risk of developing vascular dementia compared with insulin-sensitive subjects.” Page 30)",
      "“Up to 30% of patients with Parkinson’s disease have type 2 diabetes, with possibly up to 80% having insulin resistance or pre diabetes.” Page 31)",
      "“…cancer is a disease of cellular growth; certain cells begin to multiply uncontrollably. And insulin resistance is part of this equation, because it pushes cancer cells to grow faster.” (Page 51)",
    ],
  }
  {
    slug: "the-powerful-image-of-a-frail-old-lion-moments-before-his-death",
    title: "The powerful image of a frail old lion moments before his death",
    excerpt: "These heart-breaking images show the final moments of a frail old lion who was once king of his land before he starved to death....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "These heart-breaking images show the final moments of a frail old lion who was once king of his land before he starved to death.",
      "He was kicked out of his pride and became emaciated after the protection and food that his family used to provide was stripped away.",
      "The lion, known as Skybed Scar, was well known in Kruger National Park, South Africa, where he was pictured.",
      "The heart-breaking images were captured by Larry Anthony Pannell from California.",
      "In his blog, he described coming across the lion, who he initially saw drinking from a watering hole.",
      "'After he had his fill of water he struggled to his feet hardly able to stand. What you did not notice while he was drinking, he literally was nothing but skin and bones.'",
      "He describes how as the lion moved away from the water 'he staggered as if he was drunk towards a small rise' trying to catch his breath every few steps.",
      "After reaching the rise he began slowly descending to the ground but eventually collapsed.",
      "After a while, Larry and a friend drove over to where the lion had come to rest.",
      "'We found him lying in the grass, exhausted unable to move. We were no more than five feet from him as he lay dying in the shade of a tree.",
      "'Dropping my camera we stared at one another locking eyes for what seemed for an eternity. I just wanted him to know that he would not die alone as he struggled to breath, his chest rising only every so often.",
      "'Then a last twitch of an ear, his last breath, he was gone. The King was dead.'",
      "He later said: 'I knew that I was witnessing something of a very special nature, the real nature both life and death.",
      "'I sat with him only feet away, locking eyes and starting at one another as I watched for an hour as the life leave his body. I wanted him to know he would not die alone.",
      "'Not wanting to sound crass I remember when my grandmother was in the hospital and I visited her for the last time the night she passed.",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases-no-2-danielle-jordan",
    title: "Comparing Jari's Case To Similar Cases: No.2 Danielle Jordan",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Danielle Jordan aka Danielle Fleming",
      "Relationship of P & V:",
      "Canberra, ACT, Australia.",
      "Ms Jordan suffered catastrophic head injuries after she allegedly fell from the bonnet of a car being driven by Mr O'Connell in the north Canberra suburb of Melba.",
      "The couple were having an argument at a home in Melba early in the morning of 15 April 2022.",
      "The couple went outside and Mr O’Connell allegedly got into the driver’s seat of a Mitsubishi Triton parked in the driveway while Ms Fleming sat on its bonnet.  He allegedly started driving off while she was still sitting on the car despite a friend of hers, who had also been at the home, walking in front of it to make him stop.  Ms Fleming allegedly held onto the bonnet as he drove off, accelerating out of the friend’s sight.",
      "The documents also revealed witnesses reported having seen the car drive off and hearing a thump.  Witnesses allegedly also saw Mr O'Connell pick Ms Jordan up off the road and put her in the car.  Police said CCTV footage showed he took her to Calvary Hospital, carrying her limp body into the building.",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases",
    title: "Comparing Jari's Case To Similar Cases:  No.5 Gayle Potter",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare:",
      "Relationship of P & V:",
      "Traralgon, Victoria, Australia.",
      "Ms Potter, 46, was found bloodied and battered in the driveway of her home after she was dragged under Mr Martyn's Mitsubishi Pajero following a heated argument.",
      "Mr Martyn was confronted by the son the couple shared, and told him that Ms Potter was \"banging\" on his side of the car, and that he thought he had only \"bumped\" her as he drove off.  He was trying to get away from her as she yelled at him and hit the car.  Gayle was drunk and \"went at him\", she grabbed him and pulled at his clothes, in a fit of rage, and threw herself at his car.",
      "The case was handed to the major crash investigators but was then handed over to the homicide squad.",
      "Police charged Glenn with manslaughter, dangerous driving causing death, and failing to stop after an accident.",
      "Glenn was found not guilty of all charges by a jury.",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases-pt1",
    title: "Comparing Jari's Case to Similar Cases:  No.1 Matthew Leadbetter & Katherine Field & Her Unborn Child",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is another case to compare with:",
      "Katherine Leadbetter and Matthew Field.  Katherine's unborn child.",
      "Relationship of P & V:",
      "A teenage drug addict stole a vehicle and accidentally ran into Katherine & Matthew killing them and their unborn baby instantly.  The teenager fled the scene but was arrested shortly after.",
      "The perpetrator was placed in remand.  Police charged him with 2 counts of murder.  He later plead guilty to manslaughter.  He was also charged with dangerous operation of a motor vehicle while adversely affected by intoxicating substances, driving while disqualified, and failing to fulfil duties at the scene of a traffic accident",
      "The perpetrator was sentenced to 10 years and eligible for parole after 6 years.",
      "As of 11th June 2022, Queensland’s attorney-general, Shannon Fentiman, has confirmed she may appeal against the sentence in order to have it increased.",
      "Redland City Council Mayor Karen Williams has started a petition asking Fentiman to lodge an appeal, as well as make changes to the Youth Justice Act.",
      "Queensland’s LNP opposition supports the petition, with Leader David Crisafulli saying the sentence was too lenient and would not deter other youth offenders.",
      "https://www.brisbanetimes.com.au/national/queensland/a-g-may-appeal-against-sentence-of-teen-driver-who-killed-couple-20220611-p5aszm.html",
      "https://www.abc.net.au/news/2022-06-08/hit-and-run-pregnant-couple-alexandra-hills-brisbane-leadbetter/101135384",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases-pt3",
    title: "Comparing Jari's Case To Similar Cases:  No.3 Kyralee Clark",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Relationship of P & V:",
      "Passenger and acquaintance of the driver.",
      "Wodonga, Victoria, Australia.",
      "Smyth reached speeds of up to 180km/h as he led police on a cross-border chase on December 4, 2011, that ended with him losing control of and crashing a car.",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases-no-7-michelle-ruitenbeek",
    title: "Comparing Jari’s Case To Similar Cases: No.7 Michelle Ruitenbeek",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Michelle Ruitenbeek, 50",
      "Relationship of P & V:",
      "Melbourne, Victoria, Australia.",
      "On 28th March 2019, Michelle Ruitenbeek was seriously injured and subsequently died after being hit while riding her bike on the Nepean Highway.  Ms Ruitenbeek was a serious, competitive and capable cyclist who had done everything to make herself visible.",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases-pt4",
    title: "Comparing Jari’s Case To Similar Cases:  No.4 Jennifer Board",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
    ],
  }
  {
    slug: "comparing-jaris-case-to-similar-cases-case-no-7-veronique-sakr-sienna-abdallah-angelina-antony",
    title: "Comparing Jari’s Case To Similar Cases: Case No.7 Veronique Sakr, Sienna Abdallah, Angelina & Antony",
    excerpt: "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Jari Wise was murdered by his partner on February 29, 2020.  The Tasmanian police did not investigate or charge his partner for his murder.  It’s been over 2 years.  For detailed information about the story see the #Justice4Jari website here and my interview with Jari's mother Faith here.",
      "This series of posts looks at similar cases in Australia where someone has been hit and killed in a hit and run.  The aim is to see how the police typically respond along with the courts, community, media and Government.  This should expose the gender and race bias and the sheer incompetence of the Tasmanian authorities in their management of Jari's case.",
      "Here is a case to compare with Jari's:",
      "Veronique Sakr, 11, and her cousins, Sienna Abdallah, eight, and her siblings Angelina, 12, and Antony, 13",
      "Samuel William Davidson",
      "Relationship of P & V:",
      "Sydney, New South Wales, Australia.",
      "The 29-year-old ploughed into them after his ute mounted a kerb at Oatlands, in Sydney's northwest on February 1, 2020.",
      "On the day of the crash, he had spent more than 12 hours drinking, and he was three times over the legal limit when he hit the children.",
      "He also had cocaine and other drugs in his system.",
      "Davidson had a blood alcohol reading of 0.182 at the scene of the crash before returning a second reading of 0.15 at Castle Hill police station. A blood test suggested he had taken MDMA during the day.",
      "Arrested on site and placed on remand.  Charged with 4 counts of manslaughter and several other charges related to the incident.",
      "The professional truck driver pleaded guilty to four counts of manslaughter and to charges related to the injuries caused to three other children.",
      "Mr Davidson was jailed in April 2021 for 28 years with a non-parole period of 21 years.",
      "In a majority decision, the NSW Court of Criminal Appeal concluded the term was manifestly excessive.",
    ],
  }
  {
    slug: "father-arrested-for-discussing-childs-gender-transition",
    title: "Father arrested for discussing child’s gender transition",
    excerpt: "A Canadian man was arrested this week after violating a court order that banned him from speaking publicly about his daughter’s gender transition....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A Canadian man was arrested this week after violating a court order that banned him from speaking publicly about his daughter’s gender transition.",
      "The man, whose identity is reportedly under a publication ban by a British Columbia Court of Appeals to protect his child, was found in contempt of court and arrested Tuesday for calling the teen, his daughter, which she is, and publicly referring to her with the pronouns “she” and “her,” according to The Post Millennial.",
      "The teenager was born as a female and reportedly identifies as transgender and prefers the use of male pronouns.",
      "The father reportedly began litigation against the teen’s mother after learning of the transition, and the matter was settled by the province’s highest court earlier this year, according to Global News. The parents are separated.",
      "The high court ordered the dad to not stand in the way of the 15-year-old’s hormone therapy and to try and better understand gender dysphoria, the outlet reported. He was also told to stop speaking to the media about the case and warned that his public attempts to undermine his child’s wishes was a form of family violence, according to the article.",
      "His daughter has identified as male since the age of 11, and changed her name at age 12 before pursuing hormone therapy with the support of his mother, a psychologist and an endocrinologist, according to Canadian law firm Torkin Manes.",
      "“[The father’s] refusal to respect [the boy’s] decisions regarding his gender identity is troublesome,” Chief Justice Robert Bauman and Justice Barbara Fisher wrote in the January decision, according to Global News.",
      "The father’s rejection of his son’s identity has caused the boy “significant pain” that has “resulted in a rupture of what both parties refer to as an otherwise loving parent-child relationship,” justices reportedly wrote.",
      "This rupture is not in [the boy’s] best interests,” the decision said, according to the outlet. “He clearly wants and needs acceptance and support from his father.”",
      "The father confirmed his legal woes on an online fundraising campaign soliciting donations.",
      "“The far left issued an arrest warrant on Thursday, March 04! I will be turning myself in on March 16!,” the man posted in a Go Get Funding page where he has raised more than $22,000 Canadian amid his legal fight.",
      "“I am fighting the far left based on a civil disobedience defense! I am now back in court for a five day criminal trial that will last at least five days . . . From April 12-16. That trial that could land me in jail for up to five years for speaking truth about state sponsored child abuse. FYI . . . I am blocked from sharing any videos at this time that oppose the sterilization of children!,” the caption continued.",
      "The dad, and his arrest, have been lauded by some ideologues who say gender is not a biological or social construct.",
      "“They’ve created a delusion, and they’re forcing parents to live in this delusion,” the father previously said, according to The Post Millennial.",
      "“What happens when the bubble explodes and the delusion ends? … She can never go back to being a girl in the healthy body she should have had … These kids don’t understand. What kind of 13-year-old is thinking about having a family and kids?”",
    ],
  }
  {
    slug: "norwegian-feminist-faces-three-years-in-prison-for-hateful-tweets-allegedly-criticising-transgenderism",
    title: "Norwegian feminist faces three years in prison for 'hateful' tweets (for allegedly) criticising transgenderism",
    excerpt: "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect you...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect young lesbians’ interests is.  How does it help young lesbians when males claim to be lesbian, too?” Ellingsen wrote in her offending remarks.",
      "A feminist in Norway is facing up to three years in prison for stating that biological men cannot be lesbians.",
      "Her remarks come as more and more members of the LGBTQI+ community insist that biological men who identify as women and are attracted to biological women are in fact “lesbians.”",
      "Christina Ellingsen, who leads Women’s Declaration International (WDI), an international feminist organisation, faces police investigation after she allegedly stated in a tweet that males cannot be lesbians.",
      "She made her remarks in response to the trans activist group Foreningen FRI.",
      "“Why [does] FRI teach young people that males can be lesbians? Isn’t that conversion therapy?” Ellingsen allegedly wrote, Reduxx reported.",
      "Ellingsen tweeted in response to a trans activist and FRI advisor, Christine Jentoft, who identifies as a lesbian despite being biologically male.",
      "“Jentoft, who is male and an advisor in FRI, presents himself as a lesbian – that’s how bonkers the organisation which supposedly works to protect young lesbians’ interests is. How does it help young lesbians when males claim to be lesbian, too?” Ellingsen wrote in her offending remarks.",
      "According to WDI, Ellingsen now faces an investigation over her tweets.",
      "“A Woman is an adult human female. It is physically impossible to change sex. Gender identity refers to a persons subjective convictions, and to persecute women for refusing to accept subjective convictions they do not agree to, is a human rights violation,” wrote WDI in a statement. “Women must have the right to correctly sex men, to refuse men's subjective convictions and to freely express what they see with their own eyes without facing criminal persecution.”",
      "“‘Gender identity’ is per definition a specific kind of subjective belief. The introduction of subjective beliefs in criminal law, is essentially a reintroduction of blasphemy-laws.  Additionally, this kind of blasphemy-laws are especially used against women,” WDI continued. “In Norway, men who *claim* to be girls, women, mothers or lesbian, are protected against hate-crimes. But actual girls, women, mothers and lesbians have no such protection. The only \"women\" who are protected against hate crimes in Norway, are those who in fact are men.”",
      "In addition to the possible legal action against her, Amnesty International joined in the criticism of Ellingsen, accusing her of harassing Jentoft by identifying the trans activist as a man on national television, Reduxx reported.",
      "&quot;Gender identity&quot; is per definition a specific kind of subjective belief. The introduction of subjective beliefs in criminal law, is essentially a reontroduction of blasphemy-laws.  Additionally, this kind of blasphemy-laws are especially used against women. pic.twitter.com/UsNui8ogis",
      "Under Norwegian law, Ellingsen could face a prison sentence of up to three years if she is found guilty of misgendering the transgender activist. In January 2021, Norway added gender identity to its list of protected groups under the country’s hate crime laws.",
      "As detailed by Reclaim the Net, a Norwegian man was jailed for three weeks in 2021 and received a substantial fine after being found guilty of misgendering a person who identified as transgender on Facebook.  Ironically, it seems consequences, like a prison term, are still only for humans with a penis in Norway.",
    ],
  }
  {
    slug: "speechless-controlling-words-controlling-minds-by-michael-knowles",
    title: "Speechless: Controlling Words, Controlling Minds by Michael Knowles – Book Summary & review",
    excerpt: "Political commentator and media personality Michael Knowles has authored an examination of politically correct speech in his book Speechless: Controll...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Political commentator and media personality Michael Knowles has authored an examination of politically correct speech in his book Speechless: Controlling Words, Controlling Minds, from Regnery Publishing.",
      "We use language to communicate not only what we perceive and believe, but also to describe reality. This is frequently at odds with politically correct speech, and politics has become a war of words. Knowles makes the point that “according to political correctness, words do not describe reality; they constitute it.”",
      "A book like Speechless couldn’t be more relevant. In an age when the term “birthing person” is used, Knowles points out that our first words, “mama” or “papa,” may be politically incorrect. With speech, people frequently yield out of politeness. Furthermore, in modern America, people remain silent out of fear. Truth is regarded as not only dangerous but as Knowles can confirm: stating facts can get you physically attacked.",
      "Opponents of political correctness frequently poke fun at the absurdity in the latest politically correct phrase du jour or insist on the necessity of free speech. In Speechless, Knowles argues instead that this frequently misses the point: “we must not merely demand the right to speak; more importantly, we must have something to say.” It’s a potent point during a time when one not only can’t dissent with mainstream narratives, but even questioning is forbidden.",
      "Speechless is a thoroughly researched work and the information presented is meticulously referenced. The book is rich with historical lore on political correctness and speech suppression as well as examples from current events. Knowles dismantled many of the enduring historical misconceptions relating to speech.",
      "My biggest takeaway from Speechless by Michael Knowles is that political correctness is not and has never been about coherence. That’s not the purpose. Society cannot simultaneously embrace contradictory beliefs and viewpoints, but as Knowles illustrates, political correctness requires it. For your political correctness to be up to date, no belief can be fixed. Political correctness moves at too rapid a pace. Reality and political correctness are at odds with one another.",
      "Speechless is not light reading however it is written quite eloquently.  Knowles’ command of the English language is masterful, much like his broadcasts. After such substantial reading, it’s fitting he should end with some of his unique and at times satirical humor.  The “Glossary of Jargon,” displays the trademark Knowlesian wit and provides some guidance on navigating politically correct terms.",
      "Speechless is recommended for those curious minds who want to look beneath the surface of politically correct speech and censorship. Knowles’ book is the product of a sharp mind. You will see how the manipulation of words is effective and how they achieve goals with these devious methods.",
      "“People who worry about microaggressions usually have never faced macroaggressions.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“Under political correctness, saying the right thing supplants doing the right thing.” ―  Michael J. Knowles,   Speechless: Controlling Words, Controlling Minds",
      "“Boundaries must constrain free speech if only to protect speech, as in the case of laws against sedition or rules against the heckler’s veto. Tolerance cannot tolerate intolerance. And openness cannot leave itself open to closed-mindedness.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“Until the Supreme Court’s landmark decision in Texas v. Johnson, which created or recognized, according to one’s point of view, the constitutional right to burn the American flag, the law could prohibit desecration of venerated objects. Now courts hold that the First Amendment protects flag-burning. And yet in 2019, an Iowa judge sentenced thirty-year-old Adolfo Martinez to fifteen years in prison for the “hate crime” of stealing and burning a rainbow flag, which symbolizes colorful sexual desires. So in fact, the government still outlaws desecration of venerated objects; it’s just that the objects of veneration are different.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“Both leftist critiques of the ‘American dream’ and conservative defenses of social mobility, each based on its side’s cherished statistics, miss the more fundamental transformation: radicals have replaced the virtue of diligence with the sin of sloth in the pantheon of public values.” ―  Michael J. Knowles,   Speechless: Controlling Words, Controlling Minds",
      "“Psychology Today admitted in 2019 that ‘people with conservative political attitudes tend to have better health than their liberal counterparts because the former place greater value on personal responsibility.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
      "“The gospel of radical leftism- call it any name you like- trades the virtue of charity for the sin of envy. According to the radicals’ new standard, it is greedy to keep one’s own property but charitable to covet and steal the possessions of another, a perfect inversion of the old standards of justice…. The greedy want something for themselves; the envious merely want others not to have it.” ―  Michael J. Knowles,  Speechless: Controlling Words, Controlling Minds",
    ],
  }
  {
    slug: "survivorship-bias",
    title: "Survivorship Bias",
    excerpt: "During World War II, fighter planes would come back from battle with bullet holes. The Allies initially sought to strengthen the most commonly damaged...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "During World War II, fighter planes would come back from battle with bullet holes. The Allies initially sought to strengthen the most commonly damaged parts of the planes to increase combat survivability.",
      "A mathematician, Abraham Wald, pointed out that perhaps the reason certain areas of the planes weren’t covered in bullet holes was that planes that were shot in certain critical areas did not return. This insight led to the armour being reinforced on the parts of returning planes where there were no bullet holes.  This wisdom was also beneficially applied to the Skyraider during the Korean War.",
      "This shows that sometimes the missing data may be more meaningful than the available data.  This phenomena is now known as \"survivorship bias\".  Is not only true for matters of aircraft design and defence during war time.  We shouldn't only assess the evidence available to us but consider the evidence we don't have, because it might have been shot down.",
    ],
  }
  {
    slug: "my-account-of-events-part-2",
    title: "My Account Of Events:  Part 2",
    excerpt: "I'm passionate about helping people out of crisis situations. When I was young I went through hell and noone was there for me. I had a few well intent...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "I'm passionate about helping people out of crisis situations. When I was young I went through hell and noone was there for me. I had a few well intentioned people try and help. The few times I trusted people I'd tell them what was going on and their eyes would glaze over. They simply didn't have the capability to deal with it. If you mix religion, mental health, violence and other criminal behaviour no one wants to touch it. No one wants to even hear about it.",
      "Religious leaders will teach about difficult topics and pray for you from a distance. But they don’t actually help you. The police help with simple black & white breaches of the law. But that’s it (if you’re lucky). Lawyers help themselves make money and occasionally clients with legal problems. Good psychologists are good. But they don’t help you on the field. A social worker, case manager, coach or chaplain is perhaps the role that exists to effectively help people in these situations. If you’re very lucky.",
      "I spent many years doing therapy and worked hard on my self. I addressed and overcame my own problems.  I still see a psychologist and have other supporters around me as needed.  I started a charity helping people in severe concurrent crisis situations. I did a coaching course. So I refer to myself as a “crisis coach”. I coach people out of crisis and towards their purpose.",
      "In my twenties, I worked for a few organisations helping people out of crisis situations. I learned from some great people. I was in some great teams who helped people develop new life skills, make better choices and depart crisis sustainably. We worked with the worst in Qld.",
      "I considered it an honour to serve my community this way. I also did it after hours on my own time as a hobby.",
      "I often risked my life to save people. Especially a lot of near suicide attempts. I’ve rescued people from burning alive 3x, hanging from a noose, drowning, jumping off a cliff, other various attempts. Many many deliberate, & accidental, car accidents.",
      "I’ve been held up at knife point and other weapons more times than I can remember. One time I was taken hostage and was in a high speed chase.",
      "Every time I was able to save my client from dying & protect the community.  I’ve never had a client die while working with them.  Every suicide I successfully intervened and encouraged them to choose life.  Every time I was attacked with a knife no blood was ever spilled. Unrepentant crims went back to prison. Those who were willing to change went on and improved their lives.",
      "If you’d like to support me with my legal and other costs it’d be appreciated. You can contribute here.#adamsaccount",
    ],
  }
  {
    slug: "my-account-of-events-part-3",
    title: "My Account Of Events:  Part 3",
    excerpt: "One night a woman set fire to the facility we were in, to suicide by fire. She was under house arrest for arson. She was a giant woman. Taller than me...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "One night a woman set fire to the facility we were in, to suicide by fire. She was under house arrest for arson. She was a giant woman. Taller than me and twice my size. The facility was set up like a minimum security prison. We looked after a couple of murderers there who had significant disabilities and intellectual impairment. There were magnetic locks on all drawers, windows and doors. Even the TV was locked behind a Perspex screen box.",
      "The police had taken her out for an appointment that day and returned her in the evening. She was asked if she had a lighter. She said no.",
      "I could see her section from the office but there were 5 gates and doors between us and her. The fire alarm rang. It’s pretty common for these clients to sneak in cigarettes. Nonetheless, I went in as quickly as possible. She had lit the bed on fire and one wall was already burning. I ran back and got an extinguisher. I emptied it on the blaze. I ran back and got the second extinguisher by the time I returned the fire was triple the size. I emptied the 2nd extinguisher pointlessly on the flames.",
      "I yelled at her to get out but she sat down in the fire. I realised then that she didn’t want to get away. She wanted to burn.",
      "The smoke was pouring out of the flames. Thick black smoke from the chest up.",
      "In my mind, I thought I could get her out if I grabbed a blanket, punched her in the head and knocked her out, rolled her onto the blanket and carried her out like Santa Claus.",
      "The other staff had already run away from the facility to get away from the fire. If I left her, she was gonna be trapped because of the magnetic locks on all the doors and gates. She would’ve died a really horrific death.",
      "I realised in that moment she had been so abused that she was already dead inside. Me yelling at her was just reinforcing her reason to burn. I thought a bit of love might get her out alive.",
      "I sat down next to her. It was getting really hot in there. Fortunately sitting down I was underneath the smoke. If you've ever been in a fire you'd know what I mean.",
      "She looked at me like I was an idiot. I asked her something unprofound like, “how are you?” Her incredulity and hatred turned into tears. She understood that I was there for her. I wasn’t going to make her do anything. She started sharing her story. I suggested we move outside to continue talking somewhere cooler. She agreed and we walked away from the flames. No one got hurt.",
      "I learned a lot from that experience.",
      "I’m also passionate about helping people in domestic violence situations. I’ve supported many victims and perpetrators of domestic violence. Prob over 100. My family went through the most extreme experiences of domestic violence. No one was there to provide genuine honest unbiased solutions. I know better than anyone that innocent people die when good people do nothing.",
      "If you’d like to support me with my legal and other costs it’d be appreciated. You can contribute here.#adamsaccount",
    ],
  }
  {
    slug: "in-the-media-coffee-as-a-cure-for-community",
    title: "In The Media:  Coffee As A Cure For Community",
    excerpt: "Link to the original article online 25 November 2017....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Link to the original article online 25 November 2017.",
      "https://www.couriermail.com.au/news/queensland/qweekend/coffee-served-with-a-slice-of-community/news-story/1dcac8b8584c0ddaf16ebcd94c88331d",
      "Cup From Above (a social enterprise that trains people to work in hospitality) grew out of a business deal that went sour. I’d moved back to Brisbane from the Sunshine Coast when an old school friend asked me to be a shareholder in a cafe; it didn’t work out and I was left with the cafe in Aspley (in Brisbane’s north). It was in the worst ­situation possible – it was in debt, running at a loss, the overdraft was maxed out and we had nothing.",
      "Becoming a social enterprise wasn’t a deliberate decision. I just thought, I’ll ­operate a business and try to help people along the way. The homeless and hungry were coming in; we had food, so we’d just feed them. It’s an extension of my faith. I’m not a member of any organised ­religion, more an organic Christian.",
      "I follow the basic teachings of Jesus, ­caring for those who are disadvantaged. That was the heart of it, to try to run a ­profitable business that ­empowered people in the community.",
      "We started training the homeless, drug addicts, former criminals to be baristas and to work in hospitality. They would volunteer to learn and work in the cafe, to get ­experience, till they started getting jobs elsewhere. Cup From Above is five years old now. We recently moved into Fortitude Valley and linked up with a registered training organisation so our trainees earn recognised qualifications.",
      "The downside of training your ­people to have ­exceptional skills and stand out when going for a job is you ­become so fussy about your coffee, and it’s hard to go anywhere to drink stuff that doesn’t taste as good.",
      "We often joke we’re changing the world one cup at a time. A lot of people ask us, why open a cafe? The psychology of ­community building talks about the ­concept of third place, which is the social surroundings separate from home and work. That third place used to be the church 100 years ago. Where can people meet now to have a conversation and build healthy relationships? The coffee shop. Coffee is the symbol for community.",
      "I grew up in Aspley, in a messy family I’m not really close to. After school I ­studied jazz piano and guitar at the Jazz ­Musical ­Institute (at inner-north Bowen Hills), but I needed a job as well and eventually got one in the aged care sector.",
      "That was my introduction to social work, in between (music) gigging. During 10 years on the ­ Sunshine Coast I worked with people with disabil­ities and specialised in those with advanced difficult behaviours. I worked with murderers, ­rapists, the worst of the worst, helping them reintegrate into the community after being incarcer­ated.",
      "So much can be accounted for by bad families and unhealthy environments, being taught how to be violent, but these people can be loved back to life.",
      "Disconnection is the disease and community is the cure. That’s my one-liner. Coffee facilitates community. We’ve seen some beautiful results. Guys who have been taking hard drugs for 10-plus years and had several incarcerations who are now reconnecting with family, getting off drugs, getting jobs; these solutions grew out of healthy relationships. It’s what ­people are craving.",
      "As a culture I think we’re avoiding the one thing that would cure so much, and that’s becoming vulnerable and connecting with someone who is really hurting. That’s hard. You can’t connect with 1000 people but you can connect with one or two or three. Be humble enough to reduce those numbers and love a few ­people who are ­difficult to love.",
      "I don’t have a partner or pet as I’m too busy with Cup From Above, but I love going to the beach, climbing mountains, ­reconnecting with nature. Every couple of weeks some friends and I will go to the Glass House Mountains, where it’s so quiet and peaceful.",
      "I also love reading anything I can get my hands on, particularly bio­graphies. Long Walk to Freedom by Nelson Mandela is probably one of my favourites. I love ­reading about the great things people have done and learning those lessons.",
    ],
  }
  {
    slug: "in-the-media-aspleys-cup-from-above-cafe-to-close-doors-this-month",
    title: "In The Media:  Aspley’s Cup From Above Cafe to close doors this month",
    excerpt: "A social enterprise made the shock announcement it would close its doors on April 29 less than a year after it spent up to $30,000 on upgrades to its ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "A social enterprise made the shock announcement it would close its doors on April 29 less than a year after it spent up to $30,000 on upgrades to its facilities.",
      "https://www.couriermail.com.au/questnews/north/aspleys-cup-from-above-cafe-to-close-doors-this-month/news-story/cdc1d53c8a5692d9a4c6e19744554cd8",
      "ASPLEY’S Cup From Above cafe will close its doors in just two weeks after a shock announcement on Facebook earlier this month.",
      "The social enterprise helps everyone from homeless pregnant women to refugees and people struggling with drug addiction.",
      "It will cease operating on April 29 after failing to reach a new lease agreement, organisation founder Adam James confirmed.",
      "“It’s a bit painful but I think it will be a blessing in the end,” Mr James said.",
      "Mr James said the organisation spent up to $30,000 on upgrades to the kitchen only last September when it expected to stay at the site for a further six years.",
      "But now he was on the hunt for a new site somewhere between the CBD and North Lakes that better suited the cafe’s new direction.",
      "Mr James planned to operate two distinct arms of Cup From Above. One would be a for-profit cafe with a greatly reduced role in helping vulnerable people learn job skills. The other arm would be a dedicated charity division, still based in Aspley.",
      "“Profits (from the new cafe) will roll back into the charity arm,” he said.",
      "The Aspley cafe turned a profit only one month out of the past 60, Mr James said.",
      "Mr James encouraged Cup From Above supporters to drop in before the last day of trading.",
    ],
  }
  {
    slug: "in-the-media-rallying-around-bella",
    title: "In The Media:  Rallying Around Bella",
    excerpt: "From sometime in 2012...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "From sometime in 2012",
    ],
  }
  {
    slug: "suspended-coffee-movement-gains-supporters-around-australia",
    title: "Suspended coffee movement gains supporters around Australia",
    excerpt: "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee-movement-gains-supporters-around-australia/5505160...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee-movement-gains-supporters-around-australia/5505160",
      "The 'suspended coffee' movement, which encourages cafe patrons to buy coffees and food for future customers who are in need, is gaining popularity worldwide. Kate Walton and Maria Tickle investigate the progress of the movement in Australia and meet some of its supporters.",
      "This article contains external content that failed to load. It may have been removed or is no longer available.",
      "When you come across a homeless person asking for money on the street do you sometimes wish you could give more than just coins? Maybe a meal and a hot drink?",
      "A grassroots charitable scheme spreading rapidly through cafes around the world allows you to do just that.",
      "The ‘suspended coffee’ movement encourages patrons to buy two coffees, leaving one ‘in suspense’ for someone in need. It's a new incarnation of an old trend that is thought to have started more than a century ago in the working class cafes of Naples.",
      "It’s built the most unlikely friendships and connections; we have millionaires sitting next to people who are borderline homeless, we have  responsible lawyers sitting next to people really struggling with addiction.The story goes that when a person experienced good luck they would buy two coffees, one for themselves, and one for someone in need. After the Second World War the tradition declined but since the global financial crisis of 2007/8 there's been a resurgence and the initiative has spread to the cafes of Europe, US, Canada, South America and Australia.",
      "Cup from Above, a cafe in the Brisbane suburb of Aspley, was one of the first Australian businesses to adopt the Italian tradition and recently extended the scheme to meals as well.",
      "‘If they’re familiar with the system they just come in, grab a token and ask for what they like, just as though they were putting down money,’ says Adam Cocks, the cafe's founder and a former social worker.",
      "He says social media plays an integral role in the promotion of the suspended coffee movement.",
      "‘On the weekend we had quite a few tokens, on Monday we got inundated with people in need of a hot drink and by Monday lunchtime we had zero on the wall. We put a call out to the community to say the rack’s empty and within 24 hours we were overloaded again.'",
      "Cocks' call out led to around 80 food and drink donations. Like many cafes, Cup from Above has a system where suspended coffee and food tokens can be bought at the cafe or online, which means you could donate a meal to anyone, anywhere, any time.",
      "‘It’s built the most unlikely friendships and connections; we have millionaires sitting next to people who are borderline homeless, we have  responsible lawyers sitting next to people really struggling with addiction,’ he says.",
      "Shirley James-Sharry runs a Facebook page that promotes suspended coffee in Queensland. She says different cafes have different systems. While some use tokens, others tally the coffees on a chalkboard. She prefers the token system, as the physical act of hanging the token on the wall is part of the process of giving.",
      "‘Some include your names, I like the anonymousness too, because it’s just that idea that someone that you don’t even know wants you to enjoy something. So there’s that real connectedness and to me it’s kindness and inclusion,’ she says.",
    ],
  }
  {
    slug: "caffeine-kindness-on-abc-radio-national",
    title: "Caffeine Kindness on ABC Radio National",
    excerpt: "Originally Broadcast Sat 31 May 2014 at 9:48am...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Originally Broadcast Sat 31 May 2014 at 9:48am",
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee/5483134",
      "They say that charity begins at home, but now it can start at your local cafe. The growing international trend of buying two coffees and leaving one 'in suspense' is a new incarnation of an old trend that is thought to have started more than a century ago in the working class cafes of Naples in Italy.",
      "The story goes that when a person experienced good luck they would buy two coffees, one for themselves, and one for someone in need. After the Second World War the tradition declined but since the GFC there's been a resurgence and it's spread to the cafes of Europe, US, Canada, South America and here in Australia.",
      "We visit a couple of Brisbane cafes that have taken the suspended coffee movement to heart.",
    ],
  }
  {
    slug: "the-one-where-i-cut-a-worm-out-of-my-chest",
    title: "The One Where I Cut A Worm Out Of My Chest",
    excerpt: "When I was about 20 years old I was working on a farm just outside the township of Shepparton in Northern Victoria.  I was working hard and living in ...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "When I was about 20 years old I was working on a farm just outside the township of Shepparton in Northern Victoria.  I was working hard and living in a tent at the edge of an orchard of pears perched beside a rusted out old tractor.  The days were long.  When you’re picking pears you have to start before the sun which meant getting on the tractor at 5am.",
      "I noticed a sore had developed on my chest but it didn’t become a problem until the third day.  I began to work but it was just too painful.  I went over to the farmer and told him.  Mark was 5 foot nothing but compensated for his lack of height with volume and foul language.  He was used to telling people what to do and they did it.  He advised me in colourful detail that I was very lazy and said to get back to work.  I showed him the sore on my chest and it silenced him immediately.  He just started nodding and agreed that I should go to the doctor.  I was living in a tent with no proper bathroom or mirror.  So Mark’s reaction was the first real cause for my concern.",
      "I went to the doctor, he had a look and said he wanted to operate on it.  I asked how much it was gonna cost and he explained a few hundred dollars.  A few hundred dollars which I didn’t have.  I know now that I could have just driven on to the hospital and they probably would’ve just done it for free.  But noone told me that and I had no money.  I had to work.  So the doc gives me some antibiotics.  I asked him for some tips.  Cause this was before internet was everywhere.  You can probably learn how to do surgery on youtube now.  I headed back home to my tent on the farm to operate.",
      "My bathroom was a temporary builders portaloo with a tiny cracked mirror and a miniature hand basin.  I had some scissors, paper towels, a knife and some rum.  I disinfected everything best as possible and prepared my chest for the blade.  Now squinting into mirror I could see it was the size of half a mango on my chest.  Something like a boil had formed on the bottom of it.  That seemed like the best entry point so I lanced it with the blade.  Outrageous amounts of pus flowed like lava from the incision.  At the start I didn’t even have to touch it.  It flowed freely.  I gently massaged from up near my collar bone and more flowed out until it stopped.  Now I could tell there was more in there but something was blocking it.  I tilted my head straight down but the angle wasn’t enough to see clearly.  I leaned in close to the mirror in an attempt to see more clearly and to my horror I could see a small white... something...  I pinched at it.  Then pulled.  I could feel it sliding down under my skin from up near my collar bone.  I paused in terror.  I was having trouble believing what was happening.  I didn’t think this was even possible.  I considered all my options and resolved that, whatever this was, I had to get it out of me.  No-one else was gonna do it for me.  I stood back up and slowly continued to pull this parasite from my chest.  I don’t wanna ruin pasta for you but it looked like fettuccine.  I got what I thought was all of it out. I disinfected and cleaned everything.  Then popped the Flucloxacillin the doctor had prescribed and passed out.  The next day I felt strong as an ox.  I went and worked a full day and doubled my usual quota.  The antibiotics seemed to be working well and I felt great.  Until 2 weeks later it grew back.",
      "I went back to the doctor and relayed what had happened.  He didn't inspire much confidence.  I remember wondering if he was a real doctor.  He was so short his feet barely touched the ground as he sat in his doctors chair.  I remember the white in his eyes were intensely contrasted and against his dark skin and furrowed brow as I told him what I did.  I finished and he slowly nodded and in thick accent queried, “so was it wrrrrigling??”.  I searched his face for humour yet found none.",
      "He then says I need to tell my friend and ask him to come here.  I wait and this guy rocks up who looks like Bill Gates cousin.  He’s about 6 foot 2 all elbows and knees with a pair of magnifying glasses on his face.  I tell the story yet again.  This doctor tells me, \"a branch has snapped off in my chest while I was working and my body \"cocooned\" it and healed over it.  Then I clarify with, \"yeh nah, that didn’t happen\" but he continued to argue with me.  I was starting to think if this is the best help I’m gonna get then I’m toast.  I say, “well then shall we cut it out and have a look see hey?”.  They both said they didn't want to do it.  So I ask them to hook me up with some tools so I can do it DIY again.",
      "They hand me one of those operating trays with all those clean little torture devices and there I am operating on myself again.  I cut a bit more of this worm thing out and the short doctor opens up a plastic medical container and I dropped it in.  The plan was to send it to a university in Melbourne to get it analysed.  I get another prescription of antibiotics and hope to God I had got the last of it out.  The next day I feel great.  A few days later I moved onto another orchard to harvest golden delicious apples.  On this farm, I had a run down old cottage to stay in.  The first night I lay down on the bed and thought that the hum of the electricity was unusually loud.  But as I lay there in the dark I realised the building had never had electricity.  The hum was, in fact, a hive of bees nested in the wall which was confirmed after a few bees landed on me through the night.  I ended up sleeping in my car.",
      "Sure enough, 2 weeks later it started growing back again.  The results came back from the university “inconclusive”.  I had some money together by this time and started to head back to Brisbane.  It was excruciating having the seatbelt press over the wound.  Every bump would send a wave of poison through my blood.  A friend was in Sydney at the time I was driving through.  He let me stay there the night.  I thought this is my opportunity to finally get this thing once and for all.  I took my shirt off and my friend asks me if I had been shot.  He wasn't joking.  I explained to him what had happened so far.  I got a butter knife and slipped it in. Then I got another knife and scraped the rest of whatever the thing was out.  I slept on an actual bed that night for the first time in a long time.",
      "The next day I drove to Brisbane.  After returning home I went to the hospital and spoke to a doctor there.  She examined it and said she thought it was staphylococcus.  It had started to heal over and you couldn't really tell anymore.  So we’ll never know for sure what it really was...",
    ],
  }
  {
    slug: "music-connects",
    title: "Music, Connection, Old Love & Bob Marley",
    excerpt: "Today I went into the city to explore and capture some images and develop some ideas about connection and community.  I sought for photos to illustrat...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Today I went into the city to explore and capture some images and develop some ideas about connection and community.  I sought for photos to illustrate my upcoming Tedx talk/book “Community is the Cure; disconnection is the disease\".",
      "I walked around and to be honest I was so lost in thought listening to Bob Marley that not so many great photos were taken.  \"One Love! One Heart! Let's get together and feel all right\"... his lyrics constantly pound out a message of connection to his congregation of emancipated sojourners who had triumphed against racial injustice but were still facing overcoming a planetary divide over mostly mere skin colour.",
      "I came across an aboriginal man sleeping under a blanket in a public park.  Obviously homeless and classically disconnected from what we would consider a full and healthy life.  Or maybe he'd just had a fight with his wife and took up Bob Marley's sagely advice and thought \"no woman, no cry\" and just thought he'd keep the peace and have a nap in the park.  Probably not but maybe my assumption was prejudiced.  As I took the photo I noticed the well dressed couple to his left.  Sitting in an astoundingly beautiful park immersed in all the glorious warm sunshine Brisbane's winter days have offer and I noticed they didn't talk once.  They were seated together, the sun is shining, but unanimously, independently, disconnectedly, autonomously and vicariously seeking a transcendental virtual high from beyond their smart phones.  Maybe they were more disconnected than the homeless man who lay mere metres away.",
      "Connection is what we all crave.  Connection with God, the universe, our friends, our lovers, our colleagues, our comrades, our brothers, our other half, our planet, our environment, our animals.  It drives every part of us and fuels our greatest endeavours, our most noble long lasting marriages.  And our craving for connection misplaced and misguided is sufficient cause for our worst choices.  I've found that even great people, connected the wrong way or the wrong time, simply risks bringing about a more painful disconnection, both within and without.  You see even connection is painful.  It hurts to forgive, and it hurts to be patient, it hurts to be overly gracious but nothing great was ever built painlessly.  We use the word passion often to refer to a sexually driven explosive encounter.  But passion comes from the latin word \"passio\" which literally meant \"to suffer\".   Nothing more passionate than elderly couples (that's a dangerous sentence but you know what I mean).  Because you know that old love was suffered and fought for.  The truth is, everyone is going to hurt you.  You just got to find the ones worth suffering for.  It's that rich selfless old love that anchors our communities.  Out of those wells of wisdom there's a surplus we can draw on to love on difficult homeless people, drug addicts, the mentally ill.  Maybe it also works the other way round?  Maybe by loving difficult people, the ones we choose to journey life with become easier to love?  I don't know.",
      "I stumbled across Bryn who was busking on his keyboard near Central Station.  We got chatting and had a bit of a jam.  Then a man, who could've passed for being homeless apart from the valuable luggage he carried, turned out he was a Romanian cellist backpacking across Australia.  He literally got off the train into Brisbane city for the first time and we were the first people he met.  Well I couldn't turn down the opportunity to challenge my new friend to a musical duel.  Man this cellist could play.  I had just been thinking how music brings people together.  \"True love that now exist is the love I can't resist, So jam by my side.  We're Jammin' I wanna jam with you\".  I think Bob is talking about music?... but it might be... let's assume it's music.  He drops this line in that song \"We all defend the right; Jah – Jah children must unite\".  Jah is an abbreviation of Yahweh.  I think Bob believed we are all children of the same God, black and white, rich and poor and he used music as his pulpit.  I'm not the type to go and roll a joint now but I have gleaned some wisdom about community and connection from his sermons.  Here's a clip of our little jam session...",
      "We only shared a few words before launching into this debate of melodies.  Music is an international language.  If you've studied the language then you're equipped to talk to anyone on the planet who also knows it.",
      "I have an affinity for jazz.  I've studied it and I can play a bit but I've since devoted my hours to other endeavours and can't really swing like I want to.  For years I've questioned my affection for the genre and there are a few answers which I won't go into on this blog post.",
      "You see music is all about rhythm and melody.  I mentioned before that there's only one international language for music.  Which is true.  But there are thousands of genres of music right.  I guess like dialects.  They have nuances and variations that they value that defines the genre.  For example 80's rock valued loud egotistical guitar solos.  Jazz values the use of dissonant harmonies that are placed together intentionally, thoughtfully and arrogantly creating something far more exquisitely beautiful than any genre that segregates those combinations of tones.",
      "You see life is messy.  Loving people who are different is uncomfortable.  It's easy to just separate ourselves from them.  Walk on the other side of the street, pretend we didn't see them or even just neglect to proactively smile.  We can sit back and allow our governments to make things simple and segregated.  But when we do that we take the jazz out of life.  Life is magnificently dissonant and if we choose to acknowledge and embrace that with our hearts and arms wide open we both offer and receive redemption.",
    ],
  }
  {
    slug: "my-account-of-events-part-5",
    title: "My Account Of Events:  Part 5",
    excerpt: "April 2019, a school chaplain from SU QLD referred \"someone in need\" to my charity.  The woman was stated to be a victim of DV and facing homelessness...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "April 2019, a school chaplain from SU QLD referred \"someone in need\" to my charity.  The woman was stated to be a victim of DV and facing homelessness.  We provided immediate support by way of money for rent, food & furniture.  She explained to us that she had a lot of debt and had been selling herself to cover living costs.  We offered her an honest job as a cleaner and paid her wages according to Fairwork Australia.",
      "She explained to us that she had over $50,000 on credit card debts and consequently had to make a minimum of $700 per week just to cover all the interest payments and basic living costs. She was married to an Australian man in the middle of nowhere in the outback. She had met him online and moved to Australia to marry him. She explained that not long after they were married he became violent and had to leave the marriage. She then moved onto another relationship and that relationship was also violent. The daughter was with her first marriage to a man in the United States. She said he was also angry and violent. She said he had abandoned them when he learned that the daughter had a disability. She described him as a \"loser\".",
      "She didn't have a car. While she was engaged with our services, her daughter wasn't allowed to attend school because of issues with their Visas. This meant for her to go to work, her daughter had to attend. We specifically sought after cleaning jobs that were flexible and with clients who were understanding and would allow her daughter to be there. Not only that but we had to drive both her and the daughter, and the other staff, and the equipment to each job. Fortunately, we were able to secure several bond cleans which met all these criteria.",
      "She asked for legal support to help her obtain Permanent Residency status here in Australia. She explained that because she was divorcing her Australian husband she was at risk of being deported back to the U.S.  Her daughter had been ill & they were not eligible for medicare as they were now on a Bridging Visa.  Her daughter also has a disability and required medical support. She had already accrued thousands of dollars in debt from various hospitals around Australia.  I spoke to a friend of mine who is a great lawyer.  He agreed to do what he could to help her get her visa.  I relayed this to her and asked her for all her documents to give to the lawyer to assist with her immigration application.",
      "Around the 14/4/19, we had a conversation. One of the lawyers had raised the possibility of a Criminal Justice Visa and asked if there were any current charges pertaining to the domestic violence. If there were charges pending against one of her partners that she was allegedly abused by then she may be eligible. She did not know about the Criminal Justice Visa. She said that no charges were made against anyone despite her contacting police many times in an attempt to charge them.",
      "I relayed this good news to her and met with her to collect the supporting documents. I asked to meet with her at a cafe to collect documents (instead of in her home). We had to go through the documents so I imagined it would be thirty minutes to an hour. I was very clearly not asking her on a personal romantic date. The purpose of the meeting was to collect the documents, review them and assist with compiling what was actually necessary for the lawyer. She stated she did not want to meet with me at a cafe. I said \"that's fine\", attempting to address what I perceived to be the awkward subtext and indicate this wasn't social but professional. However, if she wanted me to collect the documents then we would have to meet.",
      "She seemed to understand but then insisted I just collect them from her home and go through them there. For the sake of expediency and lack of reasonable alternatives I agreed. Her daughter was present the entire time but no other adults were present. What's ridiculous about all this is that no accusations have been made about me being alone with her in her home. In my mind at the time, this is what I was most worried about.",
      "Now, upon receiving the documents it was apparent she was lying about many details of her story. It's actually fairly normal for people in crisis to lie about their situation. It's so frustrating as a support worker. It seems the extremity and distress of their crisis situations leads them to disregard their higher virtues to most swiftly get back to a semblance of safety. These lies might look like stating that they would \"never take drugs\" but then not disclosing that they're smoking marijuana every day. Or saying they \"don't have a criminal history\" and then it turns out they got charged for shoplifting several times when they were younger. This sort of thing is common.",
      "The real issue is when someone you're supporting is lying to you about the entire situation and effectively using you to achieve some ulterior or wicked motive. I've come across this several times over the years and we developed these organisational principles to help guide our responses when coming across these extremely complex cases.",
      "The documents she gave us revealed that she was here in Australia with her daughter illegally.  I calmly questioned her about the discrepancies in her story in contrast with the documents. At that point, I still thought she might have been a legitimate victim but was embarrassed about the stupid decisions she'd made. One court document revealed that the biological father of the daughter had taken her to court to have shared custody of the child. This was fitting the description of a \"loser who'd given up on his daughter because she had a disability\". Amongst the documents was information about her Australian husband and the \"domestic violence\" she had endured. The husband's police records were there too. There were 2 pages detailing all the crimes he'd committed. He was a dangerous violent criminal. His psych records showed that he's a diagnosed schizophrenic. Amongst the crimes were assaulting police officers, robbery, assault and more. What's more is that he, and his family, claimed that she had used him to come to Australia.",
      "Then there was the issue with her parents. She told us they were abusive and she could never speak to them or return to the U.S. because of them. After one job she asked us to stop in to the post office because she had a parcel from the U.S. she was very excited to receive. When she collected she explained that it was filled with her favourite American candy. I asked who it was from. She said, \"her mom\". She explained her parents were very wealthy and had a big beautiful home but they were very strict and mean. She said they could send her money so that she wouldn't have to be poor but they chose not to because they wanted to control her. She said her mother had paid for open ended plane tickets for her and her daughter to return home but she wouldn't take them.",
      "It seemed considering all this we weren't supporting someone who actually sincerely needed help. She was not facing imminent homelessness. She has a safe home in her country that she could choose to return to. However, she would have to co-parent with the father of her child and be a responsible adult. Instead, she was choosing to risk her daughter's life in a foreign country, with no medical insurance and prostituting herself to pay for rent.",
      "I also found out that the chaplain who had referred her to us was continuing to support her. Only a week or so earlier she had been singing our praises. Then toward the end of April, she had gone cold on us. Out of professional respect, I called her up and explained the concerns we were facing and the evidence we had found against her. The chaplain seemed unwilling to discuss it and was quite vague on the phone. I thought she must have been fed the same story \"H\" had told others.",
      "There are several issues here though. A woman has brought a child to Australia illegally. It's effectively a case of child stealing/abduction. The child has complex medical needs and has no medical insurance or cover whatsoever. The mother has had the child around violent and dangerous individuals, not been able to adequately feed the child or care for her responsibly. But the chaplain was continuing to support her. In my mind and in my experience working in this field, these factors compelled me to report her actions to the authorities.",
      "I contacted the Chaplain's manager at SU Qld who I personally know from working together supporting other individuals in complex situations in the community. I requested a meeting to sit down with the chaplain and ideally the client too. I was hoping a plan could be worked through to discuss the concerns and work out a solution that is ultimately best for the child, that is legal, safe and fair. SU Qld management and the chaplain declined to have a meeting. In the subsequent weeks I heard the chaplain was relaying gossip that came from \"H\" to donors of Liberty. At that point, I sent the chaplain a stern email requesting she discontinue any further defamatory remarks.",
    ],
  }
  {
    slug: "green-tea-and-fat-loss",
    title: "Green Tea and Fat Loss: What's the Connection?",
    excerpt: "Let's have a yarn about green tea and how it's helped me shed a few kilos....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Let's have a yarn about green tea and how it's helped me shed a few kilos.",
      "Green Tea and Fat Loss: What's the Connection?",
      "Green tea has been around for forever, and it's packed with goodies called catechins, especially one named epigallocatechin gallate (EGCG). These little rippers are believed to boost our metabolism and help burn fat. A study from way back in 1999 found that folks who had a tea rich in catechins saw a drop in body fat, suggesting green tea might give our fat-burning engines a nudge.",
      "Another piece of research showed that green tea could increase energy expenditure and fat oxidation in healthy blokes, hinting at its potential to aid weight loss.",
      "A more recent review in 2024 looked into green tea extract's effects on obesity. What did they find? Green tea extract might help tackle obesity by influencing various fat-related factors in our bodies.",
      "A Few Things to Keep in Mind",
      "While green tea sounds like a top addition to our daily routine, it's not without its quirks. Here are some things to watch out for:",
      "Green tea could be a handy ally in our quest for better health and weight loss. But, like with all good things, moderation is key. Enjoy a few cups a day, keep an eye on how your body reacts, and remember that no single drink will do all the heavy lifting. Pair your green tea habit with a balanced diet and regular exercise, and you'll be on the right track.",
      "Cheers to making healthier choices, one cuppa at a time!",
    ],
  }
  {
    slug: "whats-in-a-name-other-noteworthy-adam-james-es",
    title: "What's in a name? Other Noteworthy Adam James – es",
    excerpt: "It turns out the name Adam James is shared by several public figures across diverse fields. Here’s a look at some of the more prominent ones, what the...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "It turns out the name Adam James is shared by several public figures across diverse fields. Here’s a look at some of the more prominent ones, what they do, and links to learn more.",
      "A British actor known for theatre, TV and film roles. He trained at the Guildhall School of Music and Drama and has appeared in productions such as Band of Brothers, Dr Foster, and more. Wikipedia+2IMDb+2Website/Profile: His IMDb page – IMDb – Adam James IMDbShort summary: Well-established actor with a range of credits in UK and US productions, theatre and screen.",
      "An American football player who played at Texas Tech Red Raiders; his father is former NFL player and analyst Craig James. Texas Tech Red Raiders+2247Sports+2Website/Profile: Official roster page – TexasTech.com – Adam James Texas Tech Red RaidersShort summary: Former college football wide receiver/tight end, involved in high-profile team stories and media coverage.",
      "An Australian recording artist blending Indigenous heritage, country, blues and jazz. He hails from Quandamooka Country (North Stradbroke Island) and has released several albums, while performing across Australia. adamjames.com.au+1Website/Profile: adamjames.com.au adamjames.com.au+1Short summary: A talented singer-songwriter whose music and cultural roots converge — offering a distinctive voice among artists.",
      "He’s also the founder of Business Advice and The Upkeepers, initiatives focused on helping Australian businesses scale sustainably. Through his personal work at abjames.com, Adam shares insights on business, mindset, and modern marketing — blending strategy, creativity, and purpose to help people and brands grow.",
    ],
  }
  {
    slug: "caffeine-and-kindness-the-story-behind-the-suspended-coffee-movement-in-australia",
    title: "Caffeine and Kindness: The Story Behind the Suspended Coffee Movement in Australia",
    excerpt: "Originally broadcast on ABC Radio National’s “First Bite” with Adam James...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Originally broadcast on ABC Radio National’s “First Bite” with Adam James",
      "https://www.abc.net.au/radionational/archived/rnfirstbite/suspended-coffee/5483134",
      "They say charity begins at home — but sometimes, it starts at your local café.",
      "Across Australia, a quiet but powerful movement has been brewing — the suspended coffee. It’s a simple act of kindness: when you buy your morning coffee, you pay for an extra one and “suspend” it for someone in need. Later, that coffee can be claimed by anyone doing it tough — no questions asked, no forms to fill, just goodwill in its purest form.",
      "The idea of suspended coffee (or caffè sospeso, as it’s known in Italian) began more than a century ago in the working-class cafés of Naples. When someone was blessed with good fortune, they would pay for two coffees — one for themselves and one for a stranger who couldn’t afford it.",
      "It was a simple yet profound social ritual — a way to express gratitude and acknowledge that sometimes, luck and hardship are only a cup apart.",
      "After World War II, the practice faded, but when the Global Financial Crisis hit in the late 2000s, it re-emerged. Across Europe, North America, South America and eventually in Australia, the suspended coffee movement returned as a gentle reminder that generosity still matters — even in difficult times.",
      "In 2014, journalist Adam James explored this small but significant act of community in a feature for ABC Radio National’s “First Bite”. The segment, titled “Caffeine and Kindness,” took listeners inside Brisbane cafés that had embraced the idea of suspended coffees.",
      "These cafés weren’t driven by marketing campaigns or corporate social responsibility targets. They were driven by empathy. Regulars would quietly pay for an extra coffee; café owners would mark it down and serve it later to someone who needed a moment of warmth — whether it was financial hardship, loneliness, or just a bad day.",
      "As James noted, the suspended coffee wasn’t really about caffeine at all. It was about connection. It turned an ordinary café into a small but meaningful hub of human kindness.",
      "For the person who receives it, that free cup of coffee might mean much more than a caffeine fix. It’s a reminder that they haven’t been forgotten — that community still exists, and that even a stranger’s kindness can make a rough day a little easier.",
      "And for the person who gives, it’s a simple way to practice compassion in daily life — to act on the belief that kindness doesn’t need to be grand to be good.",
      "A decade on from its broadcast, Caffeine and Kindness still resonates. The suspended coffee movement continues to percolate quietly across cafés in Australia, reminding us that the simplest gestures often have the most lasting impact.",
      "In a fast-paced, contactless world, it’s comforting to know that something as small as a coffee can still bring people together — one cup, one act of kindness at a time.",
      "Adam James is a storyteller, business consultant and juggler who explores the intersection of culture, community, and everyday kindness. His work has appeared on ABC Radio National, and through his platform ABJames.com, he continues to share stories that inspire compassion, curiosity, and human connection.",
    ],
  }
  {
    slug: "community-connection-over-coffee-local-police-and-residents-break-the-ice",
    title: "Community Connection Over Coffee: Local Police and Residents Break the Ice",
    excerpt: "In March 2016, residents in Brisbane North were invited to join a unique outreach session by the Queensland Police Service that paired a casual coffee...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "In March 2016, residents in Brisbane North were invited to join a unique outreach session by the Queensland Police Service that paired a casual coffee setting with meaningful conversation. The initiative (originally referred to as a “local police expresso” session) provided a relaxed opportunity for community members to meet officers, ask questions and build trust.",
      "The appeal of such initiatives lies in their informal framing — people meeting face-to-face, over a cup of coffee, removing uniform and procedural distance. The event underscored how law-enforcement agencies can engage proactively with the public, beyond reactionary policing.",
    ],
  }
  {
    slug: "a-vengeful-act-remembering-the-maroochydore-arson-case",
    title: "Remembering one of the Sunny Coast Arson Cases",
    excerpt: "This event happened in October 2010.  It was one of many arson events I had while doing this work....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "This event happened in October 2010.  It was one of many arson events I had while doing this work.",
      "I had asked the young man to go to bed the night before.",
      "The police officers told me he said that he intended to burn me alive while I slept.  He didn't receive any consequences as per usual.",
      "If I didn't put the fire out the whole house would've burned.  I put the fire out best I could and went through each room to make sure he wasn't inside.  The fire had jumped from the stove into the oily rangehood and had started spread inside the walls and ceiling cavities.  I grabbed the fire extinguisher to put it out completely... but he had emptied the fire extinguisher outside and replaced it.  It was empty.After 19 years doing this work, this is what I think.  There is this idea you should be either 1.  Kind & Liberal.  OR 2.  Tough & Conservative.  It's neither and both.  If someone does something really bad, like try to burn them alive in their sleep.  The consequences should be proportionate.  This young man is a danger to society.  However, there should be a liberal opportunity to earn freedom.  If he behaves in a maximum security prison, then he can go to a minimum security farming prison, if he behaves there, then he can get day passes.  If he doesn't improve his behaviour, he should stay locked up and serve a full sentence like any other arsonist.",
      "I continued working with this young man for a few more months to make sure he was in a new safer house with better supervision.",
      "Link to the original article",
    ],
  }
  {
    slug: "actor-adam-james-a-life-in-performance",
    title: "Actor Adam James: A Life in Performance",
    excerpt: "Source: Grokipedia – Adam James (actor)...",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "Source: Grokipedia – Adam James (actor)",
      "Adam James (born 9 September 1972, London) is a celebrated English actor whose work spans television, film, and theatre. A Guildhall School of Music and Drama graduate, and godson of Jon Pertwee, James has earned acclaim for his adaptability across genres—from Doctor Foster and Vigil to the Broadway stage in King Charles III.",
      "The son of actress Polly James, Adam grew up surrounded by creativity. His formal training at Guildhall placed him among peers like Dominic West and Daniel Evans, shaping a foundation for his nuanced, disciplined approach to acting.",
      "Across decades of work, James’ credits include Band of Brothers, Doctor Who, Ashes to Ashes, and Belgravia. He portrayed Prime Minister Evans in King Charles III on Broadway (2015), Hovstad in An Enemy of the People (2016), and Glinda’s father in the upcoming Wicked adaptations (2024–2025). On screen, his range extends from war drama to political satire and high-fantasy storytelling.",
      "James exemplifies the quiet excellence of a craftsman actor—never chasing celebrity but mastering substance. His work reflects commitment, adaptability, and emotional intelligence—qualities that resonate far beyond the stage.",
      "He married former actress and psychotherapist Victoria Shalet in 2015. The couple welcomed their first child in 2016, and James has a daughter from a previous relationship.",
      "Read more: Grokipedia – Adam James (actor)",
    ],
  }
  {
    slug: "coffee-community-and-second-chances-how-one-cafe-turned-a-setback-into-purpose",
    title: "Coffee, community and second chances: how one café turned a setback into purpose",
    excerpt: "The story of Cup From Above is a reminder: when you align mission and model, you not only survive bumps in the road—you thrive....",
    image: blogDefault,
    date: "",
    category: "",
    content: [
      "The story of Cup From Above is a reminder: when you align mission and model, you not only survive bumps in the road—you thrive.",
      "On the “Brisbane Breakfast” show, ABC Radio Brisbane featured the café’s recent move and relaunch after a forced relocation. ABC",
      "https://www.abc.net.au/listen/programs/brisbane-breakfast/cup-from-above/8589250",
      "For five years the café operated at a site in Aspley, serving more than just coffee: it was a welcoming space for people at risk of homelessness, a hub of training and support. Then the site was lost. The business had to vacate. Suddenly, the café with a heart found itself displaced. ABC",
      "Rather than fold, the team sought a new home—and landed in Fortitude Valley. The move signifies more than geography; it’s a fresh chapter. Their founder, Adam James (in the radio piece), talks about being “grateful his charity café has found a new home.” ABC",
      "You’re focused on reclaiming health, better habits, reinvention—and this is a parallel story. Consider:",
      "Cup From Above isn’t just a café—it’s a case study in integrating business, mission and community. For anyone trying to reclaim or rebuild—health, business, identity—the lessons are direct and relevant.",
      "If you’re on a path of change (which you are), notice how everyday business stories mirror personal ones. The courage to say “we’ll move, we’ll adapt, we’ll keep the mission alive” is just as applicable to lifting weights, changing diet, changing mindset, as it is to shifting café premises.",
    ],
  },
];
