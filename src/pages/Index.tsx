import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useNavigate } from "react-router-dom";
import { Beaker, FlaskConical, Droplet, Microscope, TestTube, Shield, MessageCircle } from "lucide-react";

const palintestFeatures = [
  { icon: Beaker, title: "300+ Products", desc: "Full Palintest range — Lumiso photometers, Kemio analyzers, tablet tests, COD tube tests, Wagtech kits" },
  { icon: Droplet, title: "40+ Test Parameters", desc: "Chlorine, pH, alkalinity, hardness, ammonia, nitrate, iron, manganese, COD, and more" },
  { icon: FlaskConical, title: "COD Tube Tests", desc: "8 ranges from 0–150 to 0–20,000 mg/L with mercury and mercury-free options" },
  { icon: Microscope, title: "Microbiological Kits", desc: "Wagtech Potatest, Potalab, Potakit, Potatech+ and Delagua field testing kits" },
  { icon: Shield, title: "Genuine Products", desc: "Official UK distributor — full manufacturer warranty and after-sales support" },
  { icon: MessageCircle, title: "WhatsApp Quotations", desc: "Get pricing in KES within minutes. Fast delivery across all Kenyan regions" },
];

const Index = () => {
  usePageMeta({
    title: "Palintest Kenya | Official Distributor — Water Testing Equipment, Photometers & Reagents | Moris Entreprises",
    description: "Official Palintest distributor in Kenya. Shop 300+ water testing products — Lumiso photometers, Kemio analyzers, DPD tablet tests, COD tube tests (0–20,000 mg/L), Wagtech microbiological kits & Delagua field kits. Authorized UK partner. Fast delivery Nairobi, Mombasa, Kisumu. WhatsApp for KES pricing.",
    keywords: "Palintest, Palintest Kenya, Palintest distributor, Palintest Nairobi, buy Palintest Kenya, Palintest price Kenya, Palintest water testing, Palintest photometer, Lumiso, Kemio, Wagtech, Palintest DPD tablets, Palintest COD tube tests, water testing equipment, water analysis Kenya, laboratory chemicals, medical equipment, laboratory reagents, diagnostic tools, chromatography consumables, microbiology media, quality control equipment, water quality, water testing Kenya",
    type: "website",
    canonical: "https://morisentreprises.com/",
    breadcrumbs: [
      { name: "Home", url: "https://morisentreprises.com/" },
    ],
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Partners />

      {/* Palintest Feature Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block bg-primary/10 text-primary font-display font-bold text-sm px-4 py-2 rounded-full mb-4">
              Official UK Distributor
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Palintest Water Testing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Authorized Palintest distributor in Kenya — 300+ water testing products from the UK's leading water analysis brand. Genuine products, expert support, fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {palintestFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate("/palintest")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-lg px-10 py-6"
            >
              Explore Full Palintest Range →
            </Button>
          </div>
        </div>
      </section>

      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
