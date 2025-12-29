interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
  onCtaClick: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  cta,
  onCtaClick,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <button
        onClick={onCtaClick}
        className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-2"
      >
        {cta} <span>→</span>
      </button>
    </div>
  );
}
