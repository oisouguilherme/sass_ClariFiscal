import Container from "../Container";

const steps = [
  {
    number: "1",
    title: "Você entra em contato",
    description: "Pelo WhatsApp ou formulário, de forma rápida e simples.",
  },
  {
    number: "2",
    title: "Enviamos um formulário simples",
    description: "Só as informações essenciais, nada complicado.",
  },
  {
    number: "3",
    title: "Organizamos tudo online",
    description: "Cuidamos de toda a parte burocrática e contábil.",
  },
  {
    number: "4",
    title: "Você acompanha pelo WhatsApp",
    description: "Comunicação direta, clara e sem enrolação.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600">
            Processo simples e transparente em 4 passos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-green-50 rounded-lg max-w-2xl mx-auto">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-green-700">Simples assim.</span> Sem
            burocracia, sem complicação.
          </p>
        </div>
      </Container>
    </section>
  );
}
