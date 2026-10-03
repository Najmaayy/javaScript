## JSON.parse() and JSON.stringify()

### What is JSON?

JSON is a text format used to store or send data.

A JavaScript object looks like this:

```js
const post = {
  id: 1,
  name: "post",
  body: "body"
};
```

A JSON string looks like this:

```js
const savedPost = '{"id":1,"name":"post","body":"body"}';
```

Even though the JSON string looks like an object, it is still a string because it is inside quotes.

---

## JSON.parse()

`JSON.parse()` converts a JSON string into real JavaScript data.

Most of the time, this data is an object or an array.

Example:

```js
const savedPost = '{"id":1,"name":"post","body":"body"}';

const post = JSON.parse(savedPost);

console.log(post.name);
// "post"
```

Visual:

```txt
JSON string
'{"id":1,"name":"post","body":"body"}'
        ↓ JSON.parse()
JavaScript object
{ id: 1, name: "post", body: "body" }
```

`JSON.parse()` knows what to create because it follows JSON rules:

```txt
Starts with { }  → object
Starts with [ ]  → array
Starts with " "  → string
Looks like 25    → number
true / false     → boolean
null             → null
```

So this:

```js
JSON.parse('{"name":"post"}');
```

creates an object because the JSON string starts with `{`.

---

## JSON.stringify()

`JSON.stringify()` does the opposite.

It converts JavaScript data into a JSON string.

Example:

```js
const post = {
  id: 1,
  name: "post",
  body: "body"
};

const savedPost = JSON.stringify(post);

console.log(savedPost);
// '{"id":1,"name":"post","body":"body"}'
```

Visual:

```txt
JavaScript object
{ id: 1, name: "post", body: "body" }
        ↓ JSON.stringify()
JSON string
'{"id":1,"name":"post","body":"body"}'
```

---

## When to use them

Use `JSON.stringify()` when you need to save or send JavaScript data as text.

Example: saving to local storage.

```js
const post = {
  id: 1,
  name: "post",
  body: "body"
};

localStorage.setItem("post", JSON.stringify(post));
```

Local storage can only store strings, so the object must be turned into a string first.

Use `JSON.parse()` when you get the string back and want to use it like a real object again.

```js
const savedPost = localStorage.getItem("post");

const post = JSON.parse(savedPost);

console.log(post.name);
// "post"
```

Visual:

```txt
Save:
object → JSON.stringify() → string → localStorage

Get:
localStorage → string → JSON.parse() → object
```

---

## Important rule

Do not use `JSON.parse()` on something that is already an object.

This is already an object:

```js
const post = {
  id: 1,
  name: "post",
  body: "body"
};
```

So use it directly:

```js
console.log(post.name);
// "post"
```

Do not do this:

```js
JSON.parse(post);
```

That causes an error because `JSON.parse()` expects a JSON string, not an object.

---

## Simple memory trick

```txt
JSON.stringify()
JavaScript data → JSON string

JSON.parse()
JSON string → JavaScript data
```

Use this rule:

```txt
Already an object? Use it directly.

Need to save/send it as text? Use JSON.stringify().

Got JSON text and need to use it? Use JSON.parse().
```
