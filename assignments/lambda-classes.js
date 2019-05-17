// CODE here for your Lambda Classes
class person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class instructor extends person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
   demo(subject) {
       return `Today we are learning about ${subject}`
   } 
   grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}`
   }
}

class student extends person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.map(function(sub){
        console.log(sub);
    })
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class projectmanager extends instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const greg = new instructor({
    name: 'Greg',
    location: 'California',
    age: 32,
    specialty: 'React',
    favLanguage: 'HTML',
    catchPhrase: 'Hey, lets code this stuff'
});

const ty = new student({
    name: 'Ty',
    location: 'Flordia',
    age: 24,
    previousBackground: 'warehouse worker',
    className: 'Web20',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const lilith = new projectmanager({
    name: 'Lilith',
    location: 'Pandora',
    age: 28,
    gradClassName: 'Web6',
    favInstructor: 'John'
});


console.log(lilith.name); // "Lilith"
console.log(ty.speak()); // "`Hello my name is Ty, I am from Florida"
console.log(greg.demo('HTML')); // "Today we are learning about HTML"
console.log(greg.grade(ty, 'HTML')); // "Ty receives a perfect score on HTML"
ty.listsSubjects(); // "['Html', 'CSS', 'JavaScript']"
console.log(ty.PRAssignment('HTML')); // "Ty has submitted a PR for HTML"
console.log(ty.sprintChallenge('HTML')); // "Ty has begun sprint challenge on HTML"
console.log(lilith.standUp('WEB20')); // "Lilith announces to WEB20, @channel standy times!"
console.log(lilith.debugsCode(ty, 'HTML')); // "Lilith debugs Ty's code on HTML"
