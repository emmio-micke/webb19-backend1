// Add documents
db.mycol.insert([{ "title":"MongoDB Overview"},
{ "title":"NoSQL Overview"},
{ "title":"Tutorials Point Overview"}])

// Update document
db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})

// Overwrite document
db.mycol.save(
   {
      "_id" : ObjectId("5de4e4ce327b614ae4cf9aa2"), "title":"Tutorials Point New Topic",
      "by":"Tutorials Point"
   }
)

db.mycol.save(
   {
      "_id" : ObjectId("5de4e4ce327b614ae4cf9aa2"), "title":"Tutorials Point New Topic 2"
   }
)

// Delete document(s)
db.mycol.remove({'title':'New MongoDB Tutorial 2'})

// Get document(s)
db.mycol.find({},{"title":1,_id:0}).pretty()


// Add documents
db.mycol.insert([
    {
        title: 'MongoDB Overview', 
        description: 'MongoDB is no sql database',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    },
    {
        title: 'NoSQL Overview', 
        description: 'No sql database is very fast',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 10
    },
    {
        title: 'Neo4j Overview', 
        description: 'Neo4j is no sql database',
        by_user: 'Neo4j',
        url: 'http://www.neo4j.com',
        tags: ['neo4j', 'database', 'NoSQL'],
        likes: 750
    }
])

// Aggregate, group by "by_user" field and count the no of documents they have written
db.mycol.aggregate(
    [
        {
            $group : {
                _id : "$by_user",
                num_tutorial : {
                    $sum : 1
                }
            }
        }
    ])

// Aggregate, group by "by_user" field and count the total number of likes
db.mycol.aggregate(
    [
        {
            $group : {
                _id : "$by_user",
                sum_likes : {
                    $sum : "$likes"
                }
            }
        }
    ])

