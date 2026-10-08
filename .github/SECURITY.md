# Security Policy

## Supported versions

This repository powers the current Blake Marcus Studio website. Security fixes are applied to the latest production deployment and the current `main` branch. Older commits, forks, and third-party deployments are not supported.

## Reporting a vulnerability

Please report suspected vulnerabilities privately through GitHub's **Report a vulnerability** form:

https://github.com/blakee-marcus/react-portfolio/security/advisories/new

Do not open a public issue, discussion, or pull request for an undisclosed vulnerability.

Include as much of the following as possible:

- A clear description of the vulnerability and its potential impact
- The affected page, endpoint, component, dependency, or commit
- Reproduction steps or a minimal proof of concept
- Relevant request and response details, with credentials and personal data removed
- Any conditions required for exploitation
- A suggested mitigation, if available

## What to expect

We aim to:

- Acknowledge the report within 3 business days
- Provide an initial assessment within 7 business days
- Share status updates at least every 14 days while remediation is active

These are response targets, not guarantees. Resolution time depends on severity, complexity, and third-party dependencies.

Please allow a reasonable remediation period before public disclosure. Coordinate disclosure timing through the private advisory so users are not exposed unnecessarily.

## Scope and safe research

Good-faith research should avoid:

- Accessing, modifying, retaining, or exposing another person's data
- Disrupting service availability or degrading production systems
- Social engineering, phishing, spam, or physical attacks
- Automated testing that generates excessive traffic
- Testing third-party services beyond demonstrating their impact on this repository

Stop testing and report immediately if you encounter sensitive data or gain unintended access.

## Rewards

This project does not currently operate a paid bug bounty program. Responsible reports are still appreciated, and credit may be offered with the reporter's consent after remediation.
