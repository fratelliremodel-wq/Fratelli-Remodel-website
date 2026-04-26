export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "why-most-remodels-go-wrong",
    title: "Why Most Remodels Go Wrong (And How We Do It Differently)",
    description:
      "Most remodels don't go wrong because of bad work — they go wrong because no one sets clear expectations from the start.",
    date: "April 2026",
    readTime: "5 min read",
    intro:
      "Most homeowners don't have a bad remodel because they made a bad decision. They had a bad remodel because no one told them what to look for. After years in this industry, we've seen the same problems come up over and over. Here's an honest breakdown of why remodels go sideways — and what we do differently.",
    sections: [
      {
        heading: "The Communication Breakdown",
        paragraphs: [
          "Most contractors are great at building things. They're not always great at telling you what's happening. You get a start date. Then silence. Then a knock on the door. Then someone you've never met is tearing out your kitchen.",
          "It's disorienting — and it doesn't have to be that way. Homeowners shouldn't have to chase their contractor for updates on something happening inside their own home. We believe clear, consistent communication isn't a bonus — it's the baseline.",
        ],
      },
      {
        heading: "Too Many Hands, No One Responsible",
        paragraphs: [
          "Here's a pattern we see constantly: a general contractor wins the job, then subs out every single trade. The plumber doesn't know what the tile guy is doing. The tile guy doesn't know when the cabinets arrive. And when something goes wrong — and something always does — no one owns it.",
          "Finger-pointing is expensive. You end up paying for mistakes twice: once when they happen, and again to fix them. A job without a single accountable person at the center is a job waiting for problems.",
        ],
      },
      {
        heading: "The Lowest Bid Problem",
        paragraphs: [
          "We understand the instinct. When three bids come in and one is $8,000 lower than the others, it's hard to ignore. But that gap has to come from somewhere. It's either materials, labor, or time. Usually all three.",
          "We've been called in to re-do work from other contractors more times than we can count. Tile that wasn't properly waterproofed behind a shower. Grout cracking six months after install. Cabinets shimmed instead of properly leveled. It's always more expensive to fix than it would've been to do it right the first time.",
        ],
      },
      {
        heading: "How We Do It Differently",
        paragraphs: [
          "John or Joe is on site, every day, for every project. Not a project manager you've never met — us. We're the ones who answer the phone when you call. We're the ones who catch something that isn't right before you do.",
          "We also keep our crew tight. We work with tradespeople we trust and have worked with for years. When everyone knows each other and respects the work, things go differently.",
          "We're not the right fit for everyone. But if you want a remodel done right — with people who actually care about the result — that's what we're here for.",
        ],
      },
    ],
  },
  {
    slug: "bathroom-remodel-cost-las-vegas",
    title: "How Much Does a Bathroom Remodel Cost in Las Vegas?",
    description:
      "Straight answer, real numbers, and an honest breakdown of what actually drives the cost of a bathroom remodel in the Las Vegas area.",
    date: "April 2026",
    readTime: "4 min read",
    intro:
      "Straight answer: a bathroom remodel in Las Vegas typically runs between $8,000 and $40,000 depending on size, scope, and the finishes you choose. Here's what actually drives that number — and how to think about it before you start getting bids.",
    sections: [
      {
        heading: "The Ranges, Honestly",
        paragraphs: [
          "Basic refresh — new vanity, toilet, fixtures, and paint — will run $5,000 to $10,000. This assumes you're keeping the layout, the tile is staying, and nothing structural is changing.",
          "A mid-range remodel — new tile throughout, custom shower surround, updated vanity and lighting — typically falls in the $12,000 to $22,000 range. This is where most homeowners land.",
          "A full custom renovation — layout change, walk-in shower with frameless glass, luxury tile, high-end fixtures — starts around $25,000 and can go well past $40,000 depending on the selections.",
        ],
      },
      {
        heading: "What Drives Cost Up",
        paragraphs: [
          "Layout changes. The moment you move a drain, a toilet, or a wall, you're into plumbing and framing costs that add up fast. If you can keep the layout and just upgrade the finishes, you'll save significantly.",
          "Custom tile work. Large-format tile, herringbone patterns, and natural stone all take more time and skill than standard 12×12 tile. The labor is what costs — not just the material.",
          "Fixtures and hardware. A builder-grade faucet runs $80. A quality brushed gold faucet runs $400 to $600. Neither is right or wrong — just know what you're choosing and why.",
        ],
      },
      {
        heading: "What You Can Control",
        paragraphs: [
          "Material selection is the biggest lever you have. Labor costs are relatively fixed — good tile work takes the time it takes. But choosing a $4/sq ft tile versus a $14/sq ft tile on a 100 sq ft floor is a $1,000 decision. Those choices compound across every surface.",
          "It also helps to make decisions before the project starts. Change orders mid-project — switching tile after demo, adding a niche after the backer board is up — always cost more than deciding upfront.",
        ],
      },
      {
        heading: "A Word on the Cheapest Bid",
        paragraphs: [
          "We've been called in to fix bathrooms that were 'done.' Grout cracking after six months. Tile not properly waterproofed behind the shower. Fixtures installed without shutoff access.",
          "Budget for quality the first time. A bathroom done right lasts 15 to 20 years. One done poorly costs you again in two.",
          "If you're in Las Vegas and want a straightforward conversation about what your specific project would cost, reach out. We're happy to walk through it with you — no pressure.",
        ],
      },
    ],
  },
  {
    slug: "what-its-like-to-live-through-a-remodel",
    title: "What It's Actually Like to Live Through a Remodel",
    description:
      "Nobody warns you. Here's an honest look at what to expect — week by week — when your home is under construction.",
    date: "April 2026",
    readTime: "4 min read",
    intro:
      "Nobody warns you. One day you have a functioning kitchen. The next, there's plastic sheeting where your cabinets used to be and your coffee maker is on the dining room table. Living through a remodel is manageable — but only if you know what to expect. Here's the honest version.",
    sections: [
      {
        heading: "Week One Feels Like Chaos",
        paragraphs: [
          "Demo is loud, fast, and messy. Your space will look significantly worse before it looks better. Walls get opened up. Floors come out. Things that felt permanent are suddenly gone.",
          "This is normal and actually a good sign. It means work is moving. The homeowners who struggle most are the ones who weren't mentally prepared for how dramatic demo looks. We always say: the destruction phase is the fastest part.",
        ],
      },
      {
        heading: "The Middle Is the Waiting",
        paragraphs: [
          "After demo and rough work — plumbing, electrical, framing — there's a phase where progress feels invisible. Inspections get scheduled. Materials get delivered and staged. The crew is working, but from the outside it can look like nothing is happening.",
          "This is where homeowners start to worry. It's also where communication matters most. We check in daily during this phase so you always know what's happening and what's coming next.",
        ],
      },
      {
        heading: "The End Comes Quickly",
        paragraphs: [
          "Tile, cabinets, fixtures, paint — finish work moves fast and the transformation is dramatic. The last 20% of a remodel is where it goes from construction zone to 'this is exactly what I wanted.'",
          "It's also the phase where patience pays off. Rushing finish work is where most visible mistakes happen. We don't rush it.",
        ],
      },
      {
        heading: "How to Make It Easier on Yourself",
        paragraphs: [
          "Set up a temporary kitchen or bathroom station before demo starts. A coffee maker, a microwave, and a clear surface go a long way.",
          "Have a realistic timeline in your head — then add two weeks. Not because contractors are slow, but because construction has variables. Inspections get rescheduled. A material ships late. Building in that buffer mentally makes the whole experience less stressful.",
          "Establish one communication channel with your contractor and use it consistently. We use text for day-to-day updates and calls for anything that needs a real decision.",
          "Most importantly — trust the process. Every remodel goes through an ugly phase. Every single one. And every one of them comes out the other side. The result is worth it.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
