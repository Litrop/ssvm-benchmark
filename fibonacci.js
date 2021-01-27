const fs = require("fs");

async function bootstrap() {
  const buff = fs.readFileSync("fibonacci.wasm");
  const res = await WebAssembly.instantiate(buff);
  const fib = res.instance.exports.fib;
  console.log(fib(40));
}

bootstrap();
