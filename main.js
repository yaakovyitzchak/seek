var r = require('http')
var n = "qawsedrftgyhuijkolpzxvcbnmMHGVBFCSXDZAQWRETYIUOPKLJ1342578690+=/"
var h = "קראטוןםלפךףתצמנהבסזשדגכעיח_-098756432$1ץADwQERTcobyYkaUIKOLNMBCS"
r.createServer((q,r) => {
  r.setHeader('content-type', 'text/html');
  var sb = q.substring(1)
  if(sb)
    r.end(rinvert())
}).listen(process.env.PORT || 442)


function rinvert(str) {
	return atob(str.split("").map(x => 
		(i=>(i > -1 && i < n.length ? n[i] : n[0]))(h.indexOf(x))
	).join(""))
}


  
  function atob(b64) {
   return Buffer.from(b64, 'base64'); 
  }
