interface id  { subject_id : number }
interface name  { subject_name : string }

type searchParam = id | name

class Square {
    constructor(
        private canEdit: boolean
        ) {
        console.log(this.canEdit)
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
let square = new Square(true);
const find : id = {subject_id: 55}
square.draw(find);
