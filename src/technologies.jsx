import React from "react";

import DevIcon, { iconList } from "devicon-react-svg";
console.log(iconList);
/*
import Amazonwebservices from "react-devicon/amazonwebservices/original";
import Android from "react-devicon/android/original";
import Angularjs from "react-devicon/angularjs/original";
import Apache from "react-devicon/apache/original";
import Appcelerator from "react-devicon/appcelerator/original";
import Apple from "react-devicon/apple/original";
import Atom from "react-devicon/atom/original";
import Babel from "react-devicon/babel/original";
import Backbonejs from "react-devicon/backbonejs/original";
import Behance from "react-devicon/behance/original";
import Bitbucket from "react-devicon/bitbucket/original";
import Bootstrap from "react-devicon/bootstrap/plain";
import Bower from "react-devicon/bower/original";
import C from "react-devicon/c/original";
import Cakephp from "react-devicon/cakephp/original";
import Ceylon from "react-devicon/ceylon/original";
import Chrome from "react-devicon/chrome/original";
import Codeigniter from "react-devicon/codeigniter/plain";
import Coffeescript from "react-devicon/coffeescript/original";
import Confluence from "react-devicon/confluence/original";
import Couchdb from "react-devicon/couchdb/original";
import Cplusplus from "react-devicon/cplusplus/original";
import Csharp from "react-devicon/csharp/original";
import Css3 from "react-devicon/css3/original";
import Cucumber from "react-devicon/cucumber/plain";
import D3js from "react-devicon/d3js/original";
import Debian from "react-devicon/debian/original";
import Devicon from "react-devicon/devicon/original";
import Django from "react-devicon/django/original";
import Docker from "react-devicon/docker/original";
import Doctrine from "react-devicon/doctrine/original";
import DotNet from "react-devicon/dot-net/original";
import Drupal from "react-devicon/drupal/original";
import Electron from "react-devicon/electron/original";
import Elm from "react-devicon/elm/original";
import Ember from "react-devicon/ember/original-wordmark";
import Erlang from "react-devicon/erlang/original";
import Express from "react-devicon/express/original";
import Firefox from "react-devicon/firefox/original";
import Foundation from "react-devicon/foundation/original";
import Gatling from "react-devicon/gatling/plain";
import Gimp from "react-devicon/gimp/original";
import Git from "react-devicon/git/original";
import Github from "react-devicon/github/original";
import Gitlab from "react-devicon/gitlab/original";
import Go from "react-devicon/go/original";
import Google from "react-devicon/google/original";
import Gradle from "react-devicon/gradle/plain";
import Grunt from "react-devicon/grunt/original";
import Gulp from "react-devicon/gulp/plain";
import Handlebars from "react-devicon/handlebars/original";
import Heroku from "react-devicon/heroku/original";
import Html5 from "react-devicon/html5/original";
import Illustrator from "react-devicon/illustrator/line";
import Inkscape from "react-devicon/inkscape/original";
import Intellij from "react-devicon/intellij/original";
import Ionic from "react-devicon/ionic/original";
import Jasmine from "react-devicon/jasmine/plain";
import Java from "react-devicon/java/original";
import Javascript from "react-devicon/javascript/original";
import Jeet from "react-devicon/jeet/original";
import Jetbrains from "react-devicon/jetbrains/original";
import Jquery from "react-devicon/jquery/original";
import Krakenjs from "react-devicon/krakenjs/original";
import Laravel from "react-devicon/laravel/plain";
import Less from "react-devicon/less/plain-wordmark";
import Linkedin from "react-devicon/linkedin/original";
import Linux from "react-devicon/linux/original";
import Meteor from "react-devicon/meteor/original";
import Mocha from "react-devicon/mocha/plain";
import Mongodb from "react-devicon/mongodb/original";
import Moodle from "react-devicon/moodle/original";
import Mysql from "react-devicon/mysql/original";
import Nginx from "react-devicon/nginx/original";
import Nodejs from "react-devicon/nodejs/original";
import Nodewebkit from "react-devicon/nodewebkit/original";
import Npm from "react-devicon/npm/original-wordmark";
import Oracle from "react-devicon/oracle/original";
import Photoshop from "react-devicon/photoshop/line";
import Php from "react-devicon/php/original";
import Phpstorm from "react-devicon/phpstorm/original";
import Postgresql from "react-devicon/postgresql/original";
import Protractor from "react-devicon/protractor/plain";
import Pycharm from "react-devicon/pycharm/original";
import Python from "react-devicon/python/original";
import Rails from "react-devicon/rails/plain";
import ReactLang from "react-devicon/react/original";
import Redhat from "react-devicon/redhat/original";
import Redis from "react-devicon/redis/original";
import Ruby from "react-devicon/ruby/original";
import Rubymine from "react-devicon/rubymine/original";
import Safari from "react-devicon/safari/original";
import Sass from "react-devicon/sass/original";
import Sequelize from "react-devicon/sequelize/original";
import Sketch from "react-devicon/sketch/original";
import Slack from "react-devicon/slack/original";
import Sourcetree from "react-devicon/sourcetree/original";
import Ssh from "react-devicon/ssh/original";
import Stylus from "react-devicon/stylus/original";
import Swift from "react-devicon/swift/original";
import Symfony from "react-devicon/symfony/original";
import Tomcat from "react-devicon/tomcat/original";
import Travis from "react-devicon/travis/plain";
import Trello from "react-devicon/trello/plain";
import Twitter from "react-devicon/twitter/original";
import Typescript from "react-devicon/typescript/original";
import Ubuntu from "react-devicon/ubuntu/plain";
import Vagrant from "react-devicon/vagrant/original";
import Vim from "react-devicon/vim/original";
import Visualstudio from "react-devicon/visualstudio/plain";
import Vuejs from "react-devicon/vuejs/original";
import Webpack from "react-devicon/webpack/original";
import Webstorm from "react-devicon/webstorm/original";
import Windows8 from "react-devicon/windows8/original";
import Wordpress from "react-devicon/wordpress/original";
import Yarn from "react-devicon/yarn/original";
import Yii from "react-devicon/yii/original";
import Zend from "react-devicon/zend/plain";
*/
export default {
  android: {
    icon: props => <DevIcon {...props} icon="android" />,
    label: "Android",
    link: "https://www.android.com/"
  },
  appcelerator: {
    icon: props => <DevIcon {...props} icon="appcelerator" />,
    label: "Appcelerator",
    link: "https://www.appcelerator.com/"
  },
  apple: {
    icon: props => <DevIcon {...props} icon="apple" />,
    label: "Apple",
    link: "https://www.apple.com/"
  },
  atom: {
    icon: props => <DevIcon {...props} icon="atom" />,
    label: "Atom",
    link: "https://atom.io/"
  },
  bitbucket: {
    icon: props => <DevIcon {...props} icon="bitbucket" />,
    label: "Bitbucket",
    link: "https://bitbucket.org/"
  },
  bootstrap: {
    icon: props => <DevIcon {...props} icon="bootstrap" />,
    label: "Bootstrap",
    link: "https://getbootstrap.com/"
  },
  bower: {
    icon: props => <DevIcon {...props} icon="bower" />,
    label: "Bower",
    link: "https://bower.io/"
  },
  chrome: {
    icon: props => <DevIcon {...props} icon="chrome" />,
    label: "Chrome",
    link: "https://www.google.com/intl/sl_SI/chrome/"
  },
  codeigniter: {
    icon: props => <DevIcon {...props} icon="codeigniter" />,
    label: "Codeigniter",
    link: "https://codeigniter.com/"
  },
  coffeescript: {
    icon: props => <DevIcon {...props} icon="coffeescript" />,
    label: "Coffeescript",
    link: "https://coffeescript.org/"
  },
  css3: {
    icon: props => <DevIcon {...props} icon="css3" />,
    label: "Css3",
    link: "http://www.css3.info/"
  },
  debian: {
    icon: props => <DevIcon {...props} icon="debian" />,
    label: "Debian",
    link: "https://www.debian.org/"
  },
  django: {
    icon: props => <DevIcon {...props} icon="django" />,
    label: "Django",
    link: "https://www.djangoproject.com/"
  },
  docker: {
    icon: props => <DevIcon {...props} icon="docker" />,
    label: "Docker",
    link: "https://www.docker.com/"
  },
  doctrine: {
    icon: props => <DevIcon {...props} icon="doctrine" />,
    label: "Doctrine",
    link: "https://www.doctrine-project.org/"
  },
  dotnet: {
    icon: props => <DevIcon {...props} icon="dotnet" />,
    label: "DotNet",
    link: "https://dotnet.microsoft.com/"
  },
  drupal: {
    icon: props => <DevIcon {...props} icon="drupal" />,
    label: "Drupal",
    link: "https://www.drupal.org/"
  },
  ember: {
    icon: props => <DevIcon {...props} icon="ember" />,
    label: "Ember",
    link: "https://emberjs.com/"
  },
  erlang: {
    icon: props => <DevIcon {...props} icon="erlang" />,
    label: "Erlang",
    link: "https://www.erlang.org/"
  },
  firefox: {
    icon: props => <DevIcon {...props} icon="firefox" />,
    label: "Firefox",
    link: "https://www.mozilla.org/sl/firefox/new/"
  },
  git: {
    icon: props => <DevIcon {...props} icon="git" />,
    label: "Git",
    link: "https://git-scm.com/"
  },
  github: {
    icon: props => <DevIcon {...props} icon="github" />,
    label: "Github",
    link: "https://github.com/"
  },
  go: {
    icon: props => <DevIcon {...props} icon="go" />,
    label: "Go",
    link: "https://golang.org/"
  },
  grunt: {
    icon: props => <DevIcon {...props} icon="grunt" />,
    label: "Grunt",
    link: "https://gruntjs.com/"
  },
  gulp: {
    icon: props => <DevIcon {...props} icon="gulp" />,
    label: "Gulp",
    link: "https://gulpjs.com/"
  },
  heroku: {
    icon: props => <DevIcon {...props} icon="heroku" />,
    label: "Heroku",
    link: "https://www.heroku.com/"
  },
  html5: {
    icon: props => <DevIcon {...props} icon="html5" />,
    label: "Html5",
    link: "https://en.wikipedia.org/wiki/HTML5"
  },
  illustrator: {
    icon: props => <DevIcon {...props} icon="illustrator" />,
    label: "Illustrator",
    link: "https://www.adobe.com/si/products/illustrator.html"
  },
  intellij: {
    icon: props => <DevIcon {...props} icon="intellij" />,
    label: "Intellij",
    link: "https://www.jetbrains.com/idea/"
  },
  ionic: {
    icon: props => <DevIcon {...props} icon="ionic" />,
    label: "Ionic",
    link: "https://ionicframework.com/"
  },
  java: {
    icon: props => <DevIcon {...props} icon="java" />,
    label: "Java",
    link: "https://www.java.com/download/"
  },
  javascript: {
    icon: props => <DevIcon {...props} icon="javascript" />,
    label: "Javascript",
    link: "https://www.javascript.com/"
  },
  jquery: {
    icon: props => <DevIcon {...props} icon="jquery" />,
    label: "Jquery",
    link: "https://jquery.com/"
  },
  krakenjs: {
    icon: props => <DevIcon {...props} icon="krakenjs" />,
    label: "Krakenjs",
    link: "http://krakenjs.com/"
  },
  laravel: {
    icon: props => <DevIcon {...props} icon="laravel" />,
    label: "Laravel",
    link: "https://laravel.com/"
  },
  less: {
    icon: props => <DevIcon {...props} icon="less" />,
    label: "Less",
    link: "http://lesscss.org/"
  },
  linkedin: {
    icon: props => <DevIcon {...props} icon="linkedin" />,
    label: "Linkedin",
    link: "https://www.linkedin.com/"
  },
  linux: {
    icon: props => <DevIcon {...props} icon="linux" />,
    label: "Linux",
    link: "https://www.linux.org/"
  },
  meteor: {
    icon: props => <DevIcon {...props} icon="meteor" />,
    label: "Meteor",
    link: "https://www.meteor.com/"
  },
  mongodb: {
    icon: props => <DevIcon {...props} icon="mongodb" />,
    label: "Mongodb",
    link: "https://www.mongodb.com/"
  },
  mysql: {
    icon: props => <DevIcon {...props} icon="mysql" />,
    label: "Mysql",
    link: "https://www.mysql.com/"
  },
  nginx: {
    icon: props => <DevIcon {...props} icon="nginx" />,
    label: "Nginx",
    link: "https://www.nginx.com/"
  },
  nodejs: {
    icon: props => <DevIcon {...props} icon="nodejs" />,
    label: "Nodejs",
    link: "https://nodejs.org/"
  },
  npm: {
    icon: props => <DevIcon {...props} icon="npm" />,
    label: "Npm",
    link: "https://www.npmjs.com/"
  },
  photoshop: {
    icon: props => <DevIcon {...props} icon="photoshop" />,
    label: "Photoshop",
    link: "https://www.photoshop.com/"
  },
  php: {
    icon: props => <DevIcon {...props} icon="php" />,
    label: "Php",
    link: "https://www.php.net/"
  },
  postgresql: {
    icon: props => <DevIcon {...props} icon="postgresql" />,
    label: "Postgresql",
    link: "https://www.postgresql.org/"
  },
  python: {
    icon: props => <DevIcon {...props} icon="python" />,
    label: "Python",
    link: "https://www.python.org/"
  },
  react: {
    icon: props => <DevIcon {...props} icon="react" />,
    label: "React",
    link: "https://reactjs.org/"
  },
  redhat: {
    icon: props => <DevIcon {...props} icon="redhat" />,
    label: "Redhat",
    link: "https://www.redhat.com/en"
  },
  redis: {
    icon: props => <DevIcon {...props} icon="redis" />,
    label: "Redis",
    link: "https://redis.io/"
  },
  ruby: {
    icon: props => <DevIcon {...props} icon="ruby" />,
    label: "Ruby",
    link: "https://www.ruby-lang.org/en/"
  },
  safari: {
    icon: props => <DevIcon {...props} icon="safari" />,
    label: "Safari",
    link: "https://www.apple.com/safari/"
  },
  sass: {
    icon: props => <DevIcon {...props} icon="sass" />,
    label: "Sass",
    link: "https://sass-lang.com/"
  },
  stylus: {
    icon: props => <DevIcon {...props} icon="stylus" />,
    label: "Stylus",
    link: "http://stylus-lang.com/"
  },
  swift: {
    icon: props => <DevIcon {...props} icon="swift" />,
    label: "Swift",
    link: "https://www.swift.com/"
  },
  symfony: {
    icon: props => <DevIcon {...props} icon="symfony" />,
    label: "Symfony",
    link: "https://symfony.com/"
  },
  travis: {
    icon: props => <DevIcon {...props} icon="travis" />,
    label: "Travis",
    link: "https://travis-ci.org/"
  },
  trello: {
    icon: props => <DevIcon {...props} icon="trello" />,
    label: "Trello",
    link: "https://trello.com/"
  },
  typescript: {
    icon: props => <DevIcon {...props} icon="typescript" />,
    label: "Typescript",
    link: "https://www.typescriptlang.org/"
  },
  ubuntu: {
    icon: props => <DevIcon {...props} icon="ubuntu" />,
    label: "Ubuntu",
    link: "https://ubuntu.com/"
  },
  vim: {
    icon: props => <DevIcon {...props} icon="vim" />,
    label: "Vim",
    link: "https://www.vim.org/"
  },
  visualstudio: {
    icon: props => <DevIcon {...props} icon="visualstudio" />,
    label: "Visualstudio",
    link: "https://visualstudio.microsoft.com/"
  },
  vuejs: {
    icon: props => <DevIcon {...props} icon="vuejs" />,
    label: "Vuejs",
    link: "https://vuejs.org/"
  },
  webpack: {
    icon: props => <DevIcon {...props} icon="webpack" />,
    label: "Webpack",
    link: "https://webpack.js.org/"
  },
  wordpress: {
    icon: props => <DevIcon {...props} icon="wordpress" />,
    label: "Wordpress",
    link: "https://wordpress.com/"
  },
  yii: {
    icon: props => <DevIcon {...props} icon="yii" />,
    label: "Yii",
    link: "https://www.yiiframework.com/"
  },
  zend: {
    icon: props => <DevIcon {...props} icon="zend" />,
    label: "Zend",
    link: "https://www.zend.com/"
  }
};
