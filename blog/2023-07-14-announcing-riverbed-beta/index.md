---
title: Announcing Riverbed Beta
authors: [josh]
---

I’m happy to announce the beta release of Riverbed, (tagline). Riverbed allows users to track the personal information that matters to them (better intro here).

(Instructions to get started on web and Apple platforms)

## How It Works
(Embed video walkthrough here)

Riverbed is organized into “boards”, a place for you to store one type of information. A board contains cards, each one representing one thing. When you set up a board, you add fields that track a bit of information such as text, a number, or a geographic location. Each card on a board has the same fields. In the list view only "summary" fields you picked appear, and when you click on a card you can see all its fields.

Cards are displayed in columns. Each column has a set of rules determining which cards appear in it. For example, for a todo list board you might have one column for available todos, one column for todos deferred until the future, and one for completed todos. Cards can appear in more than one column, and automatically move between columns as your data changes.

Riverbed's real power comes when you add buttons to your cards. Buttons allow you to automate data changes to your cards. For example, on a todo board you might have buttons to mark a todo as complete and defer it until tomorrow. Buttons can be configured to show or hide based on data on the card, so that the button only appears in situations where it makes sense.

For some Riverbed boards, just adding a few fields is enough. But the most powerful Riverbed boards have buttons that move your cards through different situations, causing them to appear in different columns. Once you've set this up, you've effectively created your own custom app with no programming—and you can add new features to it at any time when an idea strikes you!

## Extensibility
There are lots of ways to extend Riverbed:

* You can configure one of your boards to receive URLs shared from other apps on iOS and iPad
* A webhook interface allows you to build up a web service that is informed when a card is created or updated. You can return modified values to save onto the card
* Pull requests are welcome to improve the web and Apple clients and the backend API
* The clients and server communicate over a simple inspectable JSON-based REST API. You can integrate it with other services via HTTP calls, build alternate frontends on any platform using any technology, or even an alternate backend

## The Vision
The conviction behind Riverbed is that everybody should be able to create interactive experiences on the platforms they use every day. You should not be limited to tracking only the kinds of data that professional software developers have created an app for, and only tracking it in the way they want to—you should be free to track what you like.

Riverbed is inspired by past software systems that make it easy for users to change their software in the same environment they use it in, such as HyperCard and Smalltalk.

The goals of the project are:

- Efficiency: minimizing the effort required to create software to track any kind of data
- Experience: providing a user experience on the web and Apple platforms that is as good as if you were using a custom-built app for your use case
- Simplicity: finding the smallest number of features that unlock the most possibilities
- Empowerment: freeing users’ data from platforms that are proprietary, closed, and engage in user surveillance
- Permanence: ensuring the platform will remain available in the face of technology changes, maintainer turnover, and independently of corporate interests

Why the name "Riverbed"? The stones on a river bed aren't planned and designed in advance. As the river flows over the stones constantly every hour of every day, the rough edges are worn down. Small changes result in a stone that is completely unique, formed by the forces of the spot where it lay. A river bed is not formal or ideological: it is simple and natural.

## Feedback
Please let me (Josh) know what you think of Riverbed: questions you have, bugs you run across, and features you would like to see! You can use any of the following channels:

- Email: josh at riverbed dot app
- Mastodon: [@CodingItWrong@tdd.social](https://tdd.social/@CodingItWrong)
- GitHub Issues: if you’re experiencing a bug, you can post it on the repos for the [web client](https://github.com/CodingItWrong/riverbed-web/issues) or [Apple platform client](https://github.com/CodingItWrong/riverbed-ios/issues).

## Answers to Questions
### Pricing
Riverbed is available as a hosted app at https://riverbed.app. Accounts for beta users are free with no limits on amount of data. In the future I plan to offer an optional way for users to donate to help cover server and development expenses.

Riverbed can also be hosted on your own servers. The backend API and frontend clients (web and Apple platforms) are all open source under the AGPLv3 license, meaning that you have access to the same code I do. You can host your own server to have full control over your data and hosting costs.

Riverbed is not looking to become a business and is not funded by venture capital. I do not have plans to monetize for profits. If the service gets popular enough that server costs become an issue, I may introduce limits for users who join after that time, and existing users with especially high amounts of data may be capped.

### Future Plans
Today Riverbed is a great platform for setting up ways to track your personal information. In the future, I have several ways I’d like to extend Riverbed, depending on community interest:

- Expanding the list of supported data types, including multimedia
- Ability to grant access to view or edit your data to individuals or to anyone. (Note that the main focus of Riverbed is your personal information; it is not mainly about team collaboration, so this will be a secondary use case.)
- Ability to make “board templates” available to share with others, so that you can easily use and remix the boards others have set up.

### Sustainability
If you put all your personal information into Riverbed, how can you trust that the app will stay around?

I (Josh, the creator of Riverbed) am tracking all of my most important personal information in Riverbed—the information I rely on daily. I have over twenty different “boards” (types of information) that replace my use of both third-party apps and specialized custom apps I've built in the past. Riverbed is the outcome of twenty years of refining what I am looking for in a personal information management system. I have to keep Riverbed running because I need it.

But you don't have to trust me. If I do stop maintaining Riverbed someday, you have options. Your data can be exported to JSON format using the same API calls that the frontend apps make (this will be documented as part of pre-public-release documentation efforts). Or, you can host your own installation of Riverbed—the code is released under an AGPLv3 license so you are guaranteed to have access to it.

### A Note on Security
Riverbed uses industry-standard security practices such as encrypted HTTPS traffic and authentication using cryptographically-secure password hashing. Your data is *not* encrypted at rest in the database.

Riverbed is released under the AGPLv3 license, and like most software licenses it includes language disclaiming warranty and limiting liability. Please see the license for details.
