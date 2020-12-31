// array, object

const f = function() {
    console.log(1 + 1);
    console.log(1 + 2);
}
const a = [f]
a[0]();

const o = {
    func:f
}
o.func();

// const i = if(true){console.log(1)}; 작동 안 됨

// const w = while(true){console.log(1)} 작동 안 됨