export interface ClassCourse {
  id: string;
  name: string;
  teacher?: string;
  room?: string;
  weeks: string; // e.g., "2-17周"
  dayOfWeek: number; // 1 = Monday, 7 = Sunday
  startSlot: number;
  endSlot: number;
  period: 'morning' | 'afternoon' | 'evening';
  rawInfo?: string; // For any extra OCR text
}

export interface ClassSchedule {
  id: string;
  name: string;
  courses: ClassCourse[];
}

export interface UserNote {
  id: string;
  courseId: string;
  dateStr: string; // YYYY-MM-DD
  content: string;
  createdAt: number;
}

export interface UserEvent {
  id: string;
  title: string;
  startTime: number; // Unix timestamp
  endTime: number;   // Unix timestamp
  color: string;     // Hex code
  isCompleted: boolean;
  description?: string;
  location?: string;
}

export enum SlotTime {
  S1 = "08:10 - 08:55",
  S2 = "09:05 - 09:50",
  S3 = "10:10 - 10:55",
  S4 = "11:05 - 11:50",
  S5 = "14:30 - 15:15",
  S6 = "15:25 - 16:10",
  S7 = "16:30 - 17:15",
  S8 = "17:25 - 18:10",
  S9 = "19:10 - 19:55",
  S10 = "20:05 - 20:50",
  S11 = "21:00 - 21:45",
}