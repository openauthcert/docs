# Badge Lifecycle

Each OpenAuthCert badge follows a lifecycle from proposal to deprecation. This ensures stability, transparency, and structured evolution of certification criteria.

## Lifecycle Stages

### 1. **Draft**
- Proposed by any contributor via a pull request
- Includes schema, eligibility criteria, and version tag (e.g., `v0.1`)

### 2. **Public Review**
- Open comment period (minimum 14 days)
- Stakeholder feedback is documented
- May lead to revisions or postponement

### 3. **Adoption**
- Approved by the Contributor Council
- Badge is published under `badge-spec` repo and added to the website

### 4. **Active**
- Applications accepted under this badge
- Ongoing monitoring of usage, edge cases, and disputes

### 5. **Revision**
- Minor changes use semantic versioning (e.g., `v0.1.1` → `v0.1.2`)
- Major changes require new version proposals (e.g., `v0.1` → `v0.2`)

### 6. **Deprecation**
- Older versions may be deprecated with 90 days public notice
- Badges remain valid if earned before deprecation date
- Badges expire if the certified version is no longer the latest major release, unless recertified

## Versioning

Badges follow [semver.org](https://semver.org/) principles:
- MAJOR: incompatible or expanded requirements
- MINOR: additional clarifications
- PATCH: documentation or schema corrections

## Badge Archive

All historical badge versions are maintained under `badge-spec/examples/` for auditability.

---

See [`criteria-v0.1.md`](./criteria-v0.1.md) for the current active badge definition.
