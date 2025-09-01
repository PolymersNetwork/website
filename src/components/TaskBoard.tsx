import React, { useState } from "react";
import TaskColumn, { Column } from "./TaskColumn";
import { Task } from "./TaskCard";
import { initialColumns } from "./InitialColumns";

const TaskBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);

  const handleTaskDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData("taskId", task.id);
    setDraggedTask(task);

    const sourceColumn = columns.find((col) =>
      col.tasks.some((t) => t.id === task.id)
    );

    if (sourceColumn) {
      setDragSourceColumn(sourceColumn.id);
      e.dataTransfer.setData("sourceColumnId", sourceColumn.id);
    }
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    setDragSourceColumn(null);
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDragLeave = (e: React.DragEvent) => {};

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumnId = e.dataTransfer.getData("sourceColumnId");

    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) return;

    const newColumns = columns.map((column) => {
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== taskId),
        };
      }
      if (column.id === targetColumnId) {
        const taskToMove = columns
          .find((col) => col.id === sourceColumnId)
          ?.tasks.find((task) => task.id === taskId);
        if (taskToMove) {
          return { ...column, tasks: [...column.tasks, taskToMove] };
        }
      }
      return column;
    });

    setColumns(newColumns);
  };

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((column) => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={() => {}}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
