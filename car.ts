interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): string; 
  }
  
  const myCar: Vehicle = {
    make: "Audi",
    model: "RS6",
    year: 2023,
    start: () => {
      return "Car engine started"; 
    },
  };
  
  
  const startMessage = myCar.start();
  console.log(startMessage);
  