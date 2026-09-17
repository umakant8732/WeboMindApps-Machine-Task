# Notes

> Fill this in as you work. This document is assessed alongside your code.

## Bugs I found

For each: what was wrong, **why** it was wrong, and how I fixed it.

## Bug1 : Infinite API Fetch Loop in useProducts (custom hook)

1. [what] -> The useEffect hook had dependency array, inside that array products state was there
2. [why] -> Inside the useEffect hook setProductData was updating the products state, and products state was there in dependency array, every update triggered the useEffect, and it causing an infinite api request.
3. [How] -> I changed the dependency array, i remove 'products' state from the array, now useEffect runs one time when component mount

## BUG 2 : Search and Category Filter was not working together

1. [what] -> When a category other than 'all' was selected, search input was stop working also the search was case sensitive.
2. [why] -> The filter logic had an return if(category !== "all") return product.category === category, because of that search query was not running, and product.title.includes(search) missed casing like "shirt" vs "Shirt".
3. [How] -> Added both conditions togetheer so both category and search must match. also applied .toLowerCase() for case insensitivity also add .trim() to ignore empty spaces and wrap with useMemo so that it will that function will not create again and not run unncessary until the dependency array doest not get changed.


## Features I completed

-

## Decisions

Anywhere I had to choose between options — and why I chose what I did.

-

## With more time

What I'd improve or add next.

-
