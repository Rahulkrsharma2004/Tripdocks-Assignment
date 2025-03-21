import React from "react";

interface VariablePopoverProps {
  onSelect: (variable: string) => void;
}

const VARIABLES = [
  { id: "user_name", label: "User Name", value: "{{user_name}}" },
  { id: "company", label: "Company", value: "{{company}}" },
  { id: "email", label: "Email Address", value: "{{email}}" },
  { id: "date", label: "Current Date", value: "{{date}}" },
  { id: "subscription_plan", label: "Subscription Plan", value: "{{subscription_plan}}" },
  { id: "account_balance", label: "Account Balance", value: "{{account_balance}}" },
  { id: "support_phone", label: "Support Phone", value: "{{support_phone}}" },
  { id: "website_url", label: "Website URL", value: "{{website_url}}" },
];

const VariablePopover: React.FC<VariablePopoverProps> = ({ onSelect }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white w-full">
      <p className="font-semibold text-gray-700 mb-2">📌 Insert Variable:</p>
      
      {/* Variable Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {VARIABLES.map((variable) => (
          <button
            key={variable.id}
            onClick={() => onSelect(variable.value)}
            className="px-3 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white transition w-full sm:w-auto break-words"
          >
            {variable.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VariablePopover;
