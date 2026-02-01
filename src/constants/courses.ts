export type MainCategory = "All" | "Core Programming" | "Advanced IT" | "Future-Ready" | "Specialized";

export interface Course {
  title: string;
  cat: MainCategory;
  slug: string;
  duration: string;
  tags: string[];
  description: string;
  syllabus?: string[]; // Optional field for detailed view
}

export const allCourses: Course[] = [
    // --- CORE Programming ---
    { title: "C / C++ Development", cat: "Core Programming", slug: "c-cpp", duration: "3 Months", tags: ["Logic", "Systems"], description: "Master foundations of programming and memory management.", syllabus: ["Basics", "Pointers", "OOPs in C++", "File Handling"] },
    { title: "Java Professional", cat: "Core Programming", slug: "java", duration: "4 Months", tags: ["Backend", "Enterprise"], description: "Deep dive into OOPs, Multithreading, and Collection Frameworks.", syllabus: ["JVM Architecture", "Multithreading", "JDBC", "Hibernate"] },
    { title: "Python for Data", cat: "Core Programming", slug: "python", duration: "3 Months", tags: ["Scripting", "Data"], description: "Learn the most versatile language for automation and AI.", syllabus: ["Syntax", "Libraries", "Web Scraping", "Automation"] },
    { title: "PHP Development", cat: "Core Programming", slug: "php", duration: "3 Months", tags: ["Web", "Backend"], description: "Build dynamic web applications using PHP and MySQL." },
    { title: "JavaScript Mastery", cat: "Core Programming", slug: "javascript", duration: "3 Months", tags: ["Frontend", "ES6+"], description: "Master the language of the web for modern development." },
    { title: "Ruby Programming", cat: "Core Programming", slug: "ruby", duration: "3 Months", tags: ["Rails", "Agile"], description: "Focus on simplicity and productivity with Ruby on Rails." },
    { title: "Swift for iOS", cat: "Core Programming", slug: "swift", duration: "4 Months", tags: ["Apple", "Mobile"], description: "Develop high-performance native iOS applications." },
    { title: "Go (Golang)", cat: "Core Programming", slug: "golang", duration: "3 Months", tags: ["Cloud", "Microservices"], description: "Build fast, reliable, and efficient software at scale." },

    // --- Advanced IT Technologies ---
    { title: "Full Stack Java", cat: "Advanced IT", slug: "fs-java", duration: "6 Months", tags: ["Spring Boot", "React"], description: "Complete enterprise web development from DB to UI." },
    { title: "Full Stack ASP.NET", cat: "Advanced IT", slug: "fs-dotnet", duration: "6 Months", tags: [".NET Core", "C#"], description: "Build scalable enterprise apps with Microsoft Tech Stack." },
    { title: "Full Stack Python", cat: "Advanced IT", slug: "fs-python", duration: "6 Months", tags: ["Django", "React"], description: "Advanced web development using Python and modern frameworks." },
    { title: "Full Stack Web", cat: "Advanced IT", slug: "fs-web", duration: "6 Months", tags: ["MERN", "Next.js"], description: "Modern full-stack JavaScript development." },
    { title: "Android App Development", cat: "Advanced IT", slug: "android", duration: "5 Months", tags: ["Kotlin", "Mobile"], description: "Build robust Android apps with modern architecture." },
    { title: "Data Science", cat: "Advanced IT", slug: "data-science", duration: "7 Months", tags: ["Python", "Pandas"], description: "Analyze big data and build predictive models." },
    { title: "Cloud Computing", cat: "Advanced IT", slug: "cloud", duration: "4 Months", tags: ["AWS", "Azure"], description: "Master cloud infrastructure and deployment strategies." },
    { title: "Software Testing", cat: "Advanced IT", slug: "testing", duration: "3 Months", tags: ["Selenium", "QA"], description: "Quality assurance through manual and automated testing." },
    { title: "Business Analytics", cat: "Advanced IT", slug: "biz-analytics", duration: "4 Months", tags: ["Tableau", "SQL"], description: "Drive business decisions with data-driven insights." },
    { title: "Advanced Excel", cat: "Advanced IT", slug: "excel", duration: "1 Month", tags: ["VBA", "Macros"], description: "Master complex data manipulation and automation." },
    { title: "Data Analytics", cat: "Advanced IT", slug: "data-analytics", duration: "5 Months", tags: ["PowerBI", "Stats"], description: "Transform raw data into meaningful visualizations." },

    // --- Trending & Future-Ready ---
    { title: "AI & Machine Learning", cat: "Future-Ready", slug: "ai-ml", duration: "8 Months", tags: ["TensorFlow", "PyTorch"], description: "Build intelligent systems and neural networks." },
    { title: "Blockchain Development", cat: "Future-Ready", slug: "blockchain", duration: "5 Months", tags: ["Solidity", "Web3"], description: "Create decentralized applications and smart contracts." },
    { title: "Cyber Security & Hacking", cat: "Future-Ready", slug: "cyber-security", duration: "6 Months", tags: ["Security", "Network"], description: "Protect digital assets and master ethical hacking." },
    { title: "Internet of Things (IoT)", cat: "Future-Ready", slug: "iot", duration: "4 Months", tags: ["Sensors", "Arduino"], description: "Connect the physical world to the digital network." },
    { title: "DevOps Architectures", cat: "Future-Ready", slug: "devops", duration: "5 Months", tags: ["Docker", "K8s"], description: "Bridge the gap between development and operations." },
    { title: "Big Data & Analytics", cat: "Future-Ready", slug: "big-data", duration: "6 Months", tags: ["Hadoop", "Spark"], description: "Process and analyze massive datasets in real-time." },
    { title: "AR/VR Development", cat: "Future-Ready", slug: "ar-vr", duration: "5 Months", tags: ["Unity", "Meta"], description: "Build immersive virtual and augmented experiences." },
    { title: "Quantum Computing", cat: "Future-Ready", slug: "quantum", duration: "4 Months", tags: ["Qiskit", "Physics"], description: "Explore the next frontier of computational power." },
    { title: "SAP", cat: "Future-Ready", slug: "sap", duration: "4 Months", tags: ["FICO", "ABAP"], description: "Manage business operations with SAP modules." },

    // --- Specialized Training ---
    { title: "Medical Coding", cat: "Specialized", slug: "medical-coding", duration: "4 Months", tags: ["ICD-10", "CPT"], description: "Universal medical classification for healthcare billing." },
    { title: "Pharmacovigilance", cat: "Specialized", slug: "pv", duration: "4 Months", tags: ["Drug Safety", "FDA"], description: "Monitoring and assessing drug safety and effects." },
    { title: "SAS Programming", cat: "Specialized", slug: "sas", duration: "3 Months", tags: ["Clinical", "Stats"], description: "Advanced analytics for clinical and business data." },
    { title: "Clinical Research", cat: "Specialized", slug: "clinical-res", duration: "5 Months", tags: ["Trials", "Ethics"], description: "Managing and conducting human clinical trials." },
    { title: "Health Informatics", cat: "Specialized", slug: "health-inf", duration: "4 Months", tags: ["EHR", "Data"], description: "Integrating IT with healthcare delivery systems." },
    { title: "Data Entry Operator", cat: "Specialized", slug: "data-entry", duration: "2 Months", tags: ["Speed", "Accuracy"], description: "Professional certification for data management." },
    { title: "Clinical Data Management", cat: "Specialized", slug: "cdm", duration: "4 Months", tags: ["Quality", "Trials"], description: "Ensuring high-quality data in clinical research." },
    { title: "Pharmaceutical Data Analytics", cat: "Specialized", slug: "pharma-analytics", duration: "5 Months", tags: ["R", "Python"], description: "Applying analytics to pharmaceutical research." },
    { title: "Healthcare SW Development", cat: "Specialized", slug: "health-sw", duration: "6 Months", tags: ["HL7", "HIPAA"], description: "Developing compliant software for medical use cases." },
    { title: "Bioinformatics", cat: "Specialized", slug: "bioinformatics", duration: "6 Months", tags: ["Genetics", "IT"], description: "Analyzing biological data with computational tools." },
];