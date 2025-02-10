const {alphaScriptInterpreter} = require("./index");

const code= `
npc age = 20;
bet (age based 18) {
    gyatt("You are an adult!");
} goofy {
    gyatt("You are a minor!");
}
`;

const jsCode = alphaScriptInterpreter(code);
console.log(jsCode);
eval(jsCode);
