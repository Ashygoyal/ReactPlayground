// ES6 Syntax below

class myClass1 {
    constructor (){
      this.name = 'Ashish';
    }
  
    demoFunction1(){
      console.log(this.name);
    }
  }
  
  class yourClass1 extends myClass1 {
    
   constructor(){
     super();
     this.name= 'Goyal';
   }
    
    
    anotherDemoFunction1() {
      console.log(this.name);
    }
  }
  
  const obj11 = new yourClass1();
  obj11.anotherDemoFunction1();
  obj11.demoFunction1();
  
  
  
  // ES7 syntax below
  
  class myClass {
    name = 'Ashish';
  
    demoFunction=()=>{
      console.log(this.name);
    }
  }
  
  
  class yourClass extends myClass {
    
      name= 'Goyal'

    anotherDemoFunction=()=> {
      console.log(this.name);
    }
  }
  
  const obj1 = new yourClass();
  obj1.anotherDemoFunction();
  obj1.demoFunction();