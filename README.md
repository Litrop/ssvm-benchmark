# SSVM benchmark

| File           | From                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------- |
| SSVM-0.7.3.deb | https://github.com/second-state/SSVM/releases/download/0.7.3/SSVM-0.7.3.deb                   |
| fibonacci.wasm | https://raw.githubusercontent.com/second-state/SSVM/master/tools/ssvm/examples/fibonacci.wasm |

run benchmark

```sh
./benchmark.sh
```

result

```
node cost:1s result:165580141
ssvm cost:40s result:165580141
```
