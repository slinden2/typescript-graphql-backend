# Software Requirements Specification

## 1. Introduction

This is the SRS for a bug tracker application called Bugger.

### 1.1 Purpose

This document covers the specification for the entire project of Bugger.

### 1.2 Intended Audience

The document is public for everyone to see who is interested.

### 1.3 Intended Use

The document is used as a reference in the development phase of Bugger. It includes all the necessary features that the completed application will have.

### 1.4 Scope

The application is intended to use in software development teams for maintaining bugs either in the development phase of a project or in the maintenance phase of an existing product.

It will help the teams to keep track of bugs in various types of applications and save time by showing clearly what needs to be done, what is being done, what has been done, when and by who.

## 2. System Features and Requirements

### 2.1 Functional Requirements

The application allows users to:

1. Add bugs to the database
2. Modify existing bugs in the database
3. Change state of the bugs based on their level of completion
4. Filter / sort bugs based on their state and urgency.
5. Create user new accounts
6. Have user accounts of different authorization groups

### 2.2 User Characteristics

The users are developers that work in teams. The different roles could be described as follows:

1. Tester
   - Daily usage
   - Adds new bugs
2. Junior Developer
   - Daily usage
   - Adds new bugs
   - Modifies bugs
   - Reviews bugs
3. Senior Developer
   - Daily usage
   - Modified bugs
   - Reviews bugs
   - Cancel bugs
4. Admin
   - Rare usage
   - All rights (able to delete bugs)

### 2.3 External Interface Requirements

1. Import/export to CSV

### 2.4 Tech Requirements

#### 2.4.1 Backend

- Node.js with Typescript
- PostgreSQL
- GraphQL

#### 2.4.2 Frontend

- React with Typescript
- Next.js
