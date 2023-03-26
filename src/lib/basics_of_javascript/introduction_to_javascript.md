---
title: How to use flexbox in css
tags:
    - css
    - javascript
    - webdevelopment
    - webtechnologies
date: 2022-12-24
category: css
thumbnail: /images/thumbnail/using_flex_box_in_css.png
excerpt: Flexbox is a layout mode in CSS that allows you to easily create flexible and responsive layouts. It works by defining a container element as a flex container, and its children as flex items. The flex container allows you to control the alignment, direction, and order of the flex items within it.
---

Here's a basic tutorial on how to use Flexbox:
<strong>1. Create a flex container:</strong> To create a flex container, you can use the <code>display</code> property with a value of <code>flex</code> or <code>inline-flex</code> on the parent element. This tells the browser to treat the element and its children as a flex container and flex items, respectively.

```css
.container {
  display: flex;
}
```

<strong>2. Set the direction of the flex items:</strong> By default, flex items are arranged in a row from left to right. You can use the <code>flex-direction</code> property to change the direction of the flex items. Possible values are <code>row</code>, <code>row-reverse</code>, <code>column</code>, and <code>column-reverse</code>.

```css
.container {
  display: flex;
  flex-direction:column;
}
```

<strong>3. Align the flex items:</strong> The <code>justify-content</code> property allows you to align the flex items along the main axis (horizontally for rows, vertically for columns). Possible values are <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, and <code>space-around</code>.

```css
.container {
  display: flex;
  justify-content: center;
}
```


<strong>4. Align the flex items along the cross axis:</strong> The align-items property allows you to align the flex items along the cross axis (vertically for rows, horizontally for columns). Possible values are <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>baseline</code>, and <code>stretch</code>.

```css
.container {
  display: flex;
  align-items: center;
}
```


<strong>5. Adjust the size of the flex items:</strong> The <code>flex</code> property allows you to adjust the size of the flex items relative to each other. You can specify a positive number to increase the size of an item, or a negative number to decrease it.

```css
.item1 {
  flex: 2;
}

.item2 {
  flex: 1;
}
```



These are just a few examples of what you can do with Flexbox. For more detailed information and examples, you can refer to the documentation on the [Mozilla Developer Network (MDN) website](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)