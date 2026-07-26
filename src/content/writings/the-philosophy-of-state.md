---
title: The Philosophy of State
publishDate: 2024-08-04
description: An essay on why state management is a design problem, not a library problem.
volume: Volume IV
draft: false
---

State is not data sitting in a store. State is the accumulated memory of every decision your application has made. Treating it as a simple key-value map misses the architectural implications entirely.

> "State is the scar tissue of past interactions."

When you choose where state lives, you choose where complexity lives. Local state keeps complexity local. Global state distributes it everywhere.

The question is never "which library?" but "which boundaries?" Draw those first. The library follows.
