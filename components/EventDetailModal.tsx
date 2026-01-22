import React, { useState, useEffect } from 'react';
import { UserEvent } from '../types';
import { X, Clock, MapPin, AlignLeft, Trash2, Check, Calendar } from 'lucide-react';
import { format, addMinutes, startOfDay, isSameDay } from 'date-fns';

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: UserEvent | null;
  onSave: (event: UserEvent) => void;
  onDelete: (id: string) => void;
}

const COLORS = ['#007AFF', '#FF3B30', '#FF9500', '#34C759', '#5856D6', '#AF52DE', '#FF2D55', '#A2845E'];

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  isOpen,
  onClose,
  event,
  onSave,
  onDelete,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startStr, setStartStr] = useState('');
  const [endStr, setEndStr] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [customColor, setCustomColor] = useState('#000000');

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description || '');
      setLocation(event.location || '');
      // Format for input type="datetime-local"
      setStartStr(format(new Date(event.startTime), "yyyy-MM-dd'T'HH:mm"));
      setEndStr(format(new Date(event.endTime), "yyyy-MM-dd'T'HH:mm"));
      setSelectedColor(COLORS.includes(event.color) ? event.color : 'custom');
      if (!COLORS.includes(event.color)) setCustomColor(event.color);
      setIsCompleted(event.isCompleted);
    }
  }, [event, isOpen]);

  if (!isOpen || !event) return null;

  const handleSave = () => {
    if (!title.trim()) return;

    let start = new Date(startStr).getTime();
    let end = new Date(endStr).getTime();

    // Defense: Time Holes (End < Start)
    if (end <= start) {
        end = start + 30 * 60 * 1000; // Force 30 mins
    }

    // Defense: Cross Day (Simplified for MVP: clamp to 23:59 of start day)
    const dayEnd = new Date(startStr);
    dayEnd.setHours(23, 59, 59, 999);
    if (end > dayEnd.getTime()) {
         // Ideally split, but for MVP we clamp or allow if your UI supports it.
         // Since our day view is 08-22, let's just clamp visually or let it be.
         // We will allow it but the visualization might cut off.
    }

    const color = selectedColor === 'custom' ? customColor : selectedColor;

    onSave({
      ...event,
      title,
      description,
      location,
      startTime: start,
      endTime: end,
      color,
      isCompleted
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
        <div className="p-6 pb-2 border-b border-gray-100 flex justify-between items-center">
             <button onClick={onClose} className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                <X className="w-5 h-5" />
             </button>
             <h3 className="font-bold text-lg">{event.id ? '编辑事项' : '新建事项'}</h3>
             <button 
                onClick={handleSave}
                disabled={!title}
                className="text-apple-blue font-bold px-2 disabled:opacity-50"
             >
                保存
             </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Title Input */}
            <div>
                <input 
                    type="text" 
                    placeholder="准备做什么？"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-2xl font-bold placeholder-gray-300 border-none focus:ring-0 p-0 text-gray-900"
                    autoFocus
                />
            </div>

            {/* Status Toggle */}
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => setIsCompleted(!isCompleted)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${
                        isCompleted 
                        ? 'bg-gray-100 text-gray-500 border-gray-200 line-through' 
                        : 'bg-green-50 text-green-600 border-green-100'
                    }`}
                >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isCompleted ? 'border-gray-400' : 'border-green-500 bg-green-500'}`}>
                        {(!isCompleted || isCompleted) && <Check className={`w-3 h-3 ${isCompleted ? 'text-gray-400' : 'text-white'}`} />}
                    </div>
                    <span>{isCompleted ? '已完成' : '标记完成'}</span>
                </button>
            </div>

            {/* Time Settings */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <div className="flex-1 grid grid-cols-2 gap-2">
                        <input 
                            type="datetime-local" 
                            value={startStr}
                            onChange={(e) => setStartStr(e.target.value)}
                            className="bg-gray-50 rounded-lg px-3 py-2 text-sm border-none focus:ring-1 focus:ring-apple-blue"
                        />
                        <input 
                            type="datetime-local" 
                            value={endStr}
                            onChange={(e) => setEndStr(e.target.value)}
                            className="bg-gray-50 rounded-lg px-3 py-2 text-sm border-none focus:ring-1 focus:ring-apple-blue"
                        />
                    </div>
                </div>
            </div>

            {/* Meta Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="添加地点"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="flex-1 bg-transparent border-b border-gray-100 focus:border-apple-blue focus:outline-none py-1"
                    />
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                    <AlignLeft className="w-5 h-5 mt-1" />
                    <textarea 
                        placeholder="添加备注"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex-1 bg-transparent border-b border-gray-100 focus:border-apple-blue focus:outline-none py-1 min-h-[60px] resize-none"
                    />
                </div>
            </div>

            {/* Color Picker */}
            <div>
                <label className="text-xs font-semibold text-gray-400 mb-3 block">标记颜色</label>
                <div className="flex flex-wrap gap-3">
                    {COLORS.map(c => (
                        <button
                            key={c}
                            onClick={() => setSelectedColor(c)}
                            className={`w-8 h-8 rounded-full transition-transform ${selectedColor === c ? 'scale-110 ring-2 ring-offset-2 ring-gray-300' : ''}`}
                            style={{ backgroundColor: c }}
                        />
                    ))}
                    <div className="relative">
                        <input 
                            type="color" 
                            value={customColor}
                            onChange={(e) => { setCustomColor(e.target.value); setSelectedColor('custom'); }}
                            className="absolute inset-0 opacity-0 w-8 h-8 cursor-pointer"
                        />
                         <button
                            className={`w-8 h-8 rounded-full transition-transform bg-gradient-to-br from-red-500 via-green-500 to-blue-500 ${selectedColor === 'custom' ? 'scale-110 ring-2 ring-offset-2 ring-gray-300' : ''}`}
                        />
                    </div>
                </div>
            </div>

            {/* Delete Button */}
            {event.title && (
                 <button 
                    onClick={() => onDelete(event.id)}
                    className="w-full py-3 text-red-500 bg-red-50 rounded-xl font-medium mt-4 flex items-center justify-center gap-2"
                 >
                    <Trash2 className="w-4 h-4" />
                    删除事项
                 </button>
            )}
        </div>
      </div>
    </div>
  );
};