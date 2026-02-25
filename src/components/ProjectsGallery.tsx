import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

import orchid from "@/assets/portfolio/orchid-closeup.webp";
import desk from "@/assets/portfolio/desk-scene.webp";
import keyboard from "@/assets/portfolio/keyboard.webp";
import character from "@/assets/portfolio/character-detail.webp";
import donutsClose from "@/assets/portfolio/donuts-closeup.webp";
import donutsStack from "@/assets/portfolio/donuts-stack.webp";
import thirshath0000 from "@/assets/portfolio/thirshath-0000.webp";
import thirshath2 from "@/assets/portfolio/thirshath-2.webp";
import thirshath5 from "@/assets/portfolio/thirshath-5.webp";
import thirshathCar0178 from "@/assets/portfolio/thirshath-car-0178.webp";
import thirshathCar0179 from "@/assets/portfolio/thirshath-car-0179.webp";
import thirshathNew0215 from "@/assets/portfolio/thirshath-new-0215.webp";
import thirshathOldhouse from "@/assets/portfolio/thirshath-oldhouse.webp";
import thirshathOldhouse4 from "@/assets/portfolio/thirshath-oldhouse4.webp";
import thirshathOldhouse6 from "@/assets/portfolio/thirshath-oldhouse6.webp";
import thirshathOldhouse13 from "@/assets/portfolio/thirshath-oldhouse13.webp";
import thirshathReal from "@/assets/portfolio/thirshath-real.webp";
import thirshathUntitled from "@/assets/portfolio/thirshath-untitled.webp";

type Category = "All" | "3D Modeling" | "Animation" | "VFX" | "Character Design" | "Environment" | "Automotive";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  software: string[];
  artstation?: string;
}

const projects: Project[] = [
  { id: 1, title: "Donut Collection", category: "3D Modeling", image: donutsStack, description: "A hyper-realistic collection of glazed donuts with sprinkles, created as part of the classic Blender tutorial series but taken to a photorealistic level with custom shaders and HDR lighting.", software: ["Blender"] },
  { id: 2, title: "Orchid Botanical", category: "3D Modeling", image: orchid, description: "A botanical study of orchid flowers rendered with volumetric lighting and depth of field for a cinematic feel.", software: ["Blender"] },
  { id: 3, title: "Cozy Desk Scene", category: "3D Modeling", image: desk, description: "A warm interior desk scene featuring natural sunlight, subtle depth of field, and carefully crafted everyday objects.", software: ["Blender"] },
  { id: 4, title: "Character Sculpt", category: "Character Design", image: character, description: "A detailed character sculpt showcasing intricate surface details, beadwork, and stylized anatomy.", software: ["Blender", "ZBrush"] },
  { id: 5, title: "Macro Textures", category: "VFX", image: donutsClose, description: "Close-up macro study focusing on procedural textures, subsurface scattering, and material realism.", software: ["Blender", "Substance Painter"] },
  { id: 6, title: "Mech Keyboard", category: "3D Modeling", image: keyboard, description: "Product visualization of a mechanical keyboard with moody, cinematic lighting and shallow depth of field.", software: ["Blender"] },
  { id: 7, title: "Scene Composition", category: "3D Modeling", image: thirshath0000, description: "A carefully composed 3D scene showcasing lighting techniques and spatial arrangement.", software: ["Blender"] },
  { id: 8, title: "Stylized Render", category: "3D Modeling", image: thirshath2, description: "A stylized 3D render exploring unique artistic direction with bold shapes and color choices.", software: ["Blender"] },
  { id: 9, title: "Concept Piece", category: "VFX", image: thirshath5, description: "A concept art piece blending visual effects with 3D modeling to create a striking composition.", software: ["Blender"] },
  { id: 10, title: "Car Render – Front", category: "Automotive", image: thirshathCar0178, description: "A photorealistic automotive render showcasing detailed bodywork, reflections, and studio-quality lighting.", software: ["Blender"] },
  { id: 11, title: "Car Render – Detail", category: "Automotive", image: thirshathCar0179, description: "An alternate angle of the automotive visualization highlighting material detail and paint shaders.", software: ["Blender"] },
  { id: 12, title: "New Concept", category: "3D Modeling", image: thirshathNew0215, description: "A fresh concept render exploring new modeling techniques and procedural material workflows.", software: ["Blender"] },
  { id: 13, title: "Old House – Exterior", category: "Environment", image: thirshathOldhouse, description: "A nostalgic old house exterior scene with weathered textures, warm lighting, and environmental storytelling.", software: ["Blender"] },
  { id: 14, title: "Old House – Interior", category: "Environment", image: thirshathOldhouse4, description: "An interior view of the old house scene with carefully placed props and atmospheric lighting.", software: ["Blender"] },
  { id: 15, title: "Old House – Detail", category: "Environment", image: thirshathOldhouse6, description: "A close-up detail shot of the old house showcasing material realism and surface imperfections.", software: ["Blender"] },
  { id: 16, title: "Old House – Wide Shot", category: "Environment", image: thirshathOldhouse13, description: "A cinematic wide-angle shot of the old house environment with volumetric fog and natural lighting.", software: ["Blender"] },
  { id: 17, title: "Realistic Portrait", category: "Character Design", image: thirshathReal, description: "A realistic portrait render focusing on skin shaders, subsurface scattering, and lifelike detail.", software: ["Blender", "ZBrush"] },
  { id: 18, title: "Untitled Artwork", category: "3D Modeling", image: thirshathUntitled, description: "An experimental artwork exploring creative freedom in 3D space with abstract and stylized elements.", software: ["Blender"] },
];

const categories: Category[] = ["All", "3D Modeling", "Environment", "Automotive", "VFX", "Character Design", "Animation"];

const ProjectsGallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer glass"
                onClick={() => setSelected(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 rounded-lg border border-primary text-primary font-semibold text-sm">
                    View Project
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <span className="text-xs text-primary">{project.category}</span>
                  <div className="flex gap-1 mt-2">
                    {project.software.map((s) => (
                      <span key={s} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selected.image} alt={selected.title} className="w-full aspect-video object-cover rounded-t-2xl" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass hover:border-primary/50"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-xs text-primary font-medium">{selected.category}</span>
                <h3 className="text-2xl font-bold text-foreground mt-1 mb-4">{selected.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.software.map((s) => (
                    <span key={s} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.artstation.com/ghost1020032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  View on ArtStation <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGallery;
