Sagan
===

> If you wish to make an apple pie from scratch, you must first invent the universe.
— Carl Sagan

The following CSS-only grid include accomplishes two main items:

1. Reduces the CSS overhead included with common grid systems by including unused CSS by default.
2. Removes the need for additional classes in your markup and keeps you document leaner and more semantic.

***

Include the grid functions by adding to you SASS file:

```
@import BOWER_PACKAGE_PATH/sagan/_grid.(sass|scss)
```

***

## General Configuration

These values can be overridden in your own .sass file.

- `$containerMaxWidth`
    - Sets the max-width of the container
    - default value: __960px__
- `$InternetExplorerWidth` __disabled by default__
    - Sets the explicit width of the container for IE support
    - default value: __960px__
- `$flexbox-enabled`
    - Enables flexbox support instead of traditional float implementation     
    - default value: __false__

***

The grid can be invoked using the following function:

```
+columns($selector: "comma_separated_selectors", $layout: false, $count: int, $offset: int, $push: 0, $pull: 0, $right: false, $first: false, $no-first-child: false, $width-only: false)
```

- `$selector` __required__
  - Comma-separated list of CSS selectors. For example: `".class, #id, body"`

- `$layout` _optional_
  - default value: __false__
  - acceptable values: __"row"__, __"container"__

- `$count` _optional_
  - default value: __1__
  - acceptable values: integers [1-12]
  - will sill accept __"row"__, __"container"__ (backwards compatibility)

- `$offset` _optional_
  - Right offsets the section by the columns entered.
  - default value: __0__
  - acceptable values: integers [1-12]

- `$push` _optional_
  - Applies a negative right margin the width of the columns entered.
  - default value: __0__
  - acceptable values: integers [1-12]

- `$pull` _optional_
  - Applies a negative left margin the width of the columns entered.
  - default value: __0__
  - acceptable values: integers [1-12]

- `$right` _optional_
  - applies `float: right` instead of the default `float: left`
  - default value: __false__
  - acceptable values: boolean

- `$first` _optional_
  - Adds an additional `first` class to null the margin-left value
  - default value: __false__
  - acceptable values: boolean

- `$no-first-child` _optional_
  - Opt-out for the default `:first-child` pseudo-class to null the margin-left value
  - default value: __false__
  - acceptable values: boolean

- `$width-only` _optional_
  - Opt-out of all properties except `width` property. Useful to avoid redundant CSS when grid is defined in a previous breakpoint.
  - default value: __false__
  - acceptable values: boolean

You may also reference the layout function used internally directly:

```
+layout($selector: "comma_separated_selectors", $layout)
```

- `$selector` __required__
  - Comma-separated list of CSS selectors. For example: `".class, #id, body"`

- `$layout` __required__
  - default value: __false__
  - acceptable values: __"row"__, __"container"__
  
***

### Nesting

SASS nesting is fully supported. Both of the following snippets will produce the same compiled CSS:

```
+columns($selector:'article ul', $count:3)
```

```
article
	+columns($selector:'ul', $count:3)
```

### Examples

- [Basic demo](http://jeffreylouden.github.io/sagan/demo-basic.html)
- [Basic flexbox demo](http://jeffreylouden.github.io/sagan/demo-basic-flexbox.html)
- [Intermediate demo](http://jeffreylouden.github.io/sagan/demo-intermediate.html)
- [Intermediate flexbox demo](http://jeffreylouden.github.io/sagan/demo-intermediate-flexbox.html)
