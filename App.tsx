import React, { useState, useEffect } from 'react';
import { Onboarding } from './components/Onboarding';
import { CalendarView } from './components/CalendarView';
import { ClassSchedule } from './types';
import { SCHEDULE_DATA } from './constants';

const App: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'onboarding' | 'calendar'>('onboarding');

  // Load persistence
  useEffect(() => {
    const savedClassId = localStorage.getItem('selectedClassId');
    if (savedClassId) {
      setSelectedClassId(savedClassId);
      setCurrentView('calendar');
    }
  }, []);

  const handleSelectClass = (classId: string) => {
    localStorage.setItem('selectedClassId', classId);
    setSelectedClassId(classId);
    setCurrentView('calendar');
  };

  const handleReset = () => {
    localStorage.removeItem('selectedClassId');
    setSelectedClassId(null);
    setCurrentView('onboarding');
  };

  const currentClassSchedule = SCHEDULE_DATA.find(c => c.id === selectedClassId);

  return (
    <div className="min-h-screen bg-apple-gray text-apple-text font-sans antialiased selection:bg-apple-blue selection:text-white">
      {currentView === 'onboarding' && (
        <Onboarding onSelect={handleSelectClass} />
      )}
      
      {currentView === 'calendar' && currentClassSchedule && (
        <CalendarView 
          schedule={currentClassSchedule} 
          onBack={handleReset} 
        />
      )}
    </div>
  );
};

export default App;