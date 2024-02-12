export interface ToDoProp {
    id: number;
    title: string;
    status: string;
    badge: string;
    badgeClass: string;
    timeLimit: string;
  }
  
  export interface ToDoSliceProp {
    showSideBar: boolean;
    todoList: ToDoProp[] | [];
    task: string;
  }