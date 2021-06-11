/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}
//
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

// The following line starts the application
startApp("Layal Haidar");

function onDataReceived(text) {
  // console.log(hello)
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.slice(0, 5) === "hello") {
    hello(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else if (text.split(" ")[0] == "add" || text.trim() == "add") {
    add(text.substring(4));
  } else if (text.split(" ")[0] === "remove" || text.trim() === "remove") {
    if (text.trim().includes(" ")) {
      remove(text.split(" ")[1]);
    } else {
      remove();
    }
  } else if (text.split(" ")[0] === "edit" || text.trim() === "edit") {
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
        edit(resstr, text.split(" ")[1]);
      }
    }
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '" ');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(hello) {
  console.log(hello.trim() + "!");
}

/**
 * Returns help
 * "help" lists all the possible commands that you can use.
 */
function help() {
  console.log(
    "lists all the possible commands:\n quit/exit\n hello\n list\n add\n remove\n help\n"
  );
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

let arr = ["buy batata", "meet bob", "play violin"];
function list() {
  for (i = 0; i < arr.length; i++) {
    console.log([i + 1] + ":" + arr[i]);
  }
}

function add(val) {
  if (val.trim()) {
    console.log(arr.push(val));
  } else console.log("can't add empty elements!");
}

function remove(val) {
  if (val == undefined || val == null) {
    arr.pop();
  } else {
    if (arr[val - 1] != undefined && arr[val - 1] != null) {
      arr.splice(val - 1, 1);
    } else {
      console.log("You entered a number that does not exist");
    }
  } //console.log(arr)
}

function edit(val, index) {
  //edit without anything should give an error
  if (val == undefined || val == null || val == "") {
    console.log("edit without anything should give an error");
  } else {
    // edit new text should change the last task to "new text"
    if (index == undefined || index == null) {
      arr[arr.length - 1] = val;
    } else {
      arr[index - 1] = val;
    }
  }
  // console.log(arr);
}
