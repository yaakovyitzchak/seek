var r = require('http')
var n = "qawsedrftgyhuijkolpzxvcbnmMHGVBFCSXDZAQWRETYIUOPKLJ1342578690+=/"
var h = "קראטוןםלפךףתצמנהבסזשדגכעיח_-098756432$1ץADwQERTcobyYkaUIKOLNMBCS"
r.createServer((q,r) => {
  r.setHeader('content-type', 'text/html');
  var sb = q.url.substring(1)
  
    r.end("<!DOCTYPE><html><head></head><body><style>body{font-family:helvetica</style><h1>B\"H</h1><br>"+
	 ( sb ? ("url:"+q.url+"<br>string:"+sb+"<br>"+rinvert(sb)) : "Moshiach NOW?!")+"</body></html>")
}).listen(process.env.PORT || 442)


function rinvert(str) {
	return (str.split("").map(x => 
		(i=>(i > -1 && i < n.length ? n[i] : n[0]))(h.indexOf(x))
	).join(""))
}


  
  function atob(b64) {
   return Buffer.from(b64, 'base64').toString(); 
  }
