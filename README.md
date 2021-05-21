# Usage

To use default options: 

~~~html
<loading [loading]="Loading"></loading>
~~~

Medium size, blue, paged-display

~~~html
<loading md page [loading]="boolean"></loading>
~~~

Small size, light color, button-display

~~~html
<loading sm light button [loading]="collection.length"></loading>
~~~

<br>

# Options

## Sizing (Default: md)

Options: `sm | md | lg`

<br>

## Color Scheme (Default: dark)

Options: `light`

<br>

## Parent (Default: page)

Options: `button | page`

<br>

## Loading

Options: `boolean | collection.length`

<br>

## Content (Default: Medium FontAwesome Notch)

Options: `String`