/*
Prototypal inheritance vasitəsilə object-lər bir-birləri ilə property və method-larını
paylaşa bilir. Javascript-də hər object-in [[Prototype]] adlanan daxili property-si var,
biz bu property-yə .__proto__ yazaraq çata bilərik.
*/

/*
Javascript-də "this" sözü function-un çağrıldığı object-i ifadə edir,
əgər function global context-də çağrılıbsa, "this" browser mühitində "document" adlı object-i,
Node mühitində çağırıldıqda isə "global" adlı object-i qaytarır.

Function hər hansısa object-in daxili method-udursa, "this" həmin object-i qaytarır.

Arrow function-ların daxilində "this" düzgün formada işləmir, buna görə "this" ilə işləyərkən 
function declaration-lardan istifadə olunur.

Function declaration-lar global context-də çağırıldıqda "window" object-ini qaytarır,
faylın başlanğıcında "use strict" yazdıqda isə undefined qaytarır.
*/

// console.log(this)

// "use strict"

function getWindowMethods() {
    console.log(this)
}

getWindowMethods()

const a = []

const b = {}

function c() { }

console.log(a.__proto__)
console.log(b.__proto__)
console.log(c.__proto__)

const person = {
    firstname: "Default",
    lastname: "Default",
    getFullName() {
        console.log(`Name is ${this.firstname} and lastname is ${this.lastname}`)
    }
}

const person1 = {
    firstname: "Name",
}

const person2 = {
    firstname: "Ilkin",
}

person2.__proto__ = person

person2.getFullName()

function getUserDetails(year) {
    console.log(`Name is ${this.firstname} and lastname is ${this.lastname}, ${year}`)
}

// getUserDetails-in "this"-ini person1-ə təyin edir, mütləq dəyişənə təyin olunmalıdır.
const person1Details = getUserDetails.bind(person1)
const person2Details = getUserDetails.bind(person2)

// person1Details()

// call method-u vasitəsilə getUserDetails-in "this"-i yeni dəyişən olmadan person1-ə təyin edilir.
getUserDetails.call(person1, 2000)
// getUserDetails.apply(person1, [2000]) // call ilə eynidir, sadəcə props-lar array-da ötürülür. 