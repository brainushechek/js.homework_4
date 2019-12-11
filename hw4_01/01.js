var obj = {
	element1: 'element1',
    element2: 2,
	deleteElement (key) {
	    delete obj[key]
    },
    addElement (key, value) {
	    obj[key] = value
    }
}
 