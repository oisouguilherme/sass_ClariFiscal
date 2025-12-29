import Container from "../Container";
import Button from "../Button";

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real
const WHATSAPP_MESSAGE =
  "Olá! Vim pela landing page e gostaria de conversar sobre os serviços contábeis.";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-linear-to-br from-green-600 via-green-700 to-green-800 text-white py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contabilidade simples, digital e sem dor de cabeça para MEIs e
            pequenos negócios
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl mb-10 text-green-50 leading-relaxed">
            Regularizamos sua empresa, organizamos suas finanças e cuidamos dos
            impostos — tudo online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              💬 Falar com um contador agora
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById("formulario")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-gray-50"
            >
              Quero organizar minha empresa
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-green-100">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Atendimento 100% digital</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Sem burocracia</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
