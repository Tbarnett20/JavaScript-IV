// CODE here for your Lambda Classes
/*
 ** CLASS PERSON **
*/

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

/*********************
 ** CLASS INSTRUCTOR **
 *********************/
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(studentOBJ, subjectSTR) {
    return `${
      studentOBJ.name
    } receives a nobel peace award for his work on ${subjectSTR}`;
  }

  graduateStudent(studentOBJ) {
    return `Congratulations, ${
      studentOBJ.name
    }, you are now ready to take over the world!`;
  }

  gradeStudent(studentOBJ) {
    let newGrade = 0;

    while (newGrade <= 70) {
      newGrade = Math.floor(Math.random() * Math.floor(100)) + studentOBJ.grade;

      if (newGrade > 70) return this.graduateStudent(studentOBJ);
    }
  }
}

/******************
 ** CLASS STUDENT **
 ******************/
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subjectSTR) {
    return `${this.name} has submitted a PR for ${subjectSTR}`;
  }

  sprintChallenge(sprintSTR) {
    return `${this.name} has begun spring challenge on ${sprintSTR}`;
  }
}

/*************************
 ** CLASS PROJECTMANAGER **
 *************************/
class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(chanSTR) {
    return `${this.name} announces to ${chanSTR}, @channel stand-up time!`;
  }

  debugsCode(studentOBJ, subjectSTR) {
    return `${this.name} debugs ${studentOBJ.name}'s code on ${subjectSTR}`;
  }
}

//  INSTRUCTORS

// Josh
const Josh = new Instructor({
  name: "Josh",
  age: 99,
  location: "Remote",
  gender: "Male",
  specialty: "Front End",
  favLanguage: "JavaScript",
  catchPhrase: `Don't forget the homies`
});

// Jimmy
const Jimmy = new Instructor({
  name: "Jimmy",
  age: 100,
  location: "Hidden",
  gender: "Male",
  specialty: "React",
  favLanguage: "Javascript",
  catchPhrase: "Flamingo"
});

/************************
 ** STUDENT **
 ************************/
// Terrance
const Terrance = new Student({
  name: "Terrance",
  age: 23,
  location: "KY",
  gender: "Male",
  previousBackground: "Student",
  className: "CS11",
  favSubjects: ["Nothing", "Frontend"],
  grade: Math.floor(Math.random() * Math.floor(100))
});

// Adrian
const Adrian = new Student({
  name: "Adrian",
  age: 600,
  location: "???",
  gender: "Male",
  previousBackground: "previousBackground",
  className: "CS11",
  favSubjects: ["favSubjects"],
  grade: Math.floor(Math.random() * Math.floor(100))
});

// Austin
const Austin = new Student({
  name: "Austin",
  age: 600,
  location: "???",
  gender: "Male",
  previousBackground: "previousBackground",
  className: "CS11",
  favSubjects: ["favSubjects"],
  grade: Math.floor(Math.random() * Math.floor(100))
});

/********************************
 ** INSTANTIATE PROJECT MANAGER **
 ********************************/
// Ben
const Ben = new ProjectManager({
  name: "Ben",
  age: 600,
  location: "???",
  gender: "Male",
  previousBackground: "Flamingo Spotting",
  className: "CS11",
  favSubjects: ["Flamingos"],
  grade: Math.floor(Math.random() * Math.floor(100))
});

// Patrick
const patrick = new ProjectManager({
  name: "Patrick",
  age: 890,
  location: "???",
  gender: "Male",
  specialty: "Something",
  favLanguage: "JavaScript",
  catchPhrase: "Life is like a box of chocolates",
  favInstructor: "favInstructor"
});

/********************
 ** INSTRUCTOR TEST **
 ********************/
// Josh
console.log(Josh);
console.log(Josh.demo("ES6 Classes"));
console.log(Josh.grade(Terrance, "everything!"));

// Jimmy
console.log(Jimmy);
console.log(Jimmy.demo("ES6 Classes"));
console.log(Jimmy.grade(Terrance, "nothing!"));

/******************
 ** STUDENTS TEST **
 ******************/
// Terrance
console.log(Terrance);
Terrance.listsSubjects();
console.log(Terrance.PRAssignment("JavaScript-IV"));
console.log(Terrance.sprintChallenge("JavaScript-IV"));

// Adrian
console.log(Adrian);
Adrian.listsSubjects();
console.log(Adrian.PRAssignment("JavaScript-IV"));
console.log(Adrian.sprintChallenge("JavaScript-IV"));

// Austin
console.log(Austin);
Austin.listsSubjects();
console.log(Austin.PRAssignment("JavaScript-IV"));
console.log(Austin.sprintChallenge("JavaScript-IV"));

/*************************
 ** PROJECT MANAGER TEST **
 *************************/
// Ben
console.log(Ben);
console.log(Ben.standUp("#cs11_flamingos"));
console.log(Ben.debugsCode(Adrian, "JavaScript"));
console.log(Ben.gradeStudent(Adrian));

// Patrick
console.log(patrick);
console.log(patrick.standUp("#cs10_Patrick"));
console.log(patrick.debugsCode(Austin, "nothing, he's doing great!"));
console.log(patrick.gradeStudent(Austin));
