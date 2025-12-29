import Container from "../Container";
import ProblemCard from "../ProblemCard";

const problems = [
  {
    icon: "📅",
    text: "DAS atrasado e você não sabe como regularizar",
  },
  {
    icon: "💰",
    text: "Multas e juros acumulando por falta de organização",
  },
  {
    icon: "📊",
    text: "Falta de controle financeiro e clareza sobre o negócio",
  },
  {
    icon: "😰",
    text: "Medo da Receita Federal e de estar fazendo algo errado",
  },
  {
    icon: "❓",
    text: "Falta de orientação e dependência total do contador",
  },
  {
    icon: "🔴",
    text: "Empresa irregular e sem saber por onde começar",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Reconhece algum desses problemas?
          </h2>
          <p className="text-xl text-gray-600">
            Você não está sozinho. Esses são os desafios mais comuns de quem
            empreende.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-gray-700 font-semibold">
            A boa notícia:{" "}
            <span className="text-green-600">tudo isso tem solução</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
