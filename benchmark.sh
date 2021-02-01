DIR=$(cd $(dirname $0) && pwd)

docker run -v $DIR:/benchmark --rm -w /benchmark secondstate/ssvm bash -c \
    "dpkg -i SSVM-0.7.3.deb > /dev/null && ./wasm-in-node.sh && ./wasm-in-ssvm.sh"
