import Container from "../Container";

const differentials = [
  {
    icon: "🚀",
    title: "Atendimento Digital",
    description: "Tudo online, sem precisar ir ao escritório",
  },
  {
    icon: "⚡",
    title: "Sem Burocracia",
    description: "Processo simples e direto ao ponto",
  },
  {
    icon: "💡",
    title: "Tecnologia Própria",
    description: "Plataforma moderna para você acompanhar tudo",
  },
  {
    icon: "💬",
    title: "Comunicação Clara",
    description: "Sem juridiquês, você entende tudo",
  },
  {
    icon: "🎯",
    title: "Foco em Pequenos Negócios",
    description: "Especialistas em MEI e pequenas empresas",
  },
  {
    icon: "🤝",
    title: "Atendimento Humanizado",
    description: "Tecnologia + cuidado pessoal",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Por Que Escolher a Gente?
          </h2>
          <p className="text-xl text-gray-300">
            O que nos torna diferentes dos contadores tradicionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <div className="text-5xl mb-4">{diff.icon}</div>
              <h3 className="text-xl font-bold mb-2">{diff.title}</h3>
              <p className="text-gray-300">{diff.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
