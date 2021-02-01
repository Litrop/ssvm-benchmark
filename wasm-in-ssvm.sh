ssvmc fibonacci.wasm fibonacci.so > /dev/null
start=$(date +%s)
result=$(ssvm --reactor fibonacci.so fib 45)
end=$(date +%s)
echo ssvm cost:$(($end - $start))s result:$result
