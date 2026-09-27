---
categories:
  - ecosystem
  - eco_official
top: 990
---

# OpenList Docs

## OpenList Docs 是什么

### [OpenListTeam/OpenList-Docs](https://github.com/OpenListTeam/OpenList-Docs)

[OpenListTeam/OpenList-Docs](https://github.com/OpenListTeam/OpenList-Docs) 是 OpenList 的官方文档网站，由 [@cxw620](https://github.com/cxw620) 牵头，和其他[主要贡献者](https://github.com/OpenListTeam/OpenList-Docs/graphs/contributors)共同协作完成。基于 VitePress 构建，为 OpenList 提供全面的文档，包括安装指南、配置说明、API 参考和生态系统信息。文档支持多种语言，并基于 GitHub 仓库实时构建。

## 如何使用 OpenList Docs

可直接在线访问[doc.oplist.org.cn](https://doc.oplist.org.cn/) 查阅文档。

## 本地开发

### 环境要求

- **Node.js** 24 或更高版本（见 `.nvmrc`）
- **Bun**：包管理器和脚本运行器
- **Git**：用于版本控制和克隆仓库

1. **克隆仓库**

   ```bash
   git clone https://github.com/OpenListTeam/OpenList-Docs.git
   cd OpenList-Docs
   ```

2. **安装依赖**

   ```bash
   bun install
   ```

3. **启动开发服务器**

   ```bash
   bun run dev
   ```

4. **在浏览器中打开**

   文档站点将在 `http://localhost:5173` 可用

### 构建

```bash
# 构建静态站点到 dist/
bun run build

# 预览构建结果
bun run preview
```

### 编写提示

本站使用 [VitePress](https://vitepress.dev/zh/) 构建，其 [Markdown 扩展](https://vitepress.dev/zh/guide/markdown) 均可直接使用。

1. **每种语言一个文件**：中文页面位于 `pages/`，英文页面位于 `pages/en/` 下相同的相对路径，例如 `pages/guide/drivers/s3.md` 与 `pages/en/guide/drivers/s3.md`。修改页面时请同时更新两个文件。

2. **页面标题**：正文第一行即为标题，使用一级标题（`# 标题`），不要在 frontmatter 中添加 `title`。

3. **侧边栏**：frontmatter 中设置了 `categories` 的页面会显示在侧边栏，并按 `top` 由高到低排序：

   ```md
   ---
   top: 895
   categories:
     - guide
     - drivers
   ---

   # 对象存储（S3）
   ```

4. **嵌套容器**：当 `::: tip` 等容器内还包含其他容器时，外层需要使用更多的冒号，否则第一个 `:::` 会直接关闭外层容器：

   ```md
   :::: details 示例
   ::: tip
   内层提示
   :::
   ::::
   ```

5. **浅色 / 深色图片**：在图片链接后添加 `#light` / `#dark`，图片只会在对应的颜色模式下显示：

   ```md
   ![截图](/img/example-light.png#light)
   ![截图](/img/example-dark.png#dark)
   ```

## 许可证与法律

### 许可证

本文档项目采用 **[GNU Affero General Public License v3.0 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.en.html)** 许可证。

- **使用自由**：您可以使用、修改和分发此文档
- **Copyleft**：任何衍生作品也必须采用 AGPL-3.0 许可证
- **网络使用**：如果您在服务器上运行修改版本，必须提供源代码
- **署名**：您必须保留版权声明和许可证信息

完整的许可证文本请参见 [LICENSE](https://github.com/OpenListTeam/OpenList-Docs/blob/main/LICENSE) 文件。

通过为本项目做出贡献，您同意您的贡献将采用相同的 AGPL-3.0 许可证。
