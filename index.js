function processData(input) {
  var str = "";
  var last = [];
  let clipBoard = "";
  
  for (var i=0; i < input.length; i++) {
      var command = input[i].split(" ")[0];
      var string = input[i].split(" ")[1] || null;
      var lastElement = last[last.length-1] || ""
      switch (command) {
          case "INSERT":
              str = str + string;
              last.push(str);
              break;
          case "DELETE":
              str = str.substring(0, str.length - 1);
              last.push(str);
              break;
          case "COPY":
              clipBoard = str.substring(string);
              break;
          case "PASTE":
              str = lastElement + clipBoard;
              last.push(str);
              break;        
          case "PRINT":
              console.log(lastElement)
              break;
          case "UNDO":
              last.pop();
              break;
      }
      
  }
  return str;
} 

let output = processData(["INSERT Da", "COPY 0", "UNDO", "PASTE", "PASTE", "COPY 2", "PASTE", "PASTE", "DELETE", "INSERT aaam", "PRINT"])

document.body.append(output)


