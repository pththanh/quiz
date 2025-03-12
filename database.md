# Database Structure Documentation

## Overview

This document outlines the structure of the database used in the application, detailing the models, their fields, and relationships.

### Models

#### 1. Quiz

- **Model Name**: `Quiz`
- **Collection Name**: `quizzes`
- **Fields**:
  - `admin_id` (String, required): The ID of the admin who created the quiz.
  - `title` (String, required): The title of the quiz.
  - `category_id` (String, required): The ID of the category the quiz belongs to.
  - `passing_score` (Number, required): The score required to pass the quiz.
  - `is_public` (Boolean, default: true): Indicates if the quiz is public.
  - `questions` (Array of ObjectId, ref: "Question"): References to the questions included in the quiz.

#### 2. Category

- **Model Name**: `Category`
- **Collection Name**: `categories`
- **Fields**:
  - `name` (String, required, unique): The name of the category.
  - `description` (String, optional): A brief description of the category.
  - `createdAt` (Date): Timestamp of when the category was created (automatically managed).
  - `updatedAt` (Date): Timestamp of when the category was last updated (automatically managed).

#### 3. Question

- **Model Name**: `Question`
- **Collection Name**: `questions`
- **Fields**:
  - `title` (String, required): The title of the question.
  - `answers` (Array of IAnswer): An array of possible answers for the question.
    - **IAnswer**:
      - `answer` (String, required): The text of the answer.
      - `isCorrect` (Boolean, required): Indicates if the answer is correct.
  - `category` (ObjectId, ref: "Category", optional): Reference to the category the question belongs to.

#### 4. UserAnswer

- **Model Name**: `UserAnswer`
- **Collection Name**: `userAnswers`
- **Fields**:
  - `user_id` (String, required): The ID of the user who answered the quiz.
  - `quiz_id` (ObjectId, ref: "Quiz", required): Reference to the quiz being answered.
  - `answers` (Array): An array of answers provided by the user.
    - **Answer Structure**:
      - `question_id` (ObjectId, ref: "Question", required): Reference to the question being answered.
      - `selected_answers` (Array of String, required): An array of selected answer texts.

### Relationships

- **Quiz** has many **Questions**.
- **Category** can have many **Questions**.
- **UserAnswer** references a **Quiz** and contains answers to **Questions**.

### Timestamps

- The `Category` and `UserAnswer` models include automatic timestamps for creation and updates.

## Conclusion

This document provides a comprehensive overview of the database structure, including the models and their relationships. Ensure to maintain this structure for consistency and integrity in the application.
