#!/bin/bash

# FILL THESE WITH YOUR OWN SDKs PATHS and APP-ETHEREUM's ROOT
#NANOS_SDK=
#NANOX_SDK=
APP_ETHEREUM=/plugin_dev/app-ethereum

# create elfs folder if it doesn't exist
mkdir -p elfs

# move to repo's root to build apps
cd ..

# echo "*Building elfs for Nano S..."
# export BOLOS_SDK="$NANOS_SDK"

# echo "**Building app-paraswap for Nano S..."
# make clean
# make -j DEBUG=1
# cp bin/app.elf "tests/elfs/plugin_nanos.elf"

# echo "**Building app-ethereum for Nano S..."
# cd $APP_ETHEREUM || exit
# make clean
# make -j DEBUG=1 CHAIN=ethereum BYPASS_SIGNATURES=1 ALLOW_DATA=1
# cd - || exit
# cp "${APP_ETHEREUM}/bin/app.elf" "tests/elfs/ethereum_nanos.elf"


# echo "*Building elfs for Nano X..."
# export BOLOS_SDK="$NANOX_SDK"

# echo "**Building app-paraswap for Nano X..."
# make clean
# make -j DEBUG=1
# cp bin/app.elf "tests/elfs/plugin_nanox.elf"

# echo "**Building app-ethereum for Nano X..."
# cd $APP_ETHEREUM || exit
# make clean
# make -j DEBUG=1 CHAIN=ethereum BYPASS_SIGNATURES=1 ALLOW_DATA=1
# cd - || exit
# cp "${APP_ETHEREUM}/bin/app.elf" "tests/elfs/ethereum_nanox.elf"

# echo "*Building elfs for Nano S+..."
# export BOLOS_SDK="$NANOSP_SDK"

# echo "**Building app-1inch for Nano S+..."
# make clean
# make -j DEBUG=1
# cp bin/app.elf "tests/elfs/plugin_nanosp.elf"

# echo "**Building app-ethereum for Nano S+..."
# cd $APP_ETHEREUM
# make clean BOLOS_SDK=$NANOSP_SDK
# make -j DEBUG=1 BOLOS_SDK=$NANOSP_SDK CHAIN=ethereum BYPASS_SIGNATURES=1
# cd -
# cp "${APP_ETHEREUM}/bin/app.elf" "tests/elfs/ethereum_nanosp.elf"

echo "*Building elfs for Flex..."
export BOLOS_SDK="$FLEX_SDK"

echo "**Building app-1inch for Flex..."
make clean
make -j DEBUG=1
cp bin/app.elf "tests/elfs/plugin_flex.elf"

echo "**Building app-ethereum for Flex..."
cd $APP_ETHEREUM
make clean BOLOS_SDK=$FLEX_SDK
make -j DEBUG=1 BOLOS_SDK=$FLEX_SDK CHAIN=ethereum BYPASS_SIGNATURES=1
cd -
cp "${APP_ETHEREUM}/bin/app.elf" "tests/elfs/ethereum_flex.elf"


echo "*Building elfs for Stax..."
export BOLOS_SDK="$STAX_SDK"

echo "**Building app-1inch for Stax..."
make clean
make -j DEBUG=1
cp bin/app.elf "tests/elfs/plugin_stax.elf"

echo "**Building app-ethereum for Stax..."
cd $APP_ETHEREUM
make clean BOLOS_SDK=$STAX_SDK
make -j DEBUG=1 BOLOS_SDK=$STAX_SDK CHAIN=ethereum BYPASS_SIGNATURES=1
cd -
cp "${APP_ETHEREUM}/bin/app.elf" "tests/elfs/ethereum_stax.elf"

echo "done"
