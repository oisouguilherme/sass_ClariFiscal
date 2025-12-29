import { useState } from "react";
import Container from "../Container";
import Button from "../Button";

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    servico: "",
    tipoEmpresa: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Montar mensagem para WhatsApp
    const message = `
*Novo Lead - Landing Page*

*Nome:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Serviço:* ${formData.servico}
*Tipo de Empresa:* ${formData.tipoEmpresa}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Redirecionar para WhatsApp
    window.open(url, "_blank");

    // Reset form
    setTimeout(() => {
      setFormData({ nome: "", whatsapp: "", servico: "", tipoEmpresa: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="formulario"
      className="py-20 bg-linear-to-br from-green-600 to-green-700"
    >
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* CTA Final */}
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Não deixe sua empresa começar o ano com problemas
            </h2>
            <p className="text-xl text-green-50">
              Fale com um contador agora e organize sua vida fiscal
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Preencha seus dados
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="servico"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Serviço desejado *
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Regularização de MEI">
                    Regularização de MEI
                  </option>
                  <option value="Abertura de Empresa">
                    Abertura de Empresa
                  </option>
                  <option value="Declaração de IR">
                    Declaração de Imposto de Renda
                  </option>
                  <option value="Contabilidade Mensal">
                    Contabilidade Mensal
                  </option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="tipoEmpresa"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Tipo de empresa *
                </label>
                <select
                  id="tipoEmpresa"
                  name="tipoEmpresa"
                  required
                  value={formData.tipoEmpresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="MEI">MEI</option>
                  <option value="ME - Microempresa">ME - Microempresa</option>
                  <option value="Ainda não tenho empresa">
                    Ainda não tenho empresa
                  </option>
                  <option value="Pessoa Física">Pessoa Física</option>
                </select>
              </div>

              <Button variant="primary" className="w-full text-white">
                {isSubmitting ? "Enviando..." : "💬 Enviar e falar no WhatsApp"}
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
              Seus dados estão seguros. Entraremos em contato rapidamente.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
