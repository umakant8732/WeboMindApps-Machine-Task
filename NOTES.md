# Notes

> Fill this in as you work. This document is assessed alongside your code.

## Bugs I found

For each: what was wrong, **why** it was wrong, and how I fixed it.

## Bug1 : Infinite API Fetch Loop in useProducts (custom hook)

1. [What] -> The useEffect hook had dependency array, inside that array products state was there
2. [Why] -> Inside the useEffect hook setProductData was updating the products state, and products state was there in dependency array, every update triggered the useEffect, and it causing an infinite api request.
3. [How] -> I changed the dependency array, i remove 'products' state from the array, now useEffect runs one time when component mount

## BUG 2 : Search and Category Filter was not working together

1. [What] -> When a category other than 'all' was selected, search input was stop working also the search was case sensitive.
2. [Why] -> The filter logic had an return if(category !== "all") return product.category === category, because of that search query was not running, and product.title.includes(search) missed casing like "shirt" vs "Shirt".
3. [How] -> Added both conditions togetheer so both category and search must match. also applied .toLowerCase() for case insensitivity also add .trim() to ignore empty spaces and wrap with useMemo so that it will that function will not create again and not run unncessary until the dependency array doest not get changed.

## BUG 3 : broken animation in product grid component

1. [What] -> There was used array 'index' as the React 'key' with framer motion.
2. [Why] -> When we filter products by category and searching, array 'index' stays the same for starting items, because the key didn't change, just indexes are suffled, so react reused the existing cards and animation never triggered.
3. [How] -> Changed key={index} to key={product.id}. now each product has a unique key, so when product is removed its animation runs smoothly.

## BUG 4 : Typescript 'any' types in useProduct custom hook

1. [What] -> 'any' type was used in 'useState<any[]>([])' and 'data: any' in useProducts custom hook.
2. [Why]  -> using 'any' bypass the TypeScript type checking, it removes type safety for all components that use 'products'
3. [How]  -> replaced 'any' with 'products[]' using the 'Product' interface which is already created in product.ts file

## Features I completed

-

## Decisions

Anywhere I had to choose between options — and why I chose what I did.

-

## With more time

What I'd improve or add next.

-
