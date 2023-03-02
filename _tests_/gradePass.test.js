// TESTING WITH JEST LIBRARY

// GRADE CALCULATIONS

const {averageExam,isStudentPass} = require('../gradePass.js');

describe('grade calculations',function(){

    test('return average value of grade', function(){
        const valueOfTarik = [80,100,100,80];
        expect(averageExam(valueOfTarik)).toEqual(90);
    });
    // INTEGRATION TESTING
    test('should reject non number value', function(){
        const valueOfGrade = [80,"aikotoba",69,98];
        expect(()=>averageExam(valueOfGrade)).toThrow();
    });

    test('you shall NOT PASS', function(){
        const valueOfCan = [69, 42, 79];
        const name = "Can";
        expect(isStudentPass(valueOfCan,name)).toEqual(false);
    });
    test('you shall PASS', function(){
        const valueOfBelali = [99, 62, 79];
        const name = "Belali";
        expect(isStudentPass(valueOfBelali,name)).toEqual(true);
    });

});

