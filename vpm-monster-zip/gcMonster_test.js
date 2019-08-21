const GCMonster = require('./index').GCMonster

const GCZip = new GCMonster();

GCZip.zip('./test', './test.zip', [], function(err){
	console.log(arguments)
})

// GCZip.unzip(src, target, callback)