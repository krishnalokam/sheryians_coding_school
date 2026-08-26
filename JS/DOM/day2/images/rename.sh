#!/bin/bash
for f in *\(*\).jpeg; do
  num=$(echo "$f" | sed -E 's/.*\(([0-9]+)\).*/\1/')
  mv "$f" "${num}.jpeg"
done

