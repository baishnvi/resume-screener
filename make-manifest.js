// Usage: node make-manifest.js  -> writes resumes/manifest.json from files in resumes/
const fs=require('fs');
const f=fs.readdirSync('resumes').filter(x=>/\.(pdf|docx|txt)$/i.test(x)).sort();
fs.writeFileSync('resumes/manifest.json',JSON.stringify(f,null,1));
console.log(f.length+' resumes listed');
