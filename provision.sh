#!/bin/sh

# install rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# install deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

# download 9p 
wget https://github.com/pfpacket/rust-9p/archive/refs/heads/master.tar.gz -O - | tar -xz

# change to the default 9p server example
cd rust-9p-master/example/unpfs

# build the 9p server
cargo build --verbose --release
