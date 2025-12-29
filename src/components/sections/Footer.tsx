import Container from "../Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ClariFiscal Contabilidade Digital
          </h3>
          <p className="mb-6">
            Contabilidade simples e digital para pequenos negócios
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Como Funciona
            </a>
            <a
              href="#formulario"
              className="hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm">
              © {currentYear} ClariFiscal. Todos os direitos reservados.
            </p>
            <p className="text-sm mt-2">
              Contabilidade moderna para empreendedores modernos
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
