import '@polymer/polymer/lib/elements/dom-repeat'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import homeStyle from './home.scss'
import '../components/logo'
import '../components/svg'
import '../utils/shared-styles'

homeStyle()('home-styles')

class Home extends PolymerElement {
    static get template() {
        return html`
        <style include="common-styles home-styles"></style>   
        <div class="container">
            <div class="presentation__wrapper">
                <div class="presentation">
                    <div class="presentation__logo">
                        <my-logo></my-logo>
                    </div>
                    <h1 class="presentation__name">Jose Carlos Ixcoatl Gomez Briones</h1>
                    <h3 class="presentation__desc">
                        JavaScript Ninja
                        <a class="presentation__institution" href="https://www.unosquare.com/" target="_blank"> @Unosquare</a>
                    </h3>
                    <div class="presentation__social">
                        <dom-repeat items="{{social}}">
                            <template>
                                <a class="presentation__social-item" target="_blank" href="{{item.link}}">
                                    <my-svg icon="{{item.icon}}"></my-svg>
                                    <div class="presentation__social-item-text">{{item.icon}}</div>
                                </a>
                            </template>
                        </dom-repeat>
                    </div>
                </div>
            </div>
            <div class="stack__wrapper">
                <div class="stack">
                    <hr />
                    <h3 class="stack__header">My Stack:</h3>
                    <div class="stack__technologies">
                        <dom-repeat items="{{stack}}">
                            <template>
                                <div class="stack__technologies-item">
                                    <my-svg icon="{{item}}"></my-svg>
                                    <h3 class="stack__technologies-item__header">{{item}}</h3>
                                </div>
                            </template>
                        </dom-repeat>
                    </div>
                </div>
            </div>
        </div>
      `
    }

    static get properties() {
        return {
            stack: {
                type: Array,
                value() {
                    return [
                        'JS',
                        'node',
                        'react',
                        'angular',
                        'java',
                        'SalesForce',
                        'dart',
                        'css',
                        'html',
                        'graphql',
                        'apollo',
                        'sass',
                        'redux',
                        'mobx',
                        'polymer',
                        'SQL',
                        'NoSQL',
                        'gulp',
                        'npm',
                        'webpack',
                        'rollup',
                        'AWS',
                        'git',
                        'github',
                        'TDD',
                    ]
                }
            },
            social: {
                type: Array,
                value() {
                    return [
                        {
                            icon: 'github',
                            link: 'https://github.com/brion25'
                        },
                        {
                            icon: 'npm',
                            link: 'https://www.npmjs.com/~brion25'
                        },
                        {
                            icon: 'twitter',
                            link: 'https://twitter.com/bartsis'
                        },
                        {
                            icon: 'codepen',
                            link: 'https://codepen.io/bartsis/'
                        },
                        {
                            icon: 'medium',
                            link: 'https://medium.com/@bartsis'
                        },
                        {
                            icon: 'blogger',
                            link: 'http://brion25.blogspot.com/'
                        }
                    ]
                }
            }
        }
    }
}

customElements.define('my-home', Home)
