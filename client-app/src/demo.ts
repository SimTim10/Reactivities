const car1 : ICar = {
    color : "red",
    model : "Mercedes",
    topSpeed : 100
}

const car2 : ICar = {
    color : "blue",
    model : "BMW"
}

interface ICar {
    color : string,
    model : string,
    topSpeed? : number
}

const func = (x : number,y : number) => {
     (x*y)
}