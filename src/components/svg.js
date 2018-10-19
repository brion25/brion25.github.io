import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import angular from '@fortawesome/fontawesome-free/svgs/brands/angular.svg'
import react from '@fortawesome/fontawesome-free/svgs/brands/react.svg'
import js from '@fortawesome/fontawesome-free/svgs/brands/js.svg'
import css from '@fortawesome/fontawesome-free/svgs/brands/css3.svg'
import htmlIcon from '@fortawesome/fontawesome-free/svgs/brands/html5.svg'
import java from '@fortawesome/fontawesome-free/svgs/brands/java.svg'
import node from '@fortawesome/fontawesome-free/svgs/brands/node-js.svg'
import docker from '@fortawesome/fontawesome-free/svgs/brands/docker.svg'
import sass from '@fortawesome/fontawesome-free/svgs/brands/sass.svg'
import gulp from '@fortawesome/fontawesome-free/svgs/brands/gulp.svg'
import npm from '@fortawesome/fontawesome-free/svgs/brands/npm.svg'
import aws from '@fortawesome/fontawesome-free/svgs/brands/aws.svg'
import git from '@fortawesome/fontawesome-free/svgs/brands/git.svg'
import github from '@fortawesome/fontawesome-free/svgs/brands/github.svg'
import twitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import codepen from '@fortawesome/fontawesome-free/svgs/brands/codepen.svg'
import medium from '@fortawesome/fontawesome-free/svgs/brands/medium.svg'
import blogger from '@fortawesome/fontawesome-free/svgs/brands/blogger.svg'

import code from '@fortawesome/fontawesome-free/svgs/solid/code.svg'
import database from '@fortawesome/fontawesome-free/svgs/solid/database.svg'
import bundle from '@fortawesome/fontawesome-free/svgs/solid/file-archive.svg'
import vial from '@fortawesome/fontawesome-free/svgs/solid/vial.svg'

const ICON_MAP = {
    TDD: vial,
    webpack: bundle,
    rollup: bundle,
    NoSQL: database,
    SQL: database,
    polymer: code,
    mobx: code,
    redux: code,
    apollo: code,
    graphql: code,
    dart: code,
    html: htmlIcon,
    JS: js,
    AWS: aws,
    npm,
    git,
    github,
    java,
    node,
    docker,
    sass,
    gulp,
    angular,
    react,
    css,
    twitter,
    codepen,
    medium,
    blogger
}

class SVG extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          --icon-color: green;
          --icon-size: 10px;
        }
        
        .icon svg {
          fill: var(--icon-color);
          width: var(--icon-size);
        }        
      </style>
      <i class="icon"></i>
    `
    }

    static get properties() {
        return {
            icon: {
                type: String
            }
        }
    }

    connectedCallback() {
        super.connectedCallback()

        const icon = ICON_MAP[this.icon] || ''
        const tag = document.createElement('p')

        tag.innerHTML = icon

        if (tag.firstChild) {
            this.shadowRoot.querySelector('.icon').appendChild(tag.firstChild)
        }
    }
}

customElements.define('my-svg', SVG)
