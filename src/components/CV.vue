<template>
    <div class="cv">
        <header class="header">
            <div>
                <h1 class="name">Sreyneath ROM</h1>
                <p class="title">Web Developer Intern</p>
            </div>
            <div class="contact">
                <p>Phum Tropeang Chhuk (Borey Sorla), Street 371, Phnom Penh, Cambodia</p>
                <p><strong>Email:</strong> sreyneath.rom@student.passerellesnumeriques.org</p>
                <p><strong>Phone:</strong> +855 96 250 4227</p>
            </div>
        </header>

        <main class="main">
            <section class="left">
                <h2>About Me</h2>
                <p>
                    Aspiring web developer with hands-on project experience in UI design,
                    front-end development, and DevOps tasks. Comfortable working in agile
                    teams and using modern tools like Figma, Git, and AWS.
                </p>

                <h2>Education</h2>
                <ul class="list">
                    <li>
                        <strong>Associate Degree</strong> — Passerelles Numériques Cambodia
                        <span class="muted">2024 - Present</span>
                    </li>
                    <li>
                        <strong>High School Diploma</strong> — Varin High School
                        <span class="muted">2020 - 2023</span>
                    </li>
                </ul>

                <h2>Technical Tools & Technologies</h2>
                <ul class="tags">
                    <li v-for="(t, i) in tools" :key="i">{{ t }}</li>
                </ul>

                <h2>Hard Skills</h2>
                <ul class="list two-col">
                    <li>HTML / CSS / SASS</li>
                    <li>Bootstrap 5</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>Vue.js</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Node.js (Basic REST API)</li>
                    <li>Python (Algorithms)</li>
                    <li>MySQL</li>
                    <li>TypeScript (OOP)</li>
                    <li>Firebase</li>
                    <li>WordPress</li>
                    <li>Data Analytics / Power BI</li>
                </ul>

                <h2>Languages</h2>
                <ul class="list">
                    <li>Khmer — Excellent</li>
                    <li>English — Intermediate</li>
                </ul>

                <h2>Hobbies & Interests</h2>
                <ul class="list">
                    <li>Researching</li>
                    <li>Coding practice</li>
                    <li>Designing modern websites</li>
                </ul>
            </section>

            <aside class="right">
                <section>
                    <h2>Work & Projects</h2>

                    <article class="project">
                        <h3>Pos System</h3>
                        <p class="muted">Role: DevOps — Feb 10, 2025 — May 02, 2025 (School Project)</p>
                        <ul>
                            <li>Monitored server performance and resolved infrastructure issues.</li>
                            <li>Configured environments for development, testing, and production.</li>
                            <li>Designed responsive UIs with HTML, CSS, JavaScript and Bootstrap 5.</li>
                            <li>Fetched and processed data using PHP and a connected database.</li>
                        </ul>
                    </article>

                    <article class="project">
                        <h3>Inventory Management App</h3>
                        <p class="muted">Role: Designer — Jan 14, 2025 — Jan 29, 2025</p>
                        <ul>
                            <li>Designed responsive UIs; created wireframes and mockups using Figma.</li>
                            <li>Collaborated with developers to ensure design consistency.</li>
                            <li>Handled data interactions with JavaScript.</li>
                        </ul>
                    </article>

                    <article class="project">
                        <h3>Video Download Tool</h3>
                        <p class="muted">Role: Team Leader — Nov 18, 2024 — Nov 28, 2024</p>
                        <ul>
                            <li>Led a team of 3 in building a video downloader tool.</li>
                            <li>Defined workflow, delegated tasks and integrated JSON-based configuration.</li>
                        </ul>
                    </article>

                    <article class="project">
                        <h3>Bakery Shop Website</h3>
                        <p class="muted">Role: Designer — Oct 21, 2024 — Nov 5, 2024</p>
                        <ul>
                            <li>Designed a responsive bakery website using SASS and consistent visual patterns.</li>
                        </ul>
                    </article>

                    <article class="project">
                        <h3>Brochure Design</h3>
                        <p class="muted">Role: Designer — June 18, 2024 — Aug 16, 2024</p>
                        <ul>
                            <li>Created marketing brochures using Figma and applied branding guidelines.</li>
                        </ul>
                    </article>
                </section>

                <section>
                    <h2>Workshops & Training</h2>
                    <ul class="list">
                        <li>Product Owner — Jan 18 & 25, 2025 (Practiced product requirements, user stories)</li>
                        <li>UX/UI Design — Feb 7 & Mar 14, 2025 (Wireframes, prototypes)</li>
                        <li>Data Analytics — Mar 19, 2025 (Python, Power BI)</li>
                        <li>Project Management — Feb 8, 2025 (Agile fundamentals, Jira) — Instructor: Felix Leuker</li>
                        <li>Tools practiced: Jira, Git & GitHub, AWS EC2, Postman, Linux (Ubuntu)</li>
                    </ul>
                </section>

                <section>
                    <h2>Soft Skills</h2>
                    <ul class="list two-col">
                        <li>Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Teamwork</li>
                        <li>Time & Task Management</li>
                        <li>Communication</li>
                        <li>Critical Thinking</li>
                        <li>Creativity</li>
                    </ul>
                </section>

                <section>
                    <h2>Personal Details</h2>
                    <ul class="list">
                        <li><strong>Full Name:</strong> Sreyneath ROM</li>
                        <li><strong>Date of Birth:</strong> May 05, 2004</li>
                        <li><strong>Place of Birth:</strong> Siem Reap Province</li>
                        <li><strong>Gender:</strong> Female</li>
                        <li><strong>Nationality:</strong> Khmer</li>
                        <li><strong>Status:</strong> Single</li>
                    </ul>
                </section>

                <section>
                    <h2>References</h2>
                    <div class="ref">
                        <p><strong>PNC Professional Life Trainer</strong></p>
                        <p>Mr. Puthy KRY — +855 12 376 863 — puthy.kry@passerellesnumeriques.org</p>
                    </div>
                    <div class="ref">
                        <p><strong>PNC IT Coordinator</strong></p>
                        <p>Mr. Rady Y — +855 12 251 803 — rady.y@passerellesnumeriques.org</p>
                    </div>
                    <div class="ref">
                        <p><strong>PNC English Trainer</strong></p>
                        <p>Ms. Sovanchansreyleap KHENG — +855 78 819 152 — sovanchansreyleap.kheng@passerellesnumeriques.org</p>
                    </div>
                </section>
            </aside>
        </main>
    </div>
</template>

<script setup>
const tools = [
    "Figma (Design)",
    "Canva",
    "Jira",
    "Git / GitHub",
    "Postman",
    "Linux (Ubuntu)",
    "AWS (EC2)",
    "MS Office (Word, Excel, PowerPoint)",
    "AI Tools (ChatGPT, Gemini, etc.)",
    "Power BI"
];
</script>

<style scoped>
.cv {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color: #222;
    max-width: 1000px;
    margin: 24px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.06);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
    margin-bottom: 16px;
}

.name {
    margin: 0;
    font-size: 1.6rem;
    letter-spacing: 0.4px;
}

.title {
    margin: 4px 0 0;
    color: #555;
    font-weight: 600;
}

.contact p {
    margin: 2px 0;
    font-size: 0.92rem;
    color: #444;
}

.main {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 24px;
}

.left, .right {
    padding: 4px 8px;
}

h2 {
    margin: 12px 0 8px;
    font-size: 1.02rem;
    color: #1f2937;
    border-bottom: 1px dashed #e6e6e6;
    padding-bottom: 6px;
}

.list {
    list-style: none;
    padding: 0;
    margin: 8px 0 0;
}

.list li {
    margin: 6px 0;
    line-height: 1.45;
    font-size: 0.95rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 8px 0 0;
    list-style: none;
}

.tags li {
    background: #f3f4f6;
    color: #111827;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.88rem;
}

.muted {
    display: block;
    color: #6b7280;
    font-size: 0.88rem;
    margin-top: 4px;
}

.project + .project {
    margin-top: 12px;
}

.two-col {
    columns: 2;
    -webkit-columns: 2;
    gap: 12px;
}

.ref {
    background: #fbfbfb;
    padding: 8px;
    border-radius: 6px;
    margin: 8px 0;
    font-size: 0.92rem;
}

@media (max-width: 880px) {
    .main {
        grid-template-columns: 1fr;
    }
    .two-col {
        columns: 1;
    }
}
</style>