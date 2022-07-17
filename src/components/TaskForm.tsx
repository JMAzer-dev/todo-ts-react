import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Interface
import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(
    id: number,
    title: string,
    time: string,
    timeSpent: number
  ): void;
};

const TaskForm = ({
  btnText,
  setTaskList,
  taskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [timeSpent, setTimeSpent] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, time, timeSpent);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, time, timeSpent };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setTime("");
      setTimeSpent(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "time") {
      setTime(e.target.value);
    } else if (e.target.name === "timeSpent") {
      setTimeSpent(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setTime(task.time);
      setTimeSpent(task.timeSpent);
    }
  }, [task]);

  return (
    <form
      onSubmit={addTaskHandler}
      className="flex flex-col justify-center max-w-[400px] m-auto items-center"
    >
      <div className="flex justify-center items-center hover:shadow-[#61dafb] hover:shadow-lg duration-500 ease-in rounded-md mb-8 ">
        <div>
          <label className="input-container font-bold m-2">
            <span>Título: </span>
            <input
              type="text"
              name="title"
              maxLength={20}
              placeholder="Título da tarefa"
              onChange={handleChange}
              value={title}
              className="rounded-md"
            />
          </label>
        </div>
        <div className="ml-6">
          <div>
            <label className="input-container font-bold m-2">
              <span>Horas: </span>
              <input
                type="time"
                name="time"
                placeholder="Horário da tarefa"
                onChange={handleChange}
                value={time}
                className="rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="input-container font-bold m-2">
              <span>Duração(Min): </span>
              <input
                type="number"
                name="timeSpent"
                step="5"
                max="1440"
                placeholder="Duração da tarefa"
                onChange={handleChange}
                value={timeSpent}
                className="rounded-md"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="hover:shadow-cyan-600">{btnText}</button>
      </div>
    </form>
  );
};

export default TaskForm;
