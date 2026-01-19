/**
 * ============================================================================
 * DATA PROTOCOL: COURSE REGISTRY V5.0
 * ----------------------------------------------------------------------------
 * This file acts as the central intelligence for the educational catalog.
 * It defines high-fidelity course data including specialized career tracks.
 * ============================================================================
 */

export type CourseDetails = {
  slug: string;
  title: string;
  category: string;
  image: string;
  tagline: string;
  overview: string[];
  whyChoose: string[];
  syllabus: {
    skills: any; title: string; modules: string[] 
}[];
  technicalStacks?: { id: string; name: string; description: string; tools: string[]; icon?: string }[];
};

export const courses: CourseDetails[] = [
  {
    slug: "full-stack-development",
    title: "Full Stack Mastery",
    category: "Architecture",
    tagline: "Engineering complete digital ecosystems across specialized frameworks.",
    image: "/images/full-stack.jpg",
    overview: [
      "Master end-to-end development with industry-standard protocols.",
      "Hands-on architectural training for scalable MNC-grade projects.",
      "Specialized tracks for Java, MERN, and .NET Ecosystems."
    ],
    whyChoose: [
      "Specialized training in Java Spring Boot & Microservices.",
      "High-fidelity MERN stack development for modern startups.",
      "Enterprise-grade .NET Core & Azure integration training."
    ],
    technicalStacks: [
      { 
        id: "java", 
        name: "Java Fullstack", 
        description: "Enterprise-scale backend architecture using Spring Framework.",
        tools: ["Java 21", "Spring Boot 3", "Hibernate", "Microservices", "PostgreSQL"] 
      },
      { 
        id: "mern", 
        name: "MERN Stack", 
        description: "Modern JavaScript focus for high-performance web applications.",
        tools: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js 15"] 
      },
      { 
        id: "dotnet", 
        name: "Enterprise .NET", 
        description: "Corporate-grade ecosystem with C# and Microsoft Azure.",
        tools: ["C#", ".NET 8", "Entity Framework", "ASP.NET Core", "SQL Server"] 
      }
    ],
    syllabus: [
      {
        title: "Frontend Foundations", modules: ["Next.js/React.js 15 Architectures", "Tailwind Design Systems", "TypeScript Mastery"],
        skills: undefined
      },
      {
        title: "Backend Scalability", modules: ["API Design Patterns", "Authentication Protocols", "Cloud Database Management"],
        skills: undefined
      },
      {
        title: "DevOps Integration", modules: ["CI/CD Pipelines", "Containerization", "Cloud Deployment"],
        skills: undefined
      }
    ],
  },
  {
    slug: "data-science-analytics",
    title: "Data Intelligence",
    category: "Analytics",
    tagline: "Predictive modeling and big data insights for global enterprises.",
    image: "/images/Data-Analyst.jpg",
    overview: ["Neural Networks", "Machine Learning", "Visual Analytics"],
    whyChoose: ["Build dashboards for real-world business cases", "Expert mentorship in Big Data tools"],
    syllabus: [
      {
        title: "AI Fundamentals", modules: ["Python for AI", "Statistical Modeling", "TensorFlow Protocols"],
        skills: undefined
      },
      {
        title: "Big Data Systems", modules: ["Spark Architectures", "Hadoop Ecosystems", "Advanced SQL"],
        skills: undefined
      }
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Architecture",
    category: "Infrastructure",
    tagline: "Building scalable, resilient cloud foundations for the modern web.",
    image: "/images/Devops.jpg",
    overview: ["AWS Specialist Training", "Azure Cloud Migration", "Serverless Architectures"],
    whyChoose: ["Hands-on labs on global cloud providers", "Architecture-focused training for senior roles"],
    syllabus: [
      {
        title: "Cloud Foundations", modules: ["VPC Networking", "IAM Security", "Cloud Economics"],
        skills: undefined
      },
      {
        title: "Automation", modules: ["Terraform", "Infrastructure as Code", "Ansible"],
        skills: undefined
      }
    ],
  },
  {
    slug: "software-testing",
    title: "Quality Matrix",
    category: "Engineering",
    tagline: "Ensuring digital reliability through advanced manual and automated QA.",
    image: "/images/Testing.jpg",
    overview: ["Automation Engineering", "Performance Optimization", "Security Auditing"],
    whyChoose: ["Master Selenium, Playwright, and Cypress", "Zero-bug deployment training methodology"],
    syllabus: [
      {
        title: "Automation Core", modules: ["Java for QA", "Selenium Grid", "Framework Design"],
        skills: undefined
      },
      {
        title: "Mobile & Security", modules: ["Appium", "JMeter Performance", "Penetration Testing"],
        skills: undefined
      }
    ],
  }
];

export const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);