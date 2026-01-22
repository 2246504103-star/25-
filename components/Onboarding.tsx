import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { Search, GraduationCap, ChevronRight } from 'lucide-react';

interface OnboardingProps {
  onSelect: (classId: string) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClasses = SCHEDULE_DATA.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-[100dvh] max-w-lg mx-auto bg-white sm:bg-apple-gray sm:shadow-xl sm:my-8 sm:rounded-[32px] overflow-hidden">
      
      {/* Header */}
      <div className="pt-[max(3rem,env(safe-area-inset-top))] pb-6 px-6 bg-white z-10 sticky top-0 border-b border-gray-100">
        <div className="mb-2">
            <span className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-4">
                <GraduationCap className="w-8 h-8 text-apple-blue" />
            </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-apple-text mb-2">
          欢迎同学
        </h1>
        <p className="text-apple-subtext text-lg">
          请选择您的班级以查看专属课表
        </p>

        {/* Search Bar */}
        <div className="relative mt-6 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-apple-blue transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-gray-100 text-apple-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-apple-blue/50 focus:bg-white transition-all"
            placeholder="搜索班级..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50/50 pb-[env(safe-area-inset-bottom)]">
        <div className="space-y-3">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls) => (
              <button
                key={cls.id}
                onClick={() => onSelect(cls.id)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 group border border-transparent hover:border-blue-100"
              >
                <div className="flex flex-col items-start">
                    <span className="font-semibold text-lg text-gray-900">{cls.name}</span>
                    <span className="text-xs text-gray-400 mt-1">2025-2026学年第2学期</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-apple-blue transition-colors" />
              </button>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400">
              <p>未找到相关班级</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 text-center text-xs text-gray-300 bg-gray-50/50 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        UniCalendar v1.0
      </div>
    </div>
  );
};