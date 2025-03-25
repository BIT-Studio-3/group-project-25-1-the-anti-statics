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

The ``main`` branch is the project's live production branch

The ``STAGING`` branch is where all continous staged changes are pushed to, to prevent buggy changes entering **main**

The only commits than can merged into ``main`` should be commits from the ``STAGING`` branch

When creating pull requests on feature branches, make sure the ``STAGING`` branch is the base branch for the feature branch to be compared to.

**6. Merging own Pull Requests**

**Never** merge your own pull request. It's crucial to have someone in your team to review your code before merging.

**7. Linking pull request to issues**

When opening a pull request ensure you link it to an issue by scrolling down the sidebar to the 'Development' section

Then simply just click on the '⚙️' icon next to 'Development' and a little dropdown should appear, and from there you can link the issue

## Housekeeping

**1. Don't place your local repo on OneDrive**

When a team member clones the website repo on their local machine, it is
best practice to avoid cloning into a OneDrive folder, as all sorts of weird and unprecedented issues can occur. These issues can cause the website instance on your local machine to break. 

https://dustinbriles.com/onedrive-and-git-dont-do-it/


further changes can be made :)


### Commit Message Conventions

You should follow the **conventional commits** convention when committing changes to your repository. A **conventional commit** consists of a **type**, **scope** and **description**. The **type** and **description** are mandatory, while the **scope** is optional. The **type** must be one of the following:

- **build**: Changes that affect the build system or external dependencies
- **chore**: Regular code maintenance, such as refactoring or updating dependencies
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

The **scope** is a phrase describing the codebase section affected by the change. For example, you can use the scope `javascript` if you are working on the **formative assessment** for **JavaScript**. If you are working on the **formative assessment** for **HTML**, use the scope `html`.

The **description** is a short description of the change. It should be written in the imperative mood, meaning it should be written as if you are giving a command or instruction. For example, "add a new feature" instead of "added a new feature".

Here are some examples of **conventional commits**:

- `feat(javascript): add a new feature`
- `fix(html): fix a bug`
- `docs(css): update documentation`

> **Resource:** <https://www.conventionalcommits.org/en/v1.0.0/>

## Housekeeping 

**1. Don't place your local repo on OneDrive** 
When a team member clones the website repo on their local machine, it is best practice to avoid cloning into a OneDrive folder, as all sorts of weird and unprecedented issues can occur. These issues can cause the website instance on your local machine to break. 

https://dustinbriles.com/onedrive-and-git-dont-do-it/ 

**2. Installing new Node Modules**
If a team member implements a feature that uses newly installed node modules, it is a great opportunity for the team to run **npm i** to install the newly installed modules

**Note:** When a team member is on another team member's feature branch testing out their feature, and they don't have a newly installed node module, run **npm i** to install it. When running the website on **localhost** and a missing module error message pops up, stop the server, then run **npm i** in the terminal and restart the server.


further changes can be made :)


