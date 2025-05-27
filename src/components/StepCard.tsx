import { ReactNode } from "react";

interface StepCardProps {
  title: string;
  description: string;
  imgSrc: string;
  icon?: ReactNode;
}

export default function StepCard({ title, description, imgSrc }: StepCardProps) {
  return (
    <div className="flex flex-col h-full bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <div className="w-full md:h-72 lg:h-80 mb-6 mx-auto overflow-hidden flex items-center justify-center">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-center mb-2 line-clamp-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-center line-clamp-3">
        {description}
      </p>
    </div>
  );
}
