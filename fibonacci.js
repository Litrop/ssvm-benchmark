const fs = require("fs");

async function bootstrap() {
  const buff = await new Promise((resolve, reject) => {
    fs.readFile("fibonacci.wasm", (err, buff) => {
      if (err) {
        return reject(err);
      }
      return resolve(buff);
    });
  });
  const res = await WebAssembly.instantiate(buff);
  const fib = res.instance.exports.fib;
  const start = new Date();
  const result = fib(45);
  const end = new Date();
  const cost = Math.floor(end.getTime() / 1000) - Math.floor(start.getTime() / 1000)
  console.log(`node cost:${cost}s result:${result}`);
}

bootstrap();
