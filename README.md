# resume

[Link to preview](https://paturages.github.io/resume/index.html)

A personal framework to layout and maintain my own resumé. It's mainly just a thing for me to not have to tinker around visual details when I have to change items and words on my resumé, not really intended for public reuse but you're free to take ideas from this framework!

The "application" is mainly an empty shell that takes in data imported from `src/data`. As you might figure out, all the information I would need to touch is centralized in one file. And I can create new ones depending on needs: `public.en.jsx` is an example one I'm willing to publish on the Internet under this moniker, but I have other ones, including French-localized versions, for more formal situations.

Notably, neat thing I can do is, for example:
```
# professional.en.jsx
import React from "react";
import me from "assets/images/me.jpeg";
import public from "./public.en";

export default {
  ...public,
  header: {
    name: "Somename LASTNAME",
    subtitle: "A full-stack web developer, and more!",
    picture: me
  }
}
```
which overrides the header information in `public.en.jsx` with my IRL information!

The "application" leverages React purely for component organization and templating, as well as taking profit from `vite`'s hot loader. The "build system", so to speak, consists of "printing" the web page into a PDF file (typically done on Google Chrome).

## Quickstart

`npm install`, `npm run dev` (or `yarn`, `yarn dev`) and just follow the link `vite` gives you.

## Disclaimer

All featured logos belong to their respective owners, and a majority of them are provided by various [TheNounProject](https://thenounproject.com/) contributors.