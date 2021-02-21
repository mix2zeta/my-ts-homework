interface id  { subject_id : number }
interface name  { subject_name : string }

type searchParam = id | name

class Line {
    constructor(public legth: number) {
        console.log('create Line obj')
    }
}

class Square {
    constructor(
        private size: number
        ) {
        console.log(this.size)
    }

    get line(): Line {
        return new Line(this.size/4)
    }

    draw(something: searchParam) {
        console.log((something as id).subject_id);
        console.log(something as name);
        if ((something as id).subject_id) {
            console.log('get id');
            something = something as id
            console.log(something.subject_id);
        }
        if ((something as name).subject_name) {
            console.log('get name');
            something = something as name
            console.log(something.subject_name);
        }

    
        
        
    }
}
let square = new Square(16);

const find : id = {subject_id: 55}
const test = {
    aaa: 15
}
console.log(test['aaa'])

square.draw(find);

square.line
console.log(square.line.legth)

let bbb= [ 1,2,3,4]

bbb.reduce((a,b,c)=> a+ b ,0)
