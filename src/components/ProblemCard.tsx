interface ProblemCardProps {
  icon: string;
  text: string;
}

export default function ProblemCard({ icon, text }: ProblemCardProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-red-50 rounded-lg border border-red-100">
      <span className="text-3xl shrink-0">{icon}</span>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}
