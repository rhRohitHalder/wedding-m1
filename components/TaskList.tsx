import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
// Fix: Import motion and AnimatePresence from framer-motion instead of accessing them from the window object.
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: 1, text: 'Finalize guest list', completed: true },
  { id: 2, text: 'Book florist', completed: false },
  { id: 3, text: 'Send save-the-dates', completed: true },
  { id: 4, text: 'Schedule cake tasting', completed: false },
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    const newTaskObj: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([newTaskObj, ...tasks]);
    setNewTask('');
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  );
  
  const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  );

  return (
    <AnimatedSection id="tasks">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5B5F97]">Your To-Do List</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Don't miss a single detail. Organize your tasks and stay on track.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleAddTask} className="flex gap-4 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AFB9] focus:outline-none transition-shadow"
          />
          <motion.button
            type="submit"
            className="bg-[#D4AFB9] text-white px-6 py-3 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add
          </motion.button>
        </form>
        <ul className="space-y-3">
          <AnimatePresence>
            {tasks.map(task => (
              <motion.li
                key={task.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-300 ${
                  task.completed ? 'bg-green-50' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => toggleTask(task.id)}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                      task.completed ? 'border-green-400 bg-green-400 text-white' : 'border-gray-300'
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    {task.completed && <CheckIcon />}
                  </motion.button>
                  <span className={`transition-all duration-300 ${
                    task.completed ? 'line-through text-gray-400' : 'text-gray-700'
                  }`}>
                    {task.text}
                  </span>
                </div>
                <motion.button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TrashIcon />
                </motion.button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </AnimatedSection>
  );
};

export default TaskList;