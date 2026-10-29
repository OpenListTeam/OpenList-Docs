---
top: 100
categories:
  - guide
  - drivers
---

# Contribute new storage driver

Duplicate `drivers/template` to expand the new storage. Please read [CONTRIBUTING](https://github.com/OpenListTeam/OpenList/blob/main/CONTRIBUTING.md) for details.
The design of the driver part of OpenList is easy to expand, no need to modify other files, just create a new package under the back-end project drivers package and reference this package in the `all.go` file.
