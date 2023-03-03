<!-- omit in toc -->
# Cntxt Clothing

*By Erin Shields*

Check out a live version of **Cntxt Clothing**: [Cntxt Clothing Live](https://main--creative-tapioca-b4b576.netlify.app/)

**Table of Contents**
- [Technologies](#technologies)
- [App Overview](#app-overview)
- [Feature Backlog](#feature-backlog)

## Technologies
* React w/ React Router
* Redux (incl. Redux Toolkit, Redux Saga, Redux Persist)
* Firebase Authentication (email/password and Google OAuth)
* Firestore DB No-SQL (for category data)
* Stripe API
* `reselect` library for memoization
* `styled-components` library for styling and component re-usability
* Netlify (live site deployment/hosting)

## App Overview
Cntxt Clothing is a fully-function e-commerce site built as part of the [ZTM Complete React Developer course](https://zerotomastery.io/courses/learn-react/).

Features:
- Sign up, sign in, and sign out via email/password or with Google credentials (OAuth).
- Landing/home page displays a directory that users can use to navigate to products by category.
- Shop page displays various products organized by category.
- Add, remove, and increment items in the cart.  
- View a drop-down preview of the cart and navigate to the cart page, where users can view the total calculated price and finalize their purchase. 

Instructions for Payment:
- Users can simulate "purchasing" items by credit cart via an integration with the Stripe API. This feature is strictly in test mode and users can use the test credit card credentials of Cart Number 4242 4242 4242 4242, any number for the CVC, and any future date to simulate a purchase. 

## Feature Backlog
- Redirect users to shop page upon successful login/authentication. 
- Implement responsive styling to improve user experience across various devices. 
- Add and direct users to an order confirmation page upon successful purchase (instead of simply clearing the cart).
- Add demo buttons to auto-fill demo login/test credit card information.
- Add protected flows based on user authentication, such as only allowing logged-in users to finalize purchases.
- Refactor project using Typescript [WIP]
- Refactor to leverage GraphQL (& caching)
- Add performance optimizations (look into: useCallback hooks, useMemo, code splitting, dynamic imports, suspense & lazy)