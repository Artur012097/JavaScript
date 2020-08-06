// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

let sec = 60;
let hr = sec * sec;
let dy = hr * 24;
let mt = dy * 7;
let mtStr = mt.toString();
let mtBigStr = BigInt(mtStr);


console.log(`${sec} ${hr} ${dy} ${mtBigStr}`)
