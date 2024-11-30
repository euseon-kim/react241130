// 클라이언트들이 보는 컴포넌트
'use client';
import React from 'react'

const Step01 = () => {
    const stname:string = '짱구' // string
    const age:number = 5; // number
    const isStudent:boolean = true; // boolean
    const emptyValue:null = null; // null
    const notAss : undefined = undefined; // undefined

    /** Array : 이런 주석도 있음*/ 
    const numbers:number[] = [1, 2, 3, 4, 5];

    const friends:Array<string> = ['짱구', '철수']

    /** object*/
    const person:{name:string, age:number} = {
        name :'짱구',
        age : 5,
    }

    /**
     * Function 에서는 이렇게 작동한다.
     * @Param name 이름ㅇ르 받아야 함
     * @returns 인사말이 리턴ㄷ될 거에며.
     * 
     */
    function greet(name:string):string{
        console.log(name)
        return `안녕하세요, ${name}`
    }

    greet('짱구');
    /**
      [함수타입]
      
      -return이 없어야 한다면 void
      function myFunfc(x:Number) : void {
      }
      
      라미터가 옵션일 경우
      function myFfunc(x?:Number)
      
      -return 할 자료 타입
      function myFunc(x:Number) : number{
       return x * 2;
        }
      -Union type 가능
        function myFunc(x:Number|string) {
        }
         */

  return (
    <div>Step01</div>
  )
}

export default Step01