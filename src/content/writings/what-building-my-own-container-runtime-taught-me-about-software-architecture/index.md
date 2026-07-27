---
title: What building my own container runtime taught me about software architecture
publishDate: 2026-07-28
description: Software is just a collection of sub systems communicating through APIs. 
draft: false
---
![](/src/content/writings/what-building-my-own-container-runtime-taught-me-about-software-architecture/puncker.gif)

I recently built a low [level container runtime](https://github.com/Kaleab-Ayenew/puncker-rt) from scratch(by hand!).

A container runtime is basically what Docker uses to create, setup and run the processes that run as containers on your system. It takes care of things like isolating what you run inside your container from the other normal processes that are running on your computer or server.

The main reason I decided to do that was because I have always been intimidated by Docker and how it works in general. Even though I was using it daily at work, I never actually understood what magic it uses to spin up something that resembles a full OS within an OS. And reading stuff like “a container is just cgroups, and namespaces on steroids” never really helped. It rather mystified the whole container thing all the more.

But after I took the time to build one for myself, containers stopped being mysterious blackboxes and they just became a collection of different low level OS features stitched together through intuitive, and easy to understand APIs.

Once I had assembled a functional runtime that could run real world containers, it became clear that a container is just a linux process running under certain kernel enforced restrictions. The main ones being file system restrictions enforced through [`pivot root`](https://www.ibm.com/docs/en/zos/3.2.0?topic=functions-pivot-root-change-root-mount), resource limits enforced through [`cgroups`](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/6/html/resource_management_guide/ch01), and network and process restrictions enforced through [`namespaces`](https://medium.com/@teddyking/linux-namespaces-850489d3ccf). A container runtime's main task is running a series of simple low level OS commands in the correct sequence in order to enforce these restrictions.

In fact one guy was able to build a fully [functional container platform](https://github.com/p8952/bocker) in a single 100 line bash script. This is to say, all a container runtime does is run a series of commands in the correct order.

The kernel exposes every instruction through an intuitive API(or a command) which makes enforcing the right kind of restrictions very intuitive. These commands are known as system calls, and most programming languages have dedicated libraries to execute these system calls using simple predefined functions or methods. For example in Python the `os` module exposes the most commonly used OS system calls as simple methods, and for the more rarely used ones you can use the `ctypes` module which gives you more fine grained control.

Now if we zoom out of the world of containers, and look at the world of software development in general, most of it is also about using API contracts to orchestrate prebuilt sub systems in the right manner in order to achieve a certain behaviour. This holds true whether we are building a web app, an operating system, a machine learning pipeline, a data analysis pipeline or any other type of software you can think of.

A web app orchestrates databases, object stores, cache stores, external services, and custom built software components using data and instruction exchange contracts provided by each sub system. The contract is SQL for databases, HTTP requests for external web services, S3 REST/Blob protocols for object stores, and RESP (Redis Serialization Protocol) or TCP binary protocols for in-memory caches and so on.

Similarly a machine learning pipeline orchestrates data processing through databases, file systems, and software components that perform mathematical computations using data exchange contracts defined by each subsystem.

An operating system also orchestrates raw hardware resources like CPU cores, physical memory, storage drives, and network interfaces, and presents them as system abstractions like filesystems, process schedulers, and device drivers that serve as the data and instruction exchange contract for interacting with higher level application software.

In light of this, most software architecture can be understood as stitching together different independent subsystems using predefined APIs to achieve a specific desired behaviour.\
By extension, this also means that software engineering is about building effective individual components that do one task, or one set of tasks very effectively, and exposing their functionality through very simple and intuitive APIs that make it easy to integrate them with other software subsystems.

Finally while I was doing research for this article, I discovered that this whole idea has actually been already laid out by Doug McIlroy  in 1978 in his definition of Unix design:

- Write programs that do one thing and do it well.
- Write programs to work together.
- Write programs to handle text streams, because that is a universal interface (the intuitive API.)

This makes Unix the embodiment of good software. Individual components that do their jobs well, and an easy to use API that makes orchestrating them to achieve certain behaviours extremely easy.
