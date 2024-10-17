#!/bin/bash
while getopts m: flag
do
    case "${flag}" in
        m) message=${OPTARG};;
    esac
done
echo "Message: $message";

git add .
git commit -m $message"
