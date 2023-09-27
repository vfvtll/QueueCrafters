// components/CompanyForm.tsx
import React from 'react';
import CompanyInputField from './InputField';

const CompanyForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки данных на сервер
  };

  return (
    <form onSubmit={handleSubmit}>
      <CompanyInputField label="Имя компании" paramName="companyName" />
      <CompanyInputField label="Логотип" paramName="logo" />
      <CompanyInputField label="Веб ссылка" paramName="webLink" />
      <CompanyInputField label="Номер телефона" paramName="phoneNumber" />
      <CompanyInputField label="Описание компании" paramName="description" />
      <button type="submit">Создать компанию</button>
    </form>
  );
};

export default CompanyForm;
