# treeify

Format an indented text file in the style of the [Linux `tree` command](http://www.computerhope.com/unix/tree.htm).

## Installation

```
npm install -g treeify
```

## Usage

```
cat ./file.txt | treeify
```

## Example

If file.txt contains the following;

```
Marsha
Judith
Loren
  Hedwig
Tamela
  Judie
    Gustavo
    Holley
      Devon
      Brook
        Dovie
          Marguerite
          Jennell
            Lia
              Herman
      Oneida
      Caridad
      Fran
        Brendon
          Giovanni
          Coreen
            Fritz
              Carita
    Almeda
    Kip
    Jazmine
Lonna
  Porsha
```

then `treeify` would output;

```
├── Marsha
├── Judith
├── Loren
|   └── Hedwig
├── Tamela
|   └── Judie
|       ├── Gustavo
|       ├── Holley
|       |   ├── Devon
|       |   ├── Brook
|       |   |   └── Dovie
|       |   |       ├── Marguerite
|       |   |       └── Jennell
|       |   |           └── Lia
|       |   |               └── Herman
|       |   ├── Oneida
|       |   ├── Caridad
|       |   └── Fran
|       |       └── Brendon
|       |           ├── Giovanni
|       |           └── Coreen
|       |               └── Fritz
|       |                   └── Carita
|       ├── Almeda
|       ├── Kip
|       └── Jazmine
└── Lonna
    └── Porsha
```
