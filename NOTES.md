# Notes

> Fill this in as you work. This document is assessed alongside your code.

## Bugs I found

For each: what was wrong, **why** it was wrong, and how I fixed it.

## Bug1

## Infinite API Fetch Loop in useProducts (custom hook)

1. [what] -> The useEffect hook had dependency array, inside that array products state was there
2. [why] -> Inside the useEffect hook setProductData was updating the products state, and products state was there in dependency array, every update triggered the useEffect, and it causing an infinite api request.
3. [How] -> I changed the dependency array, i remove 'products' state from the array, now useEffect runs one time when component mount

## Features I completed

-

## Decisions

Anywhere I had to choose between options — and why I chose what I did.

-

## With more time

What I'd improve or add next.

-
