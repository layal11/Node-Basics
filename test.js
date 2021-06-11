var hell = "hellofgbb!".slice(0, 5);
console.log(hell.trim() + "!");




function onDataReceived(text) {
    console.log(text);
    if (text === "quit\n"  text === "exit\n") {
      quit();
    } else if (text.slice(0, 5) === "hello") {
      hello(text);
    } else if (text === "help\n") {
      help();
    } else if (text === "list\n") {
      list();
    } else if (text.split(" ")[0] == "add"  text.trim() == "add") {
      add(text.substring(4));
    } else if (text.split(" ")[0] === "remove"  text.trim() === "remove") {
      if (text.trim().includes(" ")) {
        remove(text.split(" ")[1]);
      } else {
        remove();
      }
    } else if (text.split(" ")[0] === "edit"  text.trim() === "edit") {
      text = text.trim().replace("\n", "");
      if (text.split(" ")[1] == undefined || text.split(" ")[1] == null) {
        edit();
      } else {
        if (isNaN(text.split(" ")[1])) {
          // [edit, layal, haidar]
          var resstr = "";
          for (let i = 1; i < text.split(" ").length; i++) {
            resstr += text.split(" ")[i] + " ";
          }
          edit(resstr);
        } else {
          // edit 1 new text should change the task 1 to "new text"
          // [edit, index like 1, layal, haidar]
          var resstr = "";
          for (let i = 2; i < text.split(" ").length; i++) {
            resstr += text.split(" ")[i] + " ";
          }
          edit( resstr, text.split(" ")[1]);
        }
      }
    } else {
      unknownCommand(text);
    }
  }