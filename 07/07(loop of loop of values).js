var Person = function ( name, surname ) {
	this.name = name,
	this.surname = surname
}
var persons = []
persons.push( a = new Person ( 'Name1', 'Surname1' ), b = new Person ( 'Name2', 'Surname2' ), c = new Person( 'Name3', 'Surname3') )
persons.push( { name: 'Name4', surname: 'Surname4' } )
a.fatherName = 'fatherName'
b.age = 'age'
c.sex = 'sex'
for ( var i in persons ) {
   for ( var j in persons[i] ) {
	console.log(persons[i][j])
   }
}