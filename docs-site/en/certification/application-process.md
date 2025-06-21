# Application Process

Vendors and project maintainers can apply for an OpenAuthCert badge by submitting a self-assessment and verification bundle.

## 📋 Step-by-Step

1. **Fork the `vendor-registry` repo**
   - Add your project entry under `vendors/`
   - Include badge version(s) you're applying for

2. **Attach Required Materials**
   - Current version number (use [semver](https://semver.org/))
   - Protocols supported (OIDC, SAML, LDAP)
   - Link to public documentation
   - Links to source or binary downloads
   - Deployment screenshots (if applicable)
   - Reproducible instructions to validate criteria

3. **Open a Pull Request**
   - Title: `Add <Your Project> to registry`
   - Include a contact email and optional support link

4. **Initial Review (3–10 days)**
   - Community and council reviewers inspect submission
   - Minor fixes may be requested via PR comments

5. **Approval and Merge**
   - Once approved, your badge is added to the vendor registry
   - Badge metadata is published on the website and public API

---

## 🕊️ Philosophy

This process is meant to be lightweight and transparent. Our goal is to highlight ethical access, not gatekeep.

All successful submissions remain publicly viewable and auditable.

---

To see disqualification scenarios, refer to [`criteria-v0.1.md`](./criteria-v0.1.md).

For revocation or dispute policies, see [`revocation-policy.md`](./revocation-policy.md).
