# Calliope IPFS Video Plugin

This plugin is for [Calliope](https://calliope.site) and is designed to provide functionality for mermaid diagrams inside of pages and posts.

### Installation

The plugin can be installed from NPM via:

        npm install calliope-ipfs-stream

### Usage

Inside of your `_calliope/app/config/plugins/index.jsx` file, add the following:

```javascript
    // Import the module at the top
    import ipfsStream from "calliope-ipfs-stream";
    // and then further down inside of the switch statement add the following
    // ...
    case "ipfsStream":
      console.log(ipfsStream);
      let { ipfsHash, audioOnly } = props.attributes;
      if (audioOnly) {
        return <ipfsStream.Audio ipfsHash={ipfsHash} />;
      } else {
        return <ipfsStream.Video ipfsHash={ipfsHash} />;
      }
    // ...
```