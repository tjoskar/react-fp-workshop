# Functional programing with React

Welcome to the fantastic land of pure functions, monads and love.

Below you will find some exercise how to use functional and reactive programing with React.

Oh, one more thing before we start; If you see any typos or errors, please let me know! – With that being said, let's code some fine javascript (or typescript).

## Prologue - Get started

### Set up the project

* Clone the project:

```
$ git clone https://github.com/tjoskar/react-fp-workshop.git react-fp-workshop
```

* Install dependencies:

```
$ cd react-fp-workshop
$ npm install
```

* Boot up the application:

```
$ node fuse.js
```

* Navigate to `http://localhost:8080`

All right! Give you self a high five 🖐

> Typescript, or JavaScript

– Prince Hamlet

#### Typescript

All you need is a typescript aware editor, like [vscode](https://code.visualstudio.com/) and you are all set.

#### JavaScript

- Option 1: Check out the branch 'JavaScript': `git checkout javascript`
- Option 2: Changing extension on all ts files to js.

Now you need a great js editor and you are good to go.

OBS! Chapter 6, 7 and 8 will only work with typescript

### Take a look at the code

```
❯ tree -I 'node_modules' .
.
├── fuse.js                         // Config for fuse box
├── index.html
├── package-lock.json
├── package.json
├── readme.md                       // This file. Woop Woop!
├── src                             // The source folder
│   ├── boot.ts                     // Application endpont, the start of everything
│   ├── components
│   │   ├── search                  // Contains components for the search page
│   │   │   ├── search-field.ts
│   │   │   ├── search-result.ts
│   │   │   └── search.ts
│   │   └── shows                   // Contains components for upcoming shows
│   │       ├── show.ts
│   │       ├── shows.ts
│   │       └── upcoming-shows.ts
│   ├── either.ts                   // See Chapter 7
│   └── store                       // Contains redux store
│       ├── search
│       │   ├── index.ts
│       │   ├── search.actions.ts
│       │   ├── search.epic.ts
│       │   └── search.reducer.ts
│       │   └── test               // See Chapter 6
│       │       └── search.epic.test.ts
│       ├── shows
│       │   ├── index.ts
│       │   ├── show.actions.ts
│       │   ├── show.epic.ts
│       │   └── show.reducer.ts
│       └── store.ts
└── tsconfig.json

8 directories, 24 files
```

Browse the code and get a feeling about how it works.

## Chapter 1 - Search

Navigate to `http://localhost:8080` and click on search. Search for your favorite tv series. Did you find it? No? Open up the dev tools to see what is going on. 

Exercise: Implement the logic for the search in `search.epic.ts`

Criteria:
- Make sure to not search if the search term is less than 3 characters. (*tips: filter*)
- Wait for 500ms before making the search (*tips: debounceTime*)
- Cancel the ongoing ajax request if the user wants to make a new one (*tips: switchMap*). You can check in the dev tools to see if the ajax request is cancelled or not.

*tips: Check in: [DebounceTime](https://www.learnrxjs.io/operators/filtering/debouncetime.html), [SwitchMap](https://www.learnrxjs.io/operators/transformation/switchmap.html), [MergeMap](https://www.learnrxjs.io/operators/transformation/mergemap.html), [Filter](https://www.learnrxjs.io/operators/filtering/filter.html), [Map](https://www.learnrxjs.io/operators/transformation/map.html), [MapTo](https://www.learnrxjs.io/operators/transformation/mapto.html)*

## Chapter 2 - No subscription

If we unsubscribe for all shows, it is pretty empty on the first page. Create a new component and show that one when the user doesn’t  have subscribed to any series.

Use [recomposes branch](https://github.com/acdlite/recompose/blob/master/docs/API.md#branch) for this. You can take a look how it is done in `search-result.ts`

## Chapter 3 - Next episode

Subscribe on an ongoing show. Did you notice that "Next episode:" is always empty?

Exercise: Calculate the next episode and print that one. Put the logic in `components/shows/show.ts` for simplicity.

Criteria:
- Do not use any if statement (nor conditional operator `?:`), instead, use a [Maybe monad](https://monet.github.io/monet.js/#maybe).

## Chapter 4 - Loading

It can sometimes take a while before we get a search result.

Exercise: Add a lodging text to inform the user that we are loading.

Tips: create a new property (`loading`) in the search store (`store/search/search.reducer.ts`). Set it to `true` for `UPDATE_SEARCH_FIELD` actions and `false` for `UPDATE_SEARCH_RESULT`.

Criteria:
- Use [`branch`](https://github.com/acdlite/recompose/blob/master/docs/API.md#branch) (and maybe [`renderComponent`](https://github.com/acdlite/recompose/blob/master/docs/API.md#rendercomponent) and/or [`renderNothing`](https://github.com/acdlite/recompose/blob/master/docs/API.md#rendernothing))

## Chapter 5 - Error handling

Go to the search page. Go offline (you can simulate this in your browsers dev tools). Search for your favorite tv show. 

Did you find your show? Of course not, we are offline. Okay, let's go online again and search again. – What!? Still no result?

Exercise: Handle ajax failure. 

Tips: Use [retry](https://www.learnrxjs.io/operators/error_handling/retry.html) or [retryWhen](https://www.learnrxjs.io/operators/error_handling/retrywhen.html)

## Chapter 6 - Testing

Go through the code to see what you would like to test.

I'm using [`jest`](https://facebook.github.io/jest/) and you can run the test case by `npm test` (do it!)

## Chapter 7 (Bonus) - Either

Take a look at `src/either.ts`. How could you rewrite the code to use the [Either monad](https://monet.github.io/monet.js/#either) instead?

*Tips: you can run the code with: `npx ts-node src/either.ts`*

## Chapter 8 (Bonus) - Validation

Let's say we want to get all validation errors at once, how can you do that? (*tips: use a [validation "monad"](https://monet.github.io/monet.js/#validation)*)
