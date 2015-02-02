# Mobile First - Base Styles

## Typography:

+ I have used the following values to calulate my font sizes & line-height: 
```
16px, 18px, 21px, 24px, 36px, 48px, 60px, 72px
```
+ My HTML font size is 16px at Desktop, so I have used this help convert my pixel values to em units. 
```
48px / 16px = 3em
```
+ The Baseline is 24px
```
24px / 16px = 1.5em
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




