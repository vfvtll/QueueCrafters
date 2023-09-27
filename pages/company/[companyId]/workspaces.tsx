// pages/company/[companyId]/workspaces.tsx
import React from 'react';
import { useRouter } from 'next/router';
import IWorkspace from '../../../types/workspace'; // Импортируйте компонент Workspace
import Workspace from '../../../components/Workspace'; // Импортируйте компонент Workspace
import Service from '../../../components/Service'; // Импортируйте компонент Service
import WorkspaceForm from '../../../components/WorkspaceForm';

const WorkspacesPage: React.FC = () => {
  const router = useRouter();
  const { companyId } = router.query;

  // Предположим, что у вас есть данные о рабочих областях и услугах
  const workspaces = []/* Загрузите данные о рабочих областях с сервера */;
  const services = []/* Загрузите данные о доступных услугах с сервера */;

  // Функция для добавления новой рабочей области
  const addWorkspace = (newWorkspace: IWorkspace) => {
    // Обработка добавления рабочей области на сервере и обновление данных
  };

  return (
    <div>
      <h1>Управление рабочими областями</h1>
      <p>ID компании: {companyId}</p>
      {workspaces.map((workspace) => (
        <Workspace key={workspace.id} {...workspace} />
      ))}
      <h2>Добавить новую рабочую область</h2>
      <WorkspaceForm onSubmit={addWorkspace} services={services} />
    </div>
  );
};

export default WorkspacesPage;
