import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "Waste Water Testing Equipment",
    description: "Professional water testing equipment for comprehensive waste water analysis and monitoring.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F30f1b782cfe0495f9227f0fce3b7437f?format=webp&width=800"
  },
  {
    name: "Pool Water Testing Kits",
    description: "Complete pool water testing solutions with accurate pH and chlorine detection.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F48564bb9966644279a1731358b22bba5?format=webp&width=800"
  },
  {
    name: "Spa Water Analysis Systems",
    description: "Advanced spa water quality analysis for optimal water conditions and guest safety.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F34cfa99f0b394d779afbc01fff255ea0?format=webp&width=800"
  },
  {
    name: "Multi-parameter Water Testers",
    description: "Comprehensive water testing devices measuring pH, alkalinity, chlorine, and more.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F1816ee0c5e0843668796cb010a13659d?format=webp&width=800"
  },
  {
    name: "Portable Testing Meters",
    description: "Handheld water testing meters for field analysis and on-site water quality checks.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2Fc3e20b5bcda54d66a1d766059da90f0b?format=webp&width=800"
  },
  {
    name: "Advanced Testing Equipment",
    description: "Professional-grade water analysis systems for comprehensive laboratory testing.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F115712022c464cde99a57e24a6f26bef?format=webp&width=800"
  },
  {
    name: "Test Strips & Kits",
    description: "Easy-to-use test strips for quick water quality assessment and monitoring.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F6ea96fdb41454ecebcd24982f90de245?format=webp&width=800"
  },
  {
    name: "Complete Testing Kits",
    description: "Comprehensive testing kit packages with all necessary reagents and equipment.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F2fd6541613ba4157a7f5fa201d833041?format=webp&width=800"
  },
  {
    name: "Premium Testing Solutions",
    description: "High-end water testing solutions for professional and industrial applications.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F6ea96fdb41454ecebcd24982f90de245?format=webp&width=800"
  }
];

const WasteWaterFiltration = () => {
  return (
    <ProductPageLayout
      title="Waste Water, Pool and Spa Filtration"
      description="Comprehensive water testing equipment and reagents offering analysis solutions for all types of water systems and industries including waste water, pools, and spas."
    >
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-full h-48 bg-muted overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground flex-1">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 prose prose-lg max-w-none bg-secondary/50 p-8 rounded-lg">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Complete Water Management Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We are suppliers of water testing equipment and reagents offering analysis solutions for 
          all types of water systems and industries. Our comprehensive range includes products for 
          waste water management, pool maintenance, and spa water quality control, ensuring safe and 
          clean water in all applications.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Water Testing Services Include:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Professional waste water analysis and monitoring</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Pool and spa water quality testing</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>pH, alkalinity, and chlorine detection</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Multi-parameter water analysis</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Portable field testing solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Advanced laboratory testing equipment</span>
          </li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default WasteWaterFiltration;
