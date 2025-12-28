import { skillsContent } from "../content/SkillsSection";
import { useState } from "react";

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All"
        ? skillsContent.skills
        : skillsContent.skills.filter(
            (skill) => skill.category.toLowerCase() === activeCategory.toLowerCase()
        );
    return <section id = "skills" className = "py-24 px-4 relative bg-secondary/30">
        <div className = "container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className = "text-primary">Skills</span>
            </h2> 
        <div className = "flex flex-wrap justify-center mb-12 gap-4">
            {skillsContent.categories.map((category, index) => (
                <button
                    key={index}
                    className = {`cosmic-button ${activeCategory === category ? "bg-primary text-primary-forground hover:shadow-primary/70" : "bg-card text-foreground hover:shadow-card/50"}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                filteredSkills.map((skill, index) => (
                    <div key={index} className = "bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-shadow duration-300 text-center">
                        <h3 className = "text-xl font-semibold mb-2">{skill.name}</h3>  
                    </div>
                ))
            }
        </div>
        </div>
        </section>
}