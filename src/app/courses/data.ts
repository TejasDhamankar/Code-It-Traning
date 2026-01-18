export type CourseDetails = {
  slug: string;
  title: string;
  category: string;
  image: string;
  overview: string[];
  whyChoose: string[];
  syllabus: string[];
};

export const courses: CourseDetails[] = [
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    overview: [
      "Frontend + Backend Complete Training",
      "React + Next.js + Node.js",
      "Real Projects with Industry Guidance",
    ],
    whyChoose: [
      "Job-oriented learning with practical projects",
      "Expert mentorship and interview preparation",
      "Placement support and resume building",
    ],
    syllabus: [
      "HTML, CSS, JavaScript Basics",
      "React Fundamentals",
      "Next.js + Routing + API",
      "Node.js + Express.js",
      "MongoDB + Authentication",
      "Project + Deployment",
    ],
  },

  {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    overview: [
      "Master data analysis and visualization",
      "Learn ML fundamentals with projects",
      "Industry-ready skill development",
    ],
    whyChoose: [
      "Hands-on datasets & real use-cases",
      "Build dashboards and ML models",
      "Career guidance + interview preparation",
    ],
    syllabus: [
      "Python Basics",
      "NumPy, Pandas",
      "Data Cleaning & EDA",
      "Statistics for Data Science",
      "Machine Learning Basics",
      "Project + Case Study",
    ],
  },

  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    category: "Cloud & DevOps",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    overview: [
      "Understand cloud fundamentals",
      "Learn AWS services and deployments",
      "Practical cloud labs and hosting",
    ],
    whyChoose: [
      "Work on real deployment examples",
      "Learn CI/CD foundations",
      "Cloud career roadmap support",
    ],
    syllabus: [
      "Cloud Fundamentals",
      "AWS Core Services",
      "EC2 + S3 + IAM",
      "Deploy Web Apps",
      "CI/CD Intro",
      "Mini Project",
    ],
  },

  {
    slug: "software-testing",
    title: "Software Testing",
    category: "Testing",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
    overview: [
      "Learn manual testing and automation basics",
      "Testing process and bug reporting",
      "Interview and career preparation",
    ],
    whyChoose: [
      "Strong testing fundamentals",
      "Practical test cases + bug life cycle",
      "Automation intro for beginners",
    ],
    syllabus: [
      "Testing Fundamentals",
      "SDLC + STLC",
      "Test Case Writing",
      "Bug Reporting",
      "Automation Intro",
      "Project + Interview Prep",
    ],
  },
];

export const getCourseBySlug = (slug: string) => {
  return courses.find((c) => c.slug === slug);
};
