# 0x02. i18n

Welcome to the **0x02. i18n** project! This repository aims to implement internationalization (i18n) for seamless multi-language support in your applications.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- 🌐 **Multi-language support**: Easily add support for multiple languages.
- 📦 **Easy integration**: Plug and play with minimal configuration.
- 🚀 **High performance**: Optimized for fast language switching.

## Installation

To install the package, use the following command:

```sh
npm install i18n-package
```

## Usage

1. **Import the package**:

    ```javascript
    import i18n from 'i18n-package';
    ```

2. **Initialize with your language files**:

    ```javascript
    i18n.init({
        languages: ['en', 'es', 'fr'],
        defaultLanguage: 'en',
        path: '/path/to/language/files'
    });
    ```

3. **Translate strings**:

    ```javascript
    console.log(i18n.t('hello_world')); // Outputs: Hello World!
---
