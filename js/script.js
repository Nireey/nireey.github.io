document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Highlight active navigation link on scroll
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 60;

        navLinks.forEach(link => {
            const section = document.getElementById(link.getAttribute("href").substring(1));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.style.color = "#1abc9c";
            } else {
                link.style.color = "#2c3e50";
            }
        });
    });

    // Details content storage
    const content = {
        project: {
            "los-analysis": `
                    <h2>LOS Analysis of Balkhu Staggered Intersection</h2>
                    <p style="font-size: 14px;">The Level of Service (LOS) Analysis of Balkhu Staggered Intersection was conducted to assess traffic performance and optimize signal timings for improved flow efficiency. Under the supervision of Asst. Prof. Anil Marsani, the project combined manual traffic surveys, video-based vehicle counts, and computational analysis to evaluate critical intersection metrics.</p>
                    <p style="font-size: 14px;">To enhance data accuracy and streamline processing, Python scripts leveraging OpenCV and Pandas were developed for automated traffic analysis workflows, reducing manual effort and improving efficiency. Key metrics such as saturation flow, delay, and queue length were analyzed using advanced data wrangling techniques to identify congestion patterns and operational bottlenecks.</p>
                    <p style="font-size: 14px;">Further, the study utilized SIDRA Intersection software to model traffic performance and optimize signal timings. By implementing HCM-compliant phase adjustments, the project successfully reduced the average delay by 22%, leading to more efficient traffic movement. These findings provided valuable insights for municipal authorities, aiding in strategic decision-making for congestion mitigation and urban traffic planning.</p>
                    <p style="font-size: 14px;">Additionally, ArcGIS Pro was employed to create heatmaps of traffic patterns, visually highlighting congestion hotspots. These findings provided valuable insights for municipal authorities, aiding in strategic decision-making for congestion mitigation and urban traffic planning.</p>
                    
                `,
            "crash-analysis": `
                    <h2>Crash Analysis and Hot-spot Identification on Koteswor-Jadibuti Road Section</h2>
                    <p style="font-size: 14px;">This study focused on analyzing crash patterns and identifying high-risk locations along the Koteswor-Jadibuti road section, aiming to improve road safety through data-driven insights. Conducted at Pulchowk Campus under the supervision of Asst. Prof. Anil Marsani, the project involved extensive data processing and spatial analysis.</p>
                    <p style="font-size: 14px;">To ensure a comprehensive crash database, over 1,200 police reports were systematically processed through structured data entry and format conversion. A significant challenge was handling Nepali text in ASCII encoding, which was converted to Unicode for seamless analysis. Custom Python scripts were developed to automate Word-to-Excel conversion and translate crash details from Nepali to English, improving accessibility for further investigation.</p>
                    <p style="font-size: 14px;">Using ArcGIS Pro, crash frequency patterns were mapped to pinpoint hot-spot locations with high accident occurrences. These spatial visualizations provided critical insights into risk-prone zones, allowing authorities to design targeted road safety interventions. The study’s findings offered evidence-based recommendations, aiding policymakers in implementing strategic improvements to enhance traffic safety and reduce crash incidents in the area.</p>
    `,
            "road-design": `
                    <h2>Detailed Engineering Survey, Design, and Cost Estimation of Chhaling Road</h2>
                    <p style="font-size: 14px;">As part of the final year Transportation Engineering project, this study focused on the comprehensive survey, design, and cost estimation of Chhaling Road to enhance its functionality and safety. Conducted under the supervision of Asst. Prof. Roshan Karki, the project combined advanced surveying techniques, geometric design principles, and operational analysis to develop an efficient roadway system.</p>
                    <p style="font-size: 14px;">A topographic survey was executed using Total Station, ensuring high-precision terrain data acquisition. This data served as a foundation for roadway geometric design, where horizontal and vertical alignments, superelevation, and sight distance parameters were meticulously integrated following AASHTO standards to ensure optimal safety and performance.</p>
                    <p style="font-size: 14px;">Using Autodesk Civil 3D, 3D corridor models were generated, incorporating dynamic profiles, cross-sectional elements, and earthwork quantity estimates to optimize grading and construction feasibility. These models provided realistic design visualizations and facilitated precise cost estimation.</p>
                    <p style="font-size: 14px;">Additionally, the project included operational analysis using Highway Capacity Manual (HCM) methodologies, which involved Level of Service (LOS) assessments and warrant studies to evaluate potential intersection improvements. The findings supported data-driven decision-making for improving traffic operations and infrastructure development.</p>
                    <p style="font-size: 14px;">Cost estimation was performed using detailed quantity take-offs and rate analysis, considering material costs, labor expenses, and equipment requirements. The study’s deliverables included a comprehensive design report, CAD drawings, and a detailed bill of quantities, providing a roadmap for the road’s successful implementation and long-term maintenance.</p>`,
            "metro-feasibility": `
                    <h2>Metro System Feasibility Study in Kathmandu Valley</h2>
                    <p style="font-size: 14px;">This study aimed to assess the feasibility of implementing a 77.28 km metro system in Kathmandu Valley, addressing urban mobility challenges through a sustainable mass transit solution. Conducted under the supervision of Asst. Prof. Anil Marsani, the project involved a multifaceted evaluation of economic, technical, and environmental factors influencing metro development.</p>
                    <p style="font-size: 14px;">A comprehensive feasibility analysis was carried out by synthesizing government reports, academic research, and transportation data to establish the need and viability of the metro system. A cost estimation study was performed, exploring funding models such as Public-Private Partnership (PPP) frameworks and viability gap funding, ensuring financial feasibility.</p>
                    <p style="font-size: 14px;">To gauge the system’s economic sustainability, ridership demand projections and fare pricing strategies were analyzed, balancing affordability with operational efficiency. Geospatial analysis was employed to map potential metro routes, incorporating land use patterns, zoning regulations, and environmental considerations to minimize disruptions and optimize network integration.</p>
                    <p style="font-size: 14px;">Infrastructure challenges, including land acquisition constraints, narrow roads, and Kathmandu’s uneven terrain, were carefully studied. Based on these findings, the study proposed underground metro solutions in core urban areas to mitigate space limitations and reduce surface congestion.</p>
                    <p style="font-size: 14px;">For implementation, phased development strategies were recommended, alongside stakeholder engagement plans to ensure smooth coordination between government agencies, investors, and the public. This structured approach aimed to enhance long-term feasibility and public acceptance of the metro system.</p>   
                `
        },
        blog: {
            "smart-cities": `
                    <h2>From Traffic Jams to Smart Dreams: Reimagining Kathmandu’s Future</h2>
                    <h3>The Morning Commute That Sparked a Vision</h3>
                    <p>Every morning, as I weave through Kathmandu’s labyrinth of honking cars, zigzagging motorcycles, and impatient pedestrians, I play a mental game: How many minutes will it take today? Last monsoon, I clocked 45 minutes to travel 3 kilometers from Koteshwor to Pulchowk—a journey that should take 10. As rainwater pooled around stalled buses and the air hung thick with exhaust, I thought: There has to be a better way.</p>
                    <p>This daily dance with chaos isn’t unique to me. Ask any Kathmandu resident about their commute, and you’ll hear stories of missed appointments, frayed nerves, and the resigned humor of adapting to gridlock. But beneath the frustration lies something deeper—a collective yearning for change. </p>
                    <h3>Lessons from the World’s Urban Laboratories</h3>
                    <p>During my research on smart mobility, I stumbled upon Barcelona’s “superblocks.” Imagine neighborhoods where cars are guests, not dictators—where kids play in reclaimed streets and sensors monitor air quality in real time. Or Copenhagen, where cyclists outnumber drivers, and traffic lights sync with bike lanes to create green waves during rush hour. These cities aren’t sci-fi fantasies; they’re proof that urban transformation is possible.</p>
                    <p>Closer to home, I remember analyzing traffic patterns at Balkhu Intersection for my thesis. Manual counts under the midday sun, Python scripts crunching data late into the night, and the “aha!” moment when optimized signal timings showed a 22% delay reduction. It was a microcosm of what Kathmandu could achieve at scale.</p>
                    <h3>The Kathmandu Paradox: Chaos Meets Opportunity</h3>
                    <p>Our city is a living paradox. Ancient temples stand beside glass-fronted startups. Farmers haul vegetables through streets where ride-sharing apps ping for passengers. This juxtaposition holds a clue: tradition and technology can coexist.</p>
                    <p>Take waste management. Last year, while working on a GIS project near Swayambhu, I watched municipal trucks idle for hours, their routes dictated by habit, not data. Contrast this with Singapore, where AI predicts waste generation patterns, or Seoul, where RFID-tagged bins reward recyclers. Kathmandu’s informal kabaadi networks already show grassroots efficiency—imagine amplifying that with smart logistics.</p>
                    <h3> Electric Dreams (and Realistic Charging Stations)</h3>
                    <p> When I surveyed EV adoption in Nepal, I met a taxi driver in Lalitpur who’d converted his Safa Tempo to electric. “No more smelling like diesel,” he grinned, pointing to his homemade charging setup. His ingenuity mirrored global trends: Oslo now runs 80% of its public transport on renewables, while Shenzhen’s 16,000 electric buses silence streets once choked with smog.</p>
                    <p> Yet, our EV dreams face Kathmandu’s reality. During fieldwork, I once spent hours hunting for a charging station near Bhaktapur, only to find it hidden behind a paan shop. The lesson? Technology alone isn’t enough—it needs context. Smart cities aren’t about copying Tokyo; they’re about adapting ideas to our chaatamari stalls and galli dynamics.</p>
                    <h3> A Glimpse of Tomorrow: Coffee, Code, and Citizen Power</h3>
                    <p> Picture this: It’s 2030. You sip coffee at a café in Jawalakhel, checking your phone. An app shows real-time air quality (green today—no mask needed). The electric metro glides past, its solar panels gleaming. Nearby, a sensor-equipped paani paat alerts the municipality about leaks. This isn’t fantasy—it’s what cities like Medellín achieved by pairing tech with community engagement.</p>
                    <p>The key? Data as a public good. When I mapped crash hotspots on Koteshwor-Jadibuti Road, I realized: open data isn’t just for engineers. Imagine students analyzing traffic patterns for school projects, or entrepreneurs building apps to route tempos efficiently. Barcelona’s “digital twin” urban model started this way—a collaborative canvas for citizens to redraw their city. </p>
                    <h3> Why I’m Optimistic (Despite the Potholes)</h3>
                    <p> Last Dashain, I visited my grandparents’ village in Nuwakot. As we walked terraced fields, my cousin showed me his solar-powered irrigation system—a DIY marvel using repurposed car batteries. It struck me: Nepal’s genius lies in jugaad innovation. Combine that with smart governance, and Kathmandu’s jumbled pieces could click into place.</p>
                    <p> Yes, our roads are cracked, and our policies move slower than a Bhatbhateni parking lot on Saturday. But remember: Amsterdam was car-clogged in the 1970s before becoming a cycling utopia. Tallinn, once gray under Soviet rule, now runs on digital democracy. Cities transform when citizens demand better—and build it.</p>
                    <h3> The Road Ahead Starts Today</h3>
                    <p>As I write this, rain drums on my Thapathali apartment window. Somewhere, a traffic light blinks erratically, a sewer overflows, and a student sketches an app to report potholes. The ingredients for change are here—raw, scattered, but potent. </p>
                    <p> Kathmandu won’t become Singapore overnight, nor should it. Our smart city will hum to a different rhythm—one where momos steam beside solar microgrids, and ancient festivals meet AI-powered crowd management. The blueprint exists in Barcelona’s sensors, Copenhagen’s bikes, and Medellín’s libraries. But the soul? That’s ours to shape.</p>
                    <p> Next time you’re stuck in traffic, look past the chaos. See the student coding on her phone, the shopkeeper discussing EV subsidies, the engineer sketching a metro map. The future isn’t waiting—it’s honking impatiently, asking us to steer.</p>
                    <hr>
                    <p style="color: rgba(0, 0, 0, 0.7);"><b> About the Author</b> <br><i>Niraj Adhikari is a civil engineer and data enthusiast who’d rather optimize traffic signals than sit in them. When not wrestling with Python scripts or GIS maps, he writes about the intersection of technology and urban life in Nepal.</i> </p>
                `,
            "decision-making": `
                    <h2>Data-Driven Decision Making in Civil Engineering</h2>
                    <p>How data analysis is revolutionizing the construction industry and engineering practices.</p>
                    <h3>Key Points</h3>
                    <ul>
                        <li style="font-size: 14px;">Modern data analysis techniques</li>
                        <li style="font-size: 14px;">Real-world case studies</li>
                        <li style="font-size: 14px;">Implementation strategies</li>
                        <li style="font-size: 14px;">Future trends and innovations</li>
                    </ul>
                `
        }
    };

    // Show Details Handler
    document.querySelectorAll('.show-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior

            const type = button.dataset.type;  // "project" or "blog"
            const id = button.dataset.id;
            const section = document.getElementById(`${type}-details`);

            console.log(`Clicked: ${type}-${id}`); // Debugging
            console.log(`Section:`, section); // Debugging

            if (!section) {
                console.error(`Section not found: ${type}-details`);
                return;
            }

            const container = section.querySelector('.details-container');

            if (!container) {
                console.error('Details container not found');
                return;
            }

            // Check if we have content for this type and id
            if (content[type] && content[type][id]) {
                // Create close button HTML
                const closeButtonHTML = `<button class="details-close">&times;</button>`;

                // Add content with close button
                container.innerHTML = closeButtonHTML + content[type][id];

                // Show the section
                section.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Add close button handler
                const closeButton = container.querySelector('.details-close');
                closeButton.addEventListener('click', () => {
                    section.classList.remove('active');
                    document.body.style.overflow = '';
                });

                // Close when clicking outside
                section.addEventListener('click', (e) => {
                    if (e.target === section) {
                        section.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }
        });
    });
});