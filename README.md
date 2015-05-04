# Mobile First - Base Styles

This stylesheet acts as a starting point for projects. It isn’t a framework, but a collection of base styles to start working on prototypes or your design.


## Important information:

Sass has just been added, but not tested.


Even though the CSS is structured in a Mobile First approach, the desktop font-size: 16px; is used to calulate the em units.
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

## Typography:

### Typographic Scale:

6px, 7px, 8px, 9px, 10px, 11px, 12px, 14px, 16px, 18px, 21px, 24px, 36px, 48px, 60px, 72px, 84px, 96px, 108, 120


```
H1 - fs:48px; + lh:60px;
H2 - fs:36px; + lh:48px;
H3 - fs:24px; + lh:36px;
H4 - fs:21px; + lh:24px;
H5 - fs:18px; + lh:24px;
H6 - fs:16px; + lh:24px;

.medium - fs:18px; + lh:24px;
.x-medium - fs:21px; + lh:24px;

.large - fs:60px; + lh:72px;
.x-large - fs:72px; + lh:84px; + mb:48px;
.xx-large - fs:84px; + lh:96px; + mb:48px;
```

## Baseline Grid

The baseline is set 24px, so this value is divided into the context.

```
  h1, h2, h3, p, header, footer, section, article, ul, aside, div { margin: 0 0 1.5em 0; }
  h1 { margin: 0 0 0.5em 0; }
  h2 { margin: 0 0 0.66666666666667em 0; }
  h3 { margin: 0 0 1em 0; }
  p { margin: 0 0 1.5em 0; }
  h4 { margin: 0 0 1.14285714285714em 0; }
  h5 { margin: 0 0 1.33333333333333em 0;  }
  h6 { margin: 0 0 1.5em 0; }
  li { margin: 0 0 1.5em 0; }
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




