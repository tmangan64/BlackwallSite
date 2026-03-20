---
title: Blackwall
description: All-in-one Homelab
date: "5-3-2026"
tags: [self-hosting]
status: wip
url: https://blackwall.cam
repo: https://github.com/tmangan64/Blackwall
---

Modern households often face the same threats as businesses, albeit without a dedicated IT support team. Families across the UK have voiced their concerns for cyberbullying, privacy, security and digital threats. [1]
Despite this rise in cyber security awareness and a desire for a solid domestic framework, there remains little in terms of a consistent framework for a domestic self-hosted server addressing household security needs. [2]

## Post-COVID

In today's age of AI, advertising and data harvesting, I want to create my own data fortress.

## The failures of 'Big Tech'

Modern tech giants have repeatedly demonstrated flaws in their data security. SAP’s AI infrastructure was found responsible for exposing sensitive data potentially allowing attackers to gain access to customer data, a vulnerability within NVIDIA’s AI containerisation framework could have allowed attackers to escape a container and gain full access to the host system and
Microsoft recently accidentally exposed 38TB of private data, including passwords. This has created massive mistrust between the general public and these corporations with only 40% of the general British public viewing big tech companies as trustworthy.

## AI

The move away from cloud infrastructure is also fueled by mistrust of the administrators especially given recent accusations made against big data companies. LinkedIn (owned by Microsoft) was sued in a US federal court by LinkedIn Premium customers, alleging private InMail messages and customer info were disclosed to third parties for AI training without consent, although the plaintiffs later dismissed the case. [4] A group of authors have filed a lawsuit against Microsoft alleging around 200,000 pirated books were used to train an AI model, demonstrating corporate use of large copyrighted data sets in training. Nvidia were even caught contacting Anna’s Archive (a shadow library) for access to millions of torrented books for AI training. [5]

## Self-hosting

When commercial cloud corporations have repeatedly demonstrated an inability to keep customer data secure and private , some individuals have turned to designing, deploying and maintaining this infrastructure themselves. ‘Self-hosting’ is the practice of building, running and maintaining a server, service or website using a private server as opposed to using a service where total control is out of the user’s hands.
For example, instead of storing photos on iCloud or Google Photos, a self-hoster would use an open-source image and video management program like ‘Immich’ for example. Self-hosters typically run these services on a DIY server called a ‘homelab’. Physically, these devices range from old laptops to Enterprise hardware and can run anything from a virtual machine to a household's networking infrastructure.

## 'Spirit of the Internet'

A major proponent of the push to return to a decentralised Internet is Tim Berners-Lee, its creator. He stated that “the ‘traditional model’ (referring to handing data over to companies in exchange for services) has not been in our best interests”. [6] In response, he has begun work on ‘Solid’, a framework for storing and distributing private data. The idea is that users host their own ‘pods’, repositories of personal data, letting them decide who can and cannot access their personal data. [7]
He has described his current efforts with Solid as part of a “battle for the soul of the web”, a fight to reclaim the web’s original spirit of openness, collaboration and individual control.

## Problems with self-hosting

On the other hand, self-hosters face their own issues. As the system grows older, small mistakes in configurations such as forwarded ports, firewall rules and user access control lead to compounding problems.
Given that SentinelOne found 82% of cloud misconfigurations are caused by human mistakes as opposed to software errors, some users may question if it is worth taking back responsibility for their digital security.

### References

[1] https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00424/full

[2] https://www.usenix.org/system/files/usenixsecurity23-grober.pdf

[3] https://www.researchgate.net/publication/353661008_Cybersecurity_in_Working_from_Home_An_Exploratory_Study

[4] https://www.reuters.com/legal/microsofts-linkedin-sued-disclosing-customer-information-train-ai-models-2025-01-22/

[5] https://torrentfreak.com/annas-archive-loses-li-domain-as-legal-pressure-mounts/

[6] https://www.theguardian.com/technology/2026/jan/29/internet-inventor-tim-berners-lee-interview-battle-soul-web

[7] https://www.nytimes.com/2021/01/10/technology/tim-berners-lee-privacy-internet.html
