extend.js
=========

This repo creates shortcut functions for commonly-used code in javascript. For use with IE 8 or 9, it depends upon https://github.com/darktrojan/shim.js (IE 7 not supported).

`_loadList`
---------

To call a function as soon as the page DOM has loaded, add it to `_loadList`, like so:

```javascript
_loadList.push(function() { alert('loaded!'); });
```

`$(aID)`
--------

Shortcut for `document.getElementById(aID)`

`addHandlers(aHandlers)`
------------------------

Adds event handlers to an element or elements matching a CSS selector. Takes an object with keys as the event type, and values as an object of selector/functions. Confusing? Example:

```javascript
addHandlers({
    'click': {
        // adds this function to all buttons
        'button': function() { alert('you clicked me!'); },
        // adds this function to all anchors with detail class
        'a.detail': function() { ... }
    },
    'reset': {
        // does something to this form when reset
        'form[name="example"]': function() { ... }
    }
})
```

`createElement(aSelector, aTextContent, aAttributes)`
-----------------------------------------------------

(Not to be confused with `document.createElement`, this one is function on `window`.)

Creates an element and optionally adds text and attributes to it. `aSelector` is of the form `nodeName#id.className1.className2` where the id and classNames are optional. `aAttributes` is an object with names and values that match the attributes to set.

This:

```javascript
var a = createElement('a.detail', 'this is text', { 'href': '#top' });
```

is the same as this:

```javascript
var a = document.createElement('a');
a.className = 'detail';
a.appendChild(document.createTextNode('this is text'));
a.setAttribute('href', '#top');
```

Passing `null` as the first argument will return a text node with `aTextContent`.

`Element.clearChildNodes()`
---------------------------

Removes all child nodes from the element.

`Element.append(aSelector, aTextContent, aAttributes)`
------------------------------------------------------

Calls `createElement` and appends the result to the element you called `append` on. Also returns the result.

`Element.appendMany(aArguments)`
--------------------------------

Calls `append` on the element with the arguments provided. Example:

```javascript
ul.appendMany([
    ['li', 'item one'],
    ['li', 'item two'],
    ['li', 'item three']
]);
```

`Element.ancestor(aSelector)`
-----------------------------

Finds the first ancestor of the element it is called on that matches `aSelector`. `aSelector` is the same format as in createElement, except that the node name is also optional.
