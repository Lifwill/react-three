# Tutorial code of @react-three/fiber following a three.js tutorial book

I wanted to learn @react-three/fiber, but as it was adviced to learn three.js first, I decided to follow a three.js book and use @react-three/fiber to implements the example / exercices code.

## The environment

### Nodejs through nvm

First of all, you should have a recent version of nodejs and npm. I personnaly use nvm for windows.
https://github.com/coreybutler/nvm-windows

### create-react-app

To ease the development and because it is certainly the most specialised react basic environment, I used it. Simply use the following command

> npx create-react-app react-three --template typescript

You will be asked to install create-react-app, say yes

#### A word on typescript

I would say that when you develop wiht react, typescript is not the most useful language and you could stay with javascript. But finally it is more and more used, and for future development, it is always a good point to have at least some basic knowledge about it.

## The development tools

### VSCode

I have decided to use vscode, I'm a big fan of this editor, for js development. I would recommend to use it.

## Tips and issues

### Activate shadows and canvas modification

To activate shadows on the scene, you should add the shadows property to the canvas. But Be carefull that the page must be refreshed if you want to add or remove the shadows in the property.
Later I realized that it should be done each time you modify a paremeter of the canvas

### old notes to clean

use create-react-app
why ?
it is the most common configuration for a react application with a server to test
url : https://create-react-app.dev/

command :
npx create-react-app react-three --template typescript

install react three fiber
npm install three @react-three/fiber

To start the project, go in the folder and check if the following command works :
npm start

add prettier
https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08

If you use a .prettierrc, be careful taht each modification, you have to restart vscode
To have the format on save, do not forget to set the default formatter

I would advice to modify the .prettierrc step by step in accordance with the team.
Most of the time, the rule is juste a preference. There is no reason to take one or another.
But having a code styling defined for all the projects are really important.

if you use endofline to lf, update the configuration in vscode :
Settings > Text Editor > Files > Eol -> \n (lf)

So the environment is ready, now I want to have the possibility to have several pages
one for each chapter I will work on.
So let's use react-router :

npm install 'react-router-dom'

https://ui.dev/react-router-tutorial

Creation of the home page where all chapters are listed

ok, stop, now git it.
