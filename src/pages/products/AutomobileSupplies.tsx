import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Automotive Diagnostic Equipment",
  "Engine Testing Systems",
  "Emission Testing Instruments",
  "Battery Testing Devices",
  "Oil Analysis Kits",
  "Fluid Testing Equipment",
  "Brake System Testers",
  "Suspension Analysis Tools",
  "Vehicle Performance Analyzers",
];

const AutomobileSupplies = () => {
  return (
    <ProductPageLayout
      title="Automobile Supplies"
      description="Our comprehensive range of automobile supplies includes professional-grade testing and diagnostic equipment designed for automotive service centers and laboratories."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              {product}
            </h3>
            <p className="text-muted-foreground">
              Professional-grade automobile testing and diagnostic equipment for service centers.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Premium Automobile Testing Equipment
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We provide a comprehensive selection of automobile diagnostic and testing equipment designed 
          to meet the demanding needs of modern automotive service centers. Our products combine precision, 
          reliability, and ease of use to support accurate diagnostics and efficient maintenance workflows.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default AutomobileSupplies;
