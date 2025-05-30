# Art UI

[![npm version](https://img.shields.io/npm/v/artcraft-ui.svg)](https://www.npmjs.com/package/artcraft-ui)
[![CI/CD Pipeline](https://github.com/ArtCraft-Studio/art-ui/actions/workflows/release.yml/badge.svg)](https://github.com/ArtCraft-Studio/art-ui/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern React + TypeScript component library with intuitive utility classes for building beautiful user interfaces.

## Features

- 🚀 Built with React & TypeScript
- 🎨 **Intuitive utility classes** - Predictable and readable class names
- 📦 ESM & CommonJS modules
- 🎭 **Built-in animations** - Pulse, bounce, shake, rotate effects
- 📝 Fully typed API
- 📚 Storybook documentation
- ✅ Thoroughly tested
- ♿ Accessibility-focused

## Installation

```bash
# npm
npm install artcraft-ui

# yarn
yarn add artcraft-ui

# pnpm
pnpm add artcraft-ui
```

## Usage

```tsx
import { Button, PlayIcon } from 'artcraft-ui';

function App() {
  return (
    <div className="flex gap-3">
      {/* Standard button with utility classes */}
      <Button variant="primary">Click Me</Button>
      
      {/* Button with icon */}
      <Button variant="outline" icon={<PlayIcon />} iconPosition="left">
        Play Video
      </Button>
      
      {/* Impression button with built-in play icon */}
      <Button impression>View Impressions</Button>
      
      {/* Custom styling with utility classes */}
      <Button 
        variant="text" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      >
        Custom
      </Button>
    </div>
  );
}
```

## Quick Start

For detailed examples and styling patterns, see our [Utility Classes Guide](./UTILITY_GUIDE.md).

## Components

### Button
A versatile button component with support for icons, animations, various styles, and impression functionality.

```tsx
<Button 
  variant="primary" // primary, secondary, outline, text
  size="medium" // small, medium, large
  icon={<PlayIcon />} // any React node
  iconPosition="left" // left, right
  animation="pulse" // none, pulse, bounce, shake, rotate
  impression={false} // when true, shows as impression button with play icon
  impressionIconSize={14} // size of the impression play icon
  onClick={() => console.log('Button clicked')}
>
  Button Text
</Button>
```

#### Impression Button Mode
When `impression={true}`, the button automatically:
- Uses the `text` variant (transparent background, blue text)
- Uses the `small` size
- Adds a PlayIcon on the right side
- Sets appropriate accessibility labels

```tsx
{/* Simple impression button */}
<Button impression>View Impressions</Button>

{/* Impression button with custom icon size */}
<Button impression impressionIconSize={16}>Show More</Button>

{/* Impression button with custom title */}
<Button impression title="View detailed analytics">Analytics</Button>
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/art-ui.git
   cd art-ui
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start Storybook development server
   ```bash
   npm run storybook
   ```

### Building

```bash
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Linting

```bash
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
