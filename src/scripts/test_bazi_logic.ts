import { Lunar } from 'lunar-javascript';

// 台灣時區為 UTC+8
// 計算 2026-04-13 23:30:00 (台灣時間) 的八字
const nowTaiwan = new Date('2026-04-13T23:30:00+08:00');

// 測試邏輯：如果 23:00-23:59，使用當天 00:00 的日期來計算八字，以確保是 Zi hour 且不換日
const baziDate = new Date(nowTaiwan.getFullYear(), nowTaiwan.getMonth(), nowTaiwan.getDate(), 0, 0, 0);

const lunarForBazi = Lunar.fromDate(baziDate);
const bazi = lunarForBazi.getBaZi();

console.log('Bazi (Taiwan Time 23:30, Custom Logic):', bazi);
