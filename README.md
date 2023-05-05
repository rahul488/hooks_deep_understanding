# hooks_deep_understanding
Created with CodeSandbox


# useEffect behaviour on strict mode
called the clean function on first time inside useffect if strict mode is there
If we remove strict mode it will behave as expected i.e no clean up function will call for first time when the page is render

# useEffect clean up function beahviour on dependency array change
Clean up function is called every time if the depenedcy array is change

