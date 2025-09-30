import { CheckCircle } from "lucide-react";

interface BenefitBadgeProps {
  text: string;
}

export default function BenefitBadge({ text }: BenefitBadgeProps) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm backdrop-blur-[32.8px] "
      style={{
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(53, 84, 209, 0.15) 100%)',
        width: 'fit-content',
        height: '36px'
      }}
    >
      <CheckCircle size={16} className="text-white opacity-90" />
      <span className="font-medium">{text}</span>
    </div>
  );
}