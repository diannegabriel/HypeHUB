# Expected Input/output of each helper function

## dbCreateUser

INPUT: (collectionName, options)

new user ex:

dbCreateUser("users", "billy bob", "password", "billy@bob.com")

Note: All attributes default to null on creation.

OUTPUT: 
console log -> "New record created" OR errors from mongo

## dbReadUser

INPUT: (email, password)

read user ex:

dbReadUser( "billy@bob.com", "password")

OUTPUT: 

"614cf433a82f6df297901979"



