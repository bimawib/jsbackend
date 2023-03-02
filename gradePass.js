// TESTING WITH JEST LIBRARY

// // example
// test('return sum of 8+5',()=>{
//     expect(5+8).toBe(13);
// });

// // grouping test example
// describe('pengujian olah aritmatika',()=>{

//     test('test 1. dua tambah tiga adalah lima',()=>{
//         expect(2+3).toEqual(5);
//     });
//     test('test 2. 130 bagi 10 adalah tigabelas',()=>{
//         expect(130/10).toEqual(13);
//     });

// });


// GRADE CALCULATIONS

const averageExam = function(valuesExam){
    const numberValidation = valuesExam.every(exam => typeof exam === 'number');
    
    if(!numberValidation){
        throw Error('please input type of number');
    }

    const sumValues = valuesExam.reduce(function(prev,curr){
        return prev + curr
    },0);

    return sumValues/valuesExam.length;
};

const isStudentPass = function(valuesExam,name){
    const minValues = 75;
    const average = averageExam(valuesExam);

    if (average > minValues){
        console.log(`${name} pass the exam`);
        return true;
    }else{
        console.log(`${name} fail the exam`);
        return false;
    }
};

module.exports = {averageExam,isStudentPass};