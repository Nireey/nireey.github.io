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
                    <p>The Level of Service (LOS) Analysis of Balkhu Staggered Intersection was conducted to assess traffic performance and optimize signal timings for improved flow efficiency. Under the supervision of Asst. Prof. Anil Marsani, the project combined manual traffic surveys, video-based vehicle counts, and computational analysis to evaluate critical intersection metrics.</p>
                    <p>To enhance data accuracy and streamline processing, Python scripts leveraging OpenCV and Pandas were developed for automated traffic analysis workflows, reducing manual effort and improving efficiency. Key metrics such as saturation flow, delay, and queue length were analyzed using advanced data wrangling techniques to identify congestion patterns and operational bottlenecks.</p>
                    <p>Further, the study utilized SIDRA Intersection software to model traffic performance and optimize signal timings. By implementing HCM-compliant phase adjustments, the project successfully reduced the average delay by 22%, leading to more efficient traffic movement. These findings provided valuable insights for municipal authorities, aiding in strategic decision-making for congestion mitigation and urban traffic planning.</p>
                    <p>Additionally, ArcGIS Pro was employed to create heatmaps of traffic patterns, visually highlighting congestion hotspots. These findings provided valuable insights for municipal authorities, aiding in strategic decision-making for congestion mitigation and urban traffic planning.</p>
                    
                `,
            "crash-analysis": `
                    <h2>Crash Analysis and Hot-spot Identification on Koteswor-Jadibuti Road Section</h2>
                    <p>This study focused on analyzing crash patterns and identifying high-risk locations along the Koteswor-Jadibuti road section, aiming to improve road safety through data-driven insights. Conducted at Pulchowk Campus under the supervision of Asst. Prof. Anil Marsani, the project involved extensive data processing and spatial analysis.</p>
                    <p>To ensure a comprehensive crash database, over 1,200 police reports were systematically processed through structured data entry and format conversion. A significant challenge was handling Nepali text in ASCII encoding, which was converted to Unicode for seamless analysis. Custom Python scripts were developed to automate Word-to-Excel conversion and translate crash details from Nepali to English, improving accessibility for further investigation.</p>
                    <p>Using ArcGIS Pro, crash frequency patterns were mapped to pinpoint hot-spot locations with high accident occurrences. These spatial visualizations provided critical insights into risk-prone zones, allowing authorities to design targeted road safety interventions. The study’s findings offered evidence-based recommendations, aiding policymakers in implementing strategic improvements to enhance traffic safety and reduce crash incidents in the area.</p>
    `,
            "road-design": `
                    <h2>Detailed Engineering Survey, Design, and Cost Estimation of Chhaling Road</h2>
                    <p>As part of the final year Transportation Engineering project, this study focused on the comprehensive survey, design, and cost estimation of Chhaling Road to enhance its functionality and safety. Conducted under the supervision of Asst. Prof. Roshan Karki, the project combined advanced surveying techniques, geometric design principles, and operational analysis to develop an efficient roadway system.</p>
                    <p>A topographic survey was executed using Total Station, ensuring high-precision terrain data acquisition. This data served as a foundation for roadway geometric design, where horizontal and vertical alignments, superelevation, and sight distance parameters were meticulously integrated following AASHTO standards to ensure optimal safety and performance.</p>
                    <p>Using Autodesk Civil 3D, 3D corridor models were generated, incorporating dynamic profiles, cross-sectional elements, and earthwork quantity estimates to optimize grading and construction feasibility. These models provided realistic design visualizations and facilitated precise cost estimation.</p>
                    <p>Additionally, the project included operational analysis using Highway Capacity Manual (HCM) methodologies, which involved Level of Service (LOS) assessments and warrant studies to evaluate potential intersection improvements. The findings supported data-driven decision-making for improving traffic operations and infrastructure development.</p>
                    <p>Cost estimation was performed using detailed quantity take-offs and rate analysis, considering material costs, labor expenses, and equipment requirements. The study’s deliverables included a comprehensive design report, CAD drawings, and a detailed bill of quantities, providing a roadmap for the road’s successful implementation and long-term maintenance.</p>`,
            "metro-feasibility": `
                    <h2>Metro System Feasibility Study in Kathmandu Valley</h2>
                    <p>This study aimed to assess the feasibility of implementing a 77.28 km metro system in Kathmandu Valley, addressing urban mobility challenges through a sustainable mass transit solution. Conducted under the supervision of Asst. Prof. Anil Marsani, the project involved a multifaceted evaluation of economic, technical, and environmental factors influencing metro development.</p>
                    <p>A comprehensive feasibility analysis was carried out by synthesizing government reports, academic research, and transportation data to establish the need and viability of the metro system. A cost estimation study was performed, exploring funding models such as Public-Private Partnership (PPP) frameworks and viability gap funding, ensuring financial feasibility.</p>
                    <p>To gauge the system’s economic sustainability, ridership demand projections and fare pricing strategies were analyzed, balancing affordability with operational efficiency. Geospatial analysis was employed to map potential metro routes, incorporating land use patterns, zoning regulations, and environmental considerations to minimize disruptions and optimize network integration.</p>
                    <p>Infrastructure challenges, including land acquisition constraints, narrow roads, and Kathmandu’s uneven terrain, were carefully studied. Based on these findings, the study proposed underground metro solutions in core urban areas to mitigate space limitations and reduce surface congestion.</p>
                    <p>For implementation, phased development strategies were recommended, alongside stakeholder engagement plans to ensure smooth coordination between government agencies, investors, and the public. This structured approach aimed to enhance long-term feasibility and public acceptance of the metro system.</p>   
                `
        },
        blog: {
            "smart-cities": `
                    <h2>Smart Cities: The Future of Urban Living</h2>
                    <p>Exploring how technology is transforming urban infrastructure and creating sustainable cities.</p>
                    <h3>Key Topics</h3>
                    <ul>
                        <li>IoT integration in urban planning</li>
                        <li>Smart transportation systems</li>
                        <li>Sustainable infrastructure</li>
                        <li>Data-driven city management</li>
                    </ul>
                `,
            "decision-making": `
                    <h2>Data-Driven Decision Making in Civil Engineering</h2>
                    <p>How data analysis is revolutionizing the construction industry and engineering practices.</p>
                    <h3>Key Points</h3>
                    <ul>
                        <li>Modern data analysis techniques</li>
                        <li>Real-world case studies</li>
                        <li>Implementation strategies</li>
                        <li>Future trends and innovations</li>
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