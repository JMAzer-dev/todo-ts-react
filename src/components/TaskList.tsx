import React from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

//interface
import { ITask } from "../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-between border-b-4 mb-8 border-[#61dafb] w-[280px] md:max-w-[350px] mx-auto hover:shadow-xl hover:shadow-[#61dafb] duration-700"
          >
            <div className="ml-16">
              <h4>Tarefa: {task.title}</h4>
              <h5>Ás: {task.time} Horas</h5>
              <h5>Duração: {task.timeSpent} Minutos</h5>
            </div>
            <div>
              <i onClick={() => handleEdit(task)}>
                <BiPencil />
              </i>
              <i
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                <BiTrash />
              </i>
            </div>
          </div>
        ))
      ) : (
        <p>Não possui tarefas ainda!</p>
      )}
    </>
  );
};

export default TaskList;
