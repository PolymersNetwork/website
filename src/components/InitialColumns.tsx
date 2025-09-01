import { Column } from "./TaskColumn";

// Initial data for the Recycling board
export const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Collect',
    color: 'muted',
    tasks: [
      {
        id: 't1',
        title: 'Collect plastic bottles',
        description: 'Gather all plastic bottles from community bins',
        tag: { color: 'blue', label: 'Plastic' },
        dueDate: 'Aug 25',
        assignees: 2,
        progress: { completed: 0, total: 5 }
      },
      {
        id: 't2',
        title: 'Collect glass jars',
        description: 'Gather all glass jars from households',
        tag: { color: 'amber', label: 'Glass' },
        dueDate: 'Aug 26',
        assignees: 1,
        progress: { completed: 0, total: 4 }
      },
      {
        id: 't3',
        title: 'Collect paper waste',
        description: 'Pick up paper and cardboard from offices',
        tag: { color: 'purple', label: 'Paper' },
        dueDate: 'Aug 27',
        assignees: 2,
        progress: { completed: 0, total: 6 }
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'Being Sorted',
    color: 'blue',
    tasks: [
      {
        id: 't4',
        title: 'Plastic bottles sorting',
        description: 'Separate PET from HDPE bottles',
        tag: { color: 'blue', label: 'Plastic' },
        dueDate: 'Aug 25',
        assignees: 1,
        progress: { completed: 1, total: 3 }
      },
      {
        id: 't5',
        title: 'Glass jars sorting',
        description: 'Separate green, brown, and clear glass',
        tag: { color: 'amber', label: 'Glass' },
        dueDate: 'Aug 26',
        assignees: 2,
        progress: { completed: 0, total: 2 }
      }
    ]
  },
  {
    id: 'in-review',
    title: 'Ready for Recycling',
    color: 'amber',
    tasks: [
      {
        id: 't6',
        title: 'Plastic bottles ready',
        description: 'Check for contamination before recycling',
        tag: { color: 'blue', label: 'Plastic' },
        dueDate: 'Aug 27',
        assignees: 1,
        progress: { completed: 2, total: 2 }
      },
      {
        id: 't7',
        title: 'Glass jars ready',
        description: 'Clean and organize by color',
        tag: { color: 'amber', label: 'Glass' },
        dueDate: 'Aug 27',
        assignees: 1,
        progress: { completed: 2, total: 2 }
      }
    ]
  },
  {
    id: 'completed',
    title: 'Recycled',
    color: 'accent',
    tasks: [
      {
        id: 't8',
        title: 'Paper recycled',
        description: 'Processed into recycled paper products',
        tag: { color: 'purple', label: 'Paper' },
        dueDate: 'Aug 25',
        assignees: 2,
        progress: { completed: 3, total: 3 }
      },
      {
        id: 't9',
        title: 'Plastic recycled',
        description: 'Processed into new PET products',
        tag: { color: 'blue', label: 'Plastic' },
        dueDate: 'Aug 26',
        assignees: 1,
        progress: { completed: 3, total: 3 }
      }
    ]
  }
];
