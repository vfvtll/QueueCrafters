// components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  paramName: string;
  type?: string; // Добавляем свойство type с значением по умолчанию "text"
}

const InputField: React.FC<InputFieldProps> = ({ label, paramName, type = 'text' }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type={type} name={paramName} />
    </div>
  );
};

export default InputField;
