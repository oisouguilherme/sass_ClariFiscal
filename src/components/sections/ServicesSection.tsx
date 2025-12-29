import Container from "../Container";
import ServiceCard from "../ServiceCard";

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real

const services = [
  {
    icon: "📋",
    title: "Regularização de MEI",
    description:
      "DAS atrasado? Empresa irregular? Resolvemos tudo para você ficar em dia com a Receita.",
    cta: "Regularizar meu MEI",
  },
  {
    icon: "🏢",
    title: "Abertura de Empresa",
    description:
      "Abra sua empresa de forma rápida e sem burocracia. Cuidamos de todo o processo.",
    cta: "Abrir minha empresa",
  },
  {
    icon: "📊",
    title: "Declaração de Imposto de Renda",
    description:
      "Declaração completa de IR para pessoa física e MEI, com máxima restituição.",
    cta: "Fazer minha declaração",
  },
  {
    icon: "💼",
    title: "Contabilidade Mensal Digital",
    description:
      "Gestão contábil completa todo mês. Impostos, obrigações e relatórios em dia.",
    cta: "Quero gestão mensal",
  },
];

export default function ServicesSection() {
  const handleServiceClick = (serviceName: string) => {
    const message = `Olá! Tenho interesse no serviço: ${serviceName}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-green-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            O que podemos fazer pela sua empresa hoje
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onCtaClick={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
