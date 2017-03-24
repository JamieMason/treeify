# treeify

An exercise for me to learn Rust, it aims to convert;

```
Cargo.lock
Cargo.toml
src
    lib.rs
target
    debug
        build
        deps
        treeify-3d5a0548a2bbafa3.d
```

to

```
├── Cargo.lock
├── Cargo.toml
├── src
│   └── lib.rs
├── target
│   └── debug
│       ├── build
│       ├── deps
│       └── treeify-3d5a0548a2bbafa3.d
└── tests
    └── integration_test.rs
```

Where, in practice, the content would be a specification rather than a file system.
