start=$(date +%s)
result=$(ssvm --reactor fibonacci.wasm fib 40)
end=$(date +%s)
echo ssvm cost:$(($end - $start))s result:$result
