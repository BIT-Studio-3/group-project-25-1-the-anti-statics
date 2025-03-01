# Coding Standards

## Basic Coding Conventions
**1. Variable Naming Conventions**
Use **camelCase** for the naming conventions.
```javascript
let camelCaseExample;
```
**2. Snake case for constant variables**
Use "snake_case" for constant variables
```javascript
const MAX_USERS;
```

Prefer to use inline comments in case if the code is too long it can be done in next line.

```javascript
# Inline comment example
console.log(add(1,2));  // first number variable

# Next-line comment example
function add(num1, num2){
    return num1 + num2;
}
```

**3. Maximum Line length**
Try to keep line length between 80-90 characters.

**4. Blank Line between Functions**
Use a blank line between each function.

```javascript
function add(num1,num2){
    return num1 + num2;
}
//Blank line
function sub(num1,num2 ){
    return num1 - num2;
}
```

Make sure to put the last closing '}' in an empty line so no one get confused reading or editing the code.

```javascript
//Bad example:
}}

//Good example
    }
}
```
## Code Cleanliness and Originality
**1. Code Cleanliness**
Try to write as basic and flexible code as possible so it can be easy to edit the code in future (if needed).

**2. Originality**
If taking code from AI make sure you can understand it and can explain to others if needed.

## GitHub Responsibilities
**1. Transparency**
Always keep an open pull request so everyone in team can check what you are on to.

**2. Check with Team Members before making changes**
Don't Merge any code into the staging or main branches before asking the team.

**3. Code Reviews**
Each piece of code should be reviewed by at least 2 team members before getting Merged into main.

During code reviews, focus on both functionality and adherence to the standards e.g., correct use of variables, function names, consistent formatting.

**4. Branch Management**
When creating a new branch, create a new pull request immediately to ensure transparency

The branch name should be a brief description of the feature you are working on

**5. Main Branch Commit Rules**
**Do not** commit directly to the **main** branch unless the entire team has allowed you to do so.

The **main** branch is the project's live production branch

The **STAGING** branch is where all continous staged changes are pushed to, to prevent buggy changes entering **main**

The only commits than can merged into **main** should be commits from the **STAGING** branch

When creating pull requests on feature branches, make sure the **STAGING** branch is the base branch for the feature branch to be compared to.

**6. Merging own Pull Requests**

**Never** merge your own pull request. It's crucial to have someone in your team to review your code before merging.

**7. Linking pull request to issues**

When opening a pull request ensure you link it to an issue by scrolling down the sidebar to the 'Development' section

Then simply just click on the '⚙️' icon next to 'Development' and a little dropdown should appear, and from there you can link the issue

further changes can be made :)