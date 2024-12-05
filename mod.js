import { Pup } from "https://deno.land/x/pup/mod.ts"

const processConfiguration = {
  client: true,
  reverseClient: false,
  features: {
    client: {
      "id": "plan98-start-client",
      "cmd": "deno run -A client.js",
      "autostart": true
    },
    reverseClient: {
      "id": "plan98-reverse-client",
      "cmd": "deno task reverse-client",
      "autostart": true
    }
  }
}

const activeFeatures = Object.keys(processConfiguration)
  .filter(x => processConfiguration[x] === true)
  .map(x => processConfiguration.features[x])

console.log(activeFeatures)

new Pup({
  "processes": activeFeatures
}).init()
