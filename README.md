# Kai Jie's Portfolio

## Prerequisite

- node > 20.0
- npm > 11.0

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

4. Extras:

    ```bash
    # Run tests
    npm run test

    ## refer `pakcage.json` to for all available scripts
    ```

## Customization

### Personal Information

1. Update metadata in `app/layout.tsx`:
    - Site title
    - Description
    - Open Graph metadata
    - Favicon

2. Modify content in `app/page.tsx`:
    - Hero section
    - About section
    - Projects
    - Contact information

3. Replace assets:
    - Replace images in the `public` directory
    - Update social media icons
    - Modify logo if needed

### Styling

1. Colors and Theme:
    - Customize colors in `tailwind.config.js`
    - Modify theme variables in `app/globals.css`

2. Typography:
    - Update font families in `tailwind.config.js`
    - Modify text sizes and weights

3. Layout:
    - Adjust spacing and padding in component files
    - Modify responsive breakpoints in `tailwind.config.js`

## Troubleshooting

### Common Issues

1. **Build Errors**
    - Ensure all dependencies are installed
    - Clear `.next` folder and node_modules
    - Run `npm install` again

2. **Styling Issues**
    - Run `npm run build` to ensure TailwindCSS classes are generated
    - Check for conflicting styles in `globals.css`

3. **Image Loading**
    - Verify images are in the correct format (PNG, JPG, WebP)
    - Check image paths are correct
    - Ensure images are in the `public` directory

```

```
