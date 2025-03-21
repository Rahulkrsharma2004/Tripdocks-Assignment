import React from "react";

interface VariablePopoverProps {
  onSelect: (variable: string) => void;
}

const VARIABLES = [
  { id: "user_name", label: "User Name", value: "user_name" },
  { id: "company", label: "Company", value: "company" },
  { id: "email", label: "Email Address", value: "email" },
  { id: "date", label: "Current Date", value: "date" },
  { id: "subscription_plan", label: "Subscription Plan", value: "subscription_plan" },
  { id: "account_balance", label: "Account Balance", value: "account_balance" },
  { id: "support_phone", label: "Support Phone", value: "support_phone" },
  { id: "website_url", label: "Website URL", value: "website_url" },
];

const VariablePopover: React.FC<VariablePopoverProps> = ({ onSelect }) => {
  return (
    <div className="p-3 border rounded-md shadow-sm bg-white">
      <p className="font-semibold">Insert Variable:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {VARIABLES.map((variable) => (
          <button
            key={variable.id}
            onClick={() => onSelect(variable.value)}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            {variable.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VariablePopover;
