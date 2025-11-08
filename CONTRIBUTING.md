# Contributing to AIC SMB Copilot

First off, thank you for considering contributing to AIC SMB Copilot! It's people like you that make this project such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain the behavior you expected**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the [TypeScript style guide](#typescript-style-guide)
* Include thoughtfully-worded, well-structured tests
* Document new code based on the Documentation style guide
* End all files with a newline
* Avoid platform-dependent code

## Development Process

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/your-username/aic-smb-copilot.git

# Add upstream remote
git remote add upstream https://github.com/aic-org/aic-smb-copilot.git

# Install dependencies
pnpm install

# Set up local environment
pnpm local:setup
```

### Branch Naming

Use the following prefixes for branch names:

* `feature/` - New features
* `fix/` - Bug fixes
* `docs/` - Documentation changes
* `refactor/` - Code refactoring
* `test/` - Test additions or changes
* `chore/` - Maintenance tasks

Example: `feature/add-slack-integration`

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body

footer
```

**Types:**
* `feat`: A new feature
* `fix`: A bug fix
* `docs`: Documentation only changes
* `style`: Changes that don't affect code meaning
* `refactor`: Code change that neither fixes a bug nor adds a feature
* `perf`: Performance improvement
* `test`: Adding missing tests
* `build`: Changes to build system or dependencies
* `ci`: Changes to CI configuration
* `chore`: Other changes that don't modify src or test files

**Examples:**
```
feat(auth): add OAuth2 authentication

Implement OAuth2 authentication with Google and GitHub providers.
Includes token refresh mechanism and user profile synchronization.

Closes #123
```

```
fix(workflow): resolve race condition in execution

The workflow execution could fail due to concurrent updates.
Added proper locking mechanism to prevent race conditions.

Fixes #456
```

### Making Changes

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Run tests:
   ```bash
   pnpm test
   ```

4. Run linting:
   ```bash
   pnpm lint:fix
   ```

5. Commit your changes:
   ```bash
   git commit -m "feat(scope): your commit message"
   ```

6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

7. Create a Pull Request

### TypeScript Style Guide

* Use TypeScript for all new code
* Enable strict mode in `tsconfig.json`
* Prefer `interface` over `type` for object types
* Use `const` assertions for literal types
* Avoid `any` type - use `unknown` if type is truly unknown
* Use async/await instead of raw promises
* Prefer named exports over default exports

**Code formatting:**
```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

async function getUser(id: string): Promise<User> {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

// Bad
type User = {
  id: string,
  name: string,
  email: string
}

function getUser(id: string): Promise<any> {
  return userRepository.findById(id).then((user) => {
    if (!user) throw new Error('User not found');
    return user;
  });
}
```

### Testing Guidelines

* Write tests for all new features
* Maintain at least 80% code coverage
* Use descriptive test names
* Follow AAA pattern (Arrange, Act, Assert)
* Mock external dependencies

**Test structure:**
```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      // Arrange
      const userData = { name: 'John', email: 'john@example.com' };
      
      // Act
      const user = await userService.createUser(userData);
      
      // Assert
      expect(user).toBeDefined();
      expect(user.name).toBe('John');
      expect(user.email).toBe('john@example.com');
    });

    it('should throw error when email already exists', async () => {
      // Arrange
      const userData = { name: 'John', email: 'existing@example.com' };
      
      // Act & Assert
      await expect(userService.createUser(userData))
        .rejects
        .toThrow('Email already exists');
    });
  });
});
```

### Documentation

* Update README.md if you change functionality
* Add JSDoc comments for public APIs
* Update relevant documentation in the `docs/` folder
* Include code examples in documentation

**Documentation style:**
```typescript
/**
 * Creates a new user in the system.
 *
 * @param userData - The user data to create
 * @param options - Optional configuration
 * @returns A promise that resolves to the created user
 * @throws {ValidationError} If user data is invalid
 * @throws {DuplicateError} If email already exists
 *
 * @example
 * ```typescript
 * const user = await createUser({
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * });
 * ```
 */
async function createUser(
  userData: CreateUserDto,
  options?: CreateUserOptions
): Promise<User> {
  // Implementation
}
```

## Review Process

1. **Automated Checks**: All PRs must pass CI checks (lint, tests, build)
2. **Code Review**: At least one maintainer must approve
3. **Documentation**: Ensure documentation is updated
4. **Tests**: All tests must pass
5. **Conflicts**: Resolve any merge conflicts

### What Reviewers Look For

* Code quality and consistency
* Test coverage
* Documentation completeness
* Security considerations
* Performance implications
* Breaking changes

## Release Process

We use semantic versioning (MAJOR.MINOR.PATCH):

* **MAJOR**: Breaking changes
* **MINOR**: New features (backwards compatible)
* **PATCH**: Bug fixes (backwards compatible)

Releases are automated through CI/CD when changes are merged to `main`.

## Community

* Join our [Discord server](https://discord.gg/aic-copilot)
* Follow us on [Twitter](https://twitter.com/aic_copilot)
* Read our [blog](https://blog.aic-copilot.com)

## Recognition

Contributors will be added to our [Contributors](CONTRIBUTORS.md) page.

## Questions?

Don't hesitate to ask questions in:
* GitHub Discussions
* Discord #dev-help channel
* Email: dev@aic-copilot.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to AIC SMB Copilot! 🚀