import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import orchid from "@/assets/portfolio/orchid-closeup.webp";
import desk from "@/assets/portfolio/desk-scene.webp";
import keyboard from "@/assets/portfolio/keyboard.webp";
import character from "@/assets/portfolio/character-detail.webp";
import donutsClose from "@/assets/portfolio/donuts-closeup.webp";
import donutsStack from "@/assets/portfolio/donuts-stack.webp";

const slides = [
  { image: donutsStack, title: "Donut Collection", description: "Hyper-realistic 3D donuts with sprinkles", software: "Blender" },
  { image: orchid, title: "Orchid Study", description: "Botanical 3D render with volumetric lighting", software: "Blender" },
  { image: desk, title: "Desk Scene", description: "Warm interior scene with natural lighting", software: "Blender" },
  { image: character, title: "Character Detail", description: "Detailed character sculpt close-up", software: "Blender, ZBrush" },
  { image: donutsClose, title: "Macro Donuts", description: "Close-up study of surface textures", software: "Blender" },
  { image: keyboard, title: "Mechanical Keyboard", description: "Product visualization with moody lighting", software: "Blender" },
];

const PortfolioSlider = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="relative group">
          <div
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer glow-orange"
            onClick={() => setLightbox(true)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].image}
                alt={slides[current].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <h3 className="text-xl font-bold text-foreground">{slides[current].title}</h3>
              <p className="text-muted-foreground text-sm">{slides[current].description}</p>
              <span className="text-xs text-primary mt-1 inline-block">{slides[current].software}</span>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary/50"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary/50"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-6 right-6 p-2 text-foreground hover:text-primary">
              <X className="w-6 h-6" />
            </button>
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSlider;
