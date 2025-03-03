import {spoofString} from './index'

let text = "Hello world! <b>you cant copy me</b>"
console.log("=>(example.js:5) spoofString(text)", spoofString(text));

// in case of using single font file without bold version you will suffer from
// lack of text customization so css tricks will be handy
// fake bold:
//  text-shadow: 0 0 1px var(--subtitle);
//  filter: blur(0.2px);
