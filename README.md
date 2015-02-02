# Mobile First - Base Styles

This stylesheet acts as a starting point for projects. It isn’t a framework, but a collection of base styles to start working on prototypes or your design.


## Important information: 
----------------------
» Even though the CSS is structured in a Mobile First approach, the Desktop base font of 16px; is used to calulate the em units.
```
24px / 16px = 1.5em
```

To get the most out of these base styles, it would be recommended you convert every pixel based object to an em unit. This will allow you to change base font size, and the entire design will scale down respectively.

```
  html { font-size: 10px; }
  @media only screen and (min-width: 500px) { html { font-size: 12px; } }
  @media only screen and (min-width: 768px) { html { font-size: 14px; } }
  @media only screen and (min-width: 850px) { html { font-size: 16px; } }
```

### FAQ
#### Why is the font-size: 16px; when you recommend em units?
Some browsers don't have consistent font-sizes, by adding a px value this will amend these browsers. 

### Handy Hint
If you religiously use the typographic scale below as a rule of thumb for margin/padding etc, you will start to remember the exact em values.


## Typography:

### Typographic Scaled:
------------ 
» 16px, 18px, 21px, 24px, 36px, 48px, 60px, 72px, 84px, 96px to calculate relative sizes.
» 30px has been used to calculate a suitable line-height for font-size: 21px;

```
H1 - fs:48px; / lh:60px;
H2 - fs:36px; / lh:48px;
H3 - fs:24px; / lh:36px;
H4 - fs:21px; / lh:30px;
H5 - fs:18px; / lh:24px;
H6 - fs:16px; / lh:24px;

.medium - fs:18px; / lh:24px;
.x-medium - fs:21px; / lh:30px;

.large - fs:60px; / lh:72px;
.x-large - fs:72px; / lh:84px; / mb:48px;
.xx-large - fs:84px; / lh:96px; / mb:48px;
```

## The Wrapper:

```
<main>
	<section class="wrapper"></section>
</main>
```

### Fluid

The layout is purely fluid & will have a left/right margin of 1.5em, which respects the baseline value of 24px. 
If the browser doesn't support the calc property, the browser will adopt the 90% width.

#### This is achieved with using: 
```
.wrapper { width: 90%; width: calc( 100% - 3em ); }
```

### Fixed

Once the viewport is at 1180px, the wrapper will now be fixed to this size.




