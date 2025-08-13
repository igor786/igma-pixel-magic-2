import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ 
  title, 
  description, 
  icon, 
  className = '' 
}) => {
  return (
    <div className={`border overflow-hidden bg-white p-8 rounded-[20px] border-solid border-[#E6E9F2] ${className}`}>
      {icon && (
        <img
          src={icon}
          alt=""
          className="aspect-[1] object-contain w-10 mb-10"
        />
      )}
      <div className="w-full gap-6">
        <div className="w-full">
          <h3 className="text-[#333338] text-lg font-semibold leading-loose">
            {title}
          </h3>
          <p className="text-[#555558] text-sm font-normal leading-[22px] mt-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
