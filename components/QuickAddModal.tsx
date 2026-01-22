import React, { useState } from 'react';
import { UserEvent } from '../types';
import { Send, X } from 'lucide-react';
import { addMinutes, setHours, setMinutes, isValid } from 'date-fns';

interface QuickAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (event: UserEvent) => void;
  currentDate: Date;
}

export const QuickAddModal: React.FC<QuickAddModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  currentDate
}) => {
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Simple Parsing Logic: Extract time (HH:mm) and the rest is title
    // Regex matches 8:00, 08:30, 8点, 8点半
    const timeRegex = /(\d{1,2})[:：](\d{2})|(\d{1,2})点(\d{2})?|(\d{1,2})点半/;
    const match = input.match(timeRegex);

    let start = new Date(currentDate);
    // Default to next hour if no time specified
    start = addMinutes(new Date(), 60); 
    start.setSeconds(0, 0);

    let title = input;

    if (match) {
        let h = 0, m = 0;
        if (match[1] && match[2]) { // 8:00
            h = parseInt(match[1]);
            m = parseInt(match[2]);
        } else if (match[3]) { // 8点...
            h = parseInt(match[3]);
            if (match[4]) m = parseInt(match[4]);
            if (input.includes('半')) m = 30;
        } else if (match[5]) { // 8点半 (fallback)
             h = parseInt(match[5]);
             m = 30;
        }
        
        start = setMinutes(setHours(currentDate, h), m);
        // Remove time string from title for cleaner look
        title = input.replace(match[0], '').trim();
    }

    if (!title) title = "新事项";

    const newEvent: UserEvent = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        startTime: start.getTime(),
        endTime: addMinutes(start, 60).getTime(), // Default 1 hour
        color: '#007AFF',
        isCompleted: false,
    };

    onAdd(newEvent);
    setInput('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white p-4 rounded-t-2xl sm:rounded-2xl shadow-2xl animate-slide-up">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">快速添加</h3>
            <button onClick={onClose}><X className="w-5 h-5 text-gray-400" /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="relative">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例如：明早8点英语课"
                className="w-full bg-gray-100 rounded-xl px-4 py-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-apple-blue/50"
                autoFocus
            />
            <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 aspect-square bg-apple-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
                <Send className="w-5 h-5" />
            </button>
        </form>
        <p className="text-xs text-gray-400 mt-2 px-1">
            尝试输入: "下午3点开会" 或 "14:00 健身"
        </p>
      </div>
    </div>
  );
};