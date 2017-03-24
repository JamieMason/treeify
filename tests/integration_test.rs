use std::fs::File;
use std::io::Read;

extern crate treeify;

#[test]
fn it_works() {
    let input = read_file("tests/fixtures/1-in.txt");
    let expected = read_file("tests/fixtures/1-out.txt");
    assert_eq!(treeify::transform(input), expected);
}

fn read_file(location: &str) -> String {
    let mut f = File::open(&location).expect("Unable to open file");
    let mut data = String::new();
    f.read_to_string(&mut data).expect("Unable to read string");
    data
}
