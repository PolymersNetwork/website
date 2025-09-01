import React from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  tag: { color: string; label: string };
  dueDate: string;
  assignees: number;
  progress: { completed: number; total: number };
}

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDragStart,
  onDragEnd,
}) => {
  const progressPercentage = Math.floor((task.progress.completed / task.progress.total) * 100);

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onDragEnd={onDragEnd}
      className="bg-card border border-border rounded-lg p-3 shadow-sm cursor-grab hover:shadow-md transition-all duration-200"
    >
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-medium text-sm text-foreground">{task.title}</h5>
        <span
          className={`text-xs px-2 py-0.5 rounded-full text-white bg-${task.tag.color}`}
        >
          {task.tag.label}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">{task.description}</p>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Due: {task.dueDate}</span>
        <span>Assignees: {task.assignees}</span>
      </div>
      <div className="w-full bg-muted/20 h-2 rounded-full mt-2">
        <div
          className={`h-2 rounded-full bg-${task.tag.color}`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskCard;
