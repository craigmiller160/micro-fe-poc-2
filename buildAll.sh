#!/bin/sh

cd react-parent
yarn build

cd old-react-child
yarn build

cd new-react-child
yarn build
