const { createElement: h } = React;

const profile = {
  name: "Soham Nag",
  title: "Software Developer & EEE Undergraduate",
  location: "Dhanbad, India",
  email: "sohamnag14@gmail.com",
  phone: "+91-9508343866",
  linkedin: "https://www.linkedin.com/in/soham-nag-85783628a/",
  github: "https://github.com/Soham-Nag/",
};

const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "C++", "C", "Java", "Python"],
  },
  {
    title: "Developer Tools",
    items: ["GitHub", "Visual Studio Code", "Postman", "MongoDB Compass", "Git", "Jupyter Notebook", "Linux"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Tailwind CSS", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "Seaborn"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures and Algorithms", "Operating Systems", "Database Management Systems"],
  },
  {
    title: "Soft Skills",
    items: ["Problem-Solving", "Effective Communication", "Team Collaboration", "Time Management"],
  },
];

const projects = [
  {
    title: "VideoTube - Backend REST API",
    href: "https://github.com/StackOverLord27/VideoTube",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary"],
    summary:
      "A scalable YouTube-like backend API with MVC architecture for authentication, video management, playlists, comments, likes, and subscriptions.",
    details: [
      "Implemented access and refresh token auth, bcrypt password hashing, and HTTP-only cookie storage.",
      "Designed relational MongoDB schemas and used aggregation pipelines with pagination for large queries.",
      "Built a Multer and Cloudinary upload pipeline with reusable ApiError, ApiResponse, and asyncHandler utilities.",
    ],
  },
  {
    title: "Blog Website",
    href: "https://github.com/StackOverLord27/blog-app",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    summary:
      "A full-stack blog platform where users can create, read, update, and delete posts through a responsive MERN interface.",
    details: [
      "Added search, filter, and sort flows using query parameters and MongoDB indexing.",
      "Protected routes with JWT authentication and secure token storage.",
      "Optimized the UI for mobile and desktop, with reported 90+ Google PageSpeed performance.",
    ],
  },
  {
    title: "Customer Review Sentiment Analysis",
    href: "https://github.com/StackOverLord27/customer-sentiment-analysis",
    stack: ["Python", "Scikit-Learn", "NLTK", "SpaCy", "XGBoost", "Pandas", "NumPy"],
    summary:
      "An end-to-end machine learning pipeline for ingesting, preprocessing, and classifying high-volume customer feedback into sentiment signals.",
    details: [
      "Built text-mining workflows with custom tokenization, lemmatization, and Word2Vec embeddings for richer semantic features.",
      "Reduced majority-class bias by applying SMOTE to rebalance skewed sentiment datasets before model training.",
      "Evaluated models with K-fold cross-validation, reaching 92%+ F1-score and 0.89 AUC-ROC on unseen feedback.",
    ],
  },
];

const achievements = [
  "Secured 4th place in DevWeek 2024, organized by the Electrical and Electronics Engineering Society.",
  "Achieved 1st position in the Student Project Program hosted by the Electrical and Electronics Engineering Society.",
  "Ranked 4th in Bot Soccer at Pantheon 2024 among 100+ participating students.",
];

const responsibilities = [
  {
    title: "Joint President",
    org: "Electrical and Electronics Engineering Society",
    details:
      "Organized student inductions and web development workshops, and led planning for Electrothon, a 24-hour hardware/software hackathon with 200+ students.",
  },
  {
    title: "Volunteer",
    org: "National Service Scheme",
    details:
      "Participated in community welfare programs including blood donation camps and social awareness drives.",
  },
];

const navItems = ["About", "Projects", "Skills", "Education", "Leadership", "Contact"];

function Icon({ name }) {
  const icons = {
    arrow: "M5 12h14M13 5l7 7-7 7",
    github:
      "M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.25 9.25 0 0 1 12 6.98c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.79c0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
    linkedin:
      "M6.94 8.88H3.72v10.35h3.22V8.88ZM5.33 3.73a1.87 1.87 0 1 0 0 3.74 1.87 1.87 0 0 0 0-3.74ZM20.27 13.56c0-3.11-1.66-4.56-3.88-4.56a3.35 3.35 0 0 0-3.03 1.67h-.04V8.88h-3.09v10.35h3.22v-5.12c0-1.35.26-2.66 1.93-2.66 1.65 0 1.67 1.54 1.67 2.75v5.03h3.22v-5.67Z",
    mail: "M4 5h16v14H4V5Zm0 2 8 6 8-6",
  };

  return h(
    "svg",
    {
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      className: "icon",
      fill: name === "github" || name === "linkedin" ? "currentColor" : "none",
      stroke: name === "github" || name === "linkedin" ? "none" : "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    h("path", { d: icons[name] })
  );
}

function Button({ href, children, variant = "primary" }) {
  return h(
    "a",
    { className: `button button-${variant}`, href, target: "_blank", rel: "noreferrer" },
    children
  );
}

function Card({ className = "", children }) {
  return h("div", { className: `card ${className}` }, children);
}

function Badge({ children }) {
  return h("span", { className: "badge" }, children);
}

function Section({ id, eyebrow, title, children }) {
  return h(
    "section",
    { className: "section", id },
    h("div", { className: "section-heading" }, h("p", null, eyebrow), h("h2", null, title)),
    children
  );
}

function App() {
  return h(
    React.Fragment,
    null,
    h(
      "header",
      { className: "site-header" },
      h("a", { className: "brand", href: "#home" }, "Soham Nag"),
      h(
        "nav",
        { "aria-label": "Primary navigation" },
        navItems.map((item) => h("a", { key: item, href: `#${item.toLowerCase()}` }, item))
      )
    ),
    h(
      "main",
      null,
      h(
        "section",
        { className: "hero", id: "home" },
        h(
          "div",
          { className: "hero-copy" },
          h("p", { className: "eyebrow" }, profile.title),
          h("h1", null, profile.name),
          h(
            "p",
            { className: "lede" },
            "I build backend and full-stack web projects with JavaScript, React, Node.js, Express, and MongoDB while studying Electrical and Electronics Engineering at BIT Mesra."
          ),
          h(
            "div",
            { className: "hero-meta", "aria-label": "Portfolio highlights" },
            h("span", null, "CGPA 8.06/10"),
            h("span", null, "MERN projects"),
            h("span", null, "DSA + DBMS fundamentals")
          ),
          h(
            "div",
            { className: "hero-actions" },
            h(Button, { href: profile.linkedin }, "Connect on LinkedIn", h(Icon, { name: "arrow" })),
            h(Button, { href: profile.github, variant: "secondary" }, h(Icon, { name: "github" }), "GitHub")
          )
        ),
        h(
          "div",
          { className: "portrait-wrap" },
          h("img", {
            src: "images/photo_2024-09-29_18-56-08.jpg",
            alt: "Portrait of Soham Nag",
            className: "portrait",
          })
        )
      ),
      h(
        Section,
        { id: "about", eyebrow: "About", title: "Curious, practical, and steadily building." },
        h(
          "div",
          { className: "about-grid" },
          h(
            "p",
            null,
            "I like working through technical problems from first principles and turning that understanding into useful software. My current focus is backend engineering, full-stack product flows, database design, and the computer science fundamentals that make software reliable."
          ),
          h(
            Card,
            { className: "quick-card" },
            h("span", null, "Current track"),
            h("strong", null, "B.Tech, Electrical and Electronics Engineering"),
            h("small", null, "BIT Mesra | 2023-2027 | CGPA 8.06")
          )
        )
      ),
      h(
        Section,
        { id: "projects", eyebrow: "Projects", title: "Backend systems, full-stack products, and applied ML." },
        h(
          "div",
          { className: "project-grid" },
          projects.map((project) =>
            h(
              Card,
              { key: project.title, className: "project-card" },
              h(
                "div",
                { className: "project-card-head" },
                h("h3", null, project.title),
                h("a", { href: project.href, target: "_blank", rel: "noreferrer", "aria-label": `${project.title} GitHub` }, h(Icon, { name: "github" }))
              ),
              h("p", null, project.summary),
              h(
                "div",
                { className: "badge-row" },
                project.stack.map((item) => h(Badge, { key: item }, item))
              ),
              h("ul", null, project.details.map((detail) => h("li", { key: detail }, detail)))
            )
          )
        )
      ),
      h(
        Section,
        { id: "skills", eyebrow: "Skills", title: "A focused technical base." },
        h(
          "div",
          { className: "skill-grid" },
          skills.map((group) =>
            h(
              Card,
              { key: group.title },
              h("h3", null, group.title),
              h(
                "div",
                { className: "badge-row" },
                group.items.map((item) => h(Badge, { key: item }, item))
              )
            )
          )
        )
      ),
      h(
        Section,
        { id: "education", eyebrow: "Education", title: "Birla Institute of Technology, Mesra." },
        h(
          Card,
          { className: "education-card" },
          h("img", {
            src: "images/Birla_Institute_of_Technology_Mesra.png",
            alt: "Birla Institute of Technology Mesra logo",
          }),
          h(
            "div",
            null,
            h("h3", null, "Bachelor of Technology"),
            h("p", null, "Electrical and Electronics Engineering"),
            h("small", null, "BIT Mesra, Ranchi | Sept 2023 - June 2027 | CGPA 8.06 / 10.0")
          )
        )
      ),
      h(
        Section,
        { id: "leadership", eyebrow: "Leadership", title: "Campus work beyond coursework." },
        h(
          "div",
          { className: "leadership-grid" },
          h(
            Card,
            { className: "list-card" },
            h("h3", null, "Achievements"),
            h("ul", null, achievements.map((achievement) => h("li", { key: achievement }, achievement)))
          ),
          h(
            Card,
            { className: "list-card" },
            h("h3", null, "Responsibilities"),
            responsibilities.map((role) =>
              h(
                "div",
                { className: "role", key: role.title },
                h("strong", null, role.title),
                h("span", null, role.org),
                h("p", null, role.details)
              )
            )
          )
        )
      ),
      h(
        Section,
        { id: "contact", eyebrow: "Contact", title: "Let us build something useful." },
        h(
          Card,
          { className: "contact-card" },
          h("a", { href: `mailto:${profile.email}` }, h(Icon, { name: "mail" }), profile.email),
          h("a", { href: profile.linkedin, target: "_blank", rel: "noreferrer" }, h(Icon, { name: "linkedin" }), "LinkedIn"),
          h("a", { href: profile.github, target: "_blank", rel: "noreferrer" }, h(Icon, { name: "github" }), "GitHub"),
          h("span", null, profile.phone)
        )
      )
    ),
    h("footer", null, h("p", null, `Copyright ${new Date().getFullYear()} ${profile.name}. All rights reserved.`))
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
