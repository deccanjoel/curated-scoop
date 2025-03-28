
export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    slug: "future-of-ai-machine-learning-transforming-industries",
    summary: "Artificial intelligence and machine learning continue to revolutionize business operations across various sectors. Here's how these technologies are making an impact.",
    content: `
      <p>Artificial intelligence (AI) and machine learning are rapidly transforming industries across the globe. From healthcare to finance, transportation to retail, these technologies are revolutionizing how businesses operate and deliver value to customers.</p>
      
      <p>In healthcare, AI algorithms are helping doctors diagnose diseases more accurately and developing personalized treatment plans based on patient data. Machine learning models can analyze medical images to detect early signs of cancer, potentially saving countless lives through early intervention.</p>
      
      <p>The financial sector has embraced AI for fraud detection, algorithmic trading, and customer service automation. Banks are using machine learning to analyze spending patterns and identify suspicious transactions in real-time, protecting consumers from fraud.</p>
      
      <p>Transportation is being revolutionized by self-driving vehicles, which rely on sophisticated AI systems to navigate roads safely. Companies like Tesla, Waymo, and Uber are investing heavily in this technology, which promises to reduce accidents and traffic congestion.</p>
      
      <p>Retail businesses are leveraging AI to personalize shopping experiences, optimize inventory management, and forecast demand. Online retailers use recommendation engines powered by machine learning to suggest products based on browsing history and purchase behavior.</p>
      
      <p>As these technologies continue to evolve, we can expect even more transformative changes across industries. The key challenge for businesses will be adapting to these changes and finding ways to integrate AI and machine learning into their operations effectively.</p>
    `,
    category: "Technology",
    author: "Dr. Emily Chen",
    date: "2023-05-15",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["AI", "Machine Learning", "Technology", "Innovation"]
  },
  {
    id: "2",
    title: "Global Market Trends: Navigating Economic Uncertainty",
    slug: "global-market-trends-navigating-economic-uncertainty",
    summary: "As global markets face unprecedented challenges, investors are seeking strategic approaches to navigate economic uncertainty and volatility.",
    content: `
      <p>Global markets are currently facing a period of significant uncertainty, driven by factors including geopolitical tensions, inflation concerns, and the ongoing effects of the pandemic. Investors are navigating these challenges with caution, seeking strategies that can provide stability amidst volatility.</p>
      
      <p>Inflation has emerged as a key concern across major economies. Central banks are responding with tightened monetary policies, raising interest rates to control price increases. This shift has implications for all asset classes, particularly affecting growth stocks and speculative investments.</p>
      
      <p>Supply chain disruptions continue to impact various sectors, though some improvements have been observed in recent months. Companies are diversifying their suppliers and bringing production closer to end markets to mitigate future risks.</p>
      
      <p>Despite these challenges, certain sectors are showing resilience. Energy companies are benefiting from higher prices, while healthcare and consumer staples continue to demonstrate stability. Technology remains a mixed picture, with established profitable companies outperforming speculative ventures.</p>
      
      <p>For investors, diversification across asset classes and geographies remains crucial. Many are increasing allocations to value stocks, dividend-paying companies, and alternative investments as hedges against inflation and market turbulence.</p>
      
      <p>As we move forward, adaptability will be key. The markets are likely to remain reactive to economic data, central bank decisions, and geopolitical developments. Successful investors will stay informed, maintain discipline, and be prepared to adjust strategies as conditions evolve.</p>
    `,
    category: "Business",
    author: "Michael Rodriguez",
    date: "2023-06-02",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["Finance", "Economy", "Markets", "Investment"]
  },
  {
    id: "3",
    title: "Breakthrough in Quantum Computing: Achieving Quantum Advantage",
    slug: "breakthrough-quantum-computing-achieving-quantum-advantage",
    summary: "Scientists report a significant milestone in quantum computing with a new processor demonstrating quantum advantage in complex calculations.",
    content: `
      <p>Scientists at the Quantum Research Institute have announced a significant breakthrough in quantum computing technology. Their new quantum processor has demonstrated "quantum advantage" by performing calculations that would be practically impossible for conventional supercomputers to complete in a reasonable timeframe.</p>
      
      <p>The processor, named Quantum Matrix 1, utilizes 127 qubits and maintains quantum coherence for record durations. In a series of benchmark tests, it solved complex optimization problems in minutes that would take traditional computers thousands of years to process.</p>
      
      <p>This achievement represents a critical milestone in the field of quantum computing, which has long promised to revolutionize areas such as cryptography, materials science, drug discovery, and artificial intelligence. While previous quantum systems have shown potential, this is among the first to definitively demonstrate practical advantage for real-world applications.</p>
      
      <p>"We've crossed an important threshold," said Dr. Sarah Johnson, lead researcher on the project. "This isn't just an incremental improvement—it's a demonstration that quantum computers can solve certain problems that are simply out of reach for classical machines."</p>
      
      <p>The technology still faces significant challenges before broader commercialization. The quantum processor requires extremely low temperatures to operate and is susceptible to environmental interference. Additionally, developing algorithms that can leverage quantum advantages remains a specialized field.</p>
      
      <p>Nevertheless, industry experts view this as a watershed moment. Major technology companies and governments are accelerating their investments in quantum research, recognizing its strategic importance. The global race for quantum supremacy is intensifying, with implications for national security and economic competitiveness.</p>
    `,
    category: "Science",
    author: "Dr. James Wilson",
    date: "2023-04-28",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Quantum Computing", "Science", "Technology", "Research"]
  },
  {
    id: "4",
    title: "Sustainable Business Practices: The Competitive Advantage of Going Green",
    slug: "sustainable-business-practices-competitive-advantage",
    summary: "Companies embracing sustainability are discovering competitive advantages beyond ethical considerations, including cost savings and increased customer loyalty.",
    content: `
      <p>Businesses across industries are increasingly recognizing that sustainability initiatives offer more than just environmental benefits—they provide tangible competitive advantages in today's market. From reduced operational costs to enhanced brand reputation, the business case for sustainability has never been stronger.</p>
      
      <p>Energy efficiency measures are delivering significant cost savings for companies that invest in modernizing their facilities and operations. Retail giant Target reported saving over $200 million annually through energy efficiency projects, while Google has achieved 100% renewable energy for its global operations, hedging against future energy price volatility.</p>
      
      <p>Consumer preferences are shifting decisively toward sustainable products and services. Research by Nielsen shows that 73% of global consumers would definitely or probably change their consumption habits to reduce environmental impact. Brands that authentically communicate their sustainability efforts are seeing increased customer loyalty and market share.</p>
      
      <p>The investment community is also driving change. ESG (Environmental, Social, and Governance) investing continues to grow, with assets under management exceeding $30 trillion globally. Companies with strong sustainability performance are gaining better access to capital and often trading at premium valuations.</p>
      
      <p>Regulatory landscapes are evolving rapidly, with governments implementing stricter environmental standards and disclosure requirements. Forward-thinking businesses are gaining advantages by staying ahead of regulations, avoiding compliance costs and potential penalties that competitors may face.</p>
      
      <p>Employee recruitment and retention benefits are another advantage. Studies show that companies with strong sustainability commitments attract more qualified candidates and experience lower turnover rates, particularly among younger professionals who prioritize purpose-driven employers.</p>
    `,
    category: "Business",
    author: "Jessica Parker",
    date: "2023-05-20",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Sustainability", "Business", "Environment", "Corporate Responsibility"]
  },
  {
    id: "5",
    title: "New Research Reveals Potential Treatment for Alzheimer's Disease",
    slug: "new-research-potential-treatment-alzheimers",
    summary: "A groundbreaking study has identified a promising therapeutic approach that could slow the progression of Alzheimer's disease and improve cognitive function.",
    content: `
      <p>Researchers at the Medical Science Institute have published findings from a groundbreaking study that could transform the treatment landscape for Alzheimer's disease. The clinical trial, involving over 500 patients with early-stage Alzheimer's, tested a novel antibody therapy that targets toxic protein aggregates in the brain.</p>
      
      <p>The results, published in the Journal of Neurological Medicine, show that participants receiving the experimental treatment experienced a 32% slower rate of cognitive decline compared to those receiving a placebo. Additionally, brain scans revealed a significant reduction in amyloid plaque buildup, one of the hallmarks of the disease.</p>
      
      <p>"These findings represent the most promising advance in Alzheimer's research in decades," said Dr. Robert Martinez, principal investigator of the study. "While not a cure, this approach could potentially provide patients with additional years of cognitive function and independence."</p>
      
      <p>The therapy works by targeting specific forms of misfolded proteins that accumulate in the brains of Alzheimer's patients. Unlike previous approaches that focused solely on amyloid plaques, this treatment addresses multiple pathological processes involved in the disease progression.</p>
      
      <p>Side effects were generally mild to moderate and included headaches and temporary inflammation at the infusion site. The research team is now preparing for a larger Phase 3 trial, which will involve thousands of patients across multiple countries.</p>
      
      <p>Alzheimer's disease affects approximately 55 million people worldwide, with numbers expected to triple by 2050 as populations age. Current treatments only address symptoms without altering the disease course, making this research particularly significant for patients and their families.</p>
    `,
    category: "Health",
    author: "Dr. Lisa Thompson",
    date: "2023-06-10",
    imageUrl: "https://images.unsplash.com/photo-1576671416426-2b79fa8bb9ed?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Health", "Medicine", "Research", "Alzheimer's"]
  },
  {
    id: "6",
    title: "Cybersecurity Threats Evolving: How Businesses Can Protect Their Digital Assets",
    slug: "cybersecurity-threats-evolving-business-protection",
    summary: "As cyber threats become more sophisticated, organizations must adopt comprehensive security strategies to safeguard their critical digital infrastructure and data.",
    content: `
      <p>The cybersecurity landscape continues to evolve at a rapid pace, with attackers developing increasingly sophisticated methods to breach organizational defenses. Recent months have seen a surge in ransomware attacks, supply chain compromises, and advanced persistent threats targeting businesses across all sectors.</p>
      
      <p>Ransomware remains one of the most pressing concerns, with attacks increasing 150% in the past year according to security researchers. The average ransom payment has exceeded $200,000, while total costs including downtime and recovery typically reach millions of dollars per incident.</p>
      
      <p>Supply chain attacks have emerged as a particularly dangerous vector, as demonstrated by the SolarWinds and Kaseya incidents. These attacks compromise trusted software providers to distribute malware to thousands of downstream customers, creating widespread impact with a single breach.</p>
      
      <p>Cloud security has become a critical focus area as organizations accelerate digital transformation initiatives. Misconfigured cloud resources, excessive permissions, and inadequate monitoring create vulnerabilities that attackers are actively exploiting.</p>
      
      <p>Security experts recommend adopting a zero-trust security model, which assumes breach and verifies each request as though it originates from an untrusted network. This approach includes strong identity verification, micro-segmentation, least privilege access, and continuous monitoring.</p>
      
      <p>Employee security awareness remains an essential defense, as phishing and social engineering continue to be primary attack vectors. Regular training, simulated phishing exercises, and creating a security-conscious culture significantly reduce an organization's vulnerability.</p>
    `,
    category: "Technology",
    author: "Alex Johnson",
    date: "2023-05-05",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Cybersecurity", "Technology", "Data Protection", "IT Security"]
  },
  {
    id: "7",
    title: "Space Exploration: The New Race to Mars",
    slug: "space-exploration-new-race-to-mars",
    summary: "Multiple countries and private companies are competing in the modern space race with ambitious plans to reach and potentially colonize the Red Planet.",
    content: `
      <p>The race to Mars has intensified as multiple nations and private aerospace companies announce increasingly ambitious plans to explore the Red Planet. What was once the exclusive domain of government space agencies has now become a competitive field with commercial enterprises working alongside traditional space powers.</p>
      
      <p>SpaceX, led by Elon Musk, has unveiled its Starship spacecraft designed specifically for Mars missions, with plans for initial uncrewed landings followed by human missions later this decade. The company's reusable rocket technology has dramatically reduced launch costs, making more frequent missions economically viable.</p>
      
      <p>NASA's Artemis program, while primarily focused on returning humans to the Moon, is designed as a stepping stone to Mars. The agency is developing technologies and operational experience that will be critical for the longer Mars journey, including advanced life support systems and radiation protection.</p>
      
      <p>China has also entered the competition, successfully landing its Tianwen-1 rover on Mars in 2021 and announcing plans for sample return missions and eventually human landings. The European Space Agency, in partnership with Russia's Roscosmos, has outlined its own Mars exploration strategy focused on scientific research.</p>
      
      <p>These missions face enormous technical challenges. The journey to Mars takes at least six months each way with current propulsion technology. Astronauts will face radiation exposure, psychological challenges from isolation, and medical risks with limited emergency return options. On the surface, they'll contend with dust storms, extreme temperatures, and the need to generate resources from the Martian environment.</p>
      
      <p>Despite these obstacles, the scientific and potential commercial benefits are substantial. Mars exploration could answer fundamental questions about the possibility of past or present life beyond Earth, provide insights into planetary formation, and potentially establish humanity as a multi-planetary species—an insurance policy against catastrophic events on Earth.</p>
    `,
    category: "Science",
    author: "Dr. Rebecca Liu",
    date: "2023-07-12",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Space", "Mars", "Exploration", "Science", "SpaceX", "NASA"]
  },
  {
    id: "8",
    title: "The Rise of Digital Nomads: How Remote Work is Changing Global Lifestyles",
    slug: "rise-of-digital-nomads-remote-work-changing-lifestyles",
    summary: "The pandemic has accelerated the trend of location-independent professionals who combine work and travel, reshaping economies and communities worldwide.",
    content: `
      <p>The global workforce is experiencing a profound transformation as digital nomadism moves from fringe lifestyle to mainstream career option. Enabled by technology and catalyzed by the pandemic's remote work revolution, professionals across industries are embracing the freedom to work from anywhere, creating ripple effects in housing markets, local economies, and corporate structures.</p>
      
      <p>Countries are competing to attract these mobile professionals with special visa programs. Nations including Portugal, Croatia, Malta, and Thailand have introduced digital nomad visas that allow remote workers to legally stay for extended periods, paying local taxes while earning incomes from abroad. These programs have become important economic development strategies for destinations affected by tourism downturns.</p>
      
      <p>The rise of "nomad hubs" in places like Bali, Lisbon, Mexico City, and Tbilisi has created vibrant communities where remote workers can find co-working spaces, networking opportunities, and like-minded peers. Property developers are responding with purpose-built accommodations featuring robust internet connectivity, communal workspaces, and flexible lease terms.</p>
      
      <p>For employers, this shift presents both challenges and opportunities. Companies gain access to global talent pools without relocation costs while reducing office overhead expenses. However, they must navigate complex international employment laws, tax implications, and the challenge of maintaining company culture across distributed teams and time zones.</p>
      
      <p>Digital nomads themselves report increased job satisfaction and productivity, with reduced commuting stress and better work-life balance. However, the lifestyle comes with its own challenges including loneliness, healthcare complexities, and the administrative burden of managing finances across multiple jurisdictions.</p>
      
      <p>As this trend continues to evolve, governments and businesses are adapting policies to accommodate this new way of working, suggesting that digital nomadism, in various forms, will remain a significant component of the future of work long after the pandemic recedes.</p>
    `,
    category: "Lifestyle",
    author: "Emma Wright",
    date: "2023-06-25",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Remote Work", "Digital Nomads", "Lifestyle", "Future of Work", "Travel"]
  },
  {
    id: "9",
    title: "The Metaverse: Beyond Gaming and Into Business Applications",
    slug: "metaverse-beyond-gaming-business-applications",
    summary: "Virtual and augmented reality technologies are expanding beyond entertainment to transform how businesses operate, from training to customer engagement.",
    content: `
      <p>While popular discourse often focuses on the metaverse as a gaming platform or social media evolution, businesses are quietly developing practical applications that could revolutionize industries from healthcare to manufacturing. These immersive technologies are moving beyond novelty to address real-world business challenges and create new opportunities for growth.</p>
      
      <p>In corporate training, VR simulations provide realistic, risk-free environments for employees to practice complex or dangerous procedures. Healthcare providers are using these technologies to train surgeons, while manufacturing companies implement VR for equipment operation training, significantly reducing costs and improving safety outcomes compared to traditional methods.</p>
      
      <p>Customer experience is another area seeing rapid innovation. Retail brands including IKEA, Nike, and Wayfair have deployed augmented reality apps allowing customers to visualize products in their own spaces before purchasing. Real estate companies offer virtual property tours, enabling potential buyers to explore homes remotely, while automobile manufacturers provide virtual test drives of new vehicle models.</p>
      
      <p>Collaborative work represents perhaps the most transformative business application. Companies like Microsoft, Meta, and Nvidia are developing platforms where distributed teams can gather in virtual spaces that replicate the dynamics of physical offices. These environments support real-time collaboration on 3D models, data visualization, and complex design processes that are difficult to accomplish in traditional video conferencing.</p>
      
      <p>The industrial metaverse—digital twins of physical facilities, supply chains, and products—is enabling predictive maintenance, efficient workflow design, and process optimization. Manufacturing giants are reporting significant cost savings and productivity gains through these virtual replications that allow them to test changes without disrupting actual operations.</p>
      
      <p>While challenges remain in hardware limitations, standardization across platforms, and privacy concerns, the business case for metaverse technologies is becoming increasingly clear. Organizations that strategically implement these tools are finding competitive advantages in efficiency, innovation speed, and customer connection that extend well beyond the hype cycle.</p>
    `,
    category: "Technology",
    author: "Marcus Chen",
    date: "2023-07-18",
    imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Metaverse", "VR", "AR", "Business", "Technology", "Innovation"]
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(
    article => article.category.toLowerCase() === category.toLowerCase()
  );
};

export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(
    article =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.summary.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.category.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getRecentArticles = (count: number = 5): Article[] => {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
};

export const getCategories = (): string[] => {
  const categories = articles.map(article => article.category);
  return [...new Set(categories)];
};
