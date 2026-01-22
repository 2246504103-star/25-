import React, { useState } from 'react';
import { ClassCourse, UserNote, SlotTime } from '../types';
import { X, MapPin, User, Calendar, Clock, BookOpen, Trash2, Plus, Send } from 'lucide-react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

interface CourseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: ClassCourse;
  date: Date;
  notes: UserNote[];
  onAddNote: (courseId: string, content: string) => void;
  onDeleteNote: (noteId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  isOpen,
  onClose,
  course,
  date,
  notes,
  onAddNote,
  onDeleteNote,
}) => {
  const [newNote, setNewNote] = useState('');

  if (!isOpen) return null;

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    onAddNote(course.id, newNote);
    setNewNote('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh] sm:max-h-[80vh]">
        
        {/* Modal Header */}
        <div className="p-6 pb-4 relative">
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
                <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>
            
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-apple-blue text-xs font-semibold tracking-wide mb-3">
                {course.period === 'morning' ? '上午课程' : course.period === 'afternoon' ? '下午课程' : '晚上课程'}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 leading-snug">{course.name}</h2>
            <p className="text-gray-500 mt-1 flex items-center gap-1 text-sm">
                <Calendar className="w-4 h-4" />
                {format(date, 'yyyy年MM月dd日', { locale: zhCN })}
            </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 no-scrollbar">
            
            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs font-medium">地点</span>
                    </div>
                    <div className="text-gray-900 font-semibold">{course.room || "未知地点"}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <User className="w-4 h-4" />
                        <span className="text-xs font-medium">教师</span>
                    </div>
                    <div className="text-gray-900 font-semibold">{course.teacher || "未知教师"}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 col-span-2 flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-2 text-gray-400 mb-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-xs font-medium">具体时间</span>
                        </div>
                        <div className="text-gray-900 font-semibold text-sm">
                           第 {course.startSlot}-{course.endSlot} 节
                        </div>
                    </div>
                    <div className="text-right">
                         <div className="text-xs text-gray-400 mb-1">时段</div>
                         <div className="text-apple-blue font-mono font-medium text-sm">
                            {SlotTime[`S${course.startSlot}` as keyof typeof SlotTime]?.split(' - ')[0]} - {SlotTime[`S${course.endSlot}` as keyof typeof SlotTime]?.split(' - ')[1]}
                         </div>
                    </div>
                </div>
            </div>

            {/* Notes Section */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    课程事项
                </h3>
                
                <div className="space-y-3 mb-6">
                    {notes.length === 0 ? (
                        <div className="text-center py-6 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 text-sm">
                            暂无事项，记录一下作业吧~
                        </div>
                    ) : (
                        notes.map(note => (
                            <div key={note.id} className="bg-yellow-50/50 p-4 rounded-2xl border border-yellow-100 flex items-start justify-between group">
                                <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">{note.content}</p>
                                <button 
                                    onClick={() => onDeleteNote(note.id)}
                                    className="text-gray-300 hover:text-red-500 transition-colors p-1"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

        {/* Input Area (Sticky Bottom) */}
        <div className="p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-gray-50 border-t border-gray-100">
             <form onSubmit={handleSubmitNote} className="relative">
                <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="添加备忘或作业..."
                    className="w-full pl-4 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/50 transition-all text-sm shadow-sm"
                />
                <button 
                    type="submit"
                    disabled={!newNote.trim()}
                    className="absolute right-2 top-2 p-1.5 bg-apple-blue text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                    <Send className="w-4 h-4" />
                </button>
             </form>
        </div>
      </div>
    </div>
  );
};