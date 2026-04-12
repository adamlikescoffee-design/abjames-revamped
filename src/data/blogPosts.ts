import blogTrees from "@/assets/blog-trees.jpg";
import blogCommunity from "@/assets/blog-community.jpg";
import blogCafe from "@/assets/blog-cafe.jpg";
import blogWriter from "@/assets/blog-writer.jpg";
import blogLiberty from "@/assets/blog-liberty.jpg";
import blogPoliceCoffee from "@/assets/blog-police-coffee.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tree-removal-noosa",
    title: "Tree Removal Noosa: What Homeowners on the Sunshine Coast Need to Know",
    excerpt:
      "If you're searching for Tree Removal Noosa or Tree Lopping Noosa, chances are you're dealing with a tree that's become unsafe, overgrown, or storm-damaged...",
    image: blogTrees,
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
    content: [
      "When I came across the story of a local police-café initiative titled \"Local Police Espresso\", I was struck not just by the novelty of officers serving coffee, but by the deeper message it carried about community connection.",
      "The initiative saw local police officers stepping out from behind their badges to serve coffee alongside community members. It was a simple act, but one that broke down barriers and fostered genuine human connection.",
      "This mirrors something I've always believed: that transformation — whether in health, business, or life — starts with connection. When we sit across from someone, share a cup of coffee, and listen, walls come down.",
      "In my own journey with Cup From Above, I've seen how a café can become neutral ground — a place where people from all walks of life can meet, share stories, and support one another.",
      "The police coffee initiative reminded me that community isn't built through programs or policies alone. It's built through presence, through showing up, and through the willingness to be human first.",
      "Whether it's a police officer serving an espresso or a volunteer finding purpose behind a coffee machine, the recipe for community change is always the same: genuine connection, one cup at a time.",
    ],
  },
];
