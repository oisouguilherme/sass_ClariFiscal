import Container from "../Container";

export default function AuthoritySection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Quem Somos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos uma contabilidade digital que une{" "}
            <span className="text-green-600 font-semibold">
              tecnologia e atendimento humano
            </span>{" "}
            para ajudar pequenos negócios a crescerem com segurança.
          </p>
          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Nossa missão é simplificar a contabilidade e dar clareza financeira
            para quem empreende, sem juridiquês ou complicação.
          </p>
        </div>
      </Container>
    </section>
  );
}
