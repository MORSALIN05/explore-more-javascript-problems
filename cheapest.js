const phone = [
    { name: 'samsung', price: 9999, storage: '32gb', color: 'silver' },
    { name: 'symphony', price: 6999, storage: '32gb', color: 'offwhite' },
    { name: 'walton', price: 18900, storage: '64gb', color: 'black' },
    { name: 'samsung', price: 21000, storage: '128gb', color: 'gray' },
    { name: 'itel', price: 3999, storage: '16gb', color: 'blue' },
]

// show allPhone
//console.log('All', phone);
// get array as parameter of function
function findCheapestPhone(phone) {
    let cheapestPhone = phone[0];
    for (let i = 0; i < phone.length; i++) {
        //console.log(phone[i]);
        const phones = phone[i];
        if (phones.price < cheapestPhone.price) {
            //cheapestPhone = phone[i].price;
            cheapestPhone = phones;
        }

    }
    return cheapestPhone;
    //console.log('cheapest', cheapestPhone);
}
const myCheapPhone = findCheapestPhone(phone);
console.log(myCheapPhone);



// find biggest storage
console.log('only samsung\n')
for (let i = 0; i < phone.length; i++) {
    if (phone[i].name == 'samsung') {
        console.log(phone[i])
    }

}
