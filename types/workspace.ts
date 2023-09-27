// types/workspace.ts

interface Workspace {
    id: number; // Уникальный идентификатор рабочей области
    name: string; // Название рабочей области
    description: string; // Описание рабочей области
    selectedServices: number; // Массив идентификаторов выбранных услуг
  }
  
  export default Workspace;
  