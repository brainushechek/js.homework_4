var Person = function ( name, surname ) {
	this.name = name,
	this.surname = surname
}
var persons = [] 
var person = "<table border='1'>"
persons.push( a = new Person ( 'Name1', 'Surname1' ), b = new Person ( 'Name2', 'Surname2' ), c = new Person( 'Name3', 'Surname3') )
persons.push( { name: 'Name4', surname: 'Surname4' } )
a.fatherName = undefined
b.age = 'age'
c.sex = 'sex'
for ( var i in persons){
   person += `<tr><td> ${persons[i].name} </td><td>${persons[i].surname}</td></tr>`
}
person += "</table>"
document.write(person)