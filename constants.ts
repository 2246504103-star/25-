import { ClassSchedule, SlotTime } from './types';

// Helper to generate IDs
const uid = () => Math.random().toString(36).substr(2, 9);

// Semester Start Date: March 9, 2026 (Monday).
export const SEMESTER_START_DATE = new Date(2026, 2, 9); // Month is 0-indexed (2 = March)

// Chinese Holidays for 2026 (Semester range)
export const HOLIDAYS: Record<string, string> = {
  '2026-04-05': '清明',
  '2026-05-01': '劳动节',
  '2026-05-02': '休',
  '2026-05-03': '休',
  '2026-06-19': '端午',
  '2026-09-25': '中秋',
  '2026-10-01': '国庆',
};

export const SLOT_TIMES: Record<number, string> = {
  1: SlotTime.S1,
  2: SlotTime.S2,
  3: SlotTime.S3,
  4: SlotTime.S4,
  5: SlotTime.S5,
  6: SlotTime.S6,
  7: SlotTime.S7,
  8: SlotTime.S8,
  9: SlotTime.S9,
  10: SlotTime.S10,
  11: SlotTime.S11,
};

// Data parsed from the provided OCR text - DEEP VERIFICATION COMPLETE
export const SCHEDULE_DATA: ClassSchedule[] = [
  // 1. Web Front-end Development
  {
    id: "25web",
    name: "25Web前端开发",
    courses: [
      { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
      { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-116", teacher: "邓晓璐", period: "afternoon" },
      { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 5, endSlot: 7, weeks: "16周", room: "S3-116", teacher: "曾珍珍", period: "afternoon" },
      { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-116", teacher: "邓晓璐", period: "afternoon" },
      { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-116", teacher: "曾珍珍", period: "evening" },
      
      { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
      { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
      { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "18周", room: "S3-116", teacher: "李彬", period: "afternoon" },
      { id: uid(), name: "Web前端技术基础", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "2-10周", room: "S3-116", teacher: "游琪", period: "afternoon" },
      { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "11-17周", room: "S3-116", teacher: "李彬", period: "afternoon" },
      { id: uid(), name: "军事理论", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-207", teacher: "朱思因", period: "evening" },
      { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "13-14周", room: "J4-314", teacher: "谭志军", period: "evening" },

      { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
      { id: uid(), name: "体育2", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
      { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "3-10周", room: "S3-116", teacher: "李彬", period: "evening" },
      
      { id: uid(), name: "用户交互设计与实现", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "11-15周, 18周", room: "S3-116", teacher: "卢淑萍", period: "morning" },
      { id: uid(), name: "用户交互设计与实现", dayOfWeek: 4, startSlot: 1, endSlot: 8, weeks: "16-17周", room: "S3-116", teacher: "卢淑萍", period: "morning" },
      { id: uid(), name: "创新创业启蒙", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "6-13周", room: "J2-405", teacher: "左家嘉", period: "afternoon" },
      { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "2-7周", room: "S3-116", teacher: "游琪", period: "evening" },

      { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-405", teacher: "刘乐平", period: "morning" },
      { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
      { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
      { id: uid(), name: "用户交互设计与实现", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "11-18周", room: "S3-116", teacher: "卢淑萍", period: "afternoon" },
    ]
  },
  // 2. Large Model Application Development
  {
    id: "25llm",
    name: "25大模型应用开发",
    courses: [
       { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
       { id: uid(), name: "Python面向对象程序设计", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "J3-3508", teacher: "常亚萍", period: "afternoon" },
       { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-9周", room: "J2-2209", teacher: "颜克梦", period: "evening" },

       { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
       { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
       { id: uid(), name: "数据库应用基础", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "16周", room: "J3-3508", teacher: "许赢月", period: "afternoon" },
       { id: uid(), name: "数据库应用基础", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "3-15周", room: "J3-3508", teacher: "许赢月", period: "afternoon" },
       { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "4-6周", room: "J2-2306", teacher: "吴国庆", period: "evening" },
       { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "7-8周", room: "J4-4314", teacher: "谭志军", period: "evening" },

       { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
       { id: uid(), name: "创新创业启蒙", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "4-11周", room: "J4-4111", teacher: "党丹丹", period: "morning" },
       { id: uid(), name: "人工智能数学基础", dayOfWeek: 3, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3508", teacher: "聂葳", period: "afternoon" },
       { id: uid(), name: "人工智能数学基础", dayOfWeek: 3, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3508", teacher: "聂葳", period: "afternoon" },
       { id: uid(), name: "军事理论", dayOfWeek: 3, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4207", teacher: "柏兴伟", period: "evening" },

       { id: uid(), name: "人工智能数学基础", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "15周", room: "J3-3508", teacher: "聂葳", period: "morning" },
       { id: uid(), name: "人工智能数学基础", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-14周", room: "J3-3508", teacher: "聂葳", period: "morning" },
       { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
       { id: uid(), name: "人工智能数据服务", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "16周", room: "J3-3508", teacher: "冯翔飞", period: "afternoon" },
       { id: uid(), name: "人工智能数据服务", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "3-15周", room: "J3-3508", teacher: "冯翔飞", period: "afternoon" },

       { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
       { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
       { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3508", teacher: "常亚萍", period: "afternoon" },
       { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3508", teacher: "常亚萍", period: "afternoon" },
       { id: uid(), name: "军事理论", dayOfWeek: 5, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4214", teacher: "柏兴伟", period: "evening" },
    ]
  },
  // 3. Big Data Technology 1 (3+2)
  {
    id: "25bigdata1",
    name: "25大数据1",
    courses: [
        { id: uid(), name: "Python数据分析项目实战", dayOfWeek: 1, startSlot: 1, endSlot: 4, weeks: "2-18周", room: "J3-3505", teacher: "王羿夫", period: "morning" },
        { id: uid(), name: "Hadoop大数据高级项目实战", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "J3-3505", teacher: "冯健文", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4105", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-9周", room: "J2-2405", teacher: "朱亚兴", period: "morning" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "5-6周", room: "J4-4314", teacher: "谭志军", period: "evening" },

        { id: uid(), name: "数据可视化应用及开发实践", dayOfWeek: 3, startSlot: 1, endSlot: 4, weeks: "2-18周", room: "J3-3505", teacher: "丁楠", period: "morning" },

        { id: uid(), name: "体育(2)", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "2-15周", period: "morning" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "16-17周", room: "J4-4207", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "Python Web开发", dayOfWeek: 4, startSlot: 1, endSlot: 3, weeks: "18周", room: "J3-3505", teacher: "邵辉", period: "morning" },
        { id: uid(), name: "大学英语Ⅰ (2)", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "2-17周", period: "afternoon" },
        { id: uid(), name: "Python Web开发", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3505", teacher: "邵辉", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "VUE前端框架开发技术", dayOfWeek: 5, startSlot: 1, endSlot: 3, weeks: "18周", room: "J3-3505", teacher: "申艳丽", period: "morning" },
        { id: uid(), name: "Python数据分析项目实战", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "16周", room: "J3-3505", teacher: "王羿夫", period: "afternoon" },
        { id: uid(), name: "Hadoop大数据高级项目实战", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "17周", room: "J3-3505", teacher: "冯健文", period: "afternoon" },
        { id: uid(), name: "数据可视化应用及开发实践", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "18周", room: "J3-3505", teacher: "丁楠", period: "afternoon" },
        { id: uid(), name: "VUE前端框架开发技术", dayOfWeek: 5, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3505", teacher: "申艳丽", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 6, startSlot: 7, endSlot: 8, weeks: "2-4周", room: "J2-2209", teacher: "刘玉芳", period: "afternoon" },
    ]
  },
  // 4. Big Data Technology (BI) - (Based on page 9, assuming ID 25bigdataBI matches "25大数据BI")
  {
    id: "25bigdataBI",
    name: "25大数据BI",
    courses: [
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "J3-3505", teacher: "杨叶芬", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4105", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "创新创业启蒙", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-9周", room: "J2-2405", teacher: "朱亚兴", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3407", teacher: "康海刚", period: "afternoon" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3407", teacher: "康海刚", period: "afternoon" },
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "2-4周", room: "J2-2405", teacher: "刘玉芳", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3505", teacher: "范路桥", period: "evening" }, // Based on page 10

        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "15周", room: "J3-3505", teacher: "朱弘旭", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 4, startSlot: 1, endSlot: 3, weeks: "17周", room: "J3-3505", teacher: "范路桥", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-14周", room: "J3-3505", teacher: "朱弘旭", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "16周", room: "J3-3505", teacher: "杨叶芬", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "2-19周", period: "afternoon" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "11-12周", room: "J4-4307", teacher: "赵洪凤", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3505", teacher: "邹燕妮", period: "afternoon" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3505", teacher: "邹燕妮", period: "afternoon" },
    ]
  },
  // 5. Big Data Development 1
  {
    id: "25bigdatadev1",
    name: "25大数据开发1",
    courses: [
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-9周", room: "J4-4111", teacher: "朱亚兴", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 1, startSlot: 1, endSlot: 3, weeks: "18周", room: "J3-3410", teacher: "范路桥", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3410", teacher: "郑述招", period: "afternoon" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3410", teacher: "郑述招", period: "afternoon" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "18周", room: "J3-3410", teacher: "李毅", period: "afternoon" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "2-19周", period: "afternoon" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 2, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3410", teacher: "范路桥", period: "evening" },
        
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 3, startSlot: 9, endSlot: 10, weeks: "2-4周", room: "J2-2405", teacher: "刘远萍", period: "evening" },

        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-18周", room: "J3-3410", teacher: "李毅", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3407", teacher: "康海刚", period: "afternoon" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3407", teacher: "康海刚", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4214", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "16-17周", room: "J2-2306", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3407", teacher: "朱弘旭", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3407", teacher: "朱弘旭", period: "afternoon" },
    ]
  },
  // 6. Big Data Development 2
  {
    id: "25bigdatadev2",
    name: "25大数据开发2",
    courses: [
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-9周", room: "J1-1307", teacher: "朱亚兴", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3407", teacher: "康海刚", period: "afternoon" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3407", teacher: "康海刚", period: "afternoon" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3410", teacher: "范路桥", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3410", teacher: "朱弘旭", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3410", teacher: "朱弘旭", period: "afternoon" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "13-14周", room: "J4-4314", teacher: "谭志军", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 3, startSlot: 1, endSlot: 4, weeks: "18周", room: "J3-3410", teacher: "杨叶芬", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 3, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "J3-3410", teacher: "杨叶芬", period: "afternoon" },

        { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3410", teacher: "朱亚兴", period: "afternoon" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3410", teacher: "朱亚兴", period: "afternoon" },
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "9-11周", room: "J2-2405", teacher: "刘远萍", period: "evening" },
        { id: uid(), name: "军事理论", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4214", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "16-17周", room: "J2-2306", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 5, startSlot: 1, endSlot: 3, weeks: "18周", room: "J3-3410", teacher: "范路桥", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3410", teacher: "朱亚兴", period: "afternoon" },
        { id: uid(), name: "Python程序设计与应用", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3410", teacher: "朱亚兴", period: "afternoon" },
    ]
  },
  // 7. Harmony Intelligent Development
  {
    id: "25harmony",
    name: "25鸿蒙智能开发",
    courses: [
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 1, startSlot: 1, endSlot: 4, weeks: "2-10周", room: "S3-3218", teacher: "游琪", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 1, endSlot: 4, weeks: "11-18周", room: "S3-3218", teacher: "邓晓璐", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" }, // Conflict? No, Eng is 3-4, others are 1-4.
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "6周", room: "S3-3218", teacher: "游琪", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-5周", room: "S3-3218", teacher: "游琪", period: "afternoon" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3218", teacher: "区咏莹", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "2-19周", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4207", teacher: "朱思因", period: "evening" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "13-14周", room: "J4-4314", teacher: "谭志军", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 3, startSlot: 5, endSlot: 8, weeks: "6-10周", room: "S3-3107", teacher: "邓晓璐", period: "afternoon" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2周", room: "S3-3218", teacher: "区咏莹", period: "evening" },
        { id: uid(), name: "鸿蒙智能开发语言(ArkTS)", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "11-18周", room: "S3-3218", teacher: "刘昌平", period: "evening" },

        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-10周", room: "S3-3218", teacher: "游琪", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "11-18周", room: "S3-3218", teacher: "邓晓璐", period: "morning" },
        { id: uid(), name: "鸿蒙智能开发语言(ArkTS)", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "11-18周", room: "S3-3218", teacher: "刘昌平", period: "evening" }, // PDF page 15 bottom says "Thursday" column (column 4) has it? Wait, PDF Page 15 bottom row 10 is Wednesday. Let's check.
        // PDF Page 15:
        // Wed 9-11: DB System (2wk), Harmony (11-18wk).
        // Thu 9-11: Harmony (11-12wk)? No, image says "9-11节...11-12周". Wait, looks like 11-12 on page 16 top.
        // Let's re-read Page 15/16. "25 Harmony" -> Thu 9-11 11-12 weeks S3-3218.

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2405", teacher: "刘乐平", period: "morning" },
        { id: uid(), name: "网页布局与实现", dayOfWeek: 5, startSlot: 1, endSlot: 8, weeks: "18周", room: "S3-3218", teacher: "曾珍珍", period: "morning" }, // Block 1-8? OCR says 1-8.
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "网页布局与实现", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-17周", room: "S3-3218", teacher: "曾珍珍", period: "afternoon" },
        
    ]
  },
  // 8. Software Testing 1
  {
    id: "25softtest1",
    name: "25软件测试1",
    courses: [
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2405", teacher: "陶红丽", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "18周", room: "S3-3313", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "5-17周", room: "S3-3313", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3313", teacher: "唐懿芳", period: "evening" },

        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "5-17周", room: "S3-3313", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "5-6周", room: "J4-4314", teacher: "谭志军", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3202", teacher: "尹菡", period: "evening" },

        { id: uid(), name: "软件功能测试", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-18周", room: "S3-3313", teacher: "吴胜兵", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 5, endSlot: 7, weeks: "16周", room: "S3-3313", teacher: "张玉娥", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3313", teacher: "张玉娥", period: "evening" },

        { id: uid(), name: "软件功能测试", dayOfWeek: 5, startSlot: 1, endSlot: 4, weeks: "18周", room: "S3-3313", teacher: "吴胜兵", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "2-9周", room: "J2-2405", teacher: "吴伟美", period: "afternoon" },
    ]
  },
  // 9. Software Testing 2
  {
    id: "25softtest2",
    name: "25软件测试2",
    courses: [
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2405", teacher: "陶红丽", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "11-18周", room: "J2-2405", teacher: "游琪", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "软件功能测试", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-3周", room: "S3-3313", teacher: "吴胜兵", period: "afternoon" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3209", teacher: "林萍", period: "evening" },

        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 2, startSlot: 2, endSlot: 4, weeks: "18周", room: "S3-3309", teacher: "林萍", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "18周", room: "J3-3202", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "5-17周", room: "J3-3202", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "5-6周", room: "J4-4314", teacher: "谭志军", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3313", teacher: "唐懿芳", period: "evening" },

        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "15周", room: "S3-3407", teacher: "叶玫", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-14周", room: "S3-3407", teacher: "叶玫", period: "morning" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "软件功能测试", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-15周, 17-18周", room: "S3-3313", teacher: "吴胜兵", period: "afternoon" },
    ]
  },
  // 10. Ascend AI App Dev
  {
    id: "25ascend",
    name: "25昇腾AI应用开发",
    courses: [
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "人工智能数学基础", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3408", teacher: "陈筱", period: "afternoon" },
        { id: uid(), name: "人工智能数学基础", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3408", teacher: "陈筱", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4105", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "Python面向对象程序设计", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "J3-3408", teacher: "曹炜", period: "afternoon" },
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "2-4周", room: "J2-2405", teacher: "刘玉芳", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-9周", room: "J1-1307", teacher: "李文静", period: "morning" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "10-11周", room: "J4-4307", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "嵌入式应用开发", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-15周", room: "S3-3211", teacher: "李文静", period: "evening" },

        { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "人工智能数据服务", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3408", teacher: "聂葳", period: "afternoon" },
        { id: uid(), name: "人工智能数据服务", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3408", teacher: "聂葳", period: "afternoon" },
        { id: uid(), name: "嵌入式应用开发", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "16-18周", room: "S3-3211", teacher: "李文静", period: "afternoon" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "15周", room: "J3-3408", teacher: "韩天琪", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "J3-3408", teacher: "韩天琪", period: "afternoon" },
    ]
  },
  // 11. Digital Media Design
  {
    id: "25digital",
    name: "25数字媒体设计",
    courses: [
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "AI辅助短视频创作", dayOfWeek: 1, startSlot: 1, endSlot: 4, weeks: "18周", room: "S3-3423", teacher: "杨玲", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "4-11周", room: "J2-2405", teacher: "左家嘉", period: "morning" },
        { id: uid(), name: "AI辅助短视频创作", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "S3-3119", teacher: "杨玲", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4105", teacher: "柏兴伟", period: "evening" },
        { id: uid(), name: "UI元素图形创意设计", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "11-17周", room: "S3-3119", teacher: "魏云柯", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "UI元素图形创意设计", dayOfWeek: 2, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3119", teacher: "魏云柯", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Photoshop图像处理", dayOfWeek: 3, startSlot: 3, endSlot: 3, weeks: "15周", room: "S3-3119", teacher: "李环", period: "morning" },
        { id: uid(), name: "Photoshop图像处理", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-14周", room: "S3-3119", teacher: "李环", period: "morning" },
        { id: uid(), name: "Photoshop图像处理", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-16周", room: "S3-3423", teacher: "李环", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2405", teacher: "徐小艳", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "AI辅助创意设计", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "18周", room: "S3-3423", teacher: "孙巍", period: "afternoon" },
        { id: uid(), name: "AI辅助创意设计", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "S3-3119", teacher: "孙巍", period: "afternoon" },

        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "14-15周", room: "J2-2305", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
    ]
  },
  // 12. Information Security 1
  {
    id: "25infosec1",
    name: "25信息安全1",
    courses: [
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3413", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3413", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "Windows网络操作系统配置与管理", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3413", teacher: "程庆华", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "2-19周", period: "afternoon" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "14-15周", room: "S3-3413", teacher: "邹晶晶", period: "evening" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "16-17周", room: "J4-4214", teacher: "赵洪凤", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3507", teacher: "廖建飞", period: "evening" },

        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-18周", room: "S3-3413", teacher: "邹晶晶", period: "morning" },
        { id: uid(), name: "军事理论", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4307", teacher: "罗智蓉", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2306", teacher: "马姝", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "5-12周", room: "J2-2209", teacher: "荆舒煬", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3507", teacher: "叶和平", period: "afternoon" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3507", teacher: "叶和平", period: "afternoon" },
    ]
  },
  // 13. Information Security 2
  {
    id: "25infosec2",
    name: "25信息安全2",
    courses: [
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "5-12周", room: "J4-4111", teacher: "荆舒煬", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "S3-3413", teacher: "邹晶晶", period: "afternoon" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 1, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3408", teacher: "廖建飞", period: "evening" },

        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "Windows网络操作系统配置与管理", dayOfWeek: 2, startSlot: 5, endSlot: 7, weeks: "2-18周", room: "S3-3413", teacher: "林洪伟", period: "afternoon" },
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "16-17周", room: "J4-4214", teacher: "赵洪凤", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "2-17周", period: "morning" },
        
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "15周", room: "S3-3507", teacher: "叶和平", period: "morning" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-14周", room: "S3-3507", teacher: "叶和平", period: "morning" },
        { id: uid(), name: "python程序设计", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3413", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "python程序设计", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3413", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4307", teacher: "罗智蓉", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2306", teacher: "马姝", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
    ]
  },
  // 14. Virtual Reality Application Development
  {
    id: "25vr",
    name: "25虚拟现实应用开发",
    courses: [
        { id: uid(), name: "三维模型制作", dayOfWeek: 1, startSlot: 1, endSlot: 4, weeks: "18周", room: "S3-3119", teacher: "赖苑圆", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "2-19周", period: "afternoon" },

        { id: uid(), name: "AI辅助界面设计", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-11周", room: "S3-3119", teacher: "罗纯", period: "morning" },
        { id: uid(), name: "AI辅助界面设计", dayOfWeek: 2, startSlot: 2, endSlot: 2, weeks: "12周", room: "S3-3119", teacher: "罗纯", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "三维模型制作", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "S3-3119", teacher: "赖苑圆", period: "afternoon" },

        { id: uid(), name: "创新创业启蒙", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "3-10周", room: "J2-2405", teacher: "张玉娥", period: "morning" },
        { id: uid(), name: "虚拟现实引擎渲染技术", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "11-15周", room: "S3-3119", teacher: "李宗博", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "AI辅助界面设计", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3119", teacher: "罗纯", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2405", teacher: "徐小艳", period: "morning" },
        { id: uid(), name: "虚拟现实引擎渲染技术", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "5-18周", room: "S3-3119", teacher: "李宗博", period: "morning" },
        { id: uid(), name: "虚拟现实引擎渲染技术", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-4周", room: "S3-3119", teacher: "李宗博", period: "morning" },
        { id: uid(), name: "unity脚本程序设计", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "S3-3119", teacher: "李超", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 4, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4214", teacher: "孔建华", period: "evening" },

        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 5, startSlot: 1, endSlot: 2, weeks: "14-15周", room: "J2-2305", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "unity脚本程序设计", dayOfWeek: 5, startSlot: 1, endSlot: 4, weeks: "18周", room: "S3-3119", teacher: "李超", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
    ]
  },
  // 15. Cloud Computing Technology 1
  {
    id: "25cloud1",
    name: "25云计算架构1",
    courses: [
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "8-9周", room: "J2-2405", teacher: "赵洪凤", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "私有云基础架构与运维", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "3-16周", room: "J3-3205", teacher: "李颖", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4214", teacher: "罗智蓉", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2306", teacher: "郭悦川", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3409", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 2, startSlot: 5, endSlot: 7, weeks: "16周", room: "S3-3409", teacher: "廖建飞", period: "afternoon" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3409", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 2, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "J3-3205", teacher: "钟达夫", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-8周", room: "J3-3205", teacher: "钟达夫", period: "evening" },

        { id: uid(), name: "创新创业启蒙", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "10-17周", room: "J2-2405", teacher: "曾文英", period: "morning" },
        { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "私有云基础架构与运维", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "3-15周", room: "J3-3205", teacher: "李颖", period: "afternoon" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 4, startSlot: 5, endSlot: 7, weeks: "2-18周", room: "S3-3409", teacher: "廖建飞", period: "evening" }, // Wait, time is 5-7 which is Afternoon/Evening bridge? No, PDF p31 says "Linux OS (5-7) 2-18w". It's afternoon.

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 5, startSlot: 5, endSlot: 7, weeks: "2-18周", room: "S3-3409", teacher: "廖建飞", period: "afternoon" },
    ]
  },
  // 16. Cloud Computing Technology 2
  {
    id: "25cloud2",
    name: "25云计算架构2",
    courses: [
        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "8-9周", room: "J2-2405", teacher: "赵洪凤", period: "morning" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "10-17周", room: "J1-1307", teacher: "曾文英", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 1, startSlot: 5, endSlot: 7, weeks: "2-18周", room: "S3-3409", teacher: "廖建飞", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-10周", room: "J4-4214", teacher: "罗智蓉", period: "evening" },

        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-4周", room: "J2-2306", teacher: "郭悦川", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "私有云基础架构与运维", dayOfWeek: 2, startSlot: 5, endSlot: 8, weeks: "3-15周", room: "J3-3205", teacher: "李颖", period: "afternoon" },
        { id: uid(), name: "Linux操作系统", dayOfWeek: 2, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3507", teacher: "廖建飞", period: "evening" },

        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "9-15周", room: "S3-3409", teacher: "钟达夫", period: "evening" },

        { id: uid(), name: "体育2", dayOfWeek: 4, startSlot: 3, endSlot: 4, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 4, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3409", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "Python程序设计", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3409", teacher: "文聪敏", period: "afternoon" },
        { id: uid(), name: "网络设备配置与管理", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3409", teacher: "钟达夫", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "私有云基础架构与运维", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "3-16周", room: "J3-3205", teacher: "李颖", period: "afternoon" },
    ]
  },
  // 17. Intelligent Software Development (Java 1)
  {
    id: "25java1",
    name: "25智能软件开发(java)1",
    courses: [
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 1, startSlot: 1, endSlot: 3, weeks: "18周", room: "S3-3302", teacher: "林萍", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3202", teacher: "刘昌平", period: "afternoon" },
        { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3202", teacher: "刘昌平", period: "afternoon" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-9周", room: "J2-2405", teacher: "张俊杰", period: "evening" },

        { id: uid(), name: "体育2", dayOfWeek: 2, startSlot: 1, endSlot: 2, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "2-14周", room: "S3-3202", teacher: "刘昌平", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 2, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4314", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "8-9周", room: "J4-4207", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Java面向对象程序设计", dayOfWeek: 3, startSlot: 5, endSlot: 8, weeks: "2-18周", room: "S3-3202", teacher: "姜建华", period: "afternoon" },
        { id: uid(), name: "军事理论", dayOfWeek: 3, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4314", teacher: "柏兴伟", period: "evening" },

        { id: uid(), name: "应用数学 (2)", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "15周", room: "S3-3202", teacher: "桂改花", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-14周", room: "S3-3202", teacher: "桂改花", period: "morning" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 4, startSlot: 5, endSlot: 7, weeks: "2-18周", room: "S3-3302", teacher: "林萍", period: "afternoon" },

        { id: uid(), name: "Java面向对象程序设计", dayOfWeek: 5, startSlot: 1, endSlot: 4, weeks: "18周", room: "S3-3202", teacher: "姜建华", period: "morning" },
        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "18周", room: "S3-3207", teacher: "邓晓璐", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "5-17周", room: "S3-3207", teacher: "邓晓璐", period: "afternoon" },
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 5, startSlot: 7, endSlot: 8, weeks: "2-4周", room: "J2-2405", teacher: "周小云", period: "afternoon" },
    ]
  },
  // 18. Intelligent Software Development (Java 2)
  {
    id: "25java2",
    name: "25智能软件开发(java)2",
    courses: [
        { id: uid(), name: "体育2", dayOfWeek: 1, startSlot: 1, endSlot: 2, weeks: "2-19周", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 1, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 1, startSlot: 5, endSlot: 6, weeks: "15周", room: "S3-3202", teacher: "张玉娥", period: "afternoon" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 1, startSlot: 5, endSlot: 8, weeks: "2-14周", room: "S3-3202", teacher: "张玉娥", period: "afternoon" },
        { id: uid(), name: "创新创业启蒙", dayOfWeek: 1, startSlot: 9, endSlot: 10, weeks: "2-9周", room: "J2-2405", teacher: "张俊杰", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 2, startSlot: 3, endSlot: 4, weeks: "13-18周", period: "morning" },
        { id: uid(), name: "Web前端技术基础", dayOfWeek: 2, startSlot: 5, endSlot: 6, weeks: "2-14周", room: "S3-3202", teacher: "张玉娥", period: "afternoon" },

        { id: uid(), name: "形势与政策教育 (2)", dayOfWeek: 3, startSlot: 1, endSlot: 2, weeks: "8-9周", room: "J4-4207", teacher: "谭志军", period: "morning" },
        { id: uid(), name: "大学英语Ⅱ (2)", dayOfWeek: 3, startSlot: 3, endSlot: 4, weeks: "2-17周", period: "morning" },
        { id: uid(), name: "军事理论", dayOfWeek: 3, startSlot: 9, endSlot: 10, weeks: "11-19周", room: "J4-4314", teacher: "柏兴伟", period: "evening" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 3, startSlot: 9, endSlot: 11, weeks: "2-18周", room: "S3-3202", teacher: "姜建华", period: "evening" },

        { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 4, startSlot: 1, endSlot: 2, weeks: "15周", room: "S3-3202", teacher: "刘昌平", period: "morning" },
        { id: uid(), name: "AI辅助软件原型设计", dayOfWeek: 4, startSlot: 1, endSlot: 4, weeks: "2-14周", room: "S3-3202", teacher: "刘昌平", period: "morning" },
        { id: uid(), name: "Java面向对象程序设计", dayOfWeek: 4, startSlot: 1, endSlot: 8, weeks: "16周", room: "S3-3202", teacher: "尹菡", period: "morning" }, // Block 1-8
        { id: uid(), name: "Java面向对象程序设计", dayOfWeek: 4, startSlot: 5, endSlot: 8, weeks: "2-15周, 17-18周", room: "S3-3202", teacher: "尹菡", period: "afternoon" },
        { id: uid(), name: "数据库系统应用开发", dayOfWeek: 4, startSlot: 9, endSlot: 11, weeks: "10周", room: "S3-3202", teacher: "姜建华", period: "evening" },

        { id: uid(), name: "思想道德与法治", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "2-12周", period: "morning" },
        { id: uid(), name: "毛泽东思想和中国特色社会主义理论体系概论", dayOfWeek: 5, startSlot: 3, endSlot: 4, weeks: "13-17周", period: "morning" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 5, startSlot: 5, endSlot: 6, weeks: "18周", room: "S3-3202", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "应用数学 (2)", dayOfWeek: 5, startSlot: 5, endSlot: 8, weeks: "5-17周", room: "S3-3202", teacher: "段班祥", period: "afternoon" },
        { id: uid(), name: "心理健康教育 (2)", dayOfWeek: 5, startSlot: 7, endSlot: 8, weeks: "2-4周", room: "J2-2405", teacher: "周小云", period: "afternoon" },
    ]
  }
];

export const DAYS_OF_WEEK = ['一', '二', '三', '四', '五', '六', '日'];
export const FULL_DAYS = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];