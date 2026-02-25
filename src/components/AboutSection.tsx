import { motion } from "framer-motion";

const skills = [
  { name: "Blender", icon: "🎨" },
  { name: "Unreal Engine", icon: "🎮" },
  { name: "Unity", icon: "🕹️" },
  { name: "3ds Max", icon: "🖥️" },
  { name: "Godot", icon: "🤖" },
  { name: "Houdini", icon: "🌋" },
  { name: "TouchDesigner", icon: "✨" },
  { name: "DaVinci Resolve", icon: "🎞️" },
  { name: "Affinity", icon: "🖼️" },
  { name: "After Effects", icon: "🎬" },
  { name: "Photoshop", icon: "🖌️" },
  { name: "C#", icon: "💻" },
  { name: "AR/VR/MR", icon: "🥽" },
  { name: "Marvelous Designer", icon: "👗" },
  { name: "AI", icon: "🧠" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />

        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-12">
          I'm an XR Developer and 3D Artist specializing in AR/VR/MR development, 3D modeling, animation, and game design.
          With professional experience at KBR and Nokia, I build immersive visualization experiences, VR training environments,
          and interactive 3D applications using Unreal Engine, Unity, and Blender. From realistic architectural visualizations
          to defense training simulations, I craft immersive digital experiences that push boundaries.
        </p>

        <h3 className="text-xl font-semibold mb-6 text-foreground">Skills & Tools</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass px-5 py-3 rounded-lg flex items-center gap-2 hover:border-primary/50 transition-colors"
            >
              <span className="text-lg">{skill.icon}</span>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
