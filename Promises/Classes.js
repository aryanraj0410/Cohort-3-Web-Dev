
class Rectangle{
        constructor(height, width, color){
            this.width = width;
            this.height = height;
            this.color = color;
        }

        area(){
            const area = this.height* this.width;
            return area;
        }

        color(){
            console.log(`Painting is done using ${this.color}`);
        }
}

const rect  = new Rectangle(2,5, 'Red');
const area = rect.area();
console.log("The area of the rectangle is: " +area);

const paint = rect.color;
console.log(paint);