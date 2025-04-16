export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building web applications that load faster than The Flash",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Fluent in English, Hindi, Kannada, and Marwadi, bridging culture and code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Inbox Tracker",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "EIVA - Email Inbox Visualizer & Analyzer",
    des: "Using OAuth2 and Gmail API, I built a web app that tracks and categorizes inbox and show nomber of inbox vs spam graph along with other parameters.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "eiva.hardikvyas.in",
  },
  {
    id: 2,
    title: "HeyPay - Money Transfer Web App",
    des: "A complete 0-100 website app for money transactions web app, built with NextJs(FE & BE), Postgresql and Deployed on Vercel.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "heypay.hardikvyas.in",
  },
  {
    id: 3,
    title: "Sahararefunds.com",
    des: "A wordpress website that help people apply or check status of their sahara funds. 60k+ impressions in 2 months.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "sahararefunds.com",
  },
  {
    id: 4,
    title: "FocusForge",
    des: "The Chrome extension that blocks distractions and fuels focus!",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];
export const Education = [
  {
    quote:
      "Completed my 10th grade from Holy Angel's High School, Bangalore, in 2016. Dominated the sports field like an athlete in their prime, bagging multiple medals and trophies. Also served as class monitor for two years—let’s just say, my leadership had more force than Newton’s Second Law in action.",
    name: "Holy Angel's High School",
    title: "Ex-Student (ICSE)",
  },
  {
    quote:
      "Graduated from 2nd PUC in PCMB at Bunts Sangha RNS Composite PU College, Bangalore, in 2018. Played Badminton with the precision of a well-calculated equation, winning multiple tournaments. If success had a formula, I was solving for X every time.",
    name: "Bunts Sangha RNS Composite PU College",
    title: "12th Grade / 2nd PUC",
  },
  {
    quote:
      "Started my B.Tech journey in 2018 and graduated in 2022 from MS Ramaiah University of Applied Sciences, Bangalore. I was part of a core team that organized multiple events—essentially keeping the engine running behind the scenes. Along the way, I picked up Table Tennis and made it to the finals of the intra-college competition. Safe to say, I knew how to handle both gears and paddles—just like I handle Try and Catch now.",
    name: "MS Ramaiah University of Applied Sciences",
    title: "B.Tech Graduate",
  },
  {
    quote:
      "Began my developer journey at Kodnest, where I leveled up my web development and database skills—basically, my origin story. Worked on multiple projects while getting familiar with DSA & Algorithms (because SEO demands it). I learned to structure things properly—whether it was HTML, CSS, or Python, where whitespace isn’t just an aesthetic choice, it’s the law. Debugging? Think of it like handling JavaScript promises—I always try to resolve, but sometimes, I just have to reject and refactor.",
    name: "Kodnest",
    title: "Developer Training",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer - Kenscio",
    desc: "Developed multiple products that helped kenscio to grow their business and increase their revenue.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Trainee - Kenscio",
    desc: "Developed Kenscio.com and mutiple wordpress webiste for their clients.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Internship - Aghreni Technologies Pvt. Ltd",
    desc: "Automated many data process and helped them to reduce their manual work and time.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
