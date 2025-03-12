# Business Documentation

## Overview

This document explains the business model of the web application.

## User Roles

- **GUEST**
- **ADMIN**
- **USER**

## Categories and Questions

### Admin Responsibilities

- Create a list of question categories (title, description).
- Create questions and add them to the category list. Questions can have multiple correct answers and belong to multiple categories.

### Quiz Creation

- Admin can create quizzes using the categories above with the following structure:
  - Quizzes can be public or private.
  - Admin can specify a fixed number of questions.
  - Quizzes can have a time limit or a minimum score required to complete.

### Access Control

- If a quiz is not public, only the creator can interact with it (PRIVATE).
- If a quiz is public, it can be accessed via a single route path or potentially multiple routes in the future.

## Categories
