import { motion } from "framer-motion";
import { Award } from "lucide-react";
import certImage from "@/assets/certificates/spai-certificate.jpg";

const certifications = [
  {
    title: "This Is Animation",
    issuer: "Sony Pictures Animation & Imageworks",
    platform: "Yellowbrick",
    date: "July 25, 2025",
    signedBy: "Kris Pearn — Director, Sony Pictures Animation",
    image: certImage,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden md:flex"
            >
              <div className="md:w-1/2">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-1">Via {cert.platform}</p>
                <p className="text-muted-foreground text-sm mb-1">{cert.date}</p>
                <p className="text-muted-foreground text-sm italic">Signed by {cert.signedBy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
