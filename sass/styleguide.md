# Styleguide

Welcome to the GitHub CSS Styleguide. It's pretty rad. Before reading this, you should have a general understanding for specificity, the SCSS syntax, and KSS documentation..

While we port our styles over to [SCSS](http://sass-lang.com/) with [KSS](https://github.com/kneath/kss) documentation, please make sure to upgrade an entire element's CSS at once. Do not mix small amounts of SCSS in with plain CSS. Do your future self a favor.

# Coding Style

- Use soft-tabs with a two space indent.
- Put spaces after `:` in property declarations.
- Put spaces before `{` in rule declarations.
- Use hex color codes `#000` unless using rgba.
- Use `//` for comment blocks (instead of `/* */`).
- Document styles with [KSS](https://github.com/kneath/kss).
- Here is good example syntax:

Here is good example syntax:

    // Buttons
    //
    // Buttons can and should be clicked.
    //
    // Markup: <button class="button {$modifiers}"/>
    //
    // :hover - Highlight the button when hovered.
    // .vip - Displays a very important button 
    // 
    // Styleguide 1
     
    .button {
        background-color: blue;
        text-decoration: none;
        font-size: 20px;
        &:hover {
            background-color: lighten(blue,20%);
        }
        &.vip {
            font-size: 40px;
        }
    }

# SCSS Style

- Any $variable or @mixin that is used in more than one file should be put in globals/. Others should be put at the top of the file where they're used.
- As a rule of thumb, don't nest further than 3 levels deep. If you find yourself going further, think about reorganizing your rules (either the specificity needed, or the layout of the nesting).

# File Organization

In general, the CSS file organization should follow something like this:

    styles
    ├── base
    │   ├── layout.scss
    │   ├── config.scss
    │   ├── typography.scss
    ├── modules
    │   ├── buttons.scss
    │   ├── list.scss
    │   └── navigation.scss
    ├── settings
    │   ├── extend.scss
    │   ├── mixins.scss
    │   └── variables.scss
    └── state
        └── state.scss

# Class naming conventions

Also, you will need to understand [SMACSS](http://smacss.com/) (Scalable and Module Architecture for CSS) and [B.E.M.](http://bem.info/) (Block — Element — Modifier), or this post will mostly be DOA. From here on, I am assuming you are familiar with the above.

[Reference](https://medium.com/objects-in-space/f6f404727)

**User Needs Beer**

Markup

    <div class="cup--glass">
        <div class="cup-glass__beer">
            <div class="beer is-poisoned">
                ...
            </div>
        </div>
    </div>

Styles
    
    // module/_cup.scss
    .cup { ... }
    .cup--glass { 
        @extend .cup;
    }
    .cup--glass__beer { ... }

    // module/_beer.scss
    .beer { ... }

    // state/state.scss
    .is-poisoned { ... }

*Warning: Never @extend outside of a module. This will break the independence of this module by causing it to require another.*

            ┌──────── modifier of the Module Class (keg, bottle, etc.)
            │
    .cup--glass__beer
      │           │ 
      │           └──────── Child Object/Module with properties 
      │
      └──────── Parent Object/Module (this gives the child context)

*Break something into a module only if it would be useful in another context. Everything else remains an element or component inside a module.*