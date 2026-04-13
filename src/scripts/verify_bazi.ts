import { Lunar } from 'lunar-javascript';

// 測試 2026-04-13 23:30:00 (台灣時間)
// 台灣是 UTC+8，所以 23:30:00+08:00 是 UTC 15:30:00
const now = new Date('2026-04-13T15:30:00Z'); 
const lunar = Lunar.fromDate(now);
console.log('Date:', now.toISOString());
console.log('Bazi:', lunar.getBaZi());
console.log('Hour:', lunar.getTimeInGanZhi());
