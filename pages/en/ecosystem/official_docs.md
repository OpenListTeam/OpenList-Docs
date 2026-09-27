---
categories:
  - ecosystem
  - eco_official
top: 990
---

# OpenList Docs

## What is OpenList Docs

### [OpenListTeam/OpenList-Docs](https://github.com/OpenListTeam/OpenList-Docs)

[OpenListTeam/OpenList-Docs](https://github.com/OpenListTeam/OpenList-Docs) is the official documentation website for OpenList, led by [@cxw620](https://github.com/cxw620) and collaboratively developed with other [main contributors](https://github.com/OpenListTeam/OpenList-Docs/graphs/contributors). Built with VitePress, it provides comprehensive documentation for OpenList, including installation guides, configuration instructions, API references, and ecosystem information. The documentation supports multiple languages and features real-time builds from the GitHub repository.

## How to use OpenList Docs

You can directly access [doc.oplist.org.cn](https://doc.oplist.org.cn/) to view the documentation.

## Local Development

### Prerequisites

- **Node.js** 24 or later (see `.nvmrc`)
- **pnpm**: package manager
- **Git**: for version control and cloning the repository

1. **Clone the repository**

   ```bash
   git clone https://github.com/OpenListTeam/OpenList-Docs.git
   cd OpenList-Docs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**

   The documentation site will be available at `http://localhost:5173`

### Building

```bash
# Build static site into dist/
pnpm build

# Preview build
pnpm preview
```

### Writing Tips

The site is built with [VitePress](https://vitepress.dev/). Everything in its [Markdown guide](https://vitepress.dev/guide/markdown) works here.

1. **One file per language**: Chinese pages live in `pages/`, English pages live in `pages/en/` under the same relative path, for example `pages/guide/drivers/s3.md` and `pages/en/guide/drivers/s3.md`. When you change a page, update both files.

2. **Page title**: The first line of the page content is the title, written as a level-1 heading (`# Title`). Do not add a `title` field to the frontmatter.

3. **Sidebar**: A page appears in the sidebar when its frontmatter has `categories`. Pages are sorted by `top`, from high to low:

   ```md
   ---
   top: 895
   categories:
     - guide
     - drivers
   ---

   # S3
   ```

4. **Nested containers**: When a container such as `::: tip` contains another container, the outer one needs more colons, otherwise the first `:::` closes the outer container:

   ```md
   :::: details Example
   ::: tip
   Inner tip
   :::
   ::::
   ```

5. **Light and dark images**: Add `#light` / `#dark` to image links to show them only in the matching color mode:

   ```md
   ![Screenshot](/img/example-light.png#light)
   ![Screenshot](/img/example-dark.png#dark)
   ```

## License & Legal

### License

This documentation project is licensed under the **[GNU Affero General Public License v3.0 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.en.html)**.

- **Freedom to Use**: You can use, modify, and distribute this documentation
- **Copyleft**: Any derivative works must also be licensed under AGPL-3.0
- **Network Use**: If you run a modified version on a server, you must provide the source code
- **Attribution**: You must preserve copyright notices and license information

For the full license text, see the [LICENSE](https://github.com/OpenListTeam/OpenList-Docs/blob/main/LICENSE) file.

By contributing to this project, you agree that your contributions will be licensed under the same AGPL-3.0 license.
