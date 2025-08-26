import { FC } from "react";

// CardInDash.tsx
export interface DashCardItem {
  id: number;
  title: string;
  description: string;
}

interface DashCardProps {
  card: DashCardItem;
}

const DashCard: FC<DashCardProps> = ({ card }) => {
  return (
    <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transform transition-all duration-200">
        <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
        <div className="text-sm text-gray-600 mt-1">{card.description}</div>
      </div>
    </div>
  );
};

export default DashCard;
