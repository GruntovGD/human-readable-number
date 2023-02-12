module.exports = function toReadable (number) {
  const numbs=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',]
  const dec=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  return (number===0) ? 'zero' :
  (number<20) ? numbs[number] :
  (number<100) ? dec[+number.toString()[0]].concat(' ',numbs[+number.toString()[1]]).trim() :
  (number<120) ? numbs[+number.toString()[0]].concat(' hundred ',numbs[+number.toString().slice(1)]).trim() :
  numbs[+number.toString()[0]].concat(' hundred ',(number.toString().slice(1)!=0) ? toReadable(+number.toString().slice(1)) : '').trim()
}
