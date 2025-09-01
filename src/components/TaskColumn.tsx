import React, { useState } from 'react';
import TaskCard, { Task } from './TaskCard';

export interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

interface TaskColumnProps {
  column: Column;
  onDrop: (e: React.DragEvent, columnId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onTaskDragStart: (e: React.DragEvent, task: Task) => void;
  onTaskDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  column,
  onDrop,
  onDragOver,
  onDragLeave,
  onTaskDragStart,
  onTaskDragEnd,
}) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
    onDragOver(e);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    setIsOver(false);
    onDragLeave(e);
  };

  const handleDrop = (e: React.DragEvent) => {
    setIsOver(false);
    onDrop(e, column.id);
  };

  return (
    <div
      className={`flex flex-col w-72 min-w-72 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
        isOver ? 'column-highlight border-muted/50' : 'bg-card/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full bg-${column.color}`}></span>
          <h4 className="font-medium text-sm text-foreground">{column.title}</h4>
          <span className="text-xs bg-muted/50 px-2 py-0.5 rounded-full text-muted-foreground">
            {column.tasks.length}
          </span>
        </div>
      </div>
      <div className="p-2 flex-1 space-y-2 overflow-auto">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDragStart={onTaskDragStart}
            onDragEnd={onTaskDragEnd}
            onStatusChange={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
