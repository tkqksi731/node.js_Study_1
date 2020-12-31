// const v1 = 'v1';
// 10000 code가 있다면
// v1 = 'egoing'; 변경 된다면 버그가 
// const v2 = 'v2';

const o = {
    v1:'v1',
    v2:'v2',
    f1: function(){
        console.log(this.v1); // 함수는 값이다 and 객체는 값을 저장하는 그릇이다.
    },
    f2: function(){
        console.log(this.v2); // 함수 명이 바뀔때 마다 같이 바꿔야 하므로 this를 넣어 자동으로 바꾸게 만듦
    }
}



o.f1();
o.f2();