import type { ReactNode } from 'react';

interface GameModeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function GameModeCard({ icon, title, description }: GameModeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
