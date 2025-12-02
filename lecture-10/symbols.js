let o = {};

{
    const s = Symbol.for('ID');
    console.log(s.description);
    o[s] = 'Hidden';
    console.log(o[s]);
}

console.log(o);
const s = Symbol.for('ID');

for (const key in o) { 
    const element = o[key];
    console.log(element);    
}

console.log(o[s]);
