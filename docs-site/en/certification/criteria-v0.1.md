# Certification Criteria – v0.1

**Version:** 0.1.0  
**Status:** Active  
**Applies to:** Software projects and vendors providing SSO/IdP integration features

---

## 🎯 Purpose

This version defines the baseline criteria required for a project or vendor to earn the OpenAuthCert badge. It targets projects that offer login integration capabilities without restricting them to enterprise plans.

---

## ✅ Eligibility Requirements

To qualify for the OpenAuthCert badge, the project/vendor must:

1. **Provide at least one of the following protocols in the free version**:
   - OIDC
   - SAML 2.0
   - LDAP
   - _Other protocols such as Kerberos or RADIUS may be offered in addition_

2. **Provide this support without any of the following paywalls**:
   - Enterprise-only feature restriction
   - Commercial license-only access to auth modules
   - Hidden or undocumented configuration blocking SSO/IdP enablement

3. **Offer transparent documentation or a configuration path** for enabling:
   - Identity Provider (IdP) integrations
   - Federated login options (SSO, social, or directory-based)

4. **Make documentation publicly accessible without login or payment**

5. **Publish source code or offer free access to binaries** (for evaluation and testing)

6. **Respect user privacy and open access values**, including:
   - No forced telemetry during login
   - No mandatory cloud relay unless explicitly documented

---

## 🚫 Disqualifying Criteria

- Features marked as "SSO" but only available in paid tiers
- Hardcoded integrations with only commercial IdPs
- SSO advertised but requires backend patching or license key injection
- Self-hosted versions with missing SSO features intentionally compared to cloud-hosted offerings

---

## 🔎 Verification Method

- Public review of documentation
- Evaluation of installation or source artifacts
- Project self-declaration + community audit

All badge applications must include reproducible instructions for reviewers.

**Note:** Every major version change of a certified software project requires a new review and recertification.

---

To apply, see [`application-process.md`](./application-process.md)
