(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const b=()=>`
    <div class="landing-page" style="position: relative;">
      
      <!-- Zigzag Network Line Background Overlay -->
      <svg id="network-line-svg" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <path class="network-path" d="M15,0 L15,100 L85,200 L15,350 L85,500 L25,650 L75,800 L50,1000" />
        <circle class="network-pulse-node" r="8" cx="15" cy="0" />
      </svg>

      <!-- Navbar -->
      <nav style="height: 90px; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; position: fixed; width: 100%; top: 0; z-index: 1000; transition: all 0.4s ease;">
        <div class="logo" style="display: flex; align-items: center; gap: 0.8rem; text-decoration: none; cursor: pointer; padding-left: 10px;" onclick="window.scrollTo(0,0);">
          <img src="/src/assets/logo.svg" alt="COGNI AI Logo" style="height: 65px; width: auto; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));" onerror="this.src='/src/assets/logo.svg'" />
          <span style="font-size: 1.6rem; color: var(--primary); font-weight: 800; font-family: 'Poppins', sans-serif;">COGNI AI</span>
        </div>
        <div class="nav-links" style="display: flex; gap: 2.5rem; align-items: center;">
          <a href="#about" style="text-decoration: none; color: var(--text-main); font-weight: 600; font-size: 0.95rem;">About</a>
          <a href="#objectives" style="text-decoration: none; color: var(--text-main); font-weight: 600; font-size: 0.95rem;">Objectives</a>
          <a href="#offerings" style="text-decoration: none; color: var(--text-main); font-weight: 600; font-size: 0.95rem;">Offerings</a>
          <button class="btn btn-outline" style="border-radius: 50px; font-size: 0.9rem;" onclick="window.app.navigate('login')">LogIn</button>
          <button class="btn btn-primary" style="border-radius: 50px; font-size: 0.9rem; padding: 0.75rem 1.8rem;" onclick="window.app.navigate('login')">Get Started</button>
        </div>
      </nav>

      <!-- 1. HERO SECTION -->
      <section class="hero" style="display: flex; align-items: center; background: white;">
        <!-- Animated Background Shapes -->
        <div class="bg-shape" style="width: 500px; height: 500px; background: rgba(37, 99, 235, 0.08); top: -10%; left: -10%;"></div>
        <div class="bg-shape" style="width: 400px; height: 400px; background: rgba(79, 70, 229, 0.08); bottom: -10%; right: -10%; animation-delay: -7s;"></div>

        <div class="container">
          <div class="hero-grid">
            <!-- Left Side: Content -->
            <div class="hero-content reveal stagger-1" style="z-index: 10;">
              <div class="section-tag" style="margin-bottom: 1.5rem;">Institutional Excellence 2026</div>
              <h1 class="hero-main-title">
                COGNI AI Forum –<br>
                <span style="background: var(--grad-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Together, Towards Excellence</span>
              </h1>
              <p style="font-size: 1.25rem; color: var(--accent); font-weight: 700; margin-bottom: 1rem; letter-spacing: -0.01em;">
                Empowering Ethical AI Learning, Innovation, and Industry Collaboration.
              </p>
              <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem; max-width: 550px;">
                COGNI AI Forum is a centralized academic platform designed to promote Artificial Intelligence awareness, interdisciplinary collaboration, research excellence, and real-world innovation.
              </p>
              <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <button class="btn btn-primary" style="padding: 1rem 2.5rem; font-size: 1rem; border-radius: 50px; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);">Explore Programs</button>
                <button class="btn btn-outline" style="padding: 1rem 2.5rem; font-size: 1rem; border-radius: 50px;" onclick="window.app.navigate('signup')">Join the Forum</button>
              </div>
            </div>

            <!-- Right Side: Professional Visual -->
            <div class="hero-visual-container reveal stagger-2">
              <div class="hero-glow-main"></div>
              
              <!-- Floating Glassmorphic Status Cards -->
              <div class="hero-status-card" style="top: 10%; right: 0;">
                <div style="width: 40px; height: 40px; background: var(--highlight); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🚀</div>
                <div>
                  <div style="font-weight: 800; color: var(--text-main); font-size: 1.1rem;">Core Innovation</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">2026 Research Drive</div>
                </div>
              </div>

              <div class="hero-status-card" style="bottom: 15%; left: -20px; animation-delay: -2s;">
                <div style="width: 40px; height: 40px; background: #ECFDF5; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🛡️</div>
                <div>
                  <div style="font-weight: 800; color: var(--text-main); font-size: 1.1rem;">Ethical Framework</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">NAAC Accredited</div>
                </div>
              </div>

              <!-- Main Visual Placeholder (Will be replaced by Generated Image) -->
              <div style="width: 100%; aspect-ratio: 1; min-width: 400px; background: var(--bg-card); border-radius: 60px; box-shadow: var(--shadow-soft); overflow: hidden; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); position: relative;">
                <img src="/images/hero-brain.png" alt="AI Neural Brain" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
                <!-- Decorative Particles -->
                <div style="position: absolute; width: 10px; height: 10px; background: var(--primary); border-radius: 50%; top: 20%; left: 30%; filter: blur(2px);"></div>
                <div style="position: absolute; width: 15px; height: 15px; background: var(--accent); border-radius: 50%; bottom: 40%; right: 20%; filter: blur(3px);"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. ABOUT THE FORUM -->
      <section id="about" style="background: white; border-top: 1px solid var(--border);">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;">
            <div class="reveal">
              <div class="section-tag">The Vision</div>
              <h2 style="font-size: 3.5rem; line-height: 1.1;">Building a Hybrid AI Learning Ecosystem</h2>
              <p style="font-size: 1.15rem; color: var(--text-muted); line-height: 2; margin-top: 2rem;">
                COGNI AI Forum is an institutional initiative aimed at transforming AI education through structured collaboration between students, faculty, and industry experts.
              </p>
              <p style="font-size: 1.15rem; color: var(--text-muted); line-height: 2; margin-top: 1.5rem;">
                The forum enables practical exposure, research-driven innovation, ethical AI awareness, and career-focused skill development through workshops, interdisciplinary projects, and expert mentorship.
              </p>
            </div>
            <div class="reveal stagger-1" style="position: relative; height: 500px;">
               <!-- AI Creative Slideshow -->
               <div class="creative-slideshow" id="about-slideshow">
                 <div class="slideshow-overlay"></div>
                 <img class="slide-img active" src="/images/hero-brain.png" alt="AI Neural Brain">
                  <img class="slide-img" src="/images/ai-lab.png" alt="Futuristic Academic Environment">
               </div>
               
               <div class="slideshow-content">
                 <div style="background: rgba(255, 255, 255, 0.9); padding: 2.5rem; border-radius: 24px; box-shadow: var(--shadow-soft); max-width: 400px; backdrop-filter: blur(10px);">
                    <div style="font-size: 3rem; margin-bottom: 1.5rem;" class="floating-icon">🌐</div>
                    <p style="font-weight: 700; font-size: 1.15rem; line-height: 1.6; color: var(--text-main);">It acts as a unified digital ecosystem for managing and monitoring all AI-related academic activities within the institution.</p>
                 </div>
               </div>
               
               <!-- Floating Detail -->
               <div style="position: absolute; top: -10px; right: -10px; padding: 1rem 2rem; background: var(--primary); color: white; border-radius: 50px; font-weight: 700; font-size: 0.9rem; box-shadow: var(--shadow-hover); z-index: 10;">Centralized Hub</div>
            </div>
          </div>
        </div>
      </section>
      <!-- 2.5 THE COGNI DNA ACRONYM -->
      <section id="dna" style="background: white; border-top: 1px solid var(--border); overflow: hidden; padding: 6rem 0;">
        <div class="container">
          <div class="section-title reveal" style="text-align: center; margin-bottom: 4rem;">
            <div class="section-tag" style="background: rgba(37,99,235,0.1); color: var(--primary);">Brand Identity</div>
            <h2 style="font-size: 3rem; margin-bottom: 1rem;">The COGNI AI DNA</h2>
            <p style="font-size: 1.15rem; color: var(--text-muted); max-width: 700px; margin: 0 auto;">The seven foundational pillars powering our intelligent academic ecosystem.</p>
          </div>
          
          <div class="dna-container reveal stagger-1">
            ${[{letter:"C",word:"Collaboration",icon:"🤝",desc:"Fostering interdisciplinary teamwork and industry alliances.",bg:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"},{letter:"O",word:"Opportunities",icon:"🚀",desc:"Creating platforms for research, internships, and growth.",bg:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"},{letter:"G",word:"Growth",icon:"📈",desc:"Continuous advancement of skills and institutional capabilities.",bg:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"},{letter:"N",word:"Networking",icon:"🌐",desc:"Connecting students with expert mentors and visionaries.",bg:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"},{letter:"I",word:"Innovation",icon:"💡",desc:"Encouraging novel solutions to real-world challenges.",bg:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"},{letter:"A",word:"Artificial Intelligence",icon:"🤖",desc:"Mastering the core technologies shaping the future.",bg:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600"},{letter:"I",word:"Intelligent Forum",icon:"🏛️",desc:"A structured, smart ecosystem for academic excellence.",bg:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"}].map((n,e)=>`
              <div class="dna-card" style="animation-delay: ${e*.1}s; background-image: url('${n.bg}');">
                <div class="dna-letter">${n.letter}</div>
                <div class="dna-content">
                  <div class="dna-icon">${n.icon}</div>
                  <h3 class="dna-word">${n.word}</h3>
                  <p class="dna-desc">${n.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- 3. OUR CORE OBJECTIVES -->
      <section id="objectives" style="background: var(--lavender); border-radius: 80px;">
        <div class="container">
          <div class="section-title reveal" style="text-align: center; margin-bottom: 5rem;">
            <div class="section-tag">Mission Pulse</div>
            <h2>Our Core Objectives</h2>
          </div>
          <div class="grid grid-3">
            <div class="offering-card reveal stagger-1">
              <div class="offering-icon floating-icon">⚖️</div>
              <h3>Ethical Awareness</h3>
              <p style="color: var(--text-muted);">Develop ethical AI awareness and responsible technology practices across the academic spectrum.</p>
            </div>
            <div class="offering-card reveal stagger-2">
              <div class="offering-icon floating-icon" style="animation-delay: -1s;">🤝</div>
              <h3>Hybrid Collaboration</h3>
              <p style="color: var(--text-muted);">Create interdisciplinary AI collaboration across diverse departments and project groups.</p>
            </div>
            <div class="offering-card reveal stagger-3">
              <div class="offering-icon floating-icon" style="animation-delay: -2s;">⚡</div>
              <h3>Innovation Driven</h3>
              <p style="color: var(--text-muted);">Promote high-impact student projects and research through structured institutional support.</p>
            </div>
            <div class="offering-card reveal stagger-1" style="grid-column: span 1.5;">
              <div class="offering-icon floating-icon" style="animation-delay: -0.5s;">🏫</div>
              <h3>Industry Interaction</h3>
              <p style="color: var(--text-muted);">Enable direct industry-academia interaction to bridge the gap between classroom and career.</p>
            </div>
            <div class="offering-card reveal stagger-2" style="grid-column: span 1.5;">
              <div class="offering-icon floating-icon" style="animation-delay: -1.5s;">📊</div>
              <h3>Data Insights</h3>
              <p style="color: var(--text-muted);">Build data-driven academic performance insights to track and enhance institutional AI growth.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. WHAT WE OFFER -->
      <section id="offerings" style="background: white;">
        <div class="container">
          <div class="section-title reveal" style="text-align: center; margin-bottom: 6rem;">
            <div class="section-tag">Value Matrix</div>
            <h2>Dedicated Ecosystem Features</h2>
          </div>
          <div class="grid grid-3">
            <!-- For Students -->
            <div class="reveal stagger-1">
              <div class="offering-card" style="height: 100%;">
                 <div class="offering-icon">🎓</div>
                 <h3>For Students</h3>
                 <ul class="feature-list">
                   <li>Register for AI workshops & seminars</li>
                   <li>Apply for faculty-guided projects</li>
                   <li>Submit project milestones digitally</li>
                   <li>Access research materials & datasets</li>
                   <li>Track participation & skill growth</li>
                   <li>Download auto-generated certificates</li>
                   <li>View internship opportunities</li>
                 </ul>
              </div>
            </div>
            <!-- For Faculty -->
            <div class="reveal stagger-2">
              <div class="offering-card" style="height: 100%;">
                 <div class="offering-icon">👨‍🏫</div>
                 <h3>For Faculty</h3>
                 <ul class="feature-list">
                   <li>Post workshops & training programs</li>
                   <li>Create and mentor AI project groups</li>
                   <li>Evaluate student submissions</li>
                   <li>Upload research papers & materials</li>
                   <li>Monitor student participation</li>
                   <li>Generate performance reports</li>
                 </ul>
              </div>
            </div>
            <!-- For Admin -->
            <div class="reveal stagger-3">
              <div class="offering-card" style="height: 100%; border-color: var(--primary);">
                 <div class="offering-icon" style="background: var(--primary); color: white;">🛠️</div>
                 <h3>For Admin</h3>
                 <ul class="feature-list">
                   <li>Manage all users & authentication</li>
                   <li>Approve events and projects</li>
                   <li>Publish strategic announcements</li>
                   <li>Monitor forum activity analytics</li>
                   <li>Generate certificates automatically</li>
                   <li>Track institutional AI growth metrics</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. LEADERSHIP & GOVERNANCE -->
      <section style="background: var(--bg-main);">
        <div class="container">
          <div class="section-title reveal" style="text-align: center; margin-bottom: 6rem;">
            <div class="section-tag">Governance</div>
            <h2>Forum Leadership & Committee</h2>
          </div>
          <div class="grid grid-3" style="gap: 3rem;">
            <div class="reveal stagger-1" style="text-align: center;">
               <div style="width: 180px; height: 180px; border-radius: 50%; overflow: hidden; margin: 0 auto 2rem; border: 4px solid white; box-shadow: var(--shadow-soft);">
                  <div style="width: 100%; height: 100%; background: var(--grad-primary); display: flex; align-items: center; justify-content: center; font-size: 5rem;">🏛️</div>
               </div>
               <h3 style="margin-bottom: 0.2rem;">Hon. Dr. T. J. Sawant</h3>
               <p style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">Chief Patron</p>
            </div>
            <div class="reveal stagger-2" style="text-align: center;">
               <div style="width: 180px; height: 180px; border-radius: 50%; overflow: hidden; margin: 0 auto 2rem; border: 4px solid white; box-shadow: var(--shadow-soft);">
                  <div style="width: 100%; height: 100%; background: var(--grad-primary); display: flex; align-items: center; justify-content: center; font-size: 5rem;">🎓</div>
               </div>
               <h3 style="margin-bottom: 0.2rem;">Dr. P. A. Patil</h3>
               <p style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">Chair Person (Principal JSCOE)</p>
            </div>
            <div class="reveal stagger-3" style="text-align: center;">
               <div style="width: 180px; height: 180px; border-radius: 50%; overflow: hidden; margin: 0 auto 2rem; border: 4px solid white; box-shadow: var(--shadow-soft);">
                  <div style="width: 100%; height: 100%; background: var(--grad-primary); display: flex; align-items: center; justify-content: center; font-size: 5rem;">🧬</div>
               </div>
               <h3 style="margin-bottom: 0.2rem;">Dr. M. K. Gawali</h3>
               <p style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">Forum Coordinator</p>
            </div>
          </div>
          
          <div class="reveal stagger-1" style="margin-top: 5rem; padding: 4rem; background: white; border-radius: 40px; border: 1px solid var(--border); text-align: center;">
             <h4 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 2.5rem; letter-spacing: 0.1em; text-transform: uppercase;">Core Committee - Heads of Departments</h4>
             <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem;">
                ${["ENTC","Computer","IT","Electrical","Mechanical","FE","MCA","MBA","AI & DS"].map(n=>`
                  <div style="padding: 1rem 2rem; background: var(--bg-main); border-radius: 50px; font-weight: 700; color: var(--text-muted); font-size: 0.9rem; border: 1px solid var(--border); transition: all 0.3s;" onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-muted)'">${n}</div>
                `).join("")}
             </div>
          </div>
        </div>
      </section>

      <!-- 6. IMPACT & GROWTH -->
      <section style="background: rgba(37, 99, 235, 0.03);">
        <div class="container">
          <div class="grid grid-5 reveal">
            <div style="text-align: center;">
              <span class="counter" style="color: var(--primary); font-size: 3.5rem; font-weight: 800;">500+</span>
              <p style="color: var(--text-muted); font-weight: 600; margin-top: 0.5rem; font-size: 0.9rem;">Students Engaged</p>
            </div>
            <div style="text-align: center;">
              <span class="counter" style="color: var(--primary); font-size: 3.5rem; font-weight: 800;">50+</span>
              <p style="color: var(--text-muted); font-weight: 600; margin-top: 0.5rem; font-size: 0.9rem;">AI Workshops</p>
            </div>
            <div style="text-align: center;">
              <span class="counter" style="color: var(--primary); font-size: 3.5rem; font-weight: 800;">25+</span>
              <p style="color: var(--text-muted); font-weight: 600; margin-top: 0.5rem; font-size: 0.9rem;">Faculty Mentors</p>
            </div>
            <div style="text-align: center;">
              <span class="counter" style="color: var(--primary); font-size: 3.5rem; font-weight: 800;">10+</span>
              <p style="color: var(--text-muted); font-weight: 600; margin-top: 0.5rem; font-size: 0.9rem;">Industry Experts</p>
            </div>
            <div style="text-align: center;">
              <span class="counter" style="color: var(--primary); font-size: 3.5rem; font-weight: 800;">100+</span>
              <p style="color: var(--text-muted); font-weight: 600; margin-top: 0.5rem; font-size: 0.9rem;">AI Projects</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. WHY STANDS OUT -->
      <section style="background: white;">
        <div class="container">
           <div class="reveal" style="max-width: 900px; margin: 0 auto; text-align: center; background: var(--lavender); padding: 5rem; border-radius: 40px; border: 1px dashed var(--primary);">
              <h2 style="font-size: 2.2rem; line-height: 1.4; color: var(--text-main);">
                "COGNI AI Forum is not just an activity-based committee — it is a <span style="color: var(--primary);">structured, AI-powered digital ecosystem</span> that centralizes collaboration and enhances institutional performance."
              </h2>
           </div>
        </div>
      </section>

      <!-- 8. CALL TO ACTION -->
      <section style="padding: 0; margin-bottom: 5rem;">
        <div class="container">
          <div class="reveal" style="background: var(--grad-primary); border-radius: 50px; padding: 8rem 4rem; text-align: center; color: white; position: relative; overflow: hidden;">
            <div style="position: relative; z-index: 2;">
              <h2 style="color: white; font-size: 4rem; margin-bottom: 2rem;">Join the Future of Artificial Intelligence</h2>
              <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn" style="background: white; color: var(--primary); padding: 1.2rem 3rem; border-radius: 50px; font-weight: 800;" onclick="window.app.navigate('signup')">Register as Student</button>
                <button class="btn btn-outline" style="border-color: white; color: white; padding: 1.2rem 3rem; border-radius: 50px; backdrop-filter: blur(10px);" onclick="window.app.navigate('login')">Faculty Login</button>
                <button class="btn btn-outline" style="border-color: white; color: white; padding: 1.2rem 3rem; border-radius: 50px; backdrop-filter: blur(10px);" onclick="window.app.navigate('login')">Admin Portal</button>
              </div>
            </div>
            <!-- Decorative Light Particles -->
            <div style="position: absolute; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; top: 10%; left: 5%;"></div>
            <div style="position: absolute; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 50%; bottom: 10%; right: 5%;"></div>
          </div>
        </div>
      </section>

      <!-- 9. PROFESSIONAL FOOTER -->
      <footer>
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 3rem; margin-bottom: 6rem;">
            <!-- Col 1 -->
            <div style="grid-column: span 1.5;">
              <h4 class="footer-nav-h">COGNI AI Forum</h4>
              <p style="line-height: 1.8; font-size: 0.95rem; margin-bottom: 2rem;">
                Dedicated to building ethical AI leaders through innovation, collaboration, and industry integration.
              </p>
              <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                <div style="display: flex; align-items: center; gap: 0.8rem;">📧 <span>cogni.ai@college.edu</span></div>
                <div style="display: flex; align-items: center; gap: 0.8rem;">📍 <span>JSCOE Campus, Pune</span></div>
              </div>
            </div>
            <!-- Col 2 -->
            <div>
              <h4 class="footer-nav-h">Quick Links</h4>
              <a href="#" class="footer-link">Home</a>
              <a href="#about" class="footer-link">About</a>
              <a href="#" class="footer-link">Events</a>
              <a href="#" class="footer-link">Projects</a>
              <a href="#" class="footer-link">Research</a>
            </div>
            <!-- Col 3 -->
            <div>
              <h4 class="footer-nav-h">Programs</h4>
              <a href="#" class="footer-link">AI Workshops</a>
              <a href="#" class="footer-link">Research Initiatives</a>
              <a href="#" class="footer-link">Student Projects</a>
              <a href="#" class="footer-link">Industry Interaction</a>
              <a href="#" class="footer-link">Certifications</a>
            </div>
            <!-- Col 4 -->
            <div>
              <h4 class="footer-nav-h">Leadership</h4>
              <a href="#" class="footer-link">Chief Patron</a>
              <a href="#" class="footer-link">Chair Person</a>
              <a href="#" class="footer-link">Coordinator</a>
              <a href="#" class="footer-link">Core Committee</a>
            </div>
            <!-- Col 5 -->
            <div>
              <h4 class="footer-nav-h">Resources</h4>
              <a href="#" class="footer-link">AI Ethics Guidelines</a>
              <a href="#" class="footer-link">Forum Policies</a>
              <a href="#" class="footer-link">Privacy Policy</a>
              <a href="#" class="footer-link">Terms & Conditions</a>
            </div>
          </div>
          
          <div style="padding-top: 3rem; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem;">
            <div>© 2026 COGNI AI Forum | All Rights Reserved</div>
            <div style="display: flex; gap: 1.5rem; align-items: center;">
              <span>Designed & Developed by COGNI AI Technical Team</span>
              <div style="display: flex; gap: 1rem;">
                <a href="#" style="color: white; text-decoration: none; opacity: 0.6;">LinkedIn</a>
                <a href="#" style="color: white; text-decoration: none; opacity: 0.6;">Email</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,w=()=>`
    <div class="auth-page fade-in">
      <div class="auth-wrapper">
        <div class="auth-image login-image">
          <img src="/src/assets/logo.svg" alt="COGNI AI Logo" style="width: 100%; max-width: 450px; height: auto; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.05));" />
        </div>
        
        <div class="auth-content">
          <div class="auth-header">
            <h1>Login</h1>
            <p>Enter your credentials to continue</p>
          </div>

          <form id="loginForm" onsubmit="window.app.handleLogin(event)">
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label>Select Your Role</label>
              <select id="roleSelect" name="role" required>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Forum Coordinator (Admin)</option>
              </select>
            </div>
            
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label>Institutional ID / Email</label>
              <input type="email" name="email" placeholder="e.g. jscoe@college.edu" required>
            </div>

            <div class="form-group" style="margin-bottom: 2rem;">
              <label>Password</label>
              <input type="password" name="password" placeholder="••••••••" required>
            </div>

            <button type="submit" class="btn btn-primary auth-btn">Secure Login</button>
          </form>

          <div class="auth-footer">
            <p>New to the platform? <a href="#" onclick="window.app.navigate('signup')">Create an account</a></p>
            <p style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-muted);">
              Institutional Access Only. Need help? 
              <a href="#" style="font-weight: normal; opacity: 0.8;">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,x=(n,e={})=>`
    <div class="dashboard-container" style="background: #F8FAFC; min-height: 100vh; position: relative; overflow-x: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 400px; background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); z-index: 0; clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);"></div>

      <nav style="position: relative; z-index: 10; padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: #1E293B;">
        <div class="logo" style="display: flex; align-items: center; gap: 0.8rem; text-decoration: none; cursor: pointer; color: #3B82F6;" onclick="window.scrollTo(0,0);">
          <div style="background: white; padding: 4px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <img src="/src/assets/logo.svg" alt="COGNI AI Logo" style="height: 38px; width: auto;" onerror="this.src='/src/assets/logo.svg'" />
          </div>
          <span style="font-size: 1.5rem; font-weight: 800; font-family: 'Poppins', sans-serif;">COGNI AI <span style="font-weight: 500; opacity: 0.9; font-size: 1.1rem; color: #60A5FA;">ADMIN PANEL</span></span>
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <span style="background: rgba(255,255,255,0.2); backdrop-filter: blur(5px); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.3); color: white; font-weight: 600;">Verified Principal: ${n.name}</span>
          <button class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.8rem; border-radius: 50px; background: #EF4444; border: none; box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.3);" onclick="window.app.logout()">Sign Out</button>
        </div>
      </nav>

      <div class="container" style="position: relative; z-index: 10; padding-bottom: 5rem;">
        <header style="margin-top: 3rem; margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="background: #3B82F6; color: white; display: inline-block; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.2rem; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);">Administrative Control</div>
            <h1 style="font-size: 3.5rem; color: white; font-weight: 800; line-height: 1; letter-spacing: -0.02em;">Campus Activity <span style="color: #60A5FA;">Monitor</span></h1>
          </div>
          <div style="display: flex; gap: 1.2rem;">
             <button class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1rem; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4);" onclick="window.app.showCreatePostModal()">+ Construct New Event</button>
          </div>
        </header>

        <div class="grid grid-3" style="gap: 2rem; margin-bottom: 0;">
          <div class="dashboard-card" style="border-radius: 24px; padding: 2.5rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 800; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.05em;">Total Reach</div>
            <div style="font-size: 3.5rem; font-weight: 800; color: #1E293B;">${e.totalUsers||0}</div>
            <div style="font-size: 0.95rem; color: #64748B; margin-top: 0.5rem; font-weight: 500;">Registered Academic Profiles</div>
          </div>
          <div class="dashboard-card" style="border-radius: 24px; padding: 2.5rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 800; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.05em;">Live Events</div>
            <div style="font-size: 3.5rem; font-weight: 800; color: #10B981;">${e.totalEvents||0}</div>
            <div style="font-size: 0.95rem; color: #64748B; margin-top: 0.5rem; font-weight: 500;">Active Campus Opportunities</div>
          </div>
          <div class="dashboard-card" style="border-radius: 24px; padding: 2.5rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 800; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.05em;">Global Enrollments</div>
            <div style="font-size: 3.5rem; font-weight: 800; color: #F59E0B;">${e.totalRegistrations||0}</div>
            <div style="font-size: 0.95rem; color: #64748B; margin-top: 0.5rem; font-weight: 500;">Applications Processed</div>
          </div>
        </div>

        <!-- Monitoring Section: Expanded for "Big and Proper" look -->
        <section style="margin-top: 0;">
           <div style="background: white; border-radius: 32px; padding: 3rem; border: 1px solid var(--border); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.04);">
              <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; padding-bottom: 2rem; border-bottom: 2px solid #F8FAFC;">
                 <div>
                    <h2 style="font-size: 2.2rem; font-weight: 800; color: #1E293B; letter-spacing: -0.02em;">Live Event Traction</h2>
                    <p style="color: #64748B; font-size: 1.1rem; margin-top: 0.5rem;">Real-time mobilization across all specialized campus streams.</p>
                 </div>
                 <div style="display: flex; gap: 1rem; align-items: center;">
                   <button class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1rem; border-radius: 14px; background: #1E293B; border: none;" onclick="window.app.navigate('admin/analysis')">🔬 Open Analysis Center</button>
                   <span style="font-size: 0.85rem; background: #F0FDF4; color: #16A34A; padding: 0.6rem 1.2rem; border-radius: 50px; font-weight: 800; border: 1px solid #DCFCE7;">INTERNAL DATA SYNC ENABLED</span>
                 </div>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); gap: 2.5rem;">
                 ${(e.events||[]).length>0?(e.events||[]).map(t=>`
                   <div style="padding: 2rem; border-radius: 24px; border: 1px solid #F1F5F9; background: #FFFFFF; display: flex; justify-content: space-between; align-items: center; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);" 
                        onmouseover="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.05)';" 
                        onmouseout="this.style.borderColor='#F1F5F9'; this.style.transform='none'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.02)';">
                      <div style="display: flex; gap: 2rem; align-items: center;">
                         <div style="width: 100px; height: 100px; border-radius: 20px; overflow: hidden; background: white; border: 1px solid #E2E8F0; padding: 4px; background: #F8FAFC;">
                            <img src="${t.image||"https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop"}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
                         </div>
                         <div>
                            <div style="display: inline-block; background: #EFF6FF; color: #2563EB; padding: 0.3rem 0.8rem; border-radius: 6px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.8rem;">${t.type}</div>
                            <h4 style="font-weight: 800; color: #1E293B; font-size: 1.4rem; line-height: 1.2;">${t.title}</h4>
                            <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: #64748B; margin-top: 0.6rem;">
                               <span>📍 ${t.department==="ALL"?"Open Access":t.department}</span>
                            </div>
                         </div>
                      </div>
                      <div style="text-align: right; background: #F8FAFC; padding: 1.5rem; border-radius: 20px; border: 1px solid #F1F5F9; min-width: 140px;">
                         <div style="font-size: 2.2rem; font-weight: 800; color: var(--primary); line-height: 1;">${t.registrationCount||0}</div>
                         <div style="font-size: 0.75rem; font-weight: 800; color: #94A3B8; text-transform: uppercase; margin-top: 0.4rem; letter-spacing: 0.05em;">Confirmed</div>
                      </div>
                   </div>
                 `).join(""):`
                   <div style="grid-column: 1/-1; padding: 10rem 0; text-align: center;">
                      <div style="font-size: 4rem; margin-bottom: 2rem;">📡</div>
                      <h3 style="font-size: 1.5rem; font-weight: 800; color: #1E293B;">No Active Traction Data</h3>
                      <p style="color: #64748B;">Please publish an event to begin receiving real-time enrollment analytics.</p>
                   </div>
                 `}
              </div>
           </div>
        </section>
      </div>

      <!-- Create Post Modal -->
      <div id="createPostModal" class="modal-overlay">
        <div class="modal-content" style="border-radius: 32px; max-width: 850px; padding: 3rem;">
           <button class="modal-close" onclick="window.app.closeCreatePostModal()" style="top: 2rem; right: 2rem; font-size: 2rem;">&times;</button>
           <div style="margin-bottom: 2.5rem;">
              <h2 style="font-size: 2rem; font-weight: 800; color: #1E293B;">Construct New Space</h2>
              <p style="color: #64748B; margin-top: 0.5rem;">Initiate a new collaborative platform for the campus community.</p>
           </div>
           <form onsubmit="window.app.handleCreatePost(event)" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155; margin-bottom: 0.8rem;">Project Title</label>
                 <input type="text" name="title" required placeholder="e.g. InnovateX Hackathon" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;">
              </div>
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155; margin-bottom: 0.8rem;">Operational Briefing</label>
                 <textarea name="description" required rows="4" placeholder="Detail the objectives and expectations..." style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0; resize: none;"></textarea>
              </div>
              <div class="form-group">
                  <label style="font-weight: 700; color: #334155;">Type</label>
                  <select name="type" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;" onchange="this.nextElementSibling.style.display=this.value==='Other'?'block':'none'">
                      <option>Hackathon</option>
                      <option>Workshop</option>
                      <option>Session</option>
                      <option>Guest Lecture</option>
                      <option>Poster Presentation</option>
                      <option>Industry Visit</option>
                      <option>Other</option>
                  </select>
                  <input type="text" name="customType" placeholder="Enter custom event type" style="display:none; margin-top:0.5rem; width:100%; border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;">
              </div>
              <div class="form-group"><label style="font-weight: 700; color: #334155;">Audience</label><select name="audience" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;"><option>Student</option><option>Faculty</option><option>Both</option></select></div>
              <div class="form-group">
                  <label style="font-weight: 700; color: #334155;">Specialization</label>
                  <select name="department" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;">
                      <option>ALL</option>
                      <option>Computer</option>
                      <option>IT</option>
                      <option>ENTC</option>
                      <option>Electrical</option>
                      <option>Mechanical</option>
                      <option>AI & DS</option>
                      <option>FE</option>
                      <option>MCA</option>
                      <option>MBA</option>
                  </select>
              </div>
              <div class="form-group"><label style="font-weight: 700; color: #334155;">Release Deadline</label><input type="datetime-local" name="registrationDeadline" required style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;"></div>
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155;">Access Protocol</label>
                 <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
                    <select name="isPaid" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0; flex: 1;" onchange="this.nextElementSibling.style.display=this.value==='true'?'block':'none'"><option value="false">Open Access (Free)</option><option value="true">Premium Entry (Paid)</option></select>
                    <input type="number" name="price" style="display:none; border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0; flex: 1;" value="0" placeholder="₹ Amount">
                 </div>
              </div>
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155;">Visual Asset</label>
                 <input type="file" name="imageFile" accept="image/*" style="border: 2px dashed #E2E8F0; padding: 2rem; border-radius: 20px; text-align: center; width: 100%; cursor: pointer;">
              </div>
              <button type="submit" class="btn btn-primary" style="grid-column: 1/-1; padding: 1.5rem; font-size: 1.2rem; border-radius: 18px; font-weight: 800; background: #2563EB; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);">Authorize & Publish Globally</button>
           </form>
        </div>
      </div>
    </div>
  `,E=(n,e=[],t=[])=>{const i=n.name.split(" ").map(a=>a[0]).join(""),o=t.length,r=e.length>0?e.map(a=>{const s=new Date>new Date(a.registrationDeadline),c=a.image||"https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop",p=t.some(u=>u.event&&u.event._id===a._id);return`
      <div class="student-event-card" onclick="window.app.navigate('event/${a._id}')">
        <div class="card-image-wrapper">
          <img src="${c}" alt="${a.title}">
          <div class="status-badge ${s?"closed":"open"}">${s?"Expired":"Live"}</div>
          ${p?'<div class="registered-badge">✓ Registered</div>':""}
          <div class="category-tag">${a.type}</div>
        </div>
        
        <div class="card-content">
          <h4>${a.title}</h4>
          <div class="card-meta">
            <span>🏛️ ${a.department==="ALL"?"Open for All":a.department}</span>
            <span>📅 ${new Date(a.registrationDeadline).toLocaleDateString()}</span>
            <span style="font-weight: 800; color: ${a.isPaid?"#E11D48":"#059669"};">
               ${a.isPaid?`₹${a.price}`:"FREE"}
            </span>
          </div>
          <p>${a.description}</p>
          
          <div class="card-footer">
            <button class="action-btn ${s?"secondary":"primary"}">
                ${s?"View Details":p?"Manage Registration":"Register Now"}
            </button>
          </div>
        </div>
      </div>
    `}).join(""):'<div style="grid-column: 1/-1; padding: 4rem; text-align: center; color: var(--text-muted);">No active faculty events found.</div>',d=t.length>0?t.map(a=>`
      <div class="activity-item" style="flex-direction: column; align-items: flex-start; gap: 0.5rem; padding: 1.2rem;">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
           <div style="font-weight: 800; color: #1E293B;">${a.event?a.event.title:"Deleted Event"}</div>
           <div class="activity-status ${a.isConfirmed?"status-active":"status-pending"}" style="margin: 0;">
              ${a.isConfirmed?"Confirmed":"Pending"}
           </div>
        </div>
        
        <div style="font-size: 0.8rem; color: #94A3B8;">Registered on ${new Date(a.registeredAt).toLocaleDateString()}</div>
      </div>
    `).join(""):'<p style="text-align: center; color: var(--text-muted); padding: 1rem;">No enrollments yet.</p>';return`
    <div class="student-dashboard" style="background: #F8FAFC; min-height: 100vh; position: relative;">
      <!-- Using same gradient background as student for consistency -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 400px; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); z-index: 0;"></div>

      <nav class="student-nav" style="position: relative; z-index: 10; padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: white;">
        <div class="logo" style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 0.8rem; color: white;">
          <div style="width: 32px; height: 32px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--accent);">🎓</div>
          COGNI AI <span style="font-weight: 400; font-size: 1rem; opacity: 0.8; margin-left: 0.5rem;">| Faculty Portal</span>
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <div class="profile-pill" onclick="window.app.showEditProfileModal()">
             <div class="avatar-small" style="color: var(--accent);">${i}</div>
             <span class="user-name-white">${n.name}</span>
          </div>
          <button class="logout-btn-minimal" onclick="window.app.logout()">Logout</button>
        </div>
      </nav>

      <div class="container" style="position: relative; z-index: 10; padding-bottom: 5rem;">
        <header class="student-hero">
           <div class="hero-text">
              <div class="greeting-tag">FACULTY DASHBOARD</div>
              <h1>Empower. Lead. Mentor.</h1>
              <p>Your hub for academic events, workshops, and institutional programs.</p>
           </div>
           <div class="hero-stats-grid">
              <div class="stat-card">
                 <div class="stat-icon" style="color: var(--accent); background: #EEF2FF;">📅</div>
                 <div class="stat-value">${e.length}</div>
                 <div class="stat-label">Available Events</div>
              </div>
              <div class="stat-card">
                 <div class="stat-icon" style="color: var(--primary); background: #EFF6FF;">📝</div>
                 <div class="stat-value">${o}</div>
                 <div class="stat-label">My Registrations</div>
              </div>
              <div class="stat-card" style="opacity: 0.7; cursor: not-allowed;" title="Coming Soon">
                 <div class="stat-icon">📊</div>
                 <div class="stat-value">-</div>
                 <div class="stat-label">Publications</div>
              </div>
           </div>
        </header>

        <div style="display: grid; grid-template-columns: 1fr 350px; gap: 3rem; margin-top: 4rem;">
          <section>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
               <h2 style="font-size: 1.8rem; color: #1E293B;">Event Gallery</h2>
               <!-- Filter functionality can be added later if needed -->
            </div>
            <div class="student-events-grid">
               ${r}
            </div>
          </section>

          <aside style="display: flex; flex-direction: column; gap: 2rem;">
            <!-- Profile Summary / Quick Actions -->
            <div class="glass-section" style="text-align: center;">
                <div style="width: 80px; height: 80px; background: var(--accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; margin: 0 auto 1.5rem;">${i}</div>
                <h3 style="margin-bottom: 0.25rem;">${n.name}</h3>
                <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem;">${n.role.toUpperCase()} | ${n.dept||"Department"}</p>
                <button class="btn btn-outline" style="width: 100%; font-size: 0.9rem;" onclick="window.app.showEditProfileModal()">Edit Profile</button>
            </div>

            <!-- Enrollment List -->
            <div class="glass-section">
               <h3 class="section-title-small">My Enrollments</h3>
               <div class="activity-feed">
                  ${d}
               </div>
            </div>
          </aside>
        </div>
      </div>

       <!-- Edit Profile Modal -->
      <div id="editProfileModal" class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close" onclick="window.app.closeEditProfileModal()">&times;</button>
          <div class="modal-header">
             <h2>Edit Profile</h2>
          </div>
          <div class="modal-body">
            <form onsubmit="window.app.handleEditProfile(event)" style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value="${n.name}" required>
              </div>
              
              <div class="form-group">
                  <label>Department</label>
                  <select name="dept" required>
                  <option value="${n.dept}" selected>${n.dept||"Select Department"}</option>
                  <option value="Computer">Computer</option>
                  <option value="IT">IT</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="AI & DS">AI & DS</option>
                  </select>
              </div>

              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" name="number" value="${n.number||""}" placeholder="Contact Number">
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1rem;">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `},F=(n,e=[],t=[],i={},o=[])=>{const r=n.name.split(" ").map(l=>l[0]).join(""),d=t.length,a=n.aiPoints||0,s=Math.min(a/100*100,100),c=a,p=e.length>0?e.map(l=>{const m=new Date>new Date(l.registrationDeadline),g=l.image||"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",v=t.some(h=>h.event&&h.event._id===l._id);return`
      <div class="student-event-card" onclick="window.app.navigate('event/${l._id}')">
        <div class="card-image-wrapper">
          <img src="${g}" alt="${l.title}">
          <div class="status-badge ${m?"closed":"open"}">${m?"Expired":"Live"}</div>
          ${v?'<div class="registered-badge">✓ Enrolled</div>':""}
          <div class="category-tag">${l.type}</div>
        </div>
        
        <div class="card-content">
          <h4>${l.title}</h4>
          <div class="card-meta">
            <span>🏛️ ${l.department==="ALL"?"Open for All":l.department}</span>
            <span>📅 ${new Date(l.registrationDeadline).toLocaleDateString()}</span>
            <span style="font-weight: 800; color: ${l.isPaid?"#E11D48":"#059669"};">
               ${l.isPaid?`₹${l.price}`:"FREE"}
            </span>
          </div>
          <p>${l.description}</p>
          
          <div class="card-footer">
            <button class="action-btn ${m?"secondary":"primary"}">
                ${m?"View Details":v?"Manage Entry":"Get Started"}
            </button>
          </div>
        </div>
      </div>
    `}).join(""):'<div style="grid-column: 1/-1; padding: 4rem; text-align: center;">Scanning...</div>',u=o.length>0?o.map(l=>`
    <div style="background: white; padding: 1rem; border-radius: 12px; border: 1px solid #BFDBFE; margin-bottom: 0.8rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
       <div style="font-size: 0.8rem; color: #1E40AF; font-weight: 800; margin-bottom: 0.3rem;">TEAM REQUEST</div>
       <div style="font-weight: 700; color: #1E293B; margin-bottom: 0.2rem;">${l.teamName}</div>
       <div style="font-size: 0.85rem; color: #64748B; margin-bottom: 0.8rem;">Invite from ${l.fromUser?.name} for ${l.event?.title}</div>
       <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-primary" style="flex: 1; padding: 0.5rem; font-size: 0.8rem;" onclick="window.app.navigate('event/${l.event?._id}?invId=${l._id}')">Accept & Join</button>
          <button class="btn btn-outline" style="flex: 1; padding: 0.5rem; font-size: 0.8rem;" onclick="window.app.respondToInvitation('${l._id}', 'rejected')">Decline</button>
       </div>
    </div>
  `).join(""):'<p style="color: #64748B; font-size: 0.9rem; text-align: center; padding: 1rem;">No pending formation requests</p>',y=t.length>0?t.map(l=>{const m=l.teamLeader===n.id,g=l.registrationType==="Team";return g&&l.isConfirmed,`
      <div class="activity-item" style="flex-direction: column; align-items: flex-start; gap: 0.5rem; padding: 1.2rem;">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
           <div style="font-weight: 800; color: #1E293B;">${l.event?l.event.title:"Deleted Event"}</div>
           <div class="activity-status ${l.isConfirmed?"status-active":"status-pending"}" style="margin: 0;">
              ${l.isConfirmed?"Confirmed":"Awaiting"}
           </div>
        </div>
        
        ${g?`
          <div style="background: #F8FAFC; width: 100%; padding: 0.8rem; border-radius: 8px; border: 1px solid var(--border); margin-top: 0.5rem;">
             <div style="font-size: 0.75rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Team ${l.teamName}</div>
             <div style="display: flex; gap: 0.3rem; margin-top: 0.4rem;">
                ${l.teamMembers?.length||0} members joined
             </div>
             ${m&&!l.isConfirmed?`
               <button class="btn btn-primary" style="width: 100%; margin-top: 0.8rem; padding: 0.5rem; font-size: 0.8rem;" onclick="window.app.confirmTeam('${l._id}')">Confirm Team Completion</button>
             `:""}
          </div>
        `:""}
        
        <div style="font-size: 0.8rem; color: #94A3B8;">Registered on ${new Date(l.registeredAt).toLocaleDateString()}</div>
      </div>
    `}).join(""):'<p style="text-align: center; color: var(--text-muted); padding: 1rem;">No enrollments</p>';return`
    <div class="student-dashboard" style="background: #F8FAFC; min-height: 100vh; position: relative;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 400px; background: linear-gradient(135deg, #2563EB 0%, #4F46E5 100%); clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); z-index: 0;"></div>

      <nav class="student-nav" style="position: relative; z-index: 10; padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: white;">
        <div class="logo" style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 0.8rem;">
          <div style="width: 32px; height: 32px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--primary);">🤖</div>
          COGNI AI
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <div class="profile-pill" onclick="window.app.showEditProfileModal()">
             <div class="avatar-small">${r}</div>
             <span class="user-name-white">${n.name}</span>
          </div>
          <button class="logout-btn-minimal" onclick="window.app.logout()">Logout</button>
        </div>
      </nav>

      <div class="container" style="position: relative; z-index: 10; padding-bottom: 5rem;">
        <header class="student-hero">
           <div class="hero-text">
              <div class="greeting-tag">STUDENT DASHBOARD</div>
              <h1>Innovate. Build. Learn.</h1>
              <p>The centralized hub for all your academic events and team collaborations.</p>
           </div>
           <div class="hero-stats-grid">
              <div class="stat-card">
                 <div class="stat-icon">🏆</div>
                 <div class="stat-value">${c}</div>
                 <div class="stat-label">AI Points</div>
                 <div class="stat-progress-bar"><div style="width: ${s}%"></div></div>
              </div>
              <div class="stat-card">
                 <div class="stat-icon">⚡</div>
                 <div class="stat-value">${d}</div>
                 <div class="stat-label">Registrations</div>
              </div>
           </div>
        </header>

        <div style="display: grid; grid-template-columns: 1fr 380px; gap: 3rem; margin-top: 4rem;">
          <section>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
               <h2 style="font-size: 1.8rem; color: #1E293B;">Discovery Feed</h2>
              <select class="sort-select-premium" onchange="window.app.handleUnifiedFilter(this.value)">
                  <option value="all">Sort: All Events</option>
                  <optgroup label="Payment">
                     <option value="free" ${i.isPaid===!1?"selected":""}>Free</option>
                     <option value="paid" ${i.isPaid===!0?"selected":""}>Paid</option>
                  </optgroup>
                  <optgroup label="Departments">
                     <option value="dept:Computer" ${i.department==="Computer"?"selected":""}>Computer</option>
                     <option value="dept:IT" ${i.department==="IT"?"selected":""}>IT</option>
                     <option value="dept:ENTC" ${i.department==="ENTC"?"selected":""}>ENTC</option>
                     <option value="dept:Electrical" ${i.department==="Electrical"?"selected":""}>Electrical</option>
                     <option value="dept:Mechanical" ${i.department==="Mechanical"?"selected":""}>Mechanical</option>
                     <option value="dept:AI & DS" ${i.department==="AI & DS"?"selected":""}>AI & DS</option>
                     <option value="dept:FE" ${i.department==="FE"?"selected":""}>FE</option>
                     <option value="dept:MCA" ${i.department==="MCA"?"selected":""}>MCA</option>
                     <option value="dept:MBA" ${i.department==="MBA"?"selected":""}>MBA</option>
                  </optgroup>
               </select>
            </div>
            <div id="student-events-grid" class="student-events-grid">
               ${p}
            </div>
          </section>

          <aside style="display: flex; flex-direction: column; gap: 2rem;">
            <!-- Formation Hub -->
            <div class="glass-section" style="background: #EFF6FF; border-color: #BFDBFE;">
               <h3 class="section-title-small" style="color: #1E40AF;">Team Formation Hub</h3>
               <p style="font-size: 0.85rem; color: #1E40AF; margin-bottom: 1.5rem;">Accept team invites from fellow students here.</p>
               ${u}
            </div>

            <!-- Enrollment List -->
            <div class="glass-section">
               <h3 class="section-title-small">My Registration Log</h3>
               <div class="activity-feed">
                  ${y}
               </div>
            </div>
          </aside>
        </div>
      </div>

      <!-- Edit Profile Modal -->
      <div id="editProfileModal" class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close" onclick="window.app.closeEditProfileModal()">&times;</button>
          <div class="modal-header">
            <h2>Update Profile</h2>
          </div>
          <div class="modal-body">
            <form onsubmit="window.app.handleEditProfile(event)" id="editProfileForm">
               <div class="form-group"><label>Name</label><input type="text" name="name" value="${n.name}" required></div>
               <div class="form-group"><label>Year</label><select name="year"><option value="FE">FE</option><option value="SE">SE</option><option value="TE">TE</option><option value="BE">BE</option></select></div>
               <div class="form-group"><label>RollNo</label><input type="text" name="rollno" value="${n.rollno||""}"></div>
               <button type="submit" class="btn btn-primary" style="width:100%">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `},A=()=>`
    <div class="auth-page fade-in">
      <div class="auth-wrapper">
        <div class="auth-image signup-image">
          <img src="/src/assets/logo.svg" alt="COGNI AI Logo" style="width: 100%; max-width: 450px; height: auto; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.05));" />
        </div>
        
        <div class="auth-content">
          <div class="auth-header">
            <h1>Create Account</h1>
            <p>Select your role to get started</p>
          </div>

          <div class="role-selector">
            <button class="role-tab active" onclick="window.app.switchSignupRole('student')">Student</button>
            <button class="role-tab" onclick="window.app.switchSignupRole('faculty')">Faculty</button>
            <button class="role-tab" onclick="window.app.switchSignupRole('admin')">Admin</button>
          </div>

          <!-- Student Signup Form -->
          <form id="studentSignupForm" class="signup-form active" onsubmit="window.app.handleSignup(event, 'student')">
            <div class="form-grid">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required>
              </div>
              <div class="form-group">
                <label>Year</label>
                <select name="year" required>
                  <option value="">Select Year</option>
                  <option value="FE">First Year (FE)</option>
                  <option value="SE">Second Year (SE)</option>
                  <option value="TE">Third Year (TE)</option>
                  <option value="BE">Fourth Year (BE)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Department</label>
                <select name="dept" required>
                  <option value="">Select Department</option>
                  <option value="Computer">Computer</option>
                  <option value="IT">IT</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="FE">FE (First Year)</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                  <option value="AI & DS">AI & DS</option>
                </select>
              </div>
              <div class="form-group">
                <label>Roll No</label>
                <input type="text" name="rollno" placeholder="21CO042" required>
              </div>
              <div class="form-group">
                <label>Institutional Email</label>
                <input type="email" name="email" placeholder="john.doe@college.edu" required>
              </div>
              <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="number" placeholder="+91 9876543210" required>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="••••••••" required>
              </div>
              <div class="form-group">
                <label>Retype Password</label>
                <input type="password" name="retype" placeholder="••••••••" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary auth-btn">Create Student Account</button>
          </form>

          <!-- Faculty Signup Form -->
          <form id="facultySignupForm" class="signup-form" onsubmit="window.app.handleSignup(event, 'faculty')" style="display: none;">
            <div class="form-grid">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Dr. Jane Smith" required>
              </div>
              <div class="form-group">
                <label>Department</label>
                <select name="dept" required>
                  <option value="">Select Department</option>
                  <option value="Computer">Computer</option>
                  <option value="IT">IT</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="FE">FE (First Year)</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                  <option value="AI & DS">AI & DS</option>
                </select>
              </div>
              <div class="form-group">
                <label>College Email ID</label>
                <input type="email" name="email" placeholder="jane.smith@faculty.college.edu" required>
              </div>
              <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="number" placeholder="+91 9876543210" required>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="••••••••" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary auth-btn">Create Faculty Account</button>
          </form>

          <!-- Admin Signup Form -->
          <form id="adminSignupForm" class="signup-form" onsubmit="window.app.handleSignup(event, 'admin')" style="display: none;">
            <div class="form-grid">
              <div class="form-group">
                <label>Admin Name</label>
                <input type="text" name="name" placeholder="System Administrator" required>
              </div>
              <div class="form-group">
                <label>Admin Email Address</label>
                <input type="email" name="email" placeholder="admin@college.edu" required>
              </div>
              <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="number" placeholder="+91 9876543210" required>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="••••••••" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary auth-btn">Create Admin Account</button>
          </form>

          <div class="auth-footer">
            <p>Already have an account? <a href="#" onclick="window.app.navigate('login')">Login instead</a></p>
          </div>
        </div>
      </div>
    </div>
  `,k=(n,e,t=null)=>{if(!n)return'<div class="container" style="padding: 4rem; text-align: center;">Loading event details...</div>';const i=new Date>new Date(n.registrationDeadline),o=new Date(n.registrationDeadline).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),r=t!==null;return`
    <div class="student-dashboard" style="background: #F8FAFC; min-height: 100vh;">
      <nav class="student-nav" style="background: white; border-bottom: 1px solid var(--border); padding: 1rem 5%; display: flex; justify-content: space-between; align-items: center;">
        <div class="logo" style="cursor: pointer; color: var(--primary); font-weight: 800; font-size: 1.2rem;" onclick="window.app.navigate(window.app.user.role === 'student' ? 'student-dashboard' : 'dashboard')">← BACK TO FEED</div>
        <div class="nav-links">
          <button class="logout-btn-minimal" style="color: var(--text-muted);" onclick="window.app.logout()">Sign Out</button>
        </div>
      </nav>

      <div class="container" style="padding: 2rem 5%; display: flex; gap: 3rem; align-items: flex-start;">
        <!-- Left Side: Event Details -->
        <div style="flex: 1.2; position: sticky; top: 2rem;">
           <div class="dashboard-card" style="padding: 0; overflow: hidden; border-radius: 24px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);">
              <img src="${n.image||"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"}" style="width: 100%; height: 400px; object-fit: cover;">
              <div style="padding: 2.5rem;">
                 <div style="display: flex; gap: 0.8rem; margin-bottom: 1.5rem;">
                    <span style="background: var(--highlight); color: var(--primary); padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">${n.type}</span>
                    <span style="background: #F0FDF4; color: #16A34A; padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">${n.isPaid?`Paid Event (₹${n.price})`:"Free Entry"}</span>
                 </div>
                 <h1 style="font-size: 2.8rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800; color: #1E293B;">${n.title}</h1>
                 ${t?`<div style="background: #E0F2FE; color: #0369A1; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid #BAE6FD; font-weight: 700;">🤝 Joining team: ${t.teamName}</div>`:""}
                 <p style="font-size: 1.1rem; color: #64748B; line-height: 1.8; margin-bottom: 2rem; white-space: pre-line;">${n.description}</p>
                 
                 <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; padding: 2rem; background: #F8FAFC; border-radius: 20px; border: 1px solid var(--border);">
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Deadline</div>
                        <div style="font-weight: 700; color: #1E293B;">${o}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Audience</div>
                        <div style="font-weight: 700; color: #1E293B;">${n.audience}</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <!-- Right Side: Registration Form -->
        <div style="flex: 0.8; background: white; border-radius: 24px; padding: 2.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid var(--border);">
           <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: #1E293B;">${r?"Complete Team Enrollment":"Secure Your Spot"}</h2>
           <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Help your team succeed by providing your details for ${n.title}</p>
           
           <form onsubmit="window.app.handleComprehensiveRegistration(event, '${n._id}')" id="comprehensiveRegistrationForm">
              <input type="hidden" name="invitationId" value="${t?._id||""}">
              
              <div class="form-group" style="margin-bottom: 1.5rem;">
                 <label>Full Name</label>
                 <input type="text" value="${e.name}" disabled style="background: #f1f5f9; cursor: not-allowed; border-radius: 12px; padding: 0.8rem;">
              </div>
              
              <div class="grid grid-2" style="gap: 1rem; margin-bottom: 1.5rem;">
                 ${e.role==="faculty"?`
                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label>Department</label>
                        <select name="dept" required style="border-radius: 12px; padding: 0.8rem;">
                           <option value="${e.dept}" selected>${e.dept}</option>
                           <option value="Computer">Computer</option>
                           <option value="IT">IT</option>
                           <option value="ENTC">ENTC</option>
                           <option value="Mechanical">Mechanical</option>
                           <option value="Electrical">Electrical</option>
                           <option value="AI & DS">AI & DS</option>
                        </select>
                    </div>
                 `:`
                    <div class="form-group">
                        <label>Roll Number</label>
                        <input type="text" name="rollno" value="${e.rollno||""}" required placeholder="e.g. 21CO042" style="border-radius: 12px; padding: 0.8rem;">
                    </div>
                    <div class="form-group">
                        <label>Academic Class</label>
                        <select name="classYear" required style="border-radius: 12px; padding: 0.8rem;">
                           <option value="SE" ${e.year==="SE"?"selected":""}>SE (Second Year)</option>
                           <option value="TE" ${e.year==="TE"?"selected":""}>TE (Third Year)</option>
                           <option value="BE" ${e.year==="BE"?"selected":""}>BE (Fourth Year)</option>
                        </select>
                    </div>
                 `}
              </div>

              ${e.role!=="faculty"?`
              <div class="form-group" style="margin-bottom: 1.5rem; ${r?"display: none;":""}">
                 <label style="margin-bottom: 0.5rem;">Participation Type</label>
                 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <label class="radio-card" style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; cursor: pointer; background: #F8FAFC; padding: 1rem; border-radius: 12px; border: 1px solid var(--border); transition: all 0.2s;">
                       <input type="radio" name="registrationType" value="Individual" ${r?"":"checked"} onchange="document.getElementById('teamFields').style.display='none'" style="width: auto; margin: 0;"> 
                       <span style="font-weight: 600;">Individual</span>
                    </label>
                    <label class="radio-card" style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; cursor: pointer; background: #F8FAFC; padding: 1rem; border-radius: 12px; border: 1px solid var(--border); transition: all 0.2s;">
                       <input type="radio" name="registrationType" value="Team" ${r?"checked":""} onchange="document.getElementById('teamFields').style.display='block'" style="width: auto; margin: 0;"> 
                       <span style="font-weight: 600;">Team / Group</span>
                    </label>
                 </div>
              </div>

              ${r?'<input type="hidden" name="registrationType" value="Team">':""}

              <div id="teamFields" style="display: ${r?"block":"none"}; background: #EFF6FF; padding: 1.5rem; border-radius: 12px; border: 1px solid #BFDBFE; margin-bottom: 1.5rem;">
                 <div class="form-group" style="margin-bottom: 1rem;">
                    <label style="color: #1E40AF;">Team Name</label>
                    <input type="text" name="teamName" value="${t?.teamName||""}" ${r?"readonly":""} placeholder="e.g. Cyber Ninjas" style="border-radius: 12px; padding: 0.8rem; border-color: #93C5FD; ${r?"background: #DBEAFE; cursor: not-allowed;":""}">
                 </div>
                 
                 <div class="form-group" style="${r?"display: none;":""}">
                    <label style="color: #1E40AF;">Add Members (by College Email)</label>
                    <div style="display: flex; gap: 0.5rem;">
                       <input type="email" id="memberEmailInput" placeholder="teammate@college.edu" style="flex: 1; border-radius: 12px; padding: 0.8rem; border-color: #93C5FD;">
                       <button type="button" class="btn btn-primary" onclick="window.app.addTeamMemberInvitation('${n._id}')" style="padding: 0.8rem 1.2rem;">Add</button>
                    </div>
                    <div id="tempMemberList" style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem;"></div>
                    <input type="hidden" name="teamMembers" id="teamMembersData" value="[]">
                 </div>
                 ${r?'<p style="font-size: 0.8rem; color: #1E40AF; font-weight: 600;">✓ You are joining an existing squad</p>':""}
              </div>
              `:'<input type="hidden" name="registrationType" value="Individual">'}

              <div style="margin-bottom: 1.5rem;">
                 <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.85rem; color: var(--text-muted);">
                    <input type="checkbox" required checked>
                    I accept the privacy policy and event terms.
                 </label>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1.1rem; justify-content: center; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);" ${i?"disabled":""}>
                 ${r?"Accept Invite & Join Team":i?"Registration Closed":"Confirm & Register"}
              </button>
           </form>
        </div>
      </div>
    </div>
  `},C=(n,e=[],t=null)=>{const i=new Date,o=e.filter(s=>new Date(s.registrationDeadline)>=i),r=e.filter(s=>new Date(s.registrationDeadline)<i),d=s=>{const c=Object.entries(s);if(c.length===0)return'<div style="text-align: center; color: #64748B;">No department data</div>';let p=0;const u=c.reduce((l,[m,g])=>l+g,0);return`
      <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
        <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(${c.map(([l,m],g)=>{const v=p/u*100;p+=m;const h=p/u*100,f=["#2563EB","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#06B6D4"];return`${f[g%f.length]} ${v}% ${h}%`}).join(", ")}); box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative;">
          <div style="position: absolute; top: 20%; left: 20%; right: 20%; bottom: 20%; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
             <span style="font-size: 1.5rem; font-weight: 800; color: #1E293B;">${u}</span>
             <span style="font-size: 0.6rem; color: #64748B; font-weight: 700;">TOTAL</span>
          </div>
        </div>
        <div style="display: grid; gap: 0.5rem;">
           ${c.map(([l,m],g)=>{const v=["#2563EB","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#06B6D4"];return`
               <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem;">
                  <div style="width: 10px; height: 10px; border-radius: 2px; background: ${v[g%v.length]}"></div>
                  <span style="font-weight: 700; color: #1E293B;">${l}:</span>
                  <span style="color: #64748B;">${m}</span>
               </div>
             `}).join("")}
        </div>
      </div>
    `},a=(s,c,p)=>`
    <div class="dashboard-reveal" style="background: white; border-radius: 16px; border: 1px solid var(--border); overflow: hidden; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" 
         onclick="window.app.fetchEventAnalysis('${s._id}')">
       <div style="height: 140px; position: relative;">
          <img src="${s.image||"https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop"}" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; top: 0.8rem; right: 0.8rem; background: ${p}; color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.65rem; font-weight: 800; text-transform: uppercase;">${c}</div>
       </div>
       <div style="padding: 1.2rem;">
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #1E293B; margin-bottom: 0.4rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.title}</h3>
          <div style="font-size: 0.8rem; color: #64748B;">${s.type} • ${s.department}</div>
          <div style="margin-top: 1rem; color: var(--primary); font-weight: 800; font-size: 0.85rem;">View Analysis →</div>
       </div>
    </div>
  `;return`
    <div class="dashboard-container" style="background: #F8FAFC; min-height: 100vh;">
      <nav style="background: white; border-bottom: 1px solid var(--border); padding: 1rem 5%; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 100;">
        <div class="logo" style="cursor: pointer; color: var(--primary); font-weight: 800; display: flex; align-items: center; gap: 0.8rem;" onclick="window.app.navigate('dashboard')">
           <div style="width: 32px; height: 32px; background: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">←</div>
           <span>COGNI INTELLIGENCE</span>
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
           <span style="font-size: 0.85rem; color: #64748B; font-weight: 700; background: #F1F5F9; padding: 0.4rem 1rem; border-radius: 50px;">System Administrator: ${n.name}</span>
           <button class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.75rem; border-radius: 50px; background: #EF4444; border: none;" onclick="window.app.logout()">Sign Out</button>
        </div>
      </nav>

      <div class="container" style="padding: 3rem 5%;">
        
        ${t?`
           <!-- Deep Dive View -->
           <button class="btn btn-outline" style="margin-bottom: 2.5rem; background: white;" onclick="window.app.renderAnalysisScreen()">← Back to Selection</button>
           
           <div style="background: white; border-radius: 24px; padding: 2.5rem; border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem; border-bottom: 1px solid #F1F5F9; padding-bottom: 2rem;">
                 <div>
                    <h1 style="font-size: 2.5rem; font-weight: 800; color: #1E293B; line-height: 1.2;">${t.title}</h1>
                    <div style="margin-top: 0.5rem; color: #64748B; font-weight: 600;">Overall Data & Registration Monitoring</div>
                 </div>
                 <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                    <div style="display: flex; gap: 0.5rem;">
                       <button class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.8rem; border-radius: 8px;" onclick="window.app.openEditPostModal('${t.eventId}')">
                          ✏️ Edit
                       </button>
                       <button class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.8rem; border-radius: 8px; border-color: #EF4444; color: #EF4444;" onclick="window.app.deleteEvent('${t.eventId}')">
                          🗑️ Delete
                       </button>
                    </div>
                    <div style="width: 1px; height: 30px; background: #E2E8F0;"></div>
                    <button class="btn btn-outline" style="padding: 0.8rem 1.5rem; border-radius: 12px; border: 1px solid #10B981; color: #10B981; font-weight: 700;" onclick="window.app.openCertificateModal('${t.eventId}')">
                       🎓 Release Certificates
                    </button>
                    <button class="btn btn-primary" style="padding: 0.8rem 1.5rem; border-radius: 12px;" onclick="window.location.href='https://cogniai2.onrender.com/api/admin/export/registrations?eventId=${t.eventId}'">
                       📥 Download CSV Report
                    </button>
                 </div>
              </div>

              <!-- Top Row: Stats & Pie Chart -->
              <div style="display: grid; grid-template-columns: 1fr 400px; gap: 3rem; margin-bottom: 4rem;">
                 <div>
                    <h3 style="font-size: 1.1rem; font-weight: 800; color: #1E293B; margin-bottom: 1.5rem;">Department Breakdown</h3>
                    <div style="background: #F8FAFC; padding: 2rem; border-radius: 20px; border: 1px solid #E2E8F0;">
                       ${d(t.deptStats||{})}
                    </div>
                 </div>
                 <div style="display: grid; gap: 1.5rem;">
                    <div style="background: #F0F9FF; padding: 1.5rem; border-radius: 16px; border: 1px solid #BAE6FD;">
                       <div style="font-size: 0.75rem; color: #0369A1; font-weight: 800; text-transform: uppercase;">Total Registrations</div>
                       <div style="font-size: 2.2rem; font-weight: 800; color: #0C4A6E; margin-top: 0.4rem;">${t.totalRegistrations}</div>
                    </div>
                    <div style="background: #F0FDF4; padding: 1.5rem; border-radius: 16px; border: 1px solid #BBF7D0;">
                       <div style="font-size: 0.75rem; color: #166534; font-weight: 800; text-transform: uppercase;">Confirmed Entries</div>
                       <div style="font-size: 2.2rem; font-weight: 800; color: #064E3B; margin-top: 0.4rem;">${t.confirmedCount}</div>
                    </div>
                 </div>
              </div>

              <!-- Registration List (The requested "who was register" part) -->
              <div style="margin-top: 4rem;">
                 <h3 style="font-size: 1.1rem; font-weight: 800; color: #1E293B; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                    Detailed Registration List
                    <span style="font-size: 0.8rem; font-weight: 600; color: #64748B;">Showing ${t.registrations?.length||0} participants</span>
                 </h3>
                 <div style="overflow-x: auto; background: #F8FAFC; border-radius: 16px; border: 1px solid #E2E8F0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                       <thead>
                          <tr style="background: #F1F5F9; text-align: left;">
                             <th style="padding: 1rem; color: #475569; font-weight: 800;">Student Name</th>
                             <th style="padding: 1rem; color: #475569; font-weight: 800;">Department</th>
                             <th style="padding: 1rem; color: #475569; font-weight: 800;">Year</th>
                             <th style="padding: 1rem; color: #475569; font-weight: 800;">Account</th>
                             <th style="padding: 1rem; color: #475569; font-weight: 800;">Type</th>
                             <th style="padding: 1rem; color: #475569; font-weight: 800;">Status</th>
                          </tr>
                       </thead>
                       <tbody>
                          ${(t.registrations||[]).length>0?t.registrations.map(s=>`
                             <tr style="border-bottom: 1px solid #E2E8F0;">
                                <td style="padding: 1rem; font-weight: 700; color: #1E293B;">${s.studentName}</td>
                                <td style="padding: 1rem; color: #64748B;">${s.dept}</td>
                                <td style="padding: 1rem; color: #64748B;">${s.year}</td>
                                <td style="padding: 1rem;">
                                   <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.7rem; font-weight: 800; color: ${s.isVerified?"#10B981":"#94A3B8"};">
                                      <span style="width: 6px; height: 6px; border-radius: 50%; background: currentColor;"></span>
                                      ${s.isVerified?"VERIFIED":"UNVERIFIED"}
                                   </div>
                                </td>
                                <td style="padding: 1rem; color: #64748B;">${s.type} ${s.teamName?`(${s.teamName})`:""}</td>
                                <td style="padding: 1rem;">
                                   <span style="padding: 0.2rem 0.6rem; border-radius: 50px; font-size: 0.7rem; font-weight: 800; background: ${s.isConfirmed?"#DCFCE7":"#FEF3C7"}; color: ${s.isConfirmed?"#166534":"#92400E"};">
                                      ${s.isConfirmed?"CONFIRMED":"PENDING"}
                                   </span>
                                </td>
                             </tr>
                          `).join(""):'<tr><td colspan="6" style="padding: 3rem; text-align: center; color: #64748B;">No registrations found for this event.</td></tr>'}
                       </tbody>
                    </table>
                 </div>
              </div>

           </div>
        `:`
           <!-- Selection Screen (Available & Expired) -->
           <section style="margin-bottom: 4rem;">
              <h2 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem; font-weight: 800; color: #1E293B;">
                 <span style="color: #10B981;">●</span> Live & Upcoming Events
              </h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
                 ${o.length>0?o.map(s=>a(s,"Live","#10B981")).join(""):'<p style="color: #64748B;">No live events found.</p>'}
              </div>
           </section>

           <section style="margin-top: 5rem;">
              <h2 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem; font-weight: 800; color: #1E293B;">
                 <span style="color: #EF4444;">●</span> Expired / Past Events
              </h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
                 ${r.length>0?r.map(s=>a(s,"Expired","#64748B")).join(""):'<p style="color: #64748B;">No past events found.</p>'}
              </div>
           </section>
        `}
      </div>
      <div id="certificateModal" class="modal-overlay">
        <div class="modal-content">
           <button class="modal-close" onclick="window.app.closeCertificateModal()">&times;</button>
           <h2 style="margin-bottom: 1rem; color: #1E293B;">Release Certificates</h2>
           <p style="color: #64748B; margin-bottom: 2rem;">Upload the certificate template. The system will automatically overlay student names and send emails to all confirmed participants.</p>
           
           <form onsubmit="window.app.handleReleaseCertificates(event)">
              <input type="hidden" name="eventId" id="certEventId">
              <div class="form-group">
                 <label>Certificate Template (Image)</label>
                 <input type="file" name="template" accept="image/*" required style="border: 2px dashed #E2E8F0; padding: 2rem; border-radius: 12px; width: 100%; text-align: center;">
                 <p style="font-size: 0.8rem; color: #94A3B8; margin-top: 0.5rem;">Recommended Size: 2000x1400px (Landscape)</p>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem; margin-top: 2rem;">🚀 Generate & Send Certificates</button>
           </form>
        </div>
      </div>

      <!-- Edit Event Modal -->
       <div id="editPostModal" class="modal-overlay">
        <div class="modal-content" style="border-radius: 32px; max-width: 850px; padding: 3rem;">
           <button class="modal-close" onclick="window.app.closeEditPostModal()" style="top: 2rem; right: 2rem; font-size: 2rem;">&times;</button>
           <div style="margin-bottom: 2.5rem;">
              <h2 style="font-size: 2rem; font-weight: 800; color: #1E293B;">Edit Event Details</h2>
              <p style="color: #64748B; margin-top: 0.5rem;">Update the event information.</p>
           </div>
           <form onsubmit="window.app.handleEditPost(event)" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <input type="hidden" name="eventId" id="editEventId">
              <input type="hidden" name="image" id="editEventImage">
              
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155; margin-bottom: 0.8rem;">Project Title</label>
                 <input type="text" name="title" id="editEventTitle" required style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;">
              </div>
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155; margin-bottom: 0.8rem;">Operational Briefing</label>
                 <textarea name="description" id="editEventDescription" required rows="4" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0; resize: none;"></textarea>
              </div>
              <div class="form-group">
                  <label style="font-weight: 700; color: #334155;">Type</label>
                  <select name="type" id="editEventType" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;" onchange="this.nextElementSibling.style.display=this.value==='Other'?'block':'none'">
                      <option>Hackathon</option>
                      <option>Workshop</option>
                      <option>Session</option>
                      <option>Guest Lecture</option>
                      <option>Poster Presentation</option>
                      <option>Industry Visit</option>
                      <option>Other</option>
                  </select>
                  <input type="text" name="customType" id="editEventCustomType" placeholder="Enter custom event type" style="display:none; margin-top:0.5rem; width:100%; border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;">
              </div>
              <div class="form-group"><label style="font-weight: 700; color: #334155;">Audience</label><select name="audience" id="editEventAudience" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;"><option>Student</option><option>Faculty</option><option>Both</option></select></div>
              <div class="form-group">
                  <label style="font-weight: 700; color: #334155;">Specialization</label>
                  <select name="department" id="editEventDepartment" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;">
                      <option>ALL</option>
                      <option>Computer</option>
                      <option>IT</option>
                      <option>ENTC</option>
                      <option>Electrical</option>
                      <option>Mechanical</option>
                      <option>AI & DS</option>
                      <option>FE</option>
                      <option>MCA</option>
                      <option>MBA</option>
                  </select>
              </div>
              <div class="form-group"><label style="font-weight: 700; color: #334155;">Release Deadline</label><input type="datetime-local" name="registrationDeadline" id="editEventDeadline" required style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0;"></div>
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155;">Access Protocol</label>
                 <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
                    <select name="isPaid" id="editEventIsPaid" style="border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0; flex: 1;" onchange="this.nextElementSibling.style.display=this.value==='true'?'block':'none'"><option value="false">Open Access (Free)</option><option value="true">Premium Entry (Paid)</option></select>
                    <input type="number" name="price" id="editEventPrice" style="display:none; border-radius: 12px; padding: 1rem; border: 1px solid #E2E8F0; flex: 1;" value="0" placeholder="₹ Amount">
                 </div>
              </div>
              <div class="form-group" style="grid-column: 1/-1;">
                 <label style="font-weight: 700; color: #334155;">Visual Asset (Leave empty to keep current)</label>
                 <input type="file" name="imageFile" accept="image/*" style="border: 2px dashed #E2E8F0; padding: 2rem; border-radius: 20px; text-align: center; width: 100%; cursor: pointer;">
              </div>
              <button type="submit" class="btn btn-primary" style="grid-column: 1/-1; padding: 1.5rem; font-size: 1.2rem; border-radius: 18px; font-weight: 800; background: #2563EB;">Update Event Details</button>
           </form>
        </div>
      </div>
    </div>
  `},I=n=>`
    <div class="auth-page fade-in" style="background: radial-gradient(circle at top right, #F0F4FF, #F8FAFC);">
      <div class="auth-wrapper" style="max-width: 480px; width: 95%; margin: auto; grid-template-columns: 1fr; min-height: auto; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border-radius: 32px;">
        <div class="auth-content" style="width: 100%; padding: 4rem 3rem; align-items: center; justify-content: center;">
          <div class="auth-header" style="text-align: center; margin-bottom: 3rem;">
            <div style="width: 80px; height: 80px; background: #F0F4FF; border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem; animation: floatingIcon 4s ease-in-out infinite;">📧</div>
            <h1 style="font-size: 2.5rem; font-weight: 800; color: #1E293B; margin-bottom: 0.8rem; letter-spacing: -0.02em;">Verify Account</h1>
            <p style="color: #64748B; font-size: 1rem; line-height: 1.6;">We've dispatched a secure code to<br><span style="color: #2563EB; font-weight: 700;">${n}</span></p>
          </div>

          <form onsubmit="window.app.handleVerification(event, '${n}')" style="width: 100%; display: grid; gap: 2rem;">
            <div class="form-group" style="text-align: center;">
              <label style="display: block; margin-bottom: 1.2rem; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #94A3B8;">Identity Access Protocol</label>
              <div style="position: relative;">
                <input type="text" name="code" maxlength="6" placeholder="••••••" required 
                       style="width: 100%; text-align: center; font-family: 'Poppins', sans-serif; font-size: 2.5rem; font-weight: 800; letter-spacing: 0.4em; height: 85px; border-radius: 20px; border: 2px solid #E2E8F0; background: #F8FAFC; transition: all 0.3s ease; color: #1E293B; padding-left: 0.4em;"
                       onfocus="this.style.borderColor='#2563EB'; this.style.background='white'; this.style.boxShadow='0 0 0 4px rgba(37, 99, 235, 0.1)';"
                       onblur="this.style.borderColor='#E2E8F0'; this.style.background='#F8FAFC'; this.style.boxShadow='none';">
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary auth-btn" style="padding: 1.4rem; font-size: 1.1rem; border-radius: 18px; font-weight: 800; background: #2563EB; box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4); letter-spacing: 0.05em;">Activate Profile</button>
            
            <div style="text-align: center; font-size: 0.95rem; color: #64748B; margin-top: 0.5rem;">
              Access issues? <a href="#" onclick="window.app.resendCode('${n}')" style="color: #2563EB; font-weight: 800; text-decoration: none; border-bottom: 2px solid #DBEAFE;">Reissue Code</a>
            </div>
          </form>
          
          <div class="auth-footer" style="margin-top: 3.5rem; text-align: center; border-top: 1px solid #F1F5F9; padding-top: 2rem;">
             <a href="#" onclick="window.app.navigate('signup')" style="color: #94A3B8; font-size: 0.9rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                <span style="font-size: 1.2rem;">←</span> Return to Signup
             </a>
          </div>
        </div>
      </div>
    </div>
  `;class ${constructor(){this.appElement=document.querySelector("#app"),this.user=JSON.parse(localStorage.getItem("cogni_user"))||null,this.filters={isPaid:null,department:null,type:null},this.selectedEventStats=null,this.pendingVerificationEmail=null,window.addEventListener("scroll",()=>this.handleScroll()),window.addEventListener("popstate",()=>this.render()),this.init()}init(){window.app=this,this.render()}navigate(e){window.history.pushState({},"",`/${e}`),this.render()}async handleLogin(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries());try{const o=await fetch("https://cogniai2.onrender.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),r=await o.json();if(o.ok){localStorage.setItem("cogni_user",JSON.stringify(r.user)),localStorage.setItem("cogni_token",r.token),this.user=r.user;const d=r.user.role==="student"?"student-dashboard":"dashboard";window.history.pushState({},"",`/${d}`),this.render()}else{if(r.needsVerification){this.pendingVerificationEmail=r.email,this.render();return}alert(r.message||"Login failed")}}catch{alert("Login failed")}}async handleSignup(e,t){e.preventDefault();const i=new FormData(e.target),o=Object.fromEntries(i.entries());if(o.role=t,o.password!==o.retype&&t==="student"){alert("Passwords do not match!");return}try{const r=await fetch("https://cogniai2.onrender.com/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),d=await r.json();r.ok?(this.pendingVerificationEmail=o.email,this.render()):alert(d.message||"Signup failed")}catch{alert("Signup failed")}}async handleVerification(e,t){e.preventDefault();const i=e.target.code.value;try{const o=await fetch("https://cogniai2.onrender.com/api/auth/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,code:i})}),r=await o.json();o.ok?(alert(r.message),this.pendingVerificationEmail=null,this.navigate("login")):alert(r.message||"Verification failed")}catch{alert("Verification failed")}}async resendCode(e){alert("Resending code to "+e)}switchSignupRole(e){document.querySelectorAll(".role-tab").forEach(t=>{t.classList.remove("active"),t.innerText.toLowerCase()===e&&t.classList.add("active")}),document.querySelectorAll(".signup-form").forEach(t=>{t.style.display="none"}),document.getElementById(`${e}SignupForm`).style.display="block"}logout(){localStorage.removeItem("cogni_user"),this.user=null,window.history.pushState({},"","/"),this.render()}openModal(e){alert(`This would open the ${e} creation modal in the full version!`)}showCreatePostModal(){const e=document.getElementById("createPostModal");e.style.display="flex",setTimeout(()=>e.classList.add("active"),10)}closeCreatePostModal(){const e=document.getElementById("createPostModal");e.classList.remove("active"),setTimeout(()=>e.style.display="none",300)}showEditProfileModal(){const e=document.getElementById("editProfileModal");e.style.display="flex",setTimeout(()=>e.classList.add("active"),10)}closeEditProfileModal(){const e=document.getElementById("editProfileModal");e.classList.remove("active"),setTimeout(()=>e.style.display="none",300)}async handleEditProfile(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries());i.userId=this.user.id;try{const o=await fetch("https://cogniai2.onrender.com/api/users/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),r=await o.json();o.ok?(alert("Profile updated successfully!"),this.user={...this.user,...r.user},localStorage.setItem("cogni_user",JSON.stringify(this.user)),this.closeEditProfileModal(),this.render()):alert(r.message||"Update failed")}catch(o){console.error("Update Profile Error:",o),alert("Could not connect to server")}}async addTeamMemberInvitation(e){const t=document.getElementById("memberEmailInput"),i=t.value.trim();if(i)try{const o=await fetch(`https://cogniai2.onrender.com/api/users/search?email=${i}`),r=await o.json();if(o.ok){const d=document.getElementById("tempMemberList"),a=document.getElementById("teamMembersData"),s=JSON.parse(a.value);if(s.includes(i)){alert("Member already added");return}s.push(i),a.value=JSON.stringify(s);const c=document.createElement("div");c.className="filter-chip active",c.style.display="flex",c.style.alignItems="center",c.style.gap="0.5rem",c.innerHTML=`<span>${r.name}</span> <span style="cursor:pointer" onclick="this.parentElement.remove()">×</span>`,d.appendChild(c),t.value=""}else alert(r.message||"User not found")}catch{alert("Search failed")}}async handleComprehensiveRegistration(e,t){e.preventDefault();const i=new FormData(e.target),o=Object.fromEntries(i.entries()),r={userId:this.user.id,eventId:t,registrationType:o.registrationType,teamName:o.teamName,classYear:o.classYear,rollno:o.rollno,invitationId:o.invitationId,teamMembersEmails:JSON.parse(o.teamMembers||"[]")};try{const d=await fetch("https://cogniai2.onrender.com/api/registrations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),a=await d.json();if(d.ok){if(r.registrationType==="Team"){const s=document.getElementById("teamMembersData").value,c=JSON.parse(s||"[]");for(const p of c)await fetch("https://cogniai2.onrender.com/api/teams/invite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fromUserId:this.user.id,toEmail:p,eventId:t,teamName:r.teamName})})}alert("Registration Successful!"),window.history.pushState({},"","/student-dashboard"),this.render()}else alert(a.message||"Registration failed")}catch{alert("Network error")}}async handleCreatePost(e){e.preventDefault();const t=new FormData(e.target);if(t.get("type")==="Other"){const i=t.get("customType");i&&t.set("type",i)}try{const i=await fetch("https://cogniai2.onrender.com/api/events",{method:"POST",body:t});if(i.ok)alert("Event created successfully!"),this.closeCreatePostModal(),this.render();else{const o=await i.json();alert(`Failed: ${o.message}`)}}catch{alert("Error connecting to server")}}async deleteEvent(e){if(confirm("Are you sure?"))try{(await fetch(`https://cogniai2.onrender.com/api/events/${e}`,{method:"DELETE"})).ok&&(alert("Event deleted"),this.render())}catch{alert("Error")}}async openEditPostModal(e){try{const i=await(await fetch(`https://cogniai2.onrender.com/api/events/${e}`)).json();document.getElementById("editEventId").value=i._id,document.getElementById("editEventTitle").value=i.title,document.getElementById("editEventDescription").value=i.description;const o=document.getElementById("editEventType"),r=document.getElementById("editEventCustomType");["Hackathon","Workshop","Session","Guest Lecture","Poster Presentation","Industry Visit"].includes(i.type)?(o.value=i.type,r.style.display="none",r.value=""):(o.value="Other",r.style.display="block",r.value=i.type),document.getElementById("editEventAudience").value=i.audience,document.getElementById("editEventDepartment").value=i.department,document.getElementById("editEventDeadline").value=new Date(i.registrationDeadline).toISOString().slice(0,16),document.getElementById("editEventImage").value=i.image,document.getElementById("editEventIsPaid").value=i.isPaid.toString();const a=document.getElementById("editEventPrice");a.value=i.price||0,a.style.display=i.isPaid?"block":"none";const s=document.getElementById("editPostModal");s.style.display="flex",setTimeout(()=>s.classList.add("active"),10)}catch{alert("Failed to load event")}}closeEditPostModal(){const e=document.getElementById("editPostModal");e.classList.remove("active"),setTimeout(()=>e.style.display="none",300)}async handleEditPost(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries());i.type==="Other"&&i.customType&&(i.type=i.customType);try{(await fetch(`https://cogniai2.onrender.com/api/events/${i.eventId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok&&(alert("Updated!"),this.closeEditPostModal(),this.render())}catch{alert("Error")}}startAboutSlideshow(){const e=document.getElementById("about-slideshow");if(!e)return;const t=e.querySelectorAll(".slide-img");let i=0;this.aboutInterval&&clearInterval(this.aboutInterval),this.aboutInterval=setInterval(()=>{t[i].classList.remove("active"),i=(i+1)%t.length,t[i].classList.add("active")},5e3)}handleUnifiedFilter(e){this.filters={isPaid:null,department:null,type:null},e==="all"||(e==="free"?this.filters.isPaid=!1:e==="paid"?this.filters.isPaid=!0:e.startsWith("dept:")?this.filters.department=e.split(":")[1]:e.startsWith("type:")&&(this.filters.type=e.split(":")[1])),this.render()}async fetchEventAnalysis(e){try{const i=await(await fetch(`https://cogniai2.onrender.com/api/events/${e}`)).json(),r=await(await fetch(`https://cogniai2.onrender.com/api/admin/analytics?eventId=${e}`)).json();this.selectedEventStats={...r,eventId:e,title:i.title},this.render()}catch{alert("Analysis failed")}}async respondToInvitation(e,t){try{(await fetch(`https://cogniai2.onrender.com/api/teams/invitations/${e}/respond`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:t,userId:this.user.id})})).ok&&(alert(`Invitation ${t}!`),this.render())}catch{alert("Action failed")}}async confirmTeam(e){try{(await fetch(`https://cogniai2.onrender.com/api/teams/confirm/${e}`,{method:"POST"})).ok&&(alert("Team confirmed!"),this.render())}catch{alert("Confirmation failed")}}renderAnalysisScreen(){this.selectedEventStats=null,this.render()}async render(){const e=window.location.pathname;if(this.pendingVerificationEmail){this.appElement.innerHTML=I(this.pendingVerificationEmail);return}if(!this.user){e==="/login"?this.appElement.innerHTML=w():e==="/signup"?this.appElement.innerHTML=A():(this.appElement.innerHTML=b(),this.animateCounters(),this.startCarousel(),this.initScrollAnimations(),this.startAboutSlideshow()),this.handleScroll();return}if(e==="/admin/analysis"||e==="admin/analysis"){const t=await this.fetchEvents();this.appElement.innerHTML=C(this.user,t,this.selectedEventStats);return}if(e.startsWith("/event/")){const t=e.split("/")[2],o=new URLSearchParams(window.location.search).get("invId");try{const d=await(await fetch(`https://cogniai2.onrender.com/api/events/${t}`)).json();let a=null;o&&(a=(await this.fetchTeamInvitations(this.user.id)).find(c=>c._id===o)),this.appElement.innerHTML=k(d,this.user,a)}catch(r){console.error("Error fetching event details:",r),this.appElement.innerHTML='<div class="container" style="padding: 4rem;"><h3>Event not found</h3></div>'}return}switch(this.user.role){case"admin":const t=await this.fetchStats();this.appElement.innerHTML=x(this.user,t);break;case"faculty":const i=await this.fetchEvents("Faculty"),o=await this.fetchRegistrations(this.user.id);this.appElement.innerHTML=E(this.user,i,o);break;case"student":const r=await this.fetchEvents("Student"),d=await this.fetchRegistrations(this.user.id),a=await this.fetchTeamInvitations(this.user.id);this.appElement.innerHTML=F(this.user,r,d,this.filters,a);break;default:this.appElement.innerHTML=b()}this.handleScroll()}async fetchTeamInvitations(e){try{return await(await fetch(`https://cogniai2.onrender.com/api/teams/invitations/${e}`)).json()}catch{return[]}}async fetchEvents(e=null){try{let t="https://cogniai2.onrender.com/api/events";const i=new URLSearchParams;e&&i.append("audience",e),this.filters.isPaid!==null&&i.append("isPaid",this.filters.isPaid),this.filters.department&&i.append("department",this.filters.department),this.filters.type&&i.append("type",this.filters.type);const o=i.toString();return o&&(t+="?"+o),await(await fetch(t)).json()}catch(t){return console.error("Error fetching events:",t),[]}}async fetchRegistrations(e){try{return await(await fetch(`https://cogniai2.onrender.com/api/registrations/user/${e}`)).json()}catch(t){return console.error("Error fetching registrations:",t),[]}}async fetchStats(){try{const t=await(await fetch("https://cogniai2.onrender.com/api/dashboard/stats")).json(),o=await(await fetch("https://cogniai2.onrender.com/api/admin/analytics")).json();return{...t,analytics:o}}catch(e){return console.error("Error fetching stats:",e),{}}}handleScroll(){const e=document.querySelector("nav"),t=window.scrollY,i=document.documentElement.scrollHeight-window.innerHeight,o=Math.min(Math.max(t/i,0),1);e&&(t>50?e.classList.add("glass-nav"):e.classList.remove("glass-nav"));const r=document.querySelector(".network-path"),d=document.querySelector(".network-pulse-node");if(r){const a=r.getTotalLength();if(r.style.strokeDasharray=a,r.style.strokeDashoffset=a-o*a,d){const s=r.getPointAtLength(o*a);d.setAttribute("cx",s.x),d.setAttribute("cy",s.y)}}}initScrollAnimations(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&r.target.classList.add("active")})},e);document.querySelectorAll(".reveal").forEach(o=>t.observe(o))}startCarousel(){const e=document.querySelectorAll(".carousel-slide");if(e.length===0)return;let t=0;const i=()=>{e[t].classList.remove("active"),t=(t+1)%e.length,e[t].classList.add("active")};this.carouselInterval&&clearInterval(this.carouselInterval),this.carouselInterval=setInterval(i,5e3)}animateCounters(){document.querySelectorAll(".counter").forEach(t=>{const i=parseInt(t.innerText);let o=0;const r=2e3/i,d=()=>{o<i?(o++,t.innerText=o+(t.innerText.includes("+")?"+":""),setTimeout(d,r)):t.innerText=i+(t.innerText.includes("+")?"+":"")};d()})}openCertificateModal(e){const t=document.getElementById("certificateModal");t&&(document.getElementById("certEventId").value=e,t.style.display="flex",setTimeout(()=>t.classList.add("active"),10))}closeCertificateModal(){const e=document.getElementById("certificateModal");e&&(e.classList.remove("active"),setTimeout(()=>e.style.display="none",300))}async handleReleaseCertificates(e){e.preventDefault();const t=document.getElementById("certEventId").value,i=new FormData(e.target),o=e.submitter,r=o.innerText;o.innerText="⏳ Processing...",o.disabled=!0;try{const d=await fetch(`https://cogniai2.onrender.com/api/events/${t}/certificates`,{method:"POST",body:i}),a=await d.json();d.ok?(alert("Success: "+a.message),this.closeCertificateModal()):alert("Failed: "+a.message)}catch(d){console.error(d),alert("Error connecting to server.")}finally{o.innerText=r,o.disabled=!1}}}new $;window.onpopstate=()=>{window.app.render()};
