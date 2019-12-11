var Person = function ( name, surname ) {
	this.name = name,
	this.surname = surname
}
var persons = []
persons.push( a = new Person ( 'name1', 'surname1' ), b = new Person ( 'name2', 'surname2' ), c = new Person ( 'name3', 'surname3' ) )
persons.push ( {name: 'name4', surname: 'surname4'} )
JSON.stringify(persons)