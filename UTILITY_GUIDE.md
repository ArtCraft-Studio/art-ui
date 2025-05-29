# Utility Classes Guide

Art UI components support a comprehensive set of utility classes for styling and layout. These classes provide a consistent and predictable way to style your components.

## Layout Classes

### Flexbox
- `flex` - Sets display to flex
- `inline-flex` - Sets display to inline-flex
- `items-center` - Aligns items to center
- `items-start` - Aligns items to start
- `items-end` - Aligns items to end
- `justify-center` - Justifies content to center
- `justify-start` - Justifies content to start
- `justify-end` - Justifies content to end
- `justify-between` - Distributes space between items

### Grid
- `grid` - Sets display to grid
- `grid-cols-1` to `grid-cols-12` - Sets grid columns

## Spacing Classes

### Padding
- `p-1` to `p-12` - Sets padding (4px increments)
- `px-1` to `px-12` - Sets horizontal padding
- `py-1` to `py-12` - Sets vertical padding
- `pl-1` to `pl-12` - Sets left padding
- `pr-1` to `pr-12` - Sets right padding
- `pt-1` to `pt-12` - Sets top padding
- `pb-1` to `pb-12` - Sets bottom padding

### Margin
- `m-1` to `m-12` - Sets margin (4px increments)
- `mx-1` to `mx-12` - Sets horizontal margin
- `my-1` to `my-12` - Sets vertical margin
- `ml-1` to `ml-12` - Sets left margin
- `mr-1` to `mr-12` - Sets right margin
- `mt-1` to `mt-12` - Sets top margin
- `mb-1` to `mb-12` - Sets bottom margin

### Gap
- `gap-1` to `gap-12` - Sets gap between flex/grid items

## Color Classes

### Background Colors
- `bg-white` - White background
- `bg-gray-50` to `bg-gray-900` - Gray backgrounds
- `bg-blue-50` to `bg-blue-900` - Blue backgrounds
- `bg-red-50` to `bg-red-900` - Red backgrounds
- `bg-green-50` to `bg-green-900` - Green backgrounds
- `bg-yellow-50` to `bg-yellow-900` - Yellow backgrounds
- `bg-purple-50` to `bg-purple-900` - Purple backgrounds
- `bg-pink-50` to `bg-pink-900` - Pink backgrounds

### Text Colors
- `text-white` - White text
- `text-gray-50` to `text-gray-900` - Gray text
- `text-blue-50` to `text-blue-900` - Blue text
- `text-red-50` to `text-red-900` - Red text
- `text-green-50` to `text-green-900` - Green text
- `text-yellow-50` to `text-yellow-900` - Yellow text
- `text-purple-50` to `text-purple-900` - Purple text
- `text-pink-50` to `text-pink-900` - Pink text

### Hover States
All color classes support hover states by prefixing with `hover:`:
- `hover:bg-blue-600` - Blue background on hover
- `hover:text-white` - White text on hover

## Typography Classes

### Font Size
- `text-xs` - Extra small text (12px)
- `text-sm` - Small text (14px)
- `text-base` - Base text (16px)
- `text-lg` - Large text (18px)
- `text-xl` - Extra large text (20px)
- `text-2xl` - 2x large text (24px)

### Font Weight
- `font-light` - Light font weight (300)
- `font-normal` - Normal font weight (400)
- `font-medium` - Medium font weight (500)
- `font-semibold` - Semibold font weight (600)
- `font-bold` - Bold font weight (700)

### Text Alignment
- `text-left` - Left align text
- `text-center` - Center align text
- `text-right` - Right align text

## Animation Classes

### Built-in Animations
- `animate-pulse` - Pulsing animation
- `animate-bounce` - Bouncing animation
- `animate-shake` - Shaking animation
- `animate-spin` - Spinning animation

## Border Classes

### Border Radius
- `rounded` - Small border radius (4px)
- `rounded-md` - Medium border radius (6px)
- `rounded-lg` - Large border radius (8px)
- `rounded-xl` - Extra large border radius (12px)
- `rounded-full` - Full border radius (50%)

### Border Width
- `border` - 1px border
- `border-2` - 2px border
- `border-4` - 4px border

### Border Colors
- `border-gray-200` - Light gray border
- `border-gray-300` - Medium gray border
- `border-blue-500` - Blue border

## Transition Classes

- `transition` - Basic transition
- `transition-colors` - Color transition
- `transition-transform` - Transform transition
- `duration-150` - 150ms duration
- `duration-200` - 200ms duration
- `duration-300` - 300ms duration

## Usage Examples

### Button Styling
```tsx
<Button 
  variant="primary"
  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
>
  Custom Button
</Button>
```

### Layout Example
```tsx
<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
  <span className="text-lg font-semibold text-gray-900">Title</span>
  <Button variant="outline" size="small">Action</Button>
</div>
```

### Card Component
```tsx
<div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
  <h3 className="text-xl font-bold text-gray-900 mb-2">Card Title</h3>
  <p className="text-gray-600 mb-4">Card description text goes here.</p>
  <Button variant="primary">Learn More</Button>
</div>
```

### Grid Layout
```tsx
<div className="grid grid-cols-3 gap-4">
  <div className="p-4 bg-blue-50 rounded-lg">Item 1</div>
  <div className="p-4 bg-green-50 rounded-lg">Item 2</div>
  <div className="p-4 bg-purple-50 rounded-lg">Item 3</div>
</div>
```

## Combining Classes

Utility classes can be combined to create complex layouts and styles:

```tsx
<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
  <div className="p-8 bg-white rounded-2xl shadow-xl max-w-md w-full mx-4">
    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
      Welcome
    </h1>
    <div className="space-y-4">
      <Button 
        variant="primary" 
        className="w-full py-3 text-lg"
      >
        Get Started
      </Button>
      <Button 
        variant="outline" 
        className="w-full py-3 text-lg"
      >
        Learn More
      </Button>
    </div>
  </div>
</div>
```

This utility class system provides a comprehensive set of building blocks for creating beautiful and consistent user interfaces without writing custom CSS.
