# Academic website — Nicolas Djob

A lightweight, bilingual academic website designed for GitHub Pages.

## Included pages

- `index.html`: homepage and profile
- `research.html`: working papers, thesis and BibTeX entries
- `teaching.html`: teaching profile and courses
- `cv.html`: web CV with a **Print / Save as PDF** button
- `404.html`: custom error page
- `assets/css/style.css`: all visual styling
- `assets/js/main.js`: language switch, dark mode and mobile menu

The site uses no external framework, package manager or build process.

## Publish on GitHub Pages

Your current public address is `https://ndjoblin.github.io/`. The corresponding repository should be named exactly:

```text
ndjoblin.github.io
```

1. Back up the current repository.
2. Copy the contents of this folder to the root of `ndjoblin.github.io`.
3. Commit and push the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.

## Add a portrait

The homepage currently uses the initials `ND`, so the site is publishable immediately without a photo.

To add a portrait:

1. Put the image in `assets/img/portrait.jpg`.
2. In `index.html`, replace:

```html
<div class="profile-initials" aria-hidden="true">ND</div>
```

with:

```html
<img src="assets/img/portrait.jpg" alt="Portrait of Nicolas Djob Li Ngue Bikob">
```

3. Add the following rule to `assets/css/style.css`:

```css
.profile-visual img {
  width: 100%;
  height: 100%;
  min-height: 330px;
  object-fit: cover;
}
```

## Add paper PDFs

Place PDFs in `assets/papers/`, for example:

```text
assets/papers/djob-vat-allocation.pdf
assets/papers/djob-tax-principles.pdf
```

Then replace the placeholder `<span class="btn">` in `research.html` with a link such as:

```html
<a class="btn" href="assets/papers/djob-vat-allocation.pdf">PDF</a>
```

## Update content

Text appears in bilingual attributes:

```html
<span data-en="Research" data-fr="Recherche">Research</span>
```

Update both `data-en` and `data-fr`. The JavaScript automatically displays the visitor's browser language and remembers their selection.

## Update the CV

Edit `cv.html`. Visitors can print it or save it as a PDF from their browser. The print stylesheet automatically removes the navigation and page controls.

## Recommended checks before publication

- Verify the exact title of the current academic position.
- Check dates in the education and teaching sections.
- Add final paper PDFs and publication links.
- Replace or confirm the institutional email.
- Add a professional portrait if desired.
- Check all pages on a mobile phone after deployment.

## Local preview

From the project directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
<!-- Trigger GitHub Pages redeployment -->
