start=$(date +%s)
result=$(node fibonacci.js)
end=$(date +%s)
echo node cost:$(($end - $start))s result:$result
