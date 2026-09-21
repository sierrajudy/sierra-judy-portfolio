// Resolves a public/ asset path against Vite's configured base (so links keep
// working when the site is deployed under a subpath, e.g. GitHub Pages).
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  name: "Sierra Judy",
  emails: ["sierramariejudy@gmail.com", "judys@bc.edu"],
  linkedin: "https://www.linkedin.com/in/sierra-judy-115a55369/",
  instagram: "https://www.instagram.com/invites/contact/?igsh=g8ldtakrkkpz&utm_content=3btgqfw",
  image: asset("/images/profile.jpg"),
  bio: "Hi! I'm Sierra, a Boston College student from Oakland, California, studying Communications with minors in Theatre and General Business. I've always been passionate about storytelling and performance, whether on stage or through creative digital content. My background in theatre has taught me how to connect deeply with people, understand different perspectives, and bring ideas to life in a fast-paced environment. I also love using media to spread awareness and build connections across diverse audiences. I'm excited to continue growing my passion for the arts while pursuing my professional interests in business and creative communication.",
};

export const internship = {
  title: "Tahoe Artesian | Marketing Intern",
  description:
    "Last summer, I interned with Tahoe Artesian Water, a fast-growing startup, as a Digital Marketing Intern. Collaborating closely with the creative team, I was tasked with developing content strategies to engage a younger audience. I researched current digital trends and popular formats, built storyboards to pitch fresh concepts, and led the execution of our campaigns. The result was a dynamic collection of new social media content that strengthened Tahoe Artesian's online presence and brand connection with Gen Z consumers.",
  drafts: [
    {
      title: "Real Memories. Real Water.",
      tag: "Campaign",
      image: asset("/images/tahoe-real-memories.jpg"),
      video: asset("/videos/tahoe-real-memories.mp4"),
    },
    {
      title: "Day In the Life",
      tag: "Content",
      image: asset("/images/tahoe-day-in-life.jpg"),
      video: asset("/videos/tahoe-day-in-life.mp4"),
    },
  ],
  posted: [
    {
      title: "Always a Woman Instagram Reel",
      tag: "Reel",
      image: asset("/images/tahoe-always-a-woman.jpg"),
      views: "5,982 views",
      url: "https://www.instagram.com/reel/DNWY-YVSp_n/?stkn=MWQ2N3VobzRlaDV0dA==",
    },
  ],
};

export const sharpsPR = {
  title: "Sharps Digital PR",
  eyebrow: "Social Media & Content",
  description:
    "I'm the Digital PR Manager for S#arps of Boston College — curating our Instagram feed, reaching new audiences, and creating videos to promote our club on campus. In collaboration with the rest of the E-Board, our efforts have doubled audition turnout during my time in the role, growing from an average of 20 auditioners per semester to 43 — a turnout comparable to mixed-gender a cappella groups despite S#arps being single-gender.",
  instagramProfile: "https://www.instagram.com/bcsharps/",
  reels: [
    {
      title: "Sharps Calling",
      views: "4,860 views",
      url: "https://www.instagram.com/reel/DTskCY2kZln/?stkn=MWxyOHdheTZ2aHg0MA==",
    },
    {
      title: "Is This Play About Us",
      views: "10k+ views",
      note: "Our most-viewed video",
      url: "https://www.instagram.com/reel/DWfQBUGEdEU/?stkn=MTVjYjVjbHJqMjAzZA==",
    },
    {
      title: "Guess the Group Member",
      views: "7,300 views",
      url: "https://www.instagram.com/reel/DUHNVosEV3I/?stkn=MXBmN3JobDlrNm0wOA=",
    },
    {
      title: "Guess Who Is Singing Challenge",
      views: "5,806 views",
      url: "https://www.instagram.com/reel/DTqaAgYkUlz/?stkn=MXFsaDFqdm1tMW5ocA==",
    },
    {
      title: "Midnight Sun",
      views: "3,700 views",
      note: "Drove strong alumni engagement",
      url: "https://www.instagram.com/reel/Dc_e-KPRd0S/?stkn=MWVzeXhjYTJzY3llYw==",
    },
    {
      title: "Release the Babies",
      views: "4,504 views",
      url: "https://www.instagram.com/reel/Dc8yOnLx5c1/?stkn=MTQyNDByeHp1bWNjMQ==",
    },
  ],
  cafePerformance: {
    title: "Cafe Video — Pitch Perfect Show Intermission",
    caption: "Storyboarded, produced, acted in, and edited to play during intermission at our Pitch Perfect acapella show.",
    driveId: "1FiW7FpFi9pTU2kgMRudMZi52iNh0C1E5",
  },
};

export const resume = {
  image: asset("/images/resume-headshot.jpg"),
  pdf: asset("/sierra-judy-resume.pdf"),
  contact: "Oakland, CA · judys@bc.edu · (510) 677-0991",
  education: [
    {
      org: "Boston College Morrissey College of Arts & Sciences",
      location: "Chestnut Hill, MA",
      when: "May 2028",
      subheading: "Bachelor of Arts/Science in Communications, Minor in General Business and Theatre — GPA: 3.55",
    },
    {
      org: "Contemporary Theatre and Drama in London",
      location: "London, UK",
      when: "June 2026",
      bullets: [
        "4-week academic theatre immersion, viewing 20+ professional productions and analyzing each through seminars and written reviews that examine dramatic elements, cultural context, and thematic meanings.",
      ],
    },
    {
      org: "Boston College Carroll School of Management Catalyst Program",
      location: "Chestnut Hill, MA",
      when: "Summer 2025",
      bullets: [
        "8-week highly selective summer academic program exposing Liberal Arts students to Management curriculum.",
        "Relevant coursework: Accounting, Finance, Marketing, and Excel.",
      ],
    },
  ],
  experience: [
    {
      org: "Tahoe Artesian Water",
      location: "Truckee, CA",
      role: "Marketing Intern",
      image: asset("/images/resume-taw-logo.png"),
      imageFit: "contain",
      when: "Summer 2025",
      bullets: [
        "Designed storyboards and produced video content to help build brand awareness.",
        "Increased product sales at a local event through effective on-site sales strategies.",
      ],
    },
    {
      org: "Boston College Campus Recreation",
      location: "Chestnut Hill, MA",
      role: "Certified Spin Instructor",
      when: "Winter 2025 – Present",
      image: asset("/images/resume-spin-instructor.jpg"),
      bullets: [
        "Design and instruct weekly spin class programs aligned with fitness trends and popular music.",
        "Driving community engagement through themed rides, leading with high energy, and developing motivational speaking skills.",
      ],
    },
    {
      org: "Chapter 510 and The Department of Make Believe",
      location: "Oakland, CA",
      role: "Not-for-Profit Intern",
      when: "Summer 2024",
      bullets: [
        'Developed detailed production itineraries for a student-written musical, "Iceville".',
        "Built and managed a budget on Excel, performed situational analysis, and created media for marketing.",
      ],
    },
  ],
  projects: [
    {
      org: "Buckets",
      role: "Designer & Developer",
      when: "Summer 2026",
      url: "https://buckets-7til.onrender.com",
      bullets: [
        "Designed and built a game app for golfers to play while waiting on a backed-up course, taking it from concept to live deployment in 3 days.",
        "Learned and applied Git version control, AI-assisted coding agents, and custom domain deployment to independently ship a functioning web app.",
        "Iterated through multiple drafts based on direct user feedback, expanding to any golf course in the world, with 4 different customized game modes, avatars, achievements, friend profiles, and so much more!",
      ],
    },
  ],
  activities: [
    {
      org: "Boston College Theatre Performances",
      location: "Chestnut Hill, MA",
      when: "Spring 2025 – Spring 2026",
      image: asset("/images/resume-top-girls.jpg"),
      bullets: [
        'Performed in three main-stage productions — "Legally Blonde" (Spring 2026), "Top Girls" (Fall 2025), and "Bonnie and Clyde" (Spring 2025).',
        "Rehearse multiple times per week over six weeks per show, demonstrating commitment to ensemble storytelling, professional rehearsal etiquette, and intensive character work.",
      ],
    },
    {
      org: "Musical Theatre Wing of Boston College",
      location: "Chestnut Hill, MA",
      role: "Production Manager",
      when: "Winter 2025 – Present",
      bullets: [
        "Coordinate all event logistics by booking rehearsal and performance spaces and liaising with Boston College facility managers, ensuring 100% venue readiness for each production and cabaret.",
        "Organize and plan accessible theatre for everyone on campus and lead performance-based service events.",
      ],
    },
    {
      org: "Sharps of Boston College Acapella Group",
      location: "Chestnut Hill, MA",
      role: "Digital PR Manager",
      when: "Winter 2025 – Present",
      image: asset("/images/resume-theatre-wing.jpg"),
      bullets: [
        "Rehearse collaboratively three times per week, contributing to the musical preparation and vocal cohesion for two polished performances each semester.",
        "Perform as an ensemble member in live concerts and campus events, enhancing group stage presence and audience engagement for crowds of 100+ attendees.",
      ],
    },
  ],
  skills: [
    "Adobe Creative Cloud",
    "DaVinci Resolve",
    "Advanced Prompt Engineering (ChatGPT, Claude)",
    "Microsoft Office",
    "Excel",
    "Volleyball",
    "Golf",
    "Pickleball",
  ],
};
