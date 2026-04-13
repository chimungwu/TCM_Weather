import { Lunar } from 'lunar-javascript';

// 台灣時區為 UTC+8
// 計算 2026-04-13 23:30:00 (台灣時間) 的八字
const nowTaiwan = new Date('2026-04-13T23:30:00+08:00');
const lunar = Lunar.fromDate(nowTaiwan);
const bazi = lunar.getBaZi();

console.log('Bazi (Taiwan Time 2026-04-13 23:30):', bazi);
