const book = {
    isAvailable: false,
    checkIn : function() {
        this.isAvailable = true;
        return this
    }
};
// console.log(book.checkIn());
book.checkIn();
console.log(book.isAvailable);
function checkIn(){
    return this;
}
console.log(checkIn());
