import Container from "../Container";
import FeatureCard from "../FeatureCard";

const solutions = [
  {
    icon: "💻",
    title: "Atendimento Online",
    description:
      "Tudo pelo WhatsApp e plataforma digital. Sem precisar sair de casa.",
  },
  {
    icon: "📁",
    title: "Organização de Documentos",
    description:
      "A gente organiza toda a documentação da sua empresa de forma simples.",
  },
  {
    icon: "✅",
    title: "Impostos em Dia",
    description:
      "Cuidamos de todas as obrigações fiscais para você ficar tranquilo.",
  },
  {
    icon: "📈",
    title: "Relatórios Simples",
    description:
      "Você entende sua situação financeira sem precisar ser contador.",
  },
  {
    icon: "🤝",
    title: "Suporte Contínuo",
    description: "Estamos sempre disponíveis para tirar suas dúvidas.",
  },
  {
    icon: "🎯",
    title: "Foco em Pequenos Negócios",
    description: "Especialistas em MEI e pequenas empresas como a sua.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            A Nossa Solução
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Você cuida do seu negócio.{" "}
            <span className="text-green-600 font-semibold">
              A gente cuida da parte contábil.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard key={index} {...solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
