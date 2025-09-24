EnvironmentTest/
├── App.tsx # Entry point of the React Native app
├── index.js # Registers the root component
├── app.json # App configuration
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── babel.config.js # Babel compiler configuration
├── metro.config.js # Metro bundler configuration
├── jest.config.js # Jest testing configuration
├── .env # Default environment variables
├── .env.development # Development environment variables
├── .env.production # Production environment variables
├── .eslintrc.js # ESLint rules
├── .prettierrc.js # Prettier formatting rules
├── .eslintignore # ESLint ignore patterns
├── .prettierignore # Prettier ignore patterns
├── .gitignore # Git ignore patterns
├── .watchmanconfig # Watchman configuration
├── environment.md # Documentation for environment setup
├── project-structure.md # Documentation of project structure (this file)
├── README.md # Project documentation
│
├── .bundle/ # Bundler cache
├── .vscode/ # VS Code workspace settings
├── scripts/ # Helper scripts
├── tests/ # Test files
│
└── src/ # Main application source code
├── assets/ # Images, fonts, and static resources
├── components/ # Reusable UI components
│ └── common/ # Shared/common components (e.g., Header)
├── constants/ # App-wide constants (colors, strings, etc.)
├── context/ # React Context providers
├── hooks/ # Custom React hooks
├── navigation/ # Navigation configuration and stacks
├── screens/ # App screens (e.g., HomeScreen)
├── services/ # API and config services
│ └── config.js # Wrapper for environment variables
├── styles/ # Global style definitions
└── utils/ # Utility/helper functions